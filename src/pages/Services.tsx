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
          description="A modern mobile ecommerce solution for local businesses"
          tags={['React Native', 'Mobile', 'Ecommerce']}
        >
          <div className="flex gap-6 justify-center flex-wrap">
            {/* Home Screen */}
            <PhoneMockup>
              <div className="h-full flex flex-col bg-gray-50">
                {/* Header */}
                <div className="bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Selamat datang</p>
                      <p className="font-bold text-sm">Toko Saya</p>
                    </div>
                    <div className="relative">
                      <Icons.ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">3</span>
                    </div>
                  </div>
                  {/* Search Bar */}
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                    <Icons.Search className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-400">Cari produk...</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-4 mt-2">
                  <p className="text-xs font-semibold mb-3">Kategori</p>
                  <div className="grid grid-cols-4 gap-3">
                    {['Fashion', 'Elektronik', 'Makanan', 'Lainnya'].map((cat) => (
                      <div key={cat} className="flex flex-col items-center">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-1">
                          <Icons.Package className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-[10px] text-center">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Products */}
                <div className="p-4 flex-1 overflow-y-auto">
                  <p className="text-xs font-semibold mb-3">Produk Terlaris</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Batik Modern', price: '249.000', rating: 4.8 },
                      { name: 'Tas Kulit', price: '189.000', rating: 4.9 }
                    ].map((product, i) => (
                      <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <div className="h-24 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                          <Icons.Image className="h-8 w-8 text-gray-300" />
                        </div>
                        <div className="p-2">
                          <p className="text-xs font-medium line-clamp-1">{product.name}</p>
                          <div className="flex items-center gap-1 my-1">
                            <Icons.Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-[10px] text-gray-600">{product.rating}</span>
                          </div>
                          <p className="text-xs font-bold text-primary">Rp {product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PhoneMockup>

            {/* Product Detail Screen */}
            <PhoneMockup>
              <div className="h-full flex flex-col bg-white">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Icons.ArrowLeft className="h-5 w-5" />
                  <div className="flex gap-3">
                    <Icons.Share2 className="h-5 w-5" />
                    <div className="relative">
                      <Icons.ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">3</span>
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Icons.Image className="h-16 w-16 text-gray-300" />
                </div>

                {/* Product Info */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  <div>
                    <h3 className="font-bold text-base">Batik Modern Premium</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Icons.Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">4.8</span>
                      </div>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-600">127 terjual</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xl font-bold text-primary">Rp 249.000</p>
                    <p className="text-xs text-gray-500 line-through">Rp 349.000</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold mb-2">Deskripsi</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Batik modern dengan desain eksklusif, cocok untuk acara formal maupun santai. Bahan katun premium yang nyaman dipakai.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold mb-2">Pilih Ukuran</p>
                    <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <div key={size} className="h-8 w-10 border rounded flex items-center justify-center text-xs hover:border-primary cursor-pointer">
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t flex gap-2">
                  <button className="flex-1 border border-primary text-primary rounded-lg py-3 text-sm font-semibold">
                    + Keranjang
                  </button>
                  <button className="flex-1 bg-primary text-white rounded-lg py-3 text-sm font-semibold">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </InteractivePrototype>
      ),
      'websites': (
        <InteractivePrototype
          title="Website Portfolio"
          description="Professional websites we've built - Real projects from our portfolio"
          tags={['React', 'Next.js', 'Tailwind CSS', 'TypeScript']}
        >
          <Tabs defaultValue="kci" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="kci">KCI Website</TabsTrigger>
              <TabsTrigger value="crypto">Crypto Path</TabsTrigger>
            </TabsList>
            <TabsContent value="kci" className="space-y-4">
              <BrowserMockup url="https://komunitaschineseindonesia.com">
                <div className="bg-white min-h-screen">
                  {/* Navigation - Based on actual Header component */}
                  <nav className="border-b px-8 py-4 flex items-center justify-between bg-white sticky top-0 shadow-sm">
                    <div className="flex flex-col">
                      <span className="font-bold text-2xl text-[#800020] tracking-wider">KCI</span>
                      <span className="text-xs text-gray-600 tracking-wide">Komunitas Chinese Indonesia</span>
                    </div>
                    <div className="flex gap-6 text-sm font-semibold">
                      {['Beranda', 'Visi & Misi', 'Acara', 'Galeri', 'Kontak'].map((item) => (
                        <a key={item} className="text-gray-800 hover:text-[#800020] cursor-pointer transition-colors relative group">
                          {item}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#800020] transition-all group-hover:w-full"></span>
                        </a>
                      ))}
                    </div>
                    <button className="px-5 py-2 bg-[#800020] text-white rounded-md text-sm font-semibold hover:bg-[#5D001E] transition-colors">
                      Bergabung
                    </button>
                  </nav>

                  {/* Hero Section - Based on actual Hero component */}
                  <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
                    {/* Background with dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#800020] via-[#5D001E] to-black z-0" />

                    {/* Subtle pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-5 z-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 50 Q 30 40, 40 50 T 60 50 Q 70 60, 80 50' stroke='%23ffffff' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 100px',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-20 text-center max-w-4xl mx-auto px-6 space-y-6">
                      <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                        Komunitas Chinese Indonesia
                      </h1>
                      <p className="text-2xl md:text-3xl font-light tracking-[0.3em] opacity-90">
                        文化连心，共创未来
                      </p>
                      <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Wadah kolaborasi lintas generasi untuk melestarikan budaya Tionghoa-Indonesia dan berkontribusi bagi masyarakat
                      </p>
                      <button className="mt-8 px-8 py-4 bg-[#D4AF37] hover:bg-[#c19c2e] text-gray-900 rounded-lg text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
                        Bergabung Bersama Kami
                        <Icons.ArrowRight className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
                  </div>

                  {/* Visi Misi Section */}
                  <div className="px-8 py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-3">Visi & Misi</h2>
                        <div className="w-24 h-1 bg-[#800020] mx-auto mb-4"></div>
                        <p className="text-gray-600">Arah dan tujuan KCI untuk Indonesia</p>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#800020]">
                          <div className="flex items-center gap-3 mb-4">
                            <Icons.Eye className="h-8 w-8 text-[#800020]" />
                            <h3 className="font-bold text-2xl">Visi</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Menjadi wadah terdepan yang menghubungkan, memberdayakan, dan menginspirasi komunitas Tionghoa di Indonesia untuk berkontribusi positif bagi masyarakat.
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-[#D4AF37]">
                          <div className="flex items-center gap-3 mb-4">
                            <Icons.Target className="h-8 w-8 text-[#D4AF37]" />
                            <h3 className="font-bold text-2xl">Misi</h3>
                          </div>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Melestarikan budaya Tionghoa</li>
                            <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Membangun jaringan komunitas</li>
                            <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Memberikan dampak sosial positif</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="px-8 py-16 bg-gradient-to-br from-[#800020] to-[#5D001E] text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Siap Bergabung dengan Komunitas Kami?</h3>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                    <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
                      Jadilah bagian dari keluarga besar KCI dan berkontribusi untuk masa depan yang lebih baik
                    </p>
                    <button className="px-10 py-4 bg-white text-[#800020] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5">
                      Daftar Sekarang
                    </button>
                  </div>
                </div>
              </BrowserMockup>
              <div className="text-center">
                <Button asChild variant="outline">
                  <a
                    href="https://komunitaschineseindonesia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </a>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="crypto" className="space-y-4">
              <BrowserMockup url="https://crypto-path-frontend.vercel.app">
                <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
                  {/* Navigation - Based on actual Navigation component */}
                  <nav className="px-8 py-4 flex items-center justify-between bg-gray-950/50 backdrop-blur-sm sticky top-0 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Icons.TrendingUp className="h-7 w-7 text-[#f4b41a]" />
                      <span className="font-bold text-xl">Crypto Path</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium">
                      {['Modules', 'Community', 'Resources', 'About'].map((item) => (
                        <a key={item} className="text-gray-300 hover:text-[#f4b41a] cursor-pointer transition-colors">{item}</a>
                      ))}
                    </div>
                    <button className="px-6 py-2 bg-[#f4b41a] text-gray-900 rounded-lg text-sm font-semibold hover:bg-[#e5a610] transition-all">
                      Get Started
                    </button>
                  </nav>

                  {/* Hero Section - Based on actual InteractiveHero/ModernHero component */}
                  <div className="relative px-8 py-24 text-center">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#f4b41a]/10 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
                    </div>

                    {/* Badge */}
                    <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#f4b41a]/20 bg-[#f4b41a]/5 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f4b41a]" />
                      <span className="text-sm font-medium text-gray-300">
                        Learn Crypto • Build Future
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="relative z-10 text-7xl md:text-8xl font-bold mb-6">
                      <span className="text-white">Crypto </span>
                      <span className="text-[#f4b41a]">Path</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="relative z-10 text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                      Belajar Crypto Secara{' '}
                      <span className="text-[#f4b41a] font-medium">Praktikal</span>{' '}
                      dan Terbuka
                    </p>

                    {/* Description */}
                    <p className="relative z-10 text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                      Master blockchain technology with hands-on modules, interactive learning, and real-world projects. Join our community of crypto enthusiasts.
                    </p>

                    {/* CTA Buttons */}
                    <div className="relative z-10 flex gap-4 justify-center">
                      <button className="px-8 py-4 bg-[#f4b41a] text-gray-900 rounded-lg font-semibold text-base hover:bg-[#e5a610] transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                        Start Learning
                        <Icons.ArrowRight className="h-4 w-4" />
                      </button>
                      <button className="px-8 py-4 border border-[#f4b41a]/30 text-white rounded-lg font-semibold text-base hover:bg-[#f4b41a]/10 transition-all flex items-center gap-2">
                        <Icons.Play className="h-4 w-4" />
                        Watch Demo
                      </button>
                    </div>

                    {/* Features Grid */}
                    <div className="relative z-10 grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
                      {[
                        { icon: '📚', label: 'Video Courses', desc: 'Step-by-step learning' },
                        { icon: '📄', label: 'Research Papers', desc: 'Deep technical insights' },
                        { icon: '💻', label: 'Hands-on Labs', desc: 'Interactive practice' },
                      ].map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl mb-3">{feature.icon}</div>
                          <div className="text-sm font-medium text-white mb-1">
                            {feature.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {feature.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features Section - Based on actual Features component */}
                  <div className="px-8 py-16 bg-gradient-to-b from-transparent to-gray-950">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          Why Join <span className="text-[#f4b41a]">Crypto Path</span>?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                          Everything you need to master crypto trading and become part of a thriving community
                        </p>
                      </div>

                      <div className="grid grid-cols-4 gap-6">
                        {[
                          { icon: Icons.TrendingUp, title: 'Algo Trading Mastery', desc: 'Belajar cara pakai algoritma untuk trading crypto dengan strategi yang terbukti efektif' },
                          { icon: Icons.Users, title: 'Active Community', desc: 'Connect with traders, share insights, participate in live events and grow together' },
                          { icon: Icons.Video, title: 'Premium Content', desc: 'Access exclusive video courses and research papers from industry experts' },
                          { icon: Icons.Radio, title: 'Live Sessions', desc: 'Weekly webinars and real-time market analysis with experienced traders' }
                        ].map((feature, i) => (
                          <div key={i} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-[#f4b41a]/50 hover:bg-gray-900/50 transition-all group">
                            <div className="mb-4 p-3 bg-[#f4b41a]/10 rounded-lg inline-block group-hover:bg-[#f4b41a]/20 transition-colors">
                              <feature.icon className="w-7 h-7 text-[#f4b41a]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient fade */}
                  <div className="h-32 bg-gradient-to-t from-gray-950 to-transparent" />
                </div>
              </BrowserMockup>
              <div className="text-center">
                <Button asChild variant="outline">
                  <a
                    href="https://crypto-path-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </InteractivePrototype>
      ),
      'custom-software': (
        <InteractivePrototype
          title="Ecommerce Admin Dashboard"
          description="Comprehensive admin panel for managing ecommerce operations"
          tags={['React', 'TypeScript', 'Dashboard']}
        >
          <BrowserMockup url="admin.bitgrow-demo.com/dashboard" theme="light">
            <div className="flex h-full bg-gray-50">
              {/* Sidebar */}
              <div className="w-56 bg-secondary text-white p-4 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-primary rounded flex items-center justify-center font-bold">B</div>
                  <span className="font-bold">BitGrow Admin</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { icon: Icons.LayoutDashboard, label: 'Dashboard', active: true },
                    { icon: Icons.Package, label: 'Products' },
                    { icon: Icons.ShoppingCart, label: 'Orders' },
                    { icon: Icons.Users, label: 'Customers' },
                    { icon: Icons.BarChart3, label: 'Analytics' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${item.active ? 'bg-primary' : 'hover:bg-secondary/80'}`}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Dashboard Overview</h2>
                    <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2">
                      <Icons.Calendar className="h-4 w-4" />
                      Last 30 days
                    </button>
                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Icons.User className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Total Revenue', value: 'Rp 45.2M', change: '+12.5%', icon: Icons.TrendingUp, color: 'text-green-600' },
                    { label: 'Orders', value: '1,234', change: '+8.2%', icon: Icons.ShoppingCart, color: 'text-blue-600' },
                    { label: 'Customers', value: '3,456', change: '+15.3%', icon: Icons.Users, color: 'text-purple-600' },
                    { label: 'Conversion', value: '3.24%', change: '-2.1%', icon: Icons.Target, color: 'text-orange-600' }
                  ].map((metric, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-gray-600">{metric.label}</p>
                        <metric.icon className={`h-5 w-5 ${metric.color}`} />
                      </div>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className={`text-xs mt-1 ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change} from last month
                      </p>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Sales Chart */}
                  <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Revenue Analytics</h3>
                      <select className="text-sm border rounded px-2 py-1">
                        <option>Monthly</option>
                        <option>Weekly</option>
                      </select>
                    </div>
                    <div className="h-48 flex items-end gap-3">
                      {[65, 78, 52, 89, 94, 76, 88, 91, 82, 95, 87, 92].map((height, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t relative group">
                          <div className="absolute bottom-0 w-full bg-primary rounded-t transition-all" style={{ height: `${height}%` }}>
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                              ${height}k
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Apr</span>
                      <span>Jul</span>
                      <span>Oct</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h3 className="font-semibold mb-4">Top Products</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Batik Premium', sales: 234, color: 'bg-blue-500' },
                        { name: 'Tas Kulit', sales: 189, color: 'bg-green-500' },
                        { name: 'Sepatu Boots', sales: 156, color: 'bg-purple-500' }
                      ].map((product, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="font-medium">{product.name}</span>
                            <span className="text-gray-500">{product.sales}</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${product.color}`} style={{ width: `${(product.sales / 234) * 100}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Orders Table */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b">
                    <h3 className="font-semibold">Recent Orders</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-gray-600">Order ID</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-600">Customer</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-600">Amount</th>
                          <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: '#ORD-001', customer: 'Ahmad Hidayat', product: 'Batik Premium', amount: 'Rp 249.000', status: 'Completed' },
                          { id: '#ORD-002', customer: 'Siti Nurhaliza', product: 'Tas Kulit', amount: 'Rp 189.000', status: 'Processing' },
                          { id: '#ORD-003', customer: 'Budi Santoso', product: 'Sepatu Boots', amount: 'Rp 350.000', status: 'Completed' }
                        ].map((order, i) => (
                          <tr key={i} className="border-b hover:bg-gray-50">
                            <td className="p-4 text-sm font-medium">{order.id}</td>
                            <td className="p-4 text-sm">{order.customer}</td>
                            <td className="p-4 text-sm">{order.product}</td>
                            <td className="p-4 text-sm font-semibold text-primary">{order.amount}</td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </BrowserMockup>
        </InteractivePrototype>
      ),
      'design': (
        <InteractivePrototype
          title="Design Portfolio"
          description="UI/UX designs from our portfolio"
          tags={['Figma', 'UI/UX', 'Design System']}
        >
          <div className="space-y-8">
            {/* KCI Brand Identity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">KCI Brand Identity</CardTitle>
                <CardDescription>Complete brand redesign with modern Indonesian-Chinese cultural elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Color Palette */}
                <div>
                  <p className="text-sm font-semibold mb-3">Color Palette</p>
                  <div className="grid grid-cols-5 gap-3">
                    {[
                      { name: 'Ruby Red', hex: '#DC2626', desc: 'Primary' },
                      { name: 'Gold', hex: '#F59E0B', desc: 'Secondary' },
                      { name: 'Charcoal', hex: '#1F2937', desc: 'Text' },
                      { name: 'Pearl', hex: '#F3F4F6', desc: 'Background' },
                      { name: 'Jade', hex: '#10B981', desc: 'Accent' }
                    ].map((color) => (
                      <div key={color.name}>
                        <div className="h-20 rounded-lg shadow-sm border" style={{ backgroundColor: color.hex }} />
                        <p className="text-xs font-medium mt-2">{color.name}</p>
                        <p className="text-xs text-gray-500">{color.hex}</p>
                        <p className="text-xs text-gray-400">{color.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <p className="text-sm font-semibold mb-3">Typography</p>
                  <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
                    <p style={{ fontSize: '32px', fontWeight: 700 }}>Poppins Bold</p>
                    <p style={{ fontSize: '24px', fontWeight: 600 }}>Inter Semibold</p>
                    <p style={{ fontSize: '16px', fontWeight: 400 }}>Inter Regular - Body text for comfortable reading</p>
                  </div>
                </div>

                {/* Logo Variations */}
                <div>
                  <p className="text-sm font-semibold mb-3">Logo Variations</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-6 bg-white border rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-16 w-16 mx-auto mb-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full" />
                        <p className="font-bold text-lg">KCI</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-900 border rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="h-16 w-16 mx-auto mb-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full" />
                        <p className="font-bold text-lg">KCI</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-red-500 to-yellow-500 border rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="h-16 w-16 mx-auto mb-2 bg-white rounded-full" />
                        <p className="font-bold text-lg">KCI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Crypto Path UI/UX */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Crypto Path UI/UX Design</CardTitle>
                <CardDescription>Modern learning platform with focus on user experience and accessibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Color System */}
                <div>
                  <p className="text-sm font-semibold mb-3">Color System</p>
                  <div className="grid grid-cols-5 gap-3">
                    {[
                      { name: 'Ocean Blue', hex: '#1E3A8A' },
                      { name: 'Cyan', hex: '#06B6D4' },
                      { name: 'Electric', hex: '#3B82F6' },
                      { name: 'Deep Navy', hex: '#0F172A' },
                      { name: 'Mint', hex: '#A7F3D0' }
                    ].map((color) => (
                      <div key={color.name}>
                        <div className="h-20 rounded-lg shadow-sm" style={{ backgroundColor: color.hex }} />
                        <p className="text-xs font-medium mt-2">{color.name}</p>
                        <p className="text-xs text-gray-500">{color.hex}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UI Components */}
                <div>
                  <p className="text-sm font-semibold mb-3">Component Library</p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Course Card */}
                    <div className="p-4 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-lg text-white">
                      <div className="h-10 w-10 bg-cyan-500 rounded-lg mb-3 flex items-center justify-center">
                        <Icons.BookOpen className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold mb-1">Bitcoin Basics</h4>
                      <p className="text-sm text-gray-300 mb-3">12 lessons • Beginner</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-cyan-400 rounded-full" />
                        </div>
                        <span className="text-xs">67%</span>
                      </div>
                    </div>

                    {/* Button Styles */}
                    <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                      <p className="text-xs font-semibold mb-2">Button Variants</p>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-semibold">
                        Primary Action
                      </button>
                      <button className="w-full px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg text-sm font-semibold">
                        Secondary
                      </button>
                      <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold">
                        Disabled
                      </button>
                    </div>
                  </div>
                </div>

                {/* User Flow */}
                <div>
                  <p className="text-sm font-semibold mb-3">User Flow Example</p>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg overflow-x-auto">
                    {['Landing', 'Browse', 'Course Detail', 'Enroll', 'Learn'].map((step, i) => (
                      <React.Fragment key={step}>
                        <div className="flex-shrink-0 text-center">
                          <div className="h-12 w-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold mb-2">
                            {i + 1}
                          </div>
                          <p className="text-xs font-medium whitespace-nowrap">{step}</p>
                        </div>
                        {i < 4 && <Icons.ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </InteractivePrototype>
      ),
      'ai-services': (
        <InteractivePrototype
          title="AI Business Solutions"
          description="Intelligent automation and chatbot interfaces"
          tags={['AI', 'Chatbot', 'Automation']}
        >
          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
              <TabsTrigger value="automation">Automation Dashboard</TabsTrigger>
            </TabsList>
            <TabsContent value="chatbot">
              <PhoneMockup className="mx-auto">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b bg-primary text-white">
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Always here to help</p>
                  </div>
                  <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Hello! How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">I need help with my order</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-xs">
                        <p className="text-sm">I'd be happy to help! Please provide your order number.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 bg-muted rounded" />
                      <div className="h-10 w-10 bg-primary rounded" />
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </TabsContent>
            <TabsContent value="automation">
              <BrowserMockup url="automation.example.com">
                <div className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold">Automation Workflows</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {['Active Workflows', 'Tasks Completed', 'Time Saved', 'Success Rate'].map((label) => (
                      <div key={label} className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">{label}</p>
                        <p className="text-2xl font-bold mt-2">
                          {label === 'Success Rate' ? '99%' : label === 'Time Saved' ? '240h' : '12'}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold">Recent Workflows</p>
                    {['Email Automation', 'Data Processing', 'Report Generation'].map((workflow) => (
                      <div key={workflow} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <Icons.Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{workflow}</p>
                            <p className="text-sm text-muted-foreground">Running</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserMockup>
            </TabsContent>
          </Tabs>
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
