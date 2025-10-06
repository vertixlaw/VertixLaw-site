import React from 'react'
import { Calendar, MessageSquare } from 'react-feather'

const CTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Pronto para simplificar o jurídico da sua startup?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
          Foque no crescimento do seu negócio enquanto cuidamos de toda a burocracia para você.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
            <Calendar className="mr-2" />
            Agendar Consulta Gratuita
          </button>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-all duration-300 flex items-center justify-center">
            <MessageSquare className="mr-2" />
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
