import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export function Contact() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Using Web3Forms - free service, no account needed
    formData.append("access_key", "8dc4dd89-a8a6-4590-af94-fe1d8462920e");
    formData.append("subject", "New Contact Form Submission from Portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Form submission failed:', errorData);
        alert("Failed to send message. Please try emailing directly at " + personal.email);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert("Failed to send message. Please try emailing directly at " + personal.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Thank You!</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Your message has been sent successfully. I'll get back to you as soon as possible!
            </p>
            <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Contact Me</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, and opportunities. Feel free to reach out!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
          <input type="hidden" name="redirect" value="false" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone-Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123-456-7890"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message"
              rows={6}
            />
          </div>

          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full sm:w-auto px-8 sm:px-10 md:px-12 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:via-teal-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t">
          <a
            href={`mailto:${personal.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {personal.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
