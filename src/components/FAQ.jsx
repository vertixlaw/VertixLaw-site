import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqs = [
    {
      question: "Como funciona a assinatura dos planos?",
      answer: "Você pode assinar qualquer um de nossos planos diretamente pelo site, com pagamento mensal recorrente. Não exigimos fidelidade e você pode cancelar a qualquer momento. Após a assinatura, nosso time entrará em contato para iniciar o atendimento."
    },
    {
      question: "Posso mudar de plano posteriormente?",
      answer: "Sim, você pode mudar de plano a qualquer momento conforme as necessidades da sua startup evoluem. Fazemos a migração de forma simples e sem custos adicionais."
    },
    {
      question: "Qual o tempo de resposta para demandas?",
      answer: "Nos comprometemos com prazos ágeis: 24h para respostas via chat/e-mail, 48h para elaboração de contratos simples e 5 dias úteis para documentos mais complexos. Consultorias são agendadas conforme disponibilidade do cliente e do especialista."
    },
    {
      question: "Vocês atendem startups de todo o Brasil?",
      answer: "Sim, atendemos startups em todo o território nacional de forma remota. Nossos serviços são 100% digitais, com exceção de casos específicos que exijam atuação presencial (que podem ser tratados em parceria com correspondentes locais)."
    }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e planos
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <button 
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openItems[index] ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div className={`mt-4 text-gray-600 transition-all duration-200 ${
                openItems[index] ? 'block' : 'hidden'
              }`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
