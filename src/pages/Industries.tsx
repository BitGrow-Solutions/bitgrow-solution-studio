import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';
import content from '@/data/content.json';

export default function Industries() {
  const { industries } = content;

  return (
    <Layout>
      <Hero
        title="Industries We Serve"
        description="We understand the unique challenges of different markets and deliver tailored solutions that work."
        primaryCta={{ text: 'Discuss Your Project', href: '/contact' }}
      />

      <Section className="pb-24">
        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = Icons[industry.icon as keyof typeof Icons] as any;
            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.slug}
                id={industry.slug}
                className="scroll-mt-20"
              >
                <Card className="overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:direction-rtl' : ''}`}>
                    {/* Icon/Visual Side */}
                    <div className={`bg-gradient-to-br ${
                      isEven
                        ? 'from-primary/10 to-primary/5'
                        : 'from-secondary/10 to-secondary/5'
                    } p-12 flex flex-col items-center justify-center text-center ${!isEven ? 'md:order-2' : ''}`}>
                      <div className={`mb-6 inline-flex h-24 w-24 items-center justify-center rounded-2xl ${
                        isEven ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
                      }`}>
                        <Icon className="h-12 w-12" />
                      </div>
                      <h2 className="text-3xl font-bold mb-3">{industry.title}</h2>
                      <p className="text-muted-foreground max-w-xs">{industry.desc}</p>
                    </div>

                    {/* Content Side */}
                    <div className={`p-8 md:p-12 ${!isEven ? 'md:order-1' : ''}`}>
                      <div className="space-y-6">
                        {/* Pain Points */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Icons.AlertCircle className="h-5 w-5 text-destructive" />
                            Common Challenges
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {industry.painPoints.map((point, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm">
                                {point}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Solutions */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Icons.CheckCircle2 className="h-5 w-5 text-primary" />
                            Our Solutions
                          </h3>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <Icons.ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Example Case */}
                        <div className="rounded-lg bg-muted/50 p-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Icons.Sparkles className="h-4 w-4 text-accent" />
                            Success Story
                          </h4>
                          <p className="text-sm text-muted-foreground italic">
                            "{industry.example}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-lg bg-gradient-to-b from-primary/5 to-background p-12">
            <h3 className="text-2xl font-bold mb-4">Don't see your industry?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's talk about your specific needs and how we can help.
            </p>
            <Icons.MessageCircle className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
