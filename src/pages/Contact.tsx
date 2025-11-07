import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as Icons from 'lucide-react';
import content from '@/data/content.json';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  role: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  'Mobile Apps',
  'Websites',
  'Custom Software',
  'Maintenance & Hosting',
  'Design (UI/UX)',
  'AI & AI Business Services',
  'Software Consulting',
];

const budgetRanges = [
  'Under $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  'Over $100K',
  'Not sure yet',
];

const timelines = [
  'ASAP',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring',
];

export default function Contact() {
  const { company } = content;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form data:', { ...data, services: selectedServices });

    toast.success('Message sent successfully!', {
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitted(true);
    reset();
    setSelectedServices([]);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <Layout>
      <Hero
        title="Let's Build Something Great"
        description="Tell us about your project and we'll get back to you within 24 hours."
      />

      <Section className="pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here's how:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icons.Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{company.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icons.MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">{company.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icons.MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{company.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed project proposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icons.CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No obligation to proceed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <Card className="border-2 border-primary">
                <CardContent className="pt-12 pb-12 text-center">
                  <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icons.CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Project Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with next steps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          {...register('name')}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company & Role */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          {...register('company')}
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          {...register('role')}
                          placeholder="CEO, CTO, Product Manager..."
                        />
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => register('budget').onChange({ target: { value } })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select onValueChange={(value) => register('timeline').onChange({ target: { value } })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-3">
                      <Label>
                        Services Needed <span className="text-destructive">*</span>
                      </Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {serviceOptions.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={() => toggleService(service)}
                            />
                            <label
                              htmlFor={service}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                      {selectedServices.length === 0 && errors.services && (
                        <p className="text-sm text-destructive">{errors.services.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Project Details <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || selectedServices.length === 0}
                    >
                      {isSubmitting ? (
                        <>
                          <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Icons.Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
