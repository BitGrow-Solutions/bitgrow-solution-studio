import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import * as Icons from 'lucide-react';
import content from '@/data/content.json';
import { MockupCarousel, type MockupSlide } from '@/components/mockups';

const categories = ['All', 'Mobile', 'Web', 'AI', 'Design', 'Infrastructure'];

export default function Work() {
  const { work } = content;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWork = selectedCategory === 'All'
    ? work
    : work.filter((item) => item.tags.includes(selectedCategory));

  return (
    <Layout>
      <Hero
        title="Our Work"
        description="Real projects with measurable results. See how we've helped businesses grow."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
      />

      <Section>
        {/* Filter Tabs */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Work Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredWork.map((item) => (
            <Dialog key={item.slug}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  {/* Project Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <Icons.Image className="h-16 w-16 text-muted-foreground" />
                    )}
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
                    <CardDescription className="line-clamp-2">
                      {item.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{item.industry}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Case Study Modal */}
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Images - Carousel if multiple, single image otherwise */}
                  {item.images && item.images.length > 0 ? (
                    item.images.length > 1 ? (
                      <MockupCarousel
                        slides={item.images.map((img, idx) => ({
                          src: img,
                          alt: `${item.title} - Screenshot ${idx + 1}`,
                          title: idx === 0 ? 'Main Screenshot' : `View ${idx + 1}`,
                        }))}
                        showThumbnails={true}
                      />
                    ) : (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Icons.Image className="h-20 w-20 text-muted-foreground" />
                    </div>
                  )}

                  {/* Project Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icons.FileText className="h-5 w-5 text-primary" />
                      About This Project
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>

                  <Separator />

                  {/* Visit Website Button */}
                  {item.websiteUrl && (
                    <>
                      <div className="flex justify-center">
                        <Button asChild variant="outline" size="lg" className="gap-2">
                          <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Icons.ExternalLink className="h-4 w-4" />
                            Visit Website
                          </a>
                        </Button>
                      </div>

                      <Separator />
                    </>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-lg bg-muted/50 p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Ready to achieve similar results?
                    </p>
                    <Button asChild>
                      <a href="/contact">Let's Talk</a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredWork.length === 0 && (
          <div className="text-center py-12">
            <Icons.Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </Section>
    </Layout>
  );
}
