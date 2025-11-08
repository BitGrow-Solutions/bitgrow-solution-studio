import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as Icons from 'lucide-react';
import content from '@/data/content.json';
import { PhoneMockup, BrowserMockup, InteractivePrototype } from '@/components/mockups';
import { MobileAppDemo } from '@/components/demos/MobileAppDemo';
import { WebsiteShowcase } from '@/components/demos/WebsiteShowcase';
import { CafeOrderSystem } from '@/components/demos/CafeOrderSystem';
import { DesignProcess } from '@/components/demos/DesignProcess';
import { AIChatbot } from '@/components/demos/AIChatbot';

export default function Services() {
  const { services, consulting } = content;
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = (serviceSlug: string) => {
    setSelectedService(serviceSlug);
    setDemoOpen(true);
  };

  const closeDemo = () => {
    setDemoOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  // Demo content for each service
  const getDemoContent = (slug: string) => {
    const demoContents: Record<string, JSX.Element> = {
      'mobile-apps': (
        <InteractivePrototype
          title="UMKM Ecommerce Mobile App"
          description="A modern mobile ecommerce solution for local businesses with functional cart and checkout"
          tags={['React Native', 'Mobile', 'Ecommerce']}
        >
          <MobileAppDemo />
        </InteractivePrototype>
      ),
      'websites': (
        <InteractivePrototype
          title="Website Portfolio Showcase"
          description="Professional websites we've built - Real projects with live site previews"
          tags={['React', 'Next.js', 'Tailwind CSS', 'TypeScript']}
        >
          <WebsiteShowcase />
        </InteractivePrototype>
      ),
      'custom-software': (
        <InteractivePrototype
          title="Cafe Order Management System"
          description="Full-featured order management dashboard with real-time updates and CRUD operations"
          tags={['React', 'TypeScript', 'Dashboard', 'Real-time']}
        >
          <CafeOrderSystem />
        </InteractivePrototype>
      ),
      'design': (
        <InteractivePrototype
          title="Design Process & System Explorer"
          description="Interactive design journey with design systems from our portfolio"
          tags={['Figma', 'UI/UX', 'Design System', 'Interactive']}
        >
          <DesignProcess />
        </InteractivePrototype>
      ),
      'ai-services': (
        <InteractivePrototype
          title="AI-Powered Chatbot Assistant"
          description="Intelligent conversational AI with context-aware responses for customer support"
          tags={['AI', 'Chatbot', 'NLP', 'Customer Service']}
        >
          <AIChatbot />
        </InteractivePrototype>
      ),
    };

    return demoContents[slug] || null;
  };

  return (
    <Layout>
      <Hero
        title="Our Services"
        description="Comprehensive software development and consulting services to help your business thrive."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
      />

      {/* Software Development Services */}
      <Section
        title="Software Development"
        description="From concept to deployment, we build software that works"
      >
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <Card key={service.slug} id={service.slug} className="scroll-mt-20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.details}</p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-3">Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Pricing Model</h4>
                        <Badge variant="outline">{service.pricing}</Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Typical Timeline</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icons.Clock className="h-4 w-4" />
                          {service.timeline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* View Demo Button - Skip for maintenance-hosting */}
                  {service.slug !== 'maintenance-hosting' && (
                    <div className="pt-4 border-t">
                      <Button
                        onClick={() => openDemo(service.slug)}
                        variant="outline"
                        className="w-full"
                      >
                        <Icons.Eye className="w-4 h-4 mr-2" />
                        View Interactive Demo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Separator className="my-16" />

      {/* Consulting Services */}
      <Section
        title="Software Consulting"
        description="Expert guidance to navigate technical challenges and make informed decisions"
        className="pb-24"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {consulting.map((item) => {
            const Icon = Icons[item.icon as keyof typeof Icons] as any;
            return (
              <Card key={item.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Not sure where to start?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation call and we'll help you understand your options
            and recommend the best approach for your project.
          </p>
          <Icons.ArrowRight className="h-5 w-5 mx-auto text-primary" />
        </div>
      </Section>

      {/* Demo Dialog */}
      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedService && services.find(s => s.slug === selectedService)?.title} Demo
            </DialogTitle>
            <DialogDescription>
              Interactive prototype showcasing our capabilities
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            {selectedService && getDemoContent(selectedService)}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
