import Cursor        from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import FloatingCode   from './components/FloatingCode'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Services       from './components/Services'
import Projects       from './components/Projects'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import Divider        from './components/Divider'
import Lenis          from 'lenis'
import { useEffect }  from 'react'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 })
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <FloatingCode />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
