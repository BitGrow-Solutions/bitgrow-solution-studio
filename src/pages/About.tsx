import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';

const principles = [
  {
    title: 'Outcome-Driven',
    desc: 'We measure success by business results, not just features shipped.',
    icon: 'Target',
  },
  {
    title: 'Transparency First',
    desc: 'Clear communication, honest timelines, and no hidden surprises.',
    icon: 'Eye',
  },
  {
    title: 'Quality over Speed',
    desc: 'Fast delivery matters, but never at the cost of reliability and security.',
    icon: 'Shield',
  },
  {
    title: 'Continuous Learning',
    desc: 'Technology evolves. We stay ahead with modern tools and best practices.',
    icon: 'BookOpen',
  },
];

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
  cloud: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Terraform'],
  ai: ['OpenAI', 'LangChain', 'Vector Databases', 'TensorFlow', 'PyTorch'],
};

export default function About() {
  return (
    <Layout>
      <Hero
        title="About BitGrow Solutions"
        description="We're a team of engineers, designers, and problem-solvers who believe great software starts with understanding your business."
        primaryCta={{ text: 'Work With Us', href: '/contact' }}
      />

      {/* Mission */}
      <Section
        title="Our Mission"
        description="To help businesses—from solo founders to enterprises—build software that actually works and grows with them."
      >
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Too many projects fail not from lack of features, but from misaligned expectations,
                unclear requirements, or technical debt. We've seen it happen, and we're here to
                do things differently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                BitGrow Solutions combines deep technical expertise with a founder-friendly approach.
                Whether you're validating an MVP or scaling to millions of users, we're your
                technical partner for the long haul.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Principles */}
      <Section
        className="bg-muted/50"
        title="Our Principles"
        description="The values that guide every project we build"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const Icon = Icons[principle.icon as keyof typeof Icons] as any;
            return (
              <Card key={principle.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription>{principle.desc}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section
        title="Our Tech Stack"
        description="We use modern, production-grade tools that scale"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icons.Smartphone className="h-6 w-6" />
              </div>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Icons.Server className="h-6 w-6" />
              </div>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icons.Cloud className="h-6 w-6" />
              </div>
              <CardTitle>Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.cloud.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icons.Brain className="h-6 w-6" />
              </div>
              <CardTitle>AI & ML</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.ai.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section className="bg-muted/50 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icons.ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-muted-foreground">
              Your data and your users' privacy are paramount
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secure coding practices and regular security audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>GDPR-compliant data handling and privacy policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>End-to-end encryption for sensitive data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Regular penetration testing and vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>SOC 2 Type II certified infrastructure partners</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}
