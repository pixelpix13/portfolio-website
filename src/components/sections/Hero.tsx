import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic, Parallax } from '@/components/motion/primitives';
import { portfolioData } from '@/data/portfolio-data';

const ease = [0.22, 1, 0.36, 1] as const;

function HeadlineLine({
  children,
  delay,
  className = '',
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    /* Extra bottom padding so descenders (g, y, p) aren't clipped by overflow-hidden */
    <span className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { personal } = portfolioData;

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 1.0 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            className="space-y-7 order-2 md:order-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              <span className="h-[1.5px] w-6 bg-primary block" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
                <HeadlineLine delay={0.25} className="text-foreground">
                  Software
                </HeadlineLine>
                <HeadlineLine delay={0.4} className="text-foreground">
                  Developer
                </HeadlineLine>
                <HeadlineLine delay={0.55} className="text-primary">
                  &amp; Engineer
                </HeadlineLine>
              </h1>
            </div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md"
            >
              Passionate about leveraging technology to build impactful solutions.
              Focused on .NET, ASP.NET Core, and Cloud — creating scalable, secure,
              and high-performance applications.
            </motion.p>

            {/* AWS Badge */}
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.3}>
                <a
                  href="https://www.credly.com/badges/532bd91b-3c71-4d26-8592-4796829c3b93/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="flex items-center gap-3 rounded-full border border-border/70 bg-card px-4 py-2 hover:border-primary/50 transition-colors duration-300">
                    <img
                      src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                      alt="AWS SAA"
                      className="h-9 w-9 rounded-full"
                    />
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-tight">AWS Certified</p>
                      <p className="text-[10px] text-muted-foreground">Solutions Architect – Associate</p>
                    </div>
                  </div>
                </a>
              </Magnetic>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              {[
                { href: personal.links.linkedin, Icon: Linkedin, label: 'LinkedIn', external: true },
                { href: personal.links.github,   Icon: Github,   label: 'GitHub',   external: true },
                { href: `mailto:${personal.email}`, Icon: Mail,  label: 'Email',    external: false },
              ].map(({ href, Icon, label, external }) => (
                <Magnetic key={label} strength={0.6}>
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
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Magnetic>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                >
                  Get in Touch
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-full border border-border/80 px-7 py-3 text-sm font-semibold text-foreground hover:border-primary/60 hover:text-primary transition-all duration-300 inline-block text-center"
                >
                  Download Resume
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <div className="flex justify-center order-1 md:order-2">
            <Parallax offset={40}>
              <motion.div
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]"
                initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease }}
              >
                {/* Orange glow ring behind photo */}
                <div className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)' }}
                />
                {/* Border + photo */}
                <div className="animate-glow relative w-full h-full rounded-full p-[3px]"
                  style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24, #f97316)' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                    <img
                      src="./images/profile.jpg"
                      alt={personal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </Parallax>
          </div>

        </div>
      </div>
    </section>
  );
}
