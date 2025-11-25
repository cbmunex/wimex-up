import React from 'react';

function App() {
  return (
    <>
      {/* HEADER FIXO COM LOGO + NOME DO LADO */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <img src="/logo.png" alt="WiMex-UP" className="w-12 h-12 mr-3" />
          <span className="text-2xl font-black text-white tracking-wider">WiMex-UP</span>
          <div className="ml-auto hidden md:flex gap-8 text-white/80 font-medium">
            <a href="#modulos" className="hover:text-white transition">Módulos</a>
            <a href="#preco" className="hover:text-white transition">Investimento</a>
            <a href="#pre-cadastro" className="hover:text-white transition">Fale Conosco</a>
          </div>
        </div>
      </header>

      {/* HERO – EXATAMENTE IGUAL AO SEU MOCKUP FINAL */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0066FF] to-[#9D4EDD] flex items-center justify-center text-white overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-40 translate-y-40"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            WiMex-UP
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-3xl md:text-5xl font-bold mb-6">Seu Curso de Inglês Online</p>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conectando você ao mundo através de uma experiência de<br />
            aprendizado digital, flexível e eficaz
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
            <a href="#pre-cadastro" className="bg-white text-[#0066FF] font-black text-2xl py-6 px-16 rounded-full hover:scale-105 transition shadow-2xl">
              FALAR COM CONSULTOR
            </a>
            <a href="#preco" className="bg-transparent border-4 border-white text-white font-black text-2xl py-6 px-16 rounded-full hover:bg-white hover:text-[#0066FF] transition">
              VER INVESTIMENTO
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16">Por que o WiMex-UP é diferente?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-[#0066FF]/20 to-[#9D4EDD]/20 p-12 rounded-3xl border border-white/10">
              <h3 className="text-3xl font-black mb-6">Avatar IA 24h</h3>
              <p className="text-xl leading-relaxed">Professor virtual que corrige sua pronúncia em tempo real e conversa com você quando quiser</p>
            </div>
            <div className="bg-gradient-to-br from-[#9D4EDD]/20 to-[#0066FF]/20 p-12 rounded-3xl border border-white/10">
              <h3 className="text-3xl font-black mb-6">30 Módulos Práticos</h3>
              <p className="text-xl leading-relaxed">Inglês do dia a dia: viagens, trabalho, restaurantes, negociações — tudo que você realmente usa</p>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
              <h3 className="text-3xl font-black mb-6">Garantia de 7 Dias</h3>
              <p className="text-xl leading-relaxed">Teste sem risco. Não gostou em 7 dias? Devolvemos 100% do seu dinheiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16">30 Módulos em 3 Níveis</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black p-12 rounded-3xl border-t-8 border-[#0066FF]">
              <h3 className="text-3xl font-black mb-6">BÁSICO</h3>
              <p className="text-xl">Saudações • Compras • Rotinas • Viagens simples</p>
            </div>
            <div className="bg-black p-12 rounded-3xl border-t-8 border-[#9D4EDD]">
              <h3 className="text-3xl font-black mb-6">INTERMEDIÁRIO</h3>
              <p className="text-xl">Hotéis • Restaurantes • Trabalho • Transporte</p>
            </div>
            <div className="bg-black p-12 rounded-3xl border-t-8 border-[#0066FF]">
              <h3 className="text-3xl font-black mb-6">AVANÇADO</h3>
              <p className="text-xl">Negócios • Apresentações • Debates • Cultura</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREÇO */}
      <section id="preco" className="py-32 bg-gradient-to-br from-[#0066FF] to-[#9D4EDD] text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="text-3xl font-bold mb-4">ACESSO VITALÍCIO</p>
          <p className="text-8xl md:text-9xl font-black mb-6">R$ 197</p>
          <p className="text-4xl mb-8">ou 12x de R$ 19,90</p>
          <p className="text-2xl mb-12 opacity-90">Certificado digital • Suporte 24h • Atualizações grátis</p>
          <button className="bg-white text-[#0066FF] font-black text-4xl py-8 px-32 rounded-full hover:scale-110 transition shadow-2xl">
            QUERO COMEÇAR HOJE!
          </button>
        </div>
      </section>

      {/* PRÉ-CADASTRO */}
      <section id="pre-cadastro" className="py-24 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black mb-8">Fale com um consultor agora</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Nome completo" className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white text-lg" required />
            <input type="email" placeholder="E-mail" className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white text-lg" required />
            <input type="tel" placeholder="WhatsApp" className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white text-lg" required />
            <button className="w-full bg-[#0066FF] text-white font-black text-2xl py-7 rounded-2xl hover:bg-[#0055cc] transition">
              ENVIAR E RECEBER CONTATO EM 24H
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 text-center border-t border-gray-800">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="WiMex-UP" className="w-12 h-12 mr-3" />
          <span className="text-3xl font-black">WiMex-UP</span>
        </div>
        <p className="text-gray-400">© 2025 WiMex-UP – Todos os direitos reservados</p>
        <p className="text-gray-500 mt-2">contato@wimex-up.com</p>
      </footer>
    </>
  );
}

export default App;