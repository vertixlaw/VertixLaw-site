import React, { useState, useEffect } from 'react'
import { FileText, Users, Shield, DollarSign, Briefcase, Tag, ArrowRight, List, ChevronDown, ChevronUp } from 'react-feather'

const Services = () => {
  console.log('Services component loaded')
  const [showAllServices, setShowAllServices] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const services = [
    {
      icon: FileText,
      title: "Contrato Social",
      description: "Elaboração e adequação do contrato social para sua startup, considerando todas as particularidades do negócio."
    },
    {
      icon: Users,
      title: "Acordo de Sócios",
      description: "Proteja a relação entre os sócios com cláusulas de vesting, direitos e deveres, e mecanismos de saída."
    },
    {
      icon: FileText,
      title: "Memorando de Entendimentos (MOU)",
      description: "Documento que estabelece os termos básicos de uma negociação antes da formalização de contratos definitivos."
    },
    {
      icon: DollarSign,
      title: "Mútuo Conversível",
      description: "Instrumentos jurídicos para captação de recursos com investidores, preparando sua startup para rodadas futuras."
    },
    {
      icon: Briefcase,
      title: "Contrato de Trabalho CLT/PJ",
      description: "Modelos de contrato CLT e PJ adequados para startups, com cláusulas específicas para proteção do conhecimento."
    },
    {
      icon: Shield,
      title: "NDA - Termo de Confidencialidade",
      description: "Proteção de informações confidenciais e segredos comerciais em negociações e parcerias estratégicas."
    },
    {
      icon: Tag,
      title: "Gestão e Atualização de Captable",
      description: "Acompanhamento e atualização da tabela de acionistas, incluindo diluições e novos investimentos."
    },
    {
      icon: Tag,
      title: "Registro de Marca",
      description: "Proteção da sua marca no INPI, com busca de anterioridade e acompanhamento de todo o processo."
    },
    {
      icon: FileText,
      title: "Contrato de Transferência de Tecnologia",
      description: "Documentos para transferência de tecnologia, know-how e propriedade intelectual entre empresas."
    },
    {
      icon: FileText,
      title: "Termos de Uso",
      description: "Elaboração de termos de uso para plataformas digitais, aplicativos e serviços online em conformidade com a LGPD."
    },
    {
      icon: FileText,
      title: "Contrato de Processamento de Dados",
      description: "Documentos específicos para processamento de dados pessoais em conformidade com a LGPD."
    },
    {
      icon: Shield,
      title: "Política de Privacidade (LGPD)",
      description: "Políticas de privacidade adaptadas à sua operação e em total conformidade com a Lei Geral de Proteção de Dados."
    },
    {
      icon: Users,
      title: "Contrato de Joint Venture",
      description: "Estruturação de parcerias estratégicas e joint ventures para expansão de negócios e novos mercados."
    },
    {
      icon: Users,
      title: "Parceria Jurídica",
      description: "Acompanhamento jurídico contínuo para startups, oferecendo suporte legal preventivo e consultivo."
    },
    {
      icon: FileText,
      title: "Notificação Judicial",
      description: "Elaboração e envio de notificações extrajudiciais, cartas de cobrança e comunicações formais."
    },
    {
      icon: FileText,
      title: "Compra e Venda de Quotas",
      description: "Estruturação de operações de compra e venda de participações societárias e transferência de quotas."
    },
    {
      icon: FileText,
      title: "Negociações Contratuais",
      description: "Assessoria em negociações complexas, revisão de contratos e estruturação de acordos comerciais."
    },
    {
      icon: Shield,
      title: "Assessoria Jurídica Geral",
      description: "Suporte jurídico completo para startups, incluindo consultoria preventiva e resolução de conflitos."
    }
  ]

  // Mostrar apenas os primeiros 8 serviços inicialmente
  const displayedServices = showAllServices ? services : services.slice(0, 8)

  const handleToggleServices = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setShowAllServices(!showAllServices)
      setTimeout(() => {
        setIsAnimating(false)
      }, 100)
    }, 200)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Inteligência Jurídica <span className="gradient-text">inovadora</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos tudo o que sua startup precisa para operar com segurança jurídica em todas as fases
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 services-grid transition-all duration-500 ease-in-out ${
          isAnimating ? (showAllServices ? 'collapsing' : 'expanding') : ''
        }`}>
          {displayedServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={`${service.title}-${index}`} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 service-card transition-all duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                  animationFillMode: 'both'
                }}
              >
                <div className="p-5">
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-lg bg-gray-100 flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-gray-700" />
                    </div>
                    <h3 className="ml-3 text-base font-semibold text-gray-900 leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                  <div 
                    onClick={scrollToContact}
                    className="flex items-center text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer group"
                  >
                    Saiba mais
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={handleToggleServices}
            disabled={isAnimating}
            className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:shadow-md transition-all duration-300 inline-flex items-center ${
              isAnimating ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {showAllServices ? (
              <>
                <ChevronUp className={`mr-2 transition-transform duration-300 ${isAnimating ? 'animate-pulse' : ''}`} />
                Ver menos serviços
              </>
            ) : (
              <>
                <List className={`mr-2 transition-transform duration-300 ${isAnimating ? 'animate-pulse' : ''}`} />
                Ver todos os serviços
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
