import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(' ')[0].toUpperCase()}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-cyan-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-cyan-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-cyan-500 hover:bg-muted rounded-md"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-600 hover:bg-muted rounded-md"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
