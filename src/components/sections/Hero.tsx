import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {subtitle}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link to={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
