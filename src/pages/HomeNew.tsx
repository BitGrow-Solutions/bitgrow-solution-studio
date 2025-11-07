import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import content from '@/data/content.json';

export default function Home() {
  const { services, work, testimonials } = content;
  const featuredWork = work.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - Bold & Minimal */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Software Development in Jakarta
              </span>
            </div>

            <h1 className="mb-8 text-balance">
              Ship reliable software,{' '}
              <span className="text-primary">faster</span>
            </h1>

            <p className="mb-12 text-xl text-muted-foreground max-w-2xl">
              From UMKM to enterprises, we design, build, and maintain software
              that actually moves the needle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group text-base h-14 px-8">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-14 px-8">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <div className="container-custom">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Full-stack development services to help your business grow
            </p>
          </div>

          <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services#${service.slug}`}
                className="group relative border border-border/40 p-8 transition-all hover:bg-muted/50 hover:border-foreground/20"
              >
                <div className="mb-4">
                  <div className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-border/40 bg-muted/30 py-24 md:py-32">
        <div className="container-custom">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-4">Featured Work</h2>
              <p className="text-lg text-muted-foreground">
                Real projects with measurable results
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <Link
                key={item.slug}
                to={`/work#${item.slug}`}
                className="group"
              >
                <div className="mb-6 aspect-[4/3] overflow-hidden bg-muted border border-border/40">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 transition-transform group-hover:scale-105">
                    <div className="text-6xl font-bold text-muted-foreground/20">
                      {item.title.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/40 py-24 md:py-32">
        <div className="container-custom">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4">Client Success</h2>
            <p className="text-lg text-muted-foreground">
              What our partners say about working with us
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-border/40 p-8 transition-all hover:border-foreground/20"
              >
                <div className="mb-6">
                  <p className="text-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="border-t border-border/40 pt-6 mt-6">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border/40 bg-muted/30 py-24 md:py-32">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6">Why BitGrow?</h2>
              <p className="text-lg text-muted-foreground">
                We're not just developers. We're your technical partners
                committed to your success.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Outcome-Driven',
                  desc: 'We measure success by your business results, not just features shipped.',
                },
                {
                  title: 'Transparent Pricing',
                  desc: 'Clear estimates, regular updates, and flexible engagement models.',
                },
                {
                  title: 'Modern Stack',
                  desc: 'Production-grade tools and best practices from day one.',
                },
                {
                  title: 'Post-Launch Care',
                  desc: 'Ongoing support, monitoring, and optimization after launch.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-border/40 py-24 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Ready to grow your idea?</h2>
            <p className="mb-12 text-xl text-muted-foreground">
              Let's discuss how we can help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base h-14 px-8 group">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-14 px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
