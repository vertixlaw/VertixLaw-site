import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Scale } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '30+', label: 'Casos Resolvidos', icon: Scale },
    { number: '2+', label: 'Anos de Experiência', icon: Award },
    { number: '100%', label: 'Taxa de Sucesso', icon: Target },
    { number: '30+', label: 'Clientes Satisfeitos', icon: Users },
  ];

  const values = [
    {
      title: 'Excelência Jurídica',
      description: 'Inteligência jurídica formada por profissionais especializados e experientes, comprometidos com a excelência e a qualidade no atendimento.',
      icon: Award
    },
    {
      title: 'Transparência Total',
      description: 'Mantemos nossos clientes sempre informados sobre o andamento dos processos, com comunicação clara e honesta.',
      icon: Target
    },
    {
      title: 'Compromisso Social',
      description: 'Acreditamos no acesso à justiça e trabalhamos para tornar o direito acessível a todos os segmentos da sociedade.',
      icon: Users
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="gradient-text">Vertix law</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma startup jurídica focada em resultados e comprometida com a excelência.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História e Missão
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                A Primeira Startup Jurídica do Amazonas
              </h4>
              <p>
                Nascemos com um propósito claro: trazer o Direito para o futuro da inovação amazônica.
                Somos a primeira startup jurídica do Amazonas dedicada a oferecer respaldo jurídico estratégico para startups, empreendedores e negócios de base tecnológica.
              </p>
              <p>
                Em um ecossistema cada vez mais dinâmico, onde ideias precisam de segurança para crescer, unimos conhecimento jurídico, tecnologia e mentalidade empreendedora para garantir que a inovação avance sem medo.
              </p>
              <p>
                Aqui, o jurídico não é um obstáculo, é uma vantagem competitiva.
                Apoiamos desde a estruturação da empresa e contratos com investidores até a proteção de propriedade intelectual, conformidade digital e mitigação de riscos regulatórios.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Equipe vertix LAW"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Nossa Equipe</h4>
                <p className="text-sm opacity-90">Profissionais qualificados e comprometidos</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para trabalhar conosco?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a resolver seus desafios jurídicos 
            com excelência e transparência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Fale Conosco
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
