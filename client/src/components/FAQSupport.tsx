import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  HelpCircle, 
  ChevronDown,
  Clock,
  Users,
  Zap
} from "lucide-react";

export default function FAQSupport() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a avaliação de pronúncia?",
      answer: "O avatar professor avalia sua pronúncia em tempo real usando inteligência artificial. Você grava sua voz, recebe feedback instantâneo e pode praticar quantas vezes quiser até acertar.",
    },
    {
      question: "Posso cancelar minha inscrição a qualquer momento?",
      answer: "Sim! Se escolher o plano mensal (R$ 89,90), pode cancelar quando quiser sem taxas. O acesso é encerrado no final do mês de pagamento.",
    },
    {
      question: "Qual é a diferença entre o plano mensal e vitalício?",
      answer: "O plano mensal (R$ 89,90) oferece acesso recorrente e pode ser cancelado. O plano vitalício (valor único) oferece acesso permanente a todos os módulos e atualizações futuras.",
    },
    {
      question: "Quanto tempo leva para completar o curso?",
      answer: "Depende do seu ritmo. Em média, alunos dedicados completam um módulo por semana. Os 20 módulos podem ser completados em 4-5 meses com estudo consistente.",
    },
    {
      question: "Preciso de um consultor para me ajudar?",
      answer: "Não é obrigatório, mas recomendamos! Um consultor pode ajudar a personalizar seu aprendizado, responder dúvidas e manter você motivado.",
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte 24/7 via chat, email e WhatsApp. Nossos consultores respondem em até 2 horas durante o horário comercial.",
    },
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat ao Vivo",
      description: "Converse com um consultor agora",
      action: "Iniciar Chat",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Envie uma mensagem no WhatsApp",
      action: "Abrir WhatsApp",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envie suas dúvidas por email",
      action: "Enviar Email",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Aprendizado Rápido",
      description: "Módulos focados e diretos ao ponto",
    },
    {
      icon: Clock,
      title: "Seu Próprio Ritmo",
      description: "Estude quando quiser, onde quiser",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Consultores prontos para ajudar",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Seção de Benefícios */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Por Que Escolher <span className="text-orange-400">WIMEX-UP</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Suporte */}
      <section className="py-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Precisa de Ajuda?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className={`${channel.bgColor} border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer`}>
                  <CardHeader>
                    <Icon className={`w-8 h-8 ${channel.color} mb-4`} />
                    <CardTitle className="text-white">{channel.title}</CardTitle>
                    <CardDescription className="text-gray-300">{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/15 transition-all"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <HelpCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-400 transition-transform ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>

                {expandedFAQ === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ainda tem dúvidas?
        </h2>
        <p className="text-white/90 mb-6 text-lg">
          Entre em contato com nosso time de consultores. Estamos aqui para ajudar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-orange-600 hover:bg-gray-100">
            Falar com Consultor
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Agendar Demonstração
          </Button>
        </div>
      </section>
    </div>
  );
}
