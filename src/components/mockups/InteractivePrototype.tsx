import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ZoomIn, ZoomOut, Maximize2, Minimize2, ExternalLink } from 'lucide-react';

interface InteractivePrototypeProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  tags?: string[];
  liveUrl?: string;
  className?: string;
  enableZoom?: boolean;
}

export function InteractivePrototype({
  children,
  title,
  description,
  tags = [],
  liveUrl,
  className,
  enableZoom = true
}: InteractivePrototypeProps) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);
  const toggleFullscreen = () => setIsFullscreen(prev => !prev);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Header */}
      {(title || description || tags.length > 0) && (
        <div className="space-y-3">
          {title && (
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold">{title}</h3>
              {liveUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
              )}
            </div>
          )}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Controls */}
      {enableZoom && (
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            disabled={zoom <= 0.5}
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetZoom}
            title="Reset zoom"
          >
            {Math.round(zoom * 100)}%
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            disabled={zoom >= 2}
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </Button>
        </div>
      )}

      {/* Prototype viewer */}
      <div
        className={cn(
          "relative overflow-auto rounded-lg bg-muted/30 flex items-center justify-center transition-all",
          isFullscreen ? "fixed inset-4 z-[100] bg-background shadow-2xl" : "p-8"
        )}
      >
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            transition: 'transform 0.2s ease-in-out'
          }}
        >
          {children}
        </div>

        {/* Close button for fullscreen */}
        {isFullscreen && (
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-[101]"
            title="Exit fullscreen"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
        )}
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[99]"
          onClick={toggleFullscreen}
        />
      )}
    </div>
  );
}
