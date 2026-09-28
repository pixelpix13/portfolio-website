import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '@/components/motion/primitives';
import { portfolioData } from '@/data/portfolio-data';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#portfolio' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}>

          {/* Logo */}
          <Magnetic strength={0.5}>
            <a
              href="#home"
              className="text-lg sm:text-xl font-black tracking-tight text-foreground"
            >
              {portfolioData.personal.name.split(' ')[0].toUpperCase()}
              <span className="text-primary">.</span>
            </a>
          </Magnetic>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Magnetic>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="rounded-full border border-primary/70 px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Contact
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-border/60 overflow-hidden bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2.5 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left py-2.5 text-base font-semibold text-primary"
              >
                Contact →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
