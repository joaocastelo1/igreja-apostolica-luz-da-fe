'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandHeart, Landmark, Copy, Check, Quote, Globe, Heart } from 'lucide-react';

export default function Contribution() {
  const [copied, setCopied] = useState(false);
  const pixKey = "64305896000108"; // CNPJ para cópia limpa
  const pixDisplay = "64.305.896/0001-08";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const verses = [
    {
      text: "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa... e vede se eu não vos abrir as janelas do céu.",
      ref: "Malaquias 3:10"
    },
    {
      text: "Cada um contribua segundo propôs no seu coração; não com tristeza, pois Deus ama ao que dá com alegria.",
      ref: "2 Coríntios 9:7"
    },
    {
      text: "Honra ao Senhor com os teus bens, e com a primeira parte de todos os teus ganhos.",
      ref: "Provérbios 3:9"
    }
  ];

  return (
    <section id="contribuicao" className="py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/[0.02] -skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#D4AF37]/[0.03] skew-x-12 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Ato de Adoração
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-navy mb-8"
          >
            Semear no Reino é Colher a Glória
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed italic"
          >
            &quot;Sua semente é a chave para a manifestação da Glória de Deus em sua vida e na expansão do Reino.&quot;
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
            className="h-1.5 bg-[#D4AF37] mx-auto rounded-full mt-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Inspirational Side */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-8 border-[#D4AF37] relative group hover:shadow-2xl transition-all">
                <Quote className="absolute top-6 right-8 text-[#D4AF37]/10" size={60} />
                <p className="text-navy text-xl md:text-2xl leading-relaxed mb-6 font-serif italic text-slate-700">
                  {verses[0].text}
                </p>
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">— {verses[0].ref}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {verses.slice(1).map((v, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50">
                    <Heart className="text-[#D4AF37] mb-4" size={24} />
                    <p className="text-slate-600 text-sm italic mb-4">&quot;{v.text}&quot;</p>
                    <span className="text-navy font-bold text-[10px] uppercase tracking-widest">{v.ref}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bank Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 text-white shadow-3xl relative overflow-hidden w-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-1 shadow-inner shrink-0">
                  <img src="/img/santander-logo.png" alt="Logotipo Santander" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">Transferência Bancária</h4>
                  <p className="text-xl md:text-2xl font-serif">Banco Santander</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg border-t border-white/10 pt-6 md:pt-8">
                <div className="flex justify-between border-b border-white/5 pb-3 md:pb-4">
                  <span className="text-white/40 text-[10px] md:text-sm uppercase">Agência</span>
                  <span className="font-bold tracking-widest text-sm md:text-lg">2445</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3 md:pb-4">
                  <span className="text-white/40 text-[10px] md:text-sm uppercase">Conta Corrente</span>
                  <span className="font-bold tracking-widest text-sm md:text-lg">130009927-0</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-white/40 text-[10px] md:text-sm uppercase">Titular</span>
                  <span className="font-bold text-[10px] md:text-sm leading-tight uppercase text-right max-w-[180px] md:max-w-none">Igreja Apostólica Luz da Fé</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PIX Side (Destaque) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-8"
          >
            <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-t-8 border-[#D4AF37] flex flex-col items-center">
              <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-6 py-2 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] mb-10 border border-[#D4AF37]/20 flex items-center space-x-2">
                <Globe size={14} />
                <span>Contribuição Via PIX</span>
              </div>
              
              <div className="relative w-full max-w-[280px] aspect-square bg-slate-50 rounded-[2.5rem] p-4 border-2 border-dashed border-slate-200 mb-10 flex items-center justify-center group overflow-hidden">
                <img 
                  src="/img/pix.png" 
                  alt="QR Code PIX IALF" 
                  className="w-full h-full object-contain photo-enhance transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none"></div>
              </div>

              <div className="w-full space-y-6 text-center">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Utilize nossa Chave CNPJ</p>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 relative group">
                  <span className="text-xl md:text-2xl font-bold text-navy tracking-tight">{pixDisplay}</span>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={copyToClipboard}
                    className={`ml-4 p-3 rounded-2xl transition-all ${copied ? 'bg-green-100 text-green-600' : 'bg-navy text-white hover:bg-[#D4AF37]'}`}
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </motion.button>
                  <AnimatePresence>
                    {copied && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg"
                      >
                        Chave Copiada!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed px-6">
                  Abra o aplicativo do seu banco, escolha a opção &quot;Pagar via PIX&quot; e escaneie o código acima ou utilize a chave CNPJ.
                </p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl flex items-center space-x-6 border border-white">
              <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                <HandHeart size={28} />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cada oferta contribui para a missão da <strong className="text-navy">IALF</strong> em transformar vidas através do Evangelho. Obrigado por sua fidelidade!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
