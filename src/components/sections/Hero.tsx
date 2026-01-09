import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">Hey I'm {personal.name.split(' ')[0]}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Software</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Developer</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Passionate about leveraging technology to build impactful solutions. With a focus on .NET, 
              ASP.NET Core, and Cloud technologies, I'm dedicated to exploring new possibilities and 
              creating innovative applications. Let's work together to bring exciting ideas to life.
            </p>

            {/* Certification Badge */}
            <div className="py-2 sm:py-4">
              <a 
                href="https://www.credly.com/badges/532bd91b-3c71-4d26-8592-4796829c3b93/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                  alt="AWS Certified Solutions Architect - Associate"
                  className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-cyan-500 transition-colors"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-foreground hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-emerald-500/30 rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-1 shadow-2xl shadow-cyan-500/50 animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img 
                    src="/images/profile.jpg" 
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
