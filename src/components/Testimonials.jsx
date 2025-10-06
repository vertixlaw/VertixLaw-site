import React from 'react'
import { Star } from 'react-feather'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO, TechFin",
      image: "http://static.photos/people/200x200/1",
      text: "A vertix LAW nos ajudou a estruturar todos os contratos para nossa primeira rodada de investimento. O trabalho foi impecável e o investidor ficou impressionado com a organização jurídica."
    },
    {
      name: "Ana Beatriz",
      role: "Co-fundadora, EduTech",
      image: "http://static.photos/people/200x200/2",
      text: "Assinamos o Plano Growth e foi a melhor decisão. Conseguimos resolver questões trabalhistas complexas e adequar nossa operação à LGPD sem gastar fortunas com escritórios tradicionais."
    },
    {
      name: "Rodrigo Santos",
      role: "CTO, HealthApp",
      image: "http://static.photos/people/200x200/3",
      text: "O suporte jurídico da vertix foi fundamental para nossa expansão internacional. Eles entendem as necessidades das startups e trabalham com a agilidade que precisamos."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Startups que já confiaram na vertix LAW para proteger seus negócios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                  <img src={testimonial.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
