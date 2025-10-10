import React, { useState } from 'react'
import { ContactCard } from './ui/contact-card'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    plano: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateWhatsAppMessage = () => {
    const { nome, email, telefone, plano, mensagem } = formData
    
    const planos = {
      'start': '🚀 Start - R$ 279/mês',
      'growth': '📈 Growth - R$ 679/mês', 
      'scale': '🏢 Scale - R$ 1.479/mês',
      'custom': '⚙️ Plano personalizado'
    }

    const planoText = planos[plano] || 'Não especificado'

    return `🏛️ *Olá, Vertix Law!*

Sou *${nome}* e tenho interesse nos serviços jurídicos da Vertix Law.

📋 *Informações do Lead:*
• 👤 Nome: ${nome}
• 📧 Email: ${email}
• 📱 Telefone: ${telefone}
• 💼 Plano de interesse: ${planoText}

💬 *Mensagem:*
${mensagem}

✨ *Pronto para simplificar o jurídico da minha startup!*

_Enviado através do site vertixlaw.com_`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone) {
      alert('Por favor, preencha pelo menos Nome, Email e Telefone.')
      return
    }

    const message = generateWhatsAppMessage()
    const whatsappNumber = '5592992593777' // Número da Vertix Law
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }
  return (
    <section id="contato" className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-6xl">
            <ContactCard
              title="Fale Conosco"
              description="O respaldo Jurídico que a sua inovação merece"
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'contato@vertixlaw.com',
              },
              {
                icon: PhoneIcon,
                label: 'Telefone',
                value: '+55 (92) 99259-3777',
              },
              {
                icon: MapPinIcon,
                label: 'Endereço',
                value: 'Manaus, AM - Brasil',
                className: 'col-span-2',
              }
            ]}
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">Nome</Label>
                <Input 
                  type="text" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo" 
                  className="h-10" 
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">Email</Label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com" 
                  className="h-10" 
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">Telefone</Label>
                <Input 
                  type="phone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(92) 99259-3777" 
                  className="h-10" 
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">Plano de Interesse</Label>
                <select 
                  name="plano"
                  value={formData.plano}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="custom">Único - R$ 189/Consulta</option>
                  <option value="start">Start - R$ 279/mês</option>
                  <option value="growth">Growth - R$ 679/mês</option>
                  <option value="scale">Scale - R$ 1.479/mês</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">Mensagem</Label>
                <Textarea 
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Como podemos ajudá-lo?" 
                  className="min-h-20" 
                />
              </div>
              <Button className="w-full h-10 text-sm font-medium" type="submit">
                Enviar
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  )
}

export default Contact