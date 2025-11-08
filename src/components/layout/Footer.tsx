import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import content from '@/data/content.json';

export function Footer() {
  const { company } = content;

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container-custom py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="/assets/logo/bitgrow-logo.svg"
                alt="BitGrow Solutions"
                className="h-12 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-[15px] text-muted-foreground mb-8 max-w-sm">
              {company.tagline}
            </p>
            <div className="flex gap-6">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={company.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-[15px] text-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  All Services
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/work"
                  className="text-[15px] text-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  Work
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[15px] text-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  About
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[15px] text-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  Contact
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-[15px] text-foreground hover:text-primary transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <span className="text-[15px] text-muted-foreground">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
