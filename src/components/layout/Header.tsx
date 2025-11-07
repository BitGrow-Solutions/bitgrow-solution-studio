import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Design System', href: '/design-system' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="font-bold text-xl tracking-tight transition-colors group-hover:text-primary">
            BitGrow
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-[15px] font-medium transition-colors relative group ${
                location.pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <div className="flex flex-col gap-8 mt-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    location.pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
