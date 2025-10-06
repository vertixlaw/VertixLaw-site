import React from 'react'
import vertixLogo from '../assets/images/vertix-logo.png'
import AnimatedContainer from './ui/animated-container'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img 
                src={vertixLogo} 
                alt="vertix law Logo" 
                className="h-8 w-8 object-contain"
              />
              <div className="ml-2 flex items-center">
                <span className="text-xl font-bold text-white">vertix law</span>
              </div>
            </div>
            <p className="mt-4 text-gray-400">
              Jurídico simplificado para startups em crescimento.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contratos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Societário</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trabalhista</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LGPD</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investimentos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Planos
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Start</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Growth</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Scale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Comparar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Personalizado</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Sobre
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Equipe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Metodologia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trabalhe Conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Parcerias</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm ml-6">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm ml-6">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm ml-6">Cookies</a>
            </div>
          </div>
          
          {/* Copyright and CNPJ */}
          <AnimatedContainer delay={0.6} className="text-center md:text-right space-y-2 mt-8">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Vertix Law. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm">
              CNPJ: 62.552.873/0001-64
            </p>
            <p className="text-gray-300 text-sm">
              Desenvolvido por{' '}
              <a 
                href="https://www.kvgroupbr.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors duration-300 font-semibold"
              >
                KV <span className="text-yellow-400 font-bold">Group</span>
              </a>
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  )
}

export default Footer
