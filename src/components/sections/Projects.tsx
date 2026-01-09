import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-14 md:mb-16 gap-4">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Recent Project</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent pb-3 leading-tight inline-block">My Portfolio</h2>
          </div>
          <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto hidden sm:flex group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit My GitHub
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 animate-float flex flex-col"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s forwards, float 6s ease-in-out ${index * 0.5}s infinite`,
                opacity: 0,
                minHeight: '600px'
              }}
            >
              {/* Project Image/Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-emerald-500/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-20 animate-pulse" />
                <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative z-10">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-background/50 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-2">
                    {('frontendLink' in project) && (
                      <div className="flex gap-2">
                        <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button 
                            size="sm" 
                            className="w-full group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                            Frontend
                          </Button>
                        </a>
                        <div className="flex-1">
                          <Button 
                            size="sm" 
                            disabled
                            className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                          >
                            Backend (Private)
                          </Button>
                        </div>
                      </div>
                    )}
                    {!('frontendLink' in project) && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button 
                          size="sm" 
                          className="w-full group bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:via-teal-500 hover:to-emerald-500 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                          View on GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
