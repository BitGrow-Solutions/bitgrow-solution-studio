import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Pencil,
  Palette,
  MousePointer,
  Code,
  ArrowRight,
  Check,
  Copy,
  Users,
  Target,
  Layout,
  Smartphone,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const designProcess = [
  {
    id: 'research',
    title: 'Research',
    icon: Search,
    description: 'Understanding user needs and business goals',
    deliverables: ['User Personas', 'Journey Maps', 'Competitor Analysis', 'User Stories'],
  },
  {
    id: 'wireframes',
    title: 'Wireframes',
    icon: Pencil,
    description: 'Low-fidelity sketches of layout and structure',
    deliverables: ['Information Architecture', 'User Flows', 'Lo-fi Wireframes', 'Navigation Maps'],
  },
  {
    id: 'mockups',
    title: 'Mockups',
    icon: Palette,
    description: 'High-fidelity visual designs with branding',
    deliverables: ['Visual Design', 'Brand Application', 'Responsive Designs', 'Asset Creation'],
  },
  {
    id: 'prototype',
    title: 'Prototype',
    icon: MousePointer,
    description: 'Interactive clickable prototype for testing',
    deliverables: ['Clickable Prototype', 'Micro-interactions', 'User Testing', 'Feedback Integration'],
  },
  {
    id: 'handoff',
    title: 'Handoff',
    icon: Code,
    description: 'Development-ready specs and assets',
    deliverables: ['Design System', 'Component Specs', 'Asset Export', 'Developer Documentation'],
  },
];

const kciDesignSystem = {
  colors: [
    { name: 'Burgundy', hex: '#800020', rgb: 'rgb(128, 0, 32)' },
    { name: 'Gold', hex: '#D4AF37', rgb: 'rgb(212, 175, 55)' },
    { name: 'Dark Gray', hex: '#2C2C2C', rgb: 'rgb(44, 44, 44)' },
    { name: 'Light Gray', hex: '#F5F5F5', rgb: 'rgb(245, 245, 245)' },
    { name: 'White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
  ],
  typography: [
    { name: 'Heading 1', family: 'Poppins', weight: '700', size: '48px' },
    { name: 'Heading 2', family: 'Poppins', weight: '600', size: '36px' },
    { name: 'Heading 3', family: 'Poppins', weight: '600', size: '24px' },
    { name: 'Body', family: 'Inter', weight: '400', size: '16px' },
    { name: 'Caption', family: 'Inter', weight: '400', size: '14px' },
  ],
};

const cryptoPathDesignSystem = {
  colors: [
    { name: 'Ocean Blue', hex: '#0F7DB6', rgb: 'rgb(15, 125, 182)' },
    { name: 'Cyan', hex: '#00D4FF', rgb: 'rgb(0, 212, 255)' },
    { name: 'Electric', hex: '#7B61FF', rgb: 'rgb(123, 97, 255)' },
    { name: 'Deep Navy', hex: '#0A1929', rgb: 'rgb(10, 25, 41)' },
    { name: 'Mint', hex: '#10B981', rgb: 'rgb(16, 185, 129)' },
  ],
  typography: [
    { name: 'Heading 1', family: 'Inter', weight: '800', size: '56px' },
    { name: 'Heading 2', family: 'Inter', weight: '700', size: '40px' },
    { name: 'Heading 3', family: 'Inter', weight: '600', size: '28px' },
    { name: 'Body', family: 'Inter', weight: '400', size: '16px' },
    { name: 'Code', family: 'JetBrains Mono', weight: '400', size: '14px' },
  ],
};

export function DesignProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<'kci' | 'crypto-path'>('kci');
  const { toast } = useToast();

  const currentDesignSystem = selectedProject === 'kci' ? kciDesignSystem : cryptoPathDesignSystem;

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast({
      title: 'Copied!',
      description: `Color ${hex} copied to clipboard`,
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="process">
            <Target className="mr-2" size={16} />
            Design Process
          </TabsTrigger>
          <TabsTrigger value="prototype">
            <Layout className="mr-2" size={16} />
            Interactive Prototype
          </TabsTrigger>
          <TabsTrigger value="design-system">
            <Palette className="mr-2" size={16} />
            Design System
          </TabsTrigger>
        </TabsList>

        {/* Design Process Tab */}
        <TabsContent value="process" className="space-y-6">
          {/* Process Steps */}
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800" />
            <div className="relative grid grid-cols-5 gap-4">
              {designProcess.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`relative flex flex-col items-center text-center transition-all ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 transition-colors ${
                        isActive
                          ? 'bg-primary text-white shadow-lg'
                          : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-600'
                      }`}
                    >
                      {isCompleted ? <Check size={32} /> : <Icon size={32} />}
                    </div>
                    <h3 className={`font-semibold ${isActive ? 'text-primary' : ''}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                      Step {idx + 1}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Step Details */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = designProcess[activeStep].icon;
                  return <Icon className="text-primary" size={32} />;
                })()}
                <div>
                  <CardTitle className="text-2xl">{designProcess[activeStep].title}</CardTitle>
                  <p className="text-muted-foreground">{designProcess[activeStep].description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Deliverables */}
              <div>
                <h4 className="font-semibold mb-3">Key Deliverables</h4>
                <div className="grid grid-cols-2 gap-3">
                  {designProcess[activeStep].deliverables.map(deliverable => (
                    <div key={deliverable} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                      <Check className="text-green-500 flex-shrink-0" size={18} />
                      <span className="text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Content Based on Step */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Example: User Persona</h4>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users size={32} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold">Sarah, 28</h5>
                          <p className="text-sm text-muted-foreground mb-2">Small Business Owner</p>
                          <p className="text-sm mb-2"><strong>Goals:</strong> Grow online presence, increase sales</p>
                          <p className="text-sm"><strong>Pain Points:</strong> Limited tech knowledge, budget constraints</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Example: User Flow</h4>
                    <div className="flex items-center justify-around bg-white dark:bg-gray-800 rounded-lg p-6 border">
                      {['Landing', 'Browse', 'Details', 'Cart', 'Checkout'].map((step, idx) => (
                        <div key={step} className="flex items-center">
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                              <span className="font-bold text-primary">{idx + 1}</span>
                            </div>
                            <span className="text-xs">{step}</span>
                          </div>
                          {idx < 4 && <ArrowRight className="mx-3 text-muted-foreground" size={20} />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Example: Visual Mockup</h4>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <Layout size={64} className="mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">High-fidelity design mockup would be shown here</p>
                        <p className="text-sm text-muted-foreground mt-2">Complete with branding, images, and final colors</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Interactive Prototype Preview</h4>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border-2 border-dashed">
                      <div className="text-center">
                        <MousePointer size={48} className="mx-auto text-primary mb-4" />
                        <p className="font-medium mb-2">Clickable Prototype</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Interactive prototype allows stakeholders to experience the flow
                        </p>
                        <Button onClick={() => document.querySelector<HTMLElement>('[value="prototype"]')?.click()}>
                          View Interactive Prototype
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Development Handoff</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
                        <Code className="text-primary mb-2" size={24} />
                        <h5 className="font-semibold mb-1">Component Specs</h5>
                        <p className="text-sm text-muted-foreground">Detailed specifications for developers</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
                        <Palette className="text-primary mb-2" size={24} />
                        <h5 className="font-semibold mb-1">Design Tokens</h5>
                        <p className="text-sm text-muted-foreground">Colors, spacing, typography values</p>
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => document.querySelector<HTMLElement>('[value="design-system"]')?.click()}>
                      Explore Design System
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                >
                  Previous Step
                </Button>
                <Button
                  onClick={() => setActiveStep(Math.min(designProcess.length - 1, activeStep + 1))}
                  disabled={activeStep === designProcess.length - 1}
                >
                  Next Step
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interactive Prototype Tab */}
        <TabsContent value="prototype" className="space-y-6">
          {/* Project Selector */}
          <div className="flex gap-2">
            <Button
              variant={selectedProject === 'kci' ? 'default' : 'outline'}
              onClick={() => setSelectedProject('kci')}
            >
              KCI Website
            </Button>
            <Button
              variant={selectedProject === 'crypto-path' ? 'default' : 'outline'}
              onClick={() => setSelectedProject('crypto-path')}
            >
              Crypto Path
            </Button>
          </div>

          {/* Prototype Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Prototype - {selectedProject === 'kci' ? 'KCI Website' : 'Crypto Path'}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Click on interactive areas to navigate through the design
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-center max-w-md">
                  <Smartphone size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Figma Prototype</h3>
                  <p className="text-muted-foreground mb-4">
                    In a real project, you would see an embedded Figma prototype here with clickable hotspots and screen transitions.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button asChild>
                      <a
                        href={selectedProject === 'kci'
                          ? 'https://komunitaschineseindonesia.com'
                          : 'https://crypto-path-frontend.vercel.app'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hotspot Annotations */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Interactive Hotspots</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Buttons, links, and interactive elements are clickable to show user flows
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✨ Micro-interactions</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Hover states, animations, and transitions are demonstrated in the prototype
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Design System Tab */}
        <TabsContent value="design-system" className="space-y-6">
          {/* Project Selector */}
          <div className="flex gap-2">
            <Button
              variant={selectedProject === 'kci' ? 'default' : 'outline'}
              onClick={() => setSelectedProject('kci')}
            >
              KCI Design System
            </Button>
            <Button
              variant={selectedProject === 'crypto-path' ? 'default' : 'outline'}
              onClick={() => setSelectedProject('crypto-path')}
            >
              Crypto Path Design System
            </Button>
          </div>

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <p className="text-sm text-muted-foreground">Click on any color to copy the hex code</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4">
                {currentDesignSystem.colors.map(color => (
                  <button
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="group relative"
                  >
                    <div
                      className="aspect-square rounded-lg mb-2 border-2 border-gray-200 dark:border-gray-700 transition-transform group-hover:scale-105 group-hover:shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/80 text-white rounded-lg p-2">
                        <Copy size={20} />
                      </div>
                    </div>
                    <p className="font-medium text-sm">{color.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentDesignSystem.typography.map(type => (
                <div key={type.name} className="border-b pb-4 last:border-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className="font-medium"
                      style={{
                        fontFamily: type.family,
                        fontWeight: type.weight,
                        fontSize: type.size,
                      }}
                    >
                      {type.name}
                    </span>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span>{type.family}</span>
                      <span>{type.weight}</span>
                      <span>{type.size}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Component Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Component Library</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Buttons */}
              <div>
                <h4 className="font-semibold mb-3">Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Primary Button</Button>
                  <Button variant="outline">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="font-semibold mb-3">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
