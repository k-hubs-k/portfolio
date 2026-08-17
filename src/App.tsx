import { motion, useScroll, useSpring } from 'motion/react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { I18nProvider } from './lib/i18n'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <I18nProvider>
      <div className='relative min-h-screen overflow-x-clip bg-base text-text'>

        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-linear-to-r from-mauve via-blue to-teal"
        />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App

