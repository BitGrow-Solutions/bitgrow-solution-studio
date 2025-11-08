import { useState, useCallback } from 'react';
import { ChatMessage, getChatbotResponse } from '@/utils/mockData';

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo! Selamat datang di BitGrow Solution Studio. Saya asisten virtual yang siap membantu Anda. Ada yang bisa saya bantu?',
      timestamp: new Date(),
      suggestions: [
        'Layanan apa saja yang tersedia?',
        'Berapa biaya pembuatan aplikasi?',
        'Lihat portfolio',
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([
    'Layanan apa saja yang tersedia?',
    'Berapa biaya pembuatan aplikasi?',
    'Lihat portfolio',
  ]);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setCurrentSuggestions([]);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    // Get bot response
    const { response, suggestions } = getChatbotResponse(content);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      suggestions,
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
    setCurrentSuggestions(suggestions || []);
  }, []);

  const resetChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Halo! Selamat datang di BitGrow Solution Studio. Saya asisten virtual yang siap membantu Anda. Ada yang bisa saya bantu?',
        timestamp: new Date(),
        suggestions: [
          'Layanan apa saja yang tersedia?',
          'Berapa biaya pembuatan aplikasi?',
          'Lihat portfolio',
        ],
      },
    ]);
    setIsTyping(false);
    setCurrentSuggestions([
      'Layanan apa saja yang tersedia?',
      'Berapa biaya pembuatan aplikasi?',
      'Lihat portfolio',
    ]);
  }, []);

  return {
    messages,
    isTyping,
    currentSuggestions,
    sendMessage,
    resetChat,
  };
}
