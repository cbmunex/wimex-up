import React from 'react';
import modules from './data/modules.json';

export default function Modules() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 data-aos="fade-up" className="text-6xl md:text-8xl font-black text-white mb-20">
          30 Módulos Que Mudam Sua Vida
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {modules.map((m, i) => (
            <div
              key={m.id}
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
              className="group transform transition-all duration-700 hover:-translate-y-8 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden border border-gray-700 hover:border-emerald-500 transition">
                <div className={`h-4 ${m.level === 'Básico' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : m.level === 'Médio' ? 'from-yellow-500 to-orange-600' : 'from-purple-600 to-pink-600'}`}></div>
                <div className="p-10 text-white">
                  <span className={`inline-block px-6 py-3 rounded-full text-lg font-bold mb-6 ${m.level === 'Básico' ? 'bg-cyan-600' : m.level === 'Médio' ? 'bg-orange-600' : 'bg-purple-600'}`}>
                    {m.level}
                  </span>
                  <h3 className="text-3xl font-black mb-4">{m.title}</h3>
                  <audio controls className="w-full mt-8 rounded-xl">
                    <source src={m.videoUrl} />
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}