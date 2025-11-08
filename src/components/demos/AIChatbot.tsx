import { useState, useRef, useEffect } from 'react';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import { useChatbot } from '@/hooks/useChatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, RotateCcw, Download, Sparkles } from 'lucide-react';

export function AIChatbot() {
  const { messages, isTyping, currentSuggestions, sendMessage, resetChat } = useChatbot();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputMessage.trim() || isTyping) return;

    await sendMessage(inputMessage);
    setInputMessage('');
  };

  const handleSuggestionClick = async (suggestion: string) => {
    if (isTyping) return;
    await sendMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const exportChat = () => {
    const chatText = messages
      .map(msg => `${msg.role === 'user' ? 'You' : 'BitGrow AI'}: ${msg.content}`)
      .join('\n\n');
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-transcript.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
      {/* Phone Mockup with Chat */}
      <div className="flex-shrink-0">
        <PhoneMockup color="dark">
          <div className="h-full flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold">BitGrow AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs opacity-90">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Reset chat"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                    }`}
                  >
                    {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white dark:bg-gray-700 border shadow-sm rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'
                      }`}
                    >
                      {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 border shadow-sm rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {currentSuggestions.length > 0 && !isTyping && (
              <div className="px-4 pb-2 space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Sparkles size={12} />
                  Suggested questions:
                </p>
                <div className="flex flex-col gap-2">
                  {currentSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-left px-3 py-2 bg-white dark:bg-gray-700 border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ketik pesan Anda..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputMessage.trim() || isTyping}
                  size="icon"
                  className="flex-shrink-0"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </PhoneMockup>
      </div>

      {/* Info Panel */}
      <div className="flex-1 max-w-md space-y-4">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <Bot className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">AI-Powered Customer Support</h3>
              <p className="text-sm text-muted-foreground">24/7 instant responses</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Natural Conversations</p>
                <p className="text-xs text-muted-foreground">Understands context and provides relevant answers</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Instant Responses</p>
                <p className="text-xs text-muted-foreground">No waiting time, immediate support</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Multilingual</p>
                <p className="text-xs text-muted-foreground">Supports Indonesian and English</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Smart Suggestions</p>
                <p className="text-xs text-muted-foreground">Guides users with contextual prompts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-card rounded-lg p-6 border">
          <h4 className="font-semibold mb-3">Use Cases</h4>
          <div className="space-y-2">
            {[
              'Customer Service Automation',
              'Lead Qualification',
              'FAQ Handling',
              'Appointment Booking',
              'Product Recommendations',
              'Order Tracking',
            ].map(useCase => (
              <div key={useCase} className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {useCase}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button onClick={resetChat} variant="outline" className="flex-1">
            <RotateCcw className="mr-2" size={16} />
            Reset Chat
          </Button>
          <Button onClick={exportChat} variant="outline" className="flex-1">
            <Download className="mr-2" size={16} />
            Export
          </Button>
        </div>

        {/* Demo Instructions */}
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Try it out!</strong> Ask about our services, pricing, timeline, or portfolio. The chatbot uses pattern matching to provide relevant responses.
          </p>
        </div>
      </div>
    </div>
  );
}
