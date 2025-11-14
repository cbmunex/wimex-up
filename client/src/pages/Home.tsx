import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { ArrowRight, Globe, Mic, Users, Zap, CheckCircle2, Star, Award, Lightbulb } from "lucide-react";
import LaunchBanner from "@/components/LaunchBanner";
import RegistrationForm from "@/components/RegistrationForm";
import FAQSupport from "@/components/FAQSupport";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  if (isAuthenticated && user) {
    setLocation("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />
            <span className="text-2xl font-bold text-white">{APP_TITLE}</span>
          </div>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Launch Banner */}
      <div className="pt-20">
        <LaunchBanner />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo grande */}
            <div className="mb-8 flex justify-center">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-32 w-32 drop-shadow-lg" />
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Speak English<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                Without Fear
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Aprenda inglês prático para o dia a dia. Aeroportos, restaurantes, conversas informais e muito mais.
              <br />
              <span className="text-orange-300 font-semibold">Com um professor avatar realista que nunca dorme.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg"
                onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quero Começar <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-200 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>20 módulos completos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Avaliação de pronúncia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Professor avatar 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Por que escolher <span className="text-orange-400">WIMEX-UP?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Pronúncia em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Fale e receba feedback instantâneo do seu professor avatar. Aprenda a pronunciar corretamente desde o primeiro dia.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Inglês do Mundo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Aprenda situações práticas: aeroportos, restaurantes, hotéis, conversas do dia a dia. Inglês que você realmente usa.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Aprenda no Seu Ritmo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Sem pressa, sem professor esperando. Estude quando quiser, quantas vezes precisar. Seu próprio cronograma.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Estrutura do Curso
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Basic Level */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <CardTitle className="text-white text-2xl">Nível Básico</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200">
                  Construa uma base sólida de vocabulário e estruturas gramaticais simples.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    10 módulos completos
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Saudações e apresentações
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Rotina diária e direções
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Restaurantes e compras
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intermediate Level */}
            <Card className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <CardTitle className="text-white text-2xl">Nível Intermediário</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200">
                  Aprofunde em estruturas gramaticais e conversas mais complexas.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    10 módulos completos
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Viagens internacionais
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Aluguel de carros
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    Vida profissional
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos/Resultados */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Resultados de Nossos Alunos
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">+2.500</div>
                <p className="text-gray-300">Alunos Satisfeitos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
                <p className="text-gray-300">Avaliação Média</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">92%</div>
                <p className="text-gray-300">Taxa de Conclusão</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <RegistrationForm />
        </div>
      </section>

      {/* FAQ and Support */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <FAQSupport />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para falar inglês com confiança?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comece agora e tenha acesso a todos os 20 módulos. Sem cartão de crédito necessário até falar com nosso consultor.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-xl"
            onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
          >
            Começar Meu Aprendizado <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
                <span className="font-bold text-white">{APP_TITLE}</span>
              </div>
              <p className="text-gray-400 text-sm">
                Aprenda inglês prático para o mundo real.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2024 {APP_TITLE}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
