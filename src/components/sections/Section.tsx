import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  id?: string;
}

export function Section({ children, className, title, description, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container-custom">
        {(title || description) && (
          <div className="mx-auto max-w-3xl text-center mb-12">
            {title && (
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
