import React from 'react'
import { TestimonialsColumn } from './ui/testimonials-columns-1'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "A Vertix Law revolucionou nossas operações jurídicas, simplificando contratos e processos. A plataforma baseada em nuvem nos mantém produtivos, mesmo remotamente.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Briana Santos",
    role: "CEO, TechStart",
  },
  {
    text: "Implementar os serviços da Vertix Law foi suave e rápido. A interface personalizável e amigável tornou o treinamento da equipe sem esforço.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Silva",
    role: "Diretor Jurídico",
  },
  {
    text: "A equipe de suporte é excepcional, nos guiando através da configuração e fornecendo assistência contínua, garantindo nossa satisfação.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Ana Costa",
    role: "Gerente de Operações",
  },
  {
    text: "A integração perfeita da Vertix Law aprimorou nossas operações de negócios e eficiência. Altamente recomendado por sua interface intuitiva.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Roberto Lima",
    role: "Fundador, InovaTech",
  },
  {
    text: "Suas funcionalidades robustas e suporte rápido transformaram nosso fluxo de trabalho, tornando-nos significativamente mais eficientes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Mariana Oliveira",
    role: "Gerente de Projetos",
  },
  {
    text: "A implementação suave superou as expectativas. Simplificou processos, melhorando o desempenho geral do negócio.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Lucas Ferreira",
    role: "Analista de Negócios",
  },
  {
    text: "Nossas funções de negócio melhoraram com um design amigável e feedback positivo dos clientes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Patricia Alves",
    role: "Diretora de Marketing",
  },
  {
    text: "Eles entregaram uma solução que superou as expectativas, entendendo nossas necessidades e aprimorando nossas operações.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Fernanda Rocha",
    role: "Gerente de Vendas",
  },
  {
    text: "Usando os serviços da Vertix Law, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho do negócio.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Diego Martins",
    role: "Gerente de E-commerce",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsAnimated = () => {
  return (
    <section className="bg-gray-50 mt-2 mb-6 relative py-20">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-blue-200 bg-blue-50 text-blue-700 py-1 px-4 rounded-lg text-sm font-medium">
              Depoimentos
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gray-900 whitespace-nowrap">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-center mt-5 text-gray-600">
            Veja o que nossos clientes têm a dizer sobre nós.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsAnimated
