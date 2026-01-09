import { portfolioData } from '@/data/portfolio-data';

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-14 md:mb-16 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Photo side */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-1 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow duration-300">
                <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                  <img 
                    src="./images/about.jpg" 
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-foreground font-semibold">{personal.name.split(' ')[0]}</span>, 
                a Computer Science graduate student at the University of Houston, set to graduate in May 2026. 
                My journey in technology is driven by a passion for innovation and a commitment to excellence.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development with expertise in .NET, ASP.NET Core, React, and cloud 
                technologies. I've worked on modernizing legacy systems, building scalable applications, and 
                implementing secure authentication systems that serve thousands of users.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about clean architecture, performance optimization, and creating 
                solutions that make a real impact. I'm excited to apply my skills and knowledge to real-world 
                challenges and contribute to innovative projects.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Feel free to explore my portfolio to see some of the work I've done and connect with me to 
                discuss potential collaborations or opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
