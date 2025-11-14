import { AlertCircle, Flame, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function LaunchBanner() {
  const [enrolledCount, setEnrolledCount] = useState(23);
  const maxSpots = 100;
  const spotsRemaining = maxSpots - enrolledCount;
  const percentageFilled = (enrolledCount / maxSpots) * 100;

  // Simular aumento de inscrições
  useEffect(() => {
    const interval = setInterval(() => {
      setEnrolledCount(prev => {
        if (prev < maxSpots - 5) {
          return prev + Math.floor(Math.random() * 3) + 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Banner Principal */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        {/* Efeito de fogo animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Cabeçalho do Banner */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-bold text-lg">LANÇAMENTO ESPECIAL</span>
              <Flame className="w-6 h-6 text-white animate-pulse" />
            </div>

            {/* Texto Principal */}
            <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-2">
              50% de Desconto para os 100 Primeiros!
            </h2>
            <p className="text-center text-white/90 text-lg mb-6">
              Aproveite esta promoção exclusiva de lançamento. Após atingir 100 inscritos, o preço volta ao normal.
            </p>

            {/* Barra de Progresso */}
            <div className="bg-white/20 rounded-full h-3 mb-3 overflow-hidden backdrop-blur-sm">
              <div
                className="bg-white h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${percentageFilled}%` }}
              >
                {percentageFilled > 20 && (
                  <TrendingUp className="w-3 h-3 text-orange-600" />
                )}
              </div>
            </div>

            {/* Estatísticas */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              <div className="text-center">
                <p className="text-3xl font-bold">{enrolledCount}</p>
                <p className="text-sm text-white/80">Já Inscritos</p>
              </div>

              <div className="hidden sm:block w-1 h-8 bg-white/30 rounded-full"></div>

              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-200">{spotsRemaining}</p>
                <p className="text-sm text-white/80">Vagas Restantes</p>
              </div>

              <div className="hidden sm:block w-1 h-8 bg-white/30 rounded-full"></div>

              <div className="text-center">
                <p className="text-3xl font-bold">{Math.round(percentageFilled)}%</p>
                <p className="text-sm text-white/80">Completo</p>
              </div>
            </div>

            {/* Aviso de Urgência */}
            {spotsRemaining < 20 && (
              <div className="mt-6 bg-red-500/30 border border-red-300 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-200 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-100 font-semibold">Ação Rápida Necessária!</p>
                  <p className="text-red-50 text-sm">Apenas {spotsRemaining} vagas restantes com 50% de desconto.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Benefícios do Desconto */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-orange-400 font-bold text-lg">R$ 44,90</p>
              <p className="text-gray-300 text-xs">Mensal (50% OFF)</p>
            </div>
            <div>
              <p className="text-teal-400 font-bold text-lg">R$ 297</p>
              <p className="text-gray-300 text-xs">Vitalício (50% OFF)</p>
            </div>
            <div>
              <p className="text-green-400 font-bold text-lg">∞</p>
              <p className="text-gray-300 text-xs">Acesso Completo</p>
            </div>
            <div>
              <p className="text-pink-400 font-bold text-lg">24/7</p>
              <p className="text-gray-300 text-xs">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
