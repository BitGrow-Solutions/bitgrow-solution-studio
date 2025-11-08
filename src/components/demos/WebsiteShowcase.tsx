import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Tablet, Smartphone, ExternalLink, Zap, Gauge, Shield } from 'lucide-react';

interface Website {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  metrics: {
    loadTime: string;
    lighthouse: number;
    features: string[];
  };
}

const websites: Website[] = [
  {
    id: 'kci',
    name: 'KCI Website',
    url: 'https://komunitaschineseindonesia.com',
    description: 'Platform komunitas untuk Komunitas Chinese Indonesia dengan fitur lengkap untuk member management, event, dan berita.',
    tags: ['React', 'Next.js', 'Community Platform'],
    metrics: {
      loadTime: '1.2s',
      lighthouse: 95,
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Event Management',
        'Member Portal',
        'Multi-language Support',
      ],
    },
  },
  {
    id: 'crypto-path',
    name: 'Crypto Path',
    url: 'https://crypto-path-frontend.vercel.app',
    description: 'Learning platform untuk crypto education dengan course management, progress tracking, dan community features.',
    tags: ['React', 'TypeScript', 'Learning Platform'],
    metrics: {
      loadTime: '0.9s',
      lighthouse: 98,
      features: [
        'Course Management',
        'Progress Tracking',
        'Interactive Labs',
        'Video Streaming',
        'Dark Mode',
      ],
    },
  },
];

type DeviceType = 'desktop' | 'tablet' | 'mobile';

export function WebsiteShowcase() {
  const [activeTab, setActiveTab] = useState('kci');
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  const activeWebsite = websites.find(w => w.id === activeTab)!;

  const deviceDimensions = {
    desktop: { width: '100%', height: '600px' },
    tablet: { width: '768px', height: '1024px', maxWidth: '100%' },
    mobile: { width: '375px', height: '667px', maxWidth: '100%' },
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          {websites.map(website => (
            <TabsTrigger key={website.id} value={website.id} className="text-sm">
              {website.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {websites.map(website => (
          <TabsContent key={website.id} value={website.id} className="space-y-6">
            {/* Website Info */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{website.name}</h3>
                  <p className="text-muted-foreground mb-3">{website.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {website.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild size="lg" className="ml-4">
                  <a href={website.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Visit Live Site
                  </a>
                </Button>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Load Time</p>
                    <p className="font-bold">{website.metrics.loadTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Gauge className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lighthouse Score</p>
                    <p className="font-bold">{website.metrics.lighthouse}/100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Security</p>
                    <p className="font-bold">HTTPS/SSL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={deviceType === 'desktop' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDeviceType('desktop')}
                >
                  <Monitor className="mr-2" size={16} />
                  Desktop
                </Button>
                <Button
                  variant={deviceType === 'tablet' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDeviceType('tablet')}
                >
                  <Tablet className="mr-2" size={16} />
                  Tablet
                </Button>
                <Button
                  variant={deviceType === 'mobile' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDeviceType('mobile')}
                >
                  <Smartphone className="mr-2" size={16} />
                  Mobile
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Previewing: <span className="font-medium">{deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}</span> view
              </p>
            </div>

            {/* iframe Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 flex justify-center items-start min-h-[600px]">
              <div
                className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300"
                style={{
                  width: deviceDimensions[deviceType].width,
                  height: deviceDimensions[deviceType].height,
                  maxWidth: deviceDimensions[deviceType].maxWidth || '100%',
                }}
              >
                <iframe
                  src={website.url}
                  className="w-full h-full border-0"
                  title={`${website.name} preview`}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold text-lg mb-4">Key Features Implemented</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {website.metrics.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Info */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-dashed">
              <h4 className="font-semibold text-lg mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {website.tags.map(tech => (
                  <div key={tech} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border">
                    <span className="font-medium text-sm">{tech}</span>
                  </div>
                ))}
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border">
                  <span className="font-medium text-sm">Tailwind CSS</span>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border">
                  <span className="font-medium text-sm">Vercel Hosting</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary/5 rounded-lg p-8 border">
              <h4 className="text-xl font-bold mb-2">Ready to build your website?</h4>
              <p className="text-muted-foreground mb-4">
                We can create a custom website tailored to your business needs, just like this one.
              </p>
              <div className="flex gap-3 justify-center">
                <Button asChild size="lg">
                  <a href={website.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Explore {website.name}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Demo Note */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Interactive Demo:</strong> Click the device buttons above to see how the website looks on different screen sizes. The iframe shows the actual live website - all functionality works in real-time!
        </p>
      </div>
    </div>
  );
}
