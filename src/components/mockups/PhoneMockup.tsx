import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  frameColor?: 'dark' | 'light' | 'silver';
}

export function PhoneMockup({
  src,
  alt = 'Mobile app mockup',
  children,
  className,
  frameColor = 'dark'
}: PhoneMockupProps) {
  const frameColors = {
    dark: '#1a1a1a',
    light: '#f5f5f5',
    silver: '#c0c0c0'
  };

  return (
    <div className={cn("relative mx-auto", className)} style={{ width: '320px', height: '650px' }}>
      {/* Phone frame SVG */}
      <svg
        viewBox="0 0 320 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.15))' }}
      >
        {/* Phone body */}
        <rect
          x="0"
          y="0"
          width="320"
          height="650"
          rx="32"
          fill={frameColors[frameColor]}
        />

        {/* Screen area */}
        <rect
          x="8"
          y="8"
          width="304"
          height="634"
          rx="24"
          fill="#000000"
        />

        {/* Notch */}
        <rect
          x="100"
          y="8"
          width="120"
          height="24"
          rx="12"
          fill={frameColors[frameColor]}
        />

        {/* Camera */}
        <circle
          cx="140"
          cy="20"
          r="4"
          fill="#1a1a1a"
        />

        {/* Speaker */}
        <rect
          x="160"
          y="17"
          width="40"
          height="6"
          rx="3"
          fill="#1a1a1a"
        />
      </svg>

      {/* Content area */}
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          top: '32px',
          left: '8px',
          right: '8px',
          bottom: '8px',
          width: '304px',
          height: '610px',
          borderRadius: '24px',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
          />
        ) : children ? (
          <div className="w-full h-full">
            {children}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
            <p className="text-sm">No mockup provided</p>
          </div>
        )}
      </div>
    </div>
  );
}
