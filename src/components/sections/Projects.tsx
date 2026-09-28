import { useState, useEffect, useRef, useCallback } from 'react';
import { Github, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Reveal, Magnetic } from '@/components/motion/primitives';
import { portfolioData } from '@/data/portfolio-data';

const ease = [0.22, 1, 0.36, 1] as const;

/* ──────────────────────────────────────────────────────────────────────────
   Image carousel used inside each featured project card
────────────────────────────────────────────────────────────────────────── */
function ImageCarousel({ images, isHovered }: { images: string[]; isHovered: boolean }) {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIdx((i) => (i + dir + images.length) % images.length);
    },
    [images.length],
  );

  // Auto-cycle while hovered
  useEffect(() => {
    if (!isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => advance(1), 1800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, advance]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0d0d0d] select-none">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease }}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </AnimatePresence>

      {/* Subtle dark gradient at bottom of image */}
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
      />

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); advance(-1); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/80 hover:text-white transition-all opacity-0 group-hover/card:opacity-100 z-10"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); advance(1); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/80 hover:text-white transition-all opacity-0 group-hover/card:opacity-100 z-10"
        aria-label="Next screenshot"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setDirection(i > idx ? 1 : -1); setIdx(i); }}
            className={`rounded-full transition-all duration-300 ${
              i === idx ? 'bg-primary w-4 h-1.5' : 'bg-white/30 w-1.5 h-1.5 hover:bg-white/60'
            }`}
            aria-label={`Screenshot ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 text-[10px] font-mono text-white/50 bg-black/40 rounded px-2 py-0.5 z-10">
        {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Thumbnail strip that reveals below the image on hover
────────────────────────────────────────────────────────────────────────── */
function ThumbnailStrip({
  images,
  activeIdx,
  onSelect,
}: {
  images: string[];
  activeIdx: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-1.5 px-4 pb-3 pt-1 overflow-x-auto scrollbar-hide">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`shrink-0 w-12 h-8 rounded overflow-hidden border transition-all duration-200 ${
            i === activeIdx ? 'border-primary' : 'border-border/40 hover:border-border'
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover object-top" draggable={false} />
        </button>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Featured project — large horizontal case-study card
────────────────────────────────────────────────────────────────────────── */
type FeaturedProject = (typeof portfolioData.featuredProjects)[number];

function FeaturedCard({ project, index }: { project: FeaturedProject; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease }}
      className="group/card relative rounded-2xl border border-border/60 bg-card overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orange top accent line */}
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] z-20"
        style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24)' }}
        initial={{ scaleX: 0, originX: isEven ? 0 : 1 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 + index * 0.1, ease }}
      />

      <div className={`grid grid-cols-1 lg:grid-cols-5 min-h-[480px] ${isEven ? '' : 'lg:grid-flow-dense'}`}>

        {/* Info panel */}
        <div className={`flex flex-col justify-between p-7 md:p-10 gap-8 lg:col-span-2 ${isEven ? '' : 'lg:col-start-4'}`}>
          <div className="space-y-5">
            {/* Number + label */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-primary tracking-widest">
                {project.number}
              </span>
              <div className="h-px flex-1 bg-border/50" />
              {project.link ? (
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Open Source
                </span>
              ) : (
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Production
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-1">
                {project.name}
              </h3>
              <p className="text-xs text-primary/80 font-medium">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <span className="text-primary mt-0.5 shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-background/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            {project.link ? (
              <Magnetic>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </a>
              </Magnetic>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 px-5 py-2.5 text-xs font-semibold text-muted-foreground">
                <ExternalLink className="w-3 h-3" />
                Internal Tool — University of Houston
              </div>
            )}
          </div>
        </div>

        {/* Image panel */}
        <div className={`relative lg:col-span-3 ${isEven ? 'lg:col-start-3' : 'lg:col-start-1 lg:row-start-1'} min-h-[300px] lg:min-h-0`}>
          {/* Clip-path reveal on scroll */}
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1, delay: 0.25 + index * 0.1, ease }}
          >
            <ImageCarousel images={project.images} isHovered={isHovered} />
          </motion.div>

          {/* Inner border */}
          <div className="absolute inset-0 border-l border-border/40 pointer-events-none lg:block hidden" />
        </div>

      </div>

      {/* Thumbnail strip — fades in when hovered */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border/40 bg-background/50 overflow-hidden"
          >
            <ThumbnailStrip
              images={project.images}
              activeIdx={activeImg}
              onSelect={setActiveImg}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Small project card — for supporting work
────────────────────────────────────────────────────────────────────────── */
function SmallCard({ project, index }: { project: (typeof portfolioData.projects)[number]; index: number }) {
  return (
    <motion.div
      className="group relative rounded-xl border border-border/60 bg-card overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.3)' }}
    >
      {/* Orange bar on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="p-6 flex flex-col flex-1">
        {/* Tech pill row */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground bg-background/40">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 leading-tight">{project.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-1.5 mb-6 flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary/70 mt-0.5 shrink-0">→</span>{h}
            </li>
          ))}
        </ul>

        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Magnetic>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-200">
              <Github className="w-3.5 h-3.5" />
              View on GitHub
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
            </span>
          </Magnetic>
        </a>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Main section
────────────────────────────────────────────────────────────────────────── */
export function Projects() {
  const { featuredProjects, projects, personal } = portfolioData;

  return (
    <section id="portfolio" className="py-20 md:py-28 px-6 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 md:mb-16 gap-6">
          <div>
            <Reveal y={20} className="flex items-center gap-3 mb-6">
              <span className="h-[1.5px] w-6 bg-primary block" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Selected Work</span>
            </Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              <Reveal y={40}>Featured</Reveal>
              <Reveal y={40} delay={0.08}>Projects</Reveal>
            </h2>
          </div>

          <Magnetic>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border/70 px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              All repos on GitHub
            </a>
          </Magnetic>
        </div>

        {/* Featured case studies */}
        <div className="space-y-6 mb-20">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <Reveal y={20} className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border/50" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold shrink-0">
            Also Built
          </span>
          <div className="h-px flex-1 bg-border/50" />
        </Reveal>

        {/* Supporting projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <SmallCard key={project.name} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
