import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact, Footer } from '@/components/sections/Contact'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { GradientBackground } from '@/components/GradientBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Marquee } from '@/components/motion/primitives'
import './App.css'

const marqueeItems = [
  '.NET',
  'ASP.NET Core',
  'React',
  'TypeScript',
  'AWS',
  'Azure AD',
  'Clean Architecture',
  'Full-Stack',
  'Cloud',
]

const marqueeItemsB = [
  'Scalable',
  'Secure',
  'Performant',
  'Impactful',
  'Modern',
  'Open to Work',
  'Houston TX',
]

function App() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <CustomCursor />
      <GradientBackground />
      <AnimatedBackground />
      <Navigation />
      <Hero />

      {/* Tech marquee band */}
      <div className="relative border-y border-border/50 bg-card py-3.5 overflow-hidden">
        <Marquee
          items={marqueeItems}
          speed={34}
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        />
      </div>

      <About />
      <Skills />

      {/* Statement marquee band */}
      <div className="relative border-y border-border/50 py-3.5 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.06) 0%, rgba(11,11,11,1) 50%, rgba(249,115,22,0.06) 100%)' }}
      >
        <Marquee
          items={marqueeItemsB}
          speed={28}
          reverse
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary/80"
        />
      </div>

      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
