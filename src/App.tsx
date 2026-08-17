import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { I18nProvider } from './lib/i18n'

function App() {

  return (
    <I18nProvider>
      <div className='relative min-h-screen overflow-x-clip bg-base text-text'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
      </div>
    </I18nProvider>
  )
}

export default App

