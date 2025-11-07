import React from 'react';
import { cn } from '@/lib/utils';
import { Circle, Minus, Square, X } from 'lucide-react';

interface BrowserMockupProps {
  src?: string;
  alt?: string;
  url?: string;
  children?: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
}

export function BrowserMockup({
  src,
  alt = 'Website mockup',
  url = 'https://example.com',
  children,
  className,
  theme = 'light'
}: BrowserMockupProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        "relative w-full rounded-lg overflow-hidden border shadow-2xl",
        isDark ? "bg-secondary border-secondary" : "bg-white border-border",
        className
      )}
    >
      {/* Browser chrome */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 border-b",
          isDark ? "bg-secondary border-secondary/50" : "bg-muted/50 border-border"
        )}
      >
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* URL bar */}
        <div
          className={cn(
            "flex-1 flex items-center gap-2 px-3 py-1.5 rounded mx-4 text-sm",
            isDark ? "bg-background/50" : "bg-background"
          )}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span className="text-muted-foreground truncate">{url}</span>
        </div>

        {/* Browser controls */}
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-muted/50 rounded transition-colors">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-muted/50 rounded transition-colors">
            <Square className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-muted/50 rounded transition-colors">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="relative w-full bg-background" style={{ minHeight: '400px' }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : children ? (
          <div className="w-full h-full">{children}</div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground min-h-[400px]">
            <p className="text-sm">No mockup provided</p>
          </div>
        )}
      </div>
    </div>
  );
}
