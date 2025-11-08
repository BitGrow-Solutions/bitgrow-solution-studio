import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';
import content from '@/data/content.json';

// Trust bar companies (placeholders)
const trustLogos = [
  'TechStart', 'FinanceHub', 'EduLearn', 'Warung Digital', 'GovTech',
];

export default function Home() {
  const { services, industries, process, valueProps, testimonials, work } = content;

  // Get featured work items
  const featuredWork = work.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Ship reliable software, faster."
        description="BitGrow Solutions builds and maintains apps that scale—from MVP to enterprise."
        primaryCta={{ text: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ text: 'See Our Work', href: '/work' }}
      >
        {/* Trust Bar */}
        <div className="mt-16">
          <p className="text-sm text-muted-foreground mb-6">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="text-muted-foreground font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Hero>

      {/* Value Props */}
      <Section
        title="Why Choose BitGrow?"
        description="We're not just developers. We're your technical partners committed to your success."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => {
            const Icon = Icons[prop.icon as keyof typeof Icons] as any;
            return (
              <Card key={prop.title} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{prop.title}</CardTitle>
                  <CardDescription>{prop.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Featured Services */}
      <Section
        className="bg-muted/50"
        title="Our Services"
        description="End-to-end software solutions tailored to your needs"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to={`/services#${service.slug}`}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      {/* Industries */}
      <Section
        title="Industries We Serve"
        description="Tailored solutions for every market segment"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((industry) => {
            const Icon = Icons[industry.icon as keyof typeof Icons] as any;
            return (
              <Card key={industry.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/industries">Explore Industries</Link>
          </Button>
        </div>
      </Section>

      {/* Process */}
      <Section
        className="bg-muted/50"
        title="Our Process"
        description="A proven approach to delivering successful projects"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = Icons[step.icon as keyof typeof Icons] as any;
            return (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {step.step < process.length && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Featured Work */}
      <Section
        title="Featured Work"
        description="Real projects, real results"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {featuredWork.map((item) => (
            <Card key={item.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icons.Image className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={`/work#${item.slug}`}>View Case Study →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/work">View All Projects</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        className="bg-muted/50"
        title="What Our Clients Say"
        description="Don't just take our word for it"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icons.Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to grow your idea?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how we can help turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
