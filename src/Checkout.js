import React from 'react';

export default function Checkout() {
  const handleBuy = () => {
    alert('Redirecionando para pagamento Stripe... (Simulação: R$ 197 cobrado com sucesso!)');
    // Aqui vamos integrar Stripe real depois
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Acesso Total ao WIMEX-UP</h2>
        <p className="text-5xl font-bold text-blue-600 mb-4">R$ 197</p>
        <ul className="text-left mb-6 space-y-2">
          <li>✅ 30 módulos com avatar professor</li>
          <li>✅ Chatbot 24h com correção</li>
          <li>✅ Certificado digital</li>
          <li>✅ Suporte vitalício</li>
        </ul>
        <button onClick={handleBuy} className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700">
          COMPRAR AGORA
        </button>
      </div>
    </section>
  );
}
