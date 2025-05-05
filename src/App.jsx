import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="bg-luxury-black text-parchment">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </Router>
  )
}