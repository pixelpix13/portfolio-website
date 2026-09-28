import { motion } from 'framer-motion';
import { Reveal, Parallax } from '@/components/motion/primitives';
import { portfolioData } from '@/data/portfolio-data';

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { personal } = portfolioData;

  const paragraphs = [
    <>
      Hello! I'm{' '}
      <span className="text-foreground font-semibold">{personal.name.split(' ')[0]}</span>, a
      Computer Science graduate student at the University of Houston, set to graduate in May 2026.
      My journey in technology is driven by a passion for innovation and a commitment to excellence.
    </>,
    <>
      I specialize in full-stack development with expertise in .NET, ASP.NET Core, React, and cloud
      technologies. I've modernized legacy systems, built scalable applications, and implemented
      secure authentication systems serving thousands of users.
    </>,
    <>
      Beyond coding, I'm passionate about clean architecture, performance optimization, and creating
      solutions that make a real impact. I'm excited to apply my skills to real-world challenges and
      innovative projects.
    </>,
    <>
      Feel free to explore my portfolio to see some of the work I've done, and connect with me to
      discuss potential collaborations or opportunities.
    </>,
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <Reveal y={20} className="flex items-center gap-3 mb-6">
          <span className="h-[1.5px] w-6 bg-primary block" />
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Me</span>
        </Reveal>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-14 md:mb-16 leading-tight">
          <Reveal y={40}>Who I Am</Reveal>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Photo */}
          <Reveal x={-50} y={0}>
            <Parallax offset={25} className="w-full max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border/60">
                <img
                  src="./images/about.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Orange corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(225deg, rgba(249,115,22,0.25) 0%, transparent 60%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24, transparent)' }}
                />
              </div>
            </Parallax>
          </Reveal>

          {/* Text */}
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
              >
                {p}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
