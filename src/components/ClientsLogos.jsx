import React from 'react'

const ClientsLogos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Startups que confiam na vertix LAW</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-lg opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsLogos
