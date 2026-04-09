'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Building2, Users, BookOpen, HeartHandshake, Calendar, Copy, CheckCircle2 } from 'lucide-react';

export default function Contribution() {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = "64.305.896/0001-08";

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div id="contribuicao" className="relative bg-slate-50">
      
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Ofertas e Dízimos</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight max-w-5xl mx-auto">
              Contribua com Fé e Ajude a Expandir a Obra de Deus
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Sua oferta é uma semente de amor, esperança e transformação na vida de muitas pessoas.
            </p>
            <a href="#doar" className="inline-flex items-center space-x-3 gold-gradient text-white font-bold py-5 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em] text-sm">
              <Heart size={20} />
              <span>Quero Contribuir</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Faith Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Heart className="mx-auto text-[#D4AF37] mb-8" size={48} strokeWidth={1} />
          <p className="text-2xl md:text-3xl text-navy font-serif leading-relaxed mb-12">
            "Contribuir é um ato de fé, gratidão e obediência. Cada oferta entregue com amor ajuda a manter a casa do Senhor, apoiar famílias, levar esperança e transformar vidas. Deus honra o coração generoso e fiel."
          </p>
          <div className="bg-slate-50 border-l-4 border-[#D4AF37] p-8 rounded-2xl text-left shadow-sm">
            <p className="text-lg md:text-xl text-slate-700 italic font-light mb-4">
              “Cada um contribua segundo propôs no coração; não com tristeza ou por necessidade; porque Deus ama ao que dá com alegria.”
            </p>
            <p className="text-sm uppercase tracking-widest font-bold text-[#D4AF37]">— 2 Coríntios 9:7</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">Sua Contribuição Faz a Diferença</h2>
            <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Building2, title: "Manutenção da Igreja", desc: "Zelo pelo templo e infraestrutura para recebermos bem a todos." },
              { icon: Users, title: "Projetos Sociais", desc: "Ações contínuas para ajudar nossa comunidade local." },
              { icon: BookOpen, title: "Evangelismo", desc: "Expansão da mensagem de Cristo para alcançar mais lares." },
              { icon: HeartHandshake, title: "Apoio a Famílias", desc: "Assistência às famílias necessitadas da comunhão e região." },
              { icon: Calendar, title: "Eventos Comunitários", desc: "Realização de ações que promovem integração e fé." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Area */}
      <section id="doar" className="py-24 bg-navy text-white relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Como Contribuir</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Devolva seu dízimo ou faça sua oferta voluntária com segurança usando as informações abaixo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* PIX */}
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-[#D4AF37]">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
                <span>Transferência via PIX</span>
              </h3>
              
              <div className="mb-8 p-2 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Imagem do QR Code inserida pelo usuário */}
                <img src="/img/pix.png" alt="QR Code PIX IALF" className="w-full max-w-[320px] h-auto object-contain scale-110 hover:scale-125 transition-transform duration-500" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="text-slate-400 text-center text-sm p-4 border-2 border-dashed border-slate-200 rounded-xl">Por favor, salve a imagem do QR Code como pix.png na pasta public/img</div>';
                }} />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Chave PIX (CNPJ)</p>
                <p className="text-2xl font-serif tracking-wider">{pixKey}</p>
                <button 
                  onClick={handleCopyPix}
                  className="w-full mt-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-2 transition-all bg-[#D4AF37] text-white hover:bg-[#B38728] shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                >
                  {copiedPix ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Chave Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      <span>Copiar Chave PIX</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Transferência Bancária */}
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-[#D4AF37]">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
                <span>Depósito / Transferência</span>
              </h3>
              
              <div className="space-y-8 bg-black/20 p-8 rounded-3xl">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Banco</p>
                  <p className="text-xl font-serif">Santander (033)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Agência</p>
                  <p className="text-xl font-serif">2445</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Conta Corrente</p>
                  <p className="text-xl font-serif">130009927</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Titular da Conta</p>
                  <p className="text-lg font-bold">Igreja Apostólica Luz da Fé</p>
                  <p className="text-gray-400 mt-1 font-mono text-sm">CNPJ: 64.305.896/0001-08</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">Transparência e Responsabilidade</h3>
          <p className="text-slate-600 leading-relaxed">
            "Cada contribuição é administrada com responsabilidade, transparência e propósito para glorificar a Deus."
          </p>
        </div>
      </section>

    </div>
  );
}
