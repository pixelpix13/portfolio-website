import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, Magnetic } from '@/components/motion/primitives';
import { portfolioData } from '@/data/portfolio-data';

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '8dc4dd89-a8a6-4590-af94-fe1d8462920e');
    formData.append('subject', 'New Contact Form Submission from Portfolio');
    formData.append('from_name', 'Portfolio Contact Form');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      if (res.ok) setIsSuccess(true);
      else alert('Failed to send. Please email directly at ' + personal.email);
    } catch {
      alert('Network error. Please email directly at ' + personal.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 md:py-28 px-6 md:px-8 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/50 text-primary text-2xl mb-6">✓</div>
          <h2 className="text-3xl font-black text-foreground mb-3">Message Sent!</h2>
          <p className="text-muted-foreground mb-8">I'll get back to you as soon as possible.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="rounded-full border border-border/70 px-6 py-2.5 text-sm font-semibold text-foreground hover:border-primary/60 hover:text-primary transition-all"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-8 bg-card">
      <div className="max-w-3xl mx-auto">

        {/* Section label */}
        <Reveal y={20} className="flex items-center gap-3 mb-6">
          <span className="h-[1.5px] w-6 bg-primary block" />
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Get in touch</span>
        </Reveal>

        <div className="mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight mb-4">
            <Reveal y={40}>Contact Me</Reveal>
          </h2>
          <Reveal y={20} delay={0.1}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              I'm always open to discussing new projects, creative ideas, and opportunities.
            </p>
          </Reveal>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
        >
          <input type="hidden" name="redirect" value="false" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs text-muted-foreground uppercase tracking-wider">
                First Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="firstName" name="firstName"
                placeholder="Your first name" required
                className="bg-background border-border/60 focus:border-primary/70 focus:ring-primary/20 placeholder:text-muted-foreground/40 text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs text-muted-foreground uppercase tracking-wider">
                Last Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="lastName" name="lastName"
                placeholder="Your last name" required
                className="bg-background border-border/60 focus:border-primary/70 focus:ring-primary/20 placeholder:text-muted-foreground/40 text-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email" name="email" type="email"
                placeholder="you@example.com" required
                className="bg-background border-border/60 focus:border-primary/70 focus:ring-primary/20 placeholder:text-muted-foreground/40 text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs text-muted-foreground uppercase tracking-wider">
                Phone
              </Label>
              <Input
                id="phone" name="phone" type="tel"
                placeholder="123-456-7890"
                className="bg-background border-border/60 focus:border-primary/70 focus:ring-primary/20 placeholder:text-muted-foreground/40 text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-wider">
              Message
            </Label>
            <Textarea
              id="message" name="message"
              placeholder="Tell me about your project..."
              rows={6}
              className="bg-background border-border/60 focus:border-primary/70 focus:ring-primary/20 placeholder:text-muted-foreground/40 text-foreground resize-none"
            />
          </div>

          <div className="flex justify-start pt-2">
            <Magnetic>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-primary/20"
              >
                {isSubmitting ? 'Sending…' : 'Send Message →'}
              </button>
            </Magnetic>
          </div>
        </motion.form>

        {/* Social row */}
        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/40">
          {[
            { href: `mailto:${personal.email}`, Icon: Mail, label: 'Email', external: false },
            { href: personal.links.linkedin, Icon: Linkedin, label: 'LinkedIn', external: true },
            { href: personal.links.github, Icon: Github, label: 'GitHub', external: true },
          ].map(({ href, Icon, label, external }) => (
            <Magnetic key={label} strength={0.5}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            </Magnetic>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {year} <span className="text-foreground font-semibold">{personal.name}</span>. All rights reserved.</p>
        <p>Built with React, TypeScript &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
