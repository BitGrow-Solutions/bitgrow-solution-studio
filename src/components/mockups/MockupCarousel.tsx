import React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

export interface MockupSlide {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface MockupCarouselProps {
  slides: MockupSlide[];
  className?: string;
  autoplay?: boolean;
  showThumbnails?: boolean;
}

export function MockupCarousel({
  slides,
  className,
  autoplay = false,
  showThumbnails = false
}: MockupCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
        <p className="text-muted-foreground">No mockups available</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main carousel */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="space-y-3">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </Card>
                {(slide.title || slide.description) && (
                  <div className="text-center space-y-1">
                    {slide.title && (
                      <h4 className="font-semibold text-lg">{slide.title}</h4>
                    )}
                    {slide.description && (
                      <p className="text-sm text-muted-foreground">
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Thumbnails */}
      {showThumbnails && slides.length > 1 && (
        <div className="flex gap-2 justify-center overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all hover:opacity-100",
                selectedIndex === index
                  ? "border-primary opacity-100 ring-2 ring-primary ring-offset-2"
                  : "border-border opacity-60"
              )}
            >
              <img
                src={slide.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Slide counter */}
      <div className="text-center text-sm text-muted-foreground">
        {selectedIndex + 1} / {slides.length}
      </div>
    </div>
  );
}
