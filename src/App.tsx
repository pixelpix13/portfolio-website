import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact, Footer } from '@/components/sections/Contact'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { GradientBackground } from '@/components/GradientBackground'
import './App.css'

function App() {
  return (
    <div className="min-h-screen relative">
      <GradientBackground />
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
