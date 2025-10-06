import React from 'react'
import { HeroSection } from './components/HeroSection'
import Clients from './components/Clients'
import About from './components/About'
import Services from './components/Services'
import Plans from './components/Plans'
import TestimonialsAnimated from './components/TestimonialsAnimated'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <Clients />
      <About />
      <Services />
      <TestimonialsAnimated />
      <Plans />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
