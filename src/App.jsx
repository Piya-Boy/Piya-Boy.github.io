import { useEffect } from 'react'
import AOS from 'aos'
import Header from './components/layout/Header'
import Preloader from './components/layout/Preloader'
import BackToTop from './components/layout/BackToTop'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Resume from './components/sections/Resume'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import { scrollToHash } from './hooks/useSmoothScroll'

export default function App() {
  useEffect(() => {
    const initAos = () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })

      if (window.location.hash) {
        scrollToHash(window.location.hash)
      }
    }

    if (document.readyState === 'complete') {
      initAos()
    } else {
      window.addEventListener('load', initAos)
      return () => window.removeEventListener('load', initAos)
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />

      <main id="main">
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Preloader />
      <BackToTop />
    </>
  )
}
