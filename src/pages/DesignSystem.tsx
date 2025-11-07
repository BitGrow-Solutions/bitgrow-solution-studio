import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import {
  Copy,
  Check,
  AlertCircle,
  Info,
  Palette,
  Type,
  Layout,
  Box,
  Sparkles
} from 'lucide-react';

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Primary', value: 'hsl(142 73% 44%)', hex: '#2FB24A', description: 'Leaf Green - Main brand color' },
    { name: 'Secondary', value: 'hsl(218 13% 19%)', hex: '#2B2F36', description: 'Charcoal - Accent color' },
    { name: 'Accent', value: 'hsl(198 84% 38%)', hex: '#0F7DB6', description: 'Tech Blue - Interactive elements' },
    { name: 'Graph Green', value: 'hsl(135 58% 41%)', hex: '#29A33A', description: 'Data visualization' },
    { name: 'Background', value: 'hsl(0 0% 100%)', hex: '#FFFFFF', description: 'Light mode background' },
    { name: 'Foreground', value: 'hsl(218 13% 19%)', hex: '#2B2F36', description: 'Text color' },
    { name: 'Muted', value: 'hsl(210 40% 96.1%)', hex: '#F1F5F9', description: 'Subtle backgrounds' },
    { name: 'Border', value: 'hsl(214.3 31.8% 91.4%)', hex: '#E2E8F0', description: 'Border color' },
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Design System
            </Badge>
            <h1 className="text-5xl font-bold mb-6">BitGrow Design System</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive design system built on ShadCN UI, featuring 47+ components,
              custom design tokens, and modern styling patterns.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="colors">
              <Palette className="w-4 h-4 mr-2" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography">
              <Type className="w-4 h-4 mr-2" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="components">
              <Box className="w-4 h-4 mr-2" />
              Components
            </TabsTrigger>
            <TabsTrigger value="layout">
              <Layout className="w-4 h-4 mr-2" />
              Layout
            </TabsTrigger>
            <TabsTrigger value="icons">
              <Sparkles className="w-4 h-4 mr-2" />
              Icons
            </TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Color Palette</h2>
              <p className="text-muted-foreground mb-8">
                Our brand colors use HSL format for consistency and easy dark mode support.
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {colors.map((color) => (
                  <Card key={color.name}>
                    <CardHeader className="pb-3">
                      <div
                        className="w-full h-24 rounded-md mb-3 border"
                        style={{ backgroundColor: color.hex }}
                      />
                      <CardTitle className="text-lg">{color.name}</CardTitle>
                      <CardDescription>{color.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-xs bg-muted px-2 py-1 rounded">{color.hex}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(color.hex, color.name + '-hex')}
                        >
                          {copiedColor === color.name + '-hex' ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <code className="text-xs bg-muted px-2 py-1 rounded">{color.value}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(color.value, color.name + '-hsl')}
                        >
                          {copiedColor === color.name + '-hsl' ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Typography</h2>
              <p className="text-muted-foreground mb-8">
                Our typography scale uses fluid sizing with clamp() for responsive design.
              </p>

              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h1 className="mb-2">Heading 1</h1>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      clamp(2.5rem, 5vw, 4.5rem) • 800 weight
                    </code>
                  </div>
                  <Separator />
                  <div>
                    <h2 className="mb-2">Heading 2</h2>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      clamp(2rem, 4vw, 3rem) • 700 weight
                    </code>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="mb-2">Heading 3</h3>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      clamp(1.5rem, 3vw, 2rem) • 600 weight
                    </code>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-lg mb-2">Body Large</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      1.125rem (18px) • 400 weight
                    </code>
                  </div>
                  <Separator />
                  <div>
                    <p className="mb-2">Body Regular</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      1rem (16px) • 400 weight
                    </code>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm mb-2">Body Small</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      0.875rem (14px) • 400 weight
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Components</h2>
              <p className="text-muted-foreground mb-8">
                Interactive examples of our core UI components.
              </p>

              {/* Buttons */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Various button variants and sizes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button size="lg">Large</Button>
                    <Button size="default">Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="icon">
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Forms */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Inputs, checkboxes, and controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Enable notifications</Label>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Choose an option</Label>
                    <RadioGroup defaultValue="option1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option1" id="option1" />
                        <Label htmlFor="option1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option2" id="option2" />
                        <Label htmlFor="option2">Option 2</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Label>Slider</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>Contextual feedback messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Layout & Spacing</h2>
              <p className="text-muted-foreground mb-8">
                Our spacing system uses Tailwind's default scale (4px base unit).
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Spacing Scale</CardTitle>
                  <CardDescription>Consistent spacing throughout the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 4, 6, 8, 12, 16, 24, 32].map((size) => (
                    <div key={size} className="flex items-center gap-4">
                      <code className="w-16 text-sm">{size * 4}px</code>
                      <div
                        className="bg-primary h-8"
                        style={{ width: `${size * 4}px` }}
                      />
                      <code className="text-xs text-muted-foreground">
                        {size === 1 ? 'px' : `${size}`}
                      </code>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Icons Tab */}
          <TabsContent value="icons" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Icons</h2>
              <p className="text-muted-foreground mb-8">
                We use Lucide React for consistent, beautiful icons.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Icon Library</CardTitle>
                  <CardDescription>
                    Visit{' '}
                    <a
                      href="https://lucide.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      lucide.dev
                    </a>{' '}
                    for the full icon set
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-8 gap-6">
                    {[Copy, Check, AlertCircle, Info, Palette, Type, Layout, Box, Sparkles].map(
                      (Icon, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                          <div className="p-3 border rounded-lg hover:bg-muted transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs text-center text-muted-foreground">
                            {Icon.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Design Principles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Design Principles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Bold & Minimal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sharp corners (0px border radius), clean typography, and purposeful whitespace
                  create a modern, professional aesthetic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  WCAG 2.1 compliant colors, semantic HTML, keyboard navigation, and screen
                  reader support ensure accessibility for all users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fluid typography, flexible grids, and mobile-first approach ensure
                  seamless experiences across all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
