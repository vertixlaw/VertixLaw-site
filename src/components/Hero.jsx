import React, { useEffect, useRef } from 'react'
import { Calendar, Info, CheckCircle, Zap } from 'react-feather'

const Hero = () => {
  const vantaRef = useRef(null)

  useEffect(() => {
    const initVanta = async () => {
      const VANTA = (await import('vanta')).default
      const NET = VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6366f1,
        backgroundColor: 0xf8fafc,
        points: 10.00,
        maxDistance: 22.00,
        spacing: 18.00
      })
    }

    initVanta()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div id="vanta-bg" ref={vantaRef}></div>
      <div className="content-wrapper">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                O respaldo <span className="gradient-text">Jurídico</span> que a sua inovação merece
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Oferecemos soluções jurídicas ágeis e acessíveis para startups em todas as fases de crescimento. Foque no seu negócio e deixe a burocracia conosco.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:shadow-md transition-all duration-300 flex items-center">
                  <Calendar className="mr-2" />
                  Agende uma Consulta
                </button>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="bg-white text-gray-700 px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <Info className="mr-2" />
                  Conheça nossos planos
                </button>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sua startup está protegida?</h3>
                <p className="text-gray-600 mb-6">Responda nosso quiz de 2 minutos e descubra se sua startup tem riscos jurídicos ocultos.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Você tem um acordo de sócios atualizado?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Seus contratos com clientes estão adequados?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Sua startup está em conformidade com a LGPD?</p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-200 transition-all duration-300 flex items-center justify-center">
                  <Zap className="mr-2" />
                  Fazer o teste agora
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero
