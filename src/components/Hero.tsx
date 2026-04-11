'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Heart, ChevronDown } from 'lucide-react';

const slides = [
  {
    image: "/img/pastor1.jpeg",
    title: "Onde a Glória de Deus se Manifesta",
    subtitle: "Um lugar de refúgio, restauração e encontros reais com o Espírito Santo.",
    leader: "Venha viver o sobrenatural de Deus com a nossa família.",
  },
  {
    image: "/img/pastor2.jpeg",
    title: "Uma Obra Firmada na Verdade",
    subtitle: "Vivendo o extraordinário de Deus através do ensino profético e adoração genuína.",
    leader: "Edificando vidas sobre a rocha inabalável da palavra.",
  },
  {
    image: "/img/pastor4.jpeg",
    title: "Liderança com Propósito",
    subtitle: "Sob a unção e transparência do Pastor Bruno Boavista Castelo Branco e sua família.",
    leader: "Apascentando o rebanho com amor, fervor e excelência.",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Even stronger overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/60 to-navy/95 z-10" />
          <motion.img
            src={slides[current].image}
            alt="Hero Background"
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 10, ease: "linear" }}
            className="h-full w-full object-cover photo-enhance"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            className="text-[#D4AF37] font-black uppercase text-[10px] sm:text-xs mb-4 block drop-shadow-lg"
          >
            Seja Bem-vindo à IALF
          </motion.span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-[#FFD700] mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {slides[current].title}
          </h1>
          
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6 rounded-full shadow-lg" />

          <p className="text-lg md:text-2xl text-slate-200 mb-6 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-3xl mx-auto leading-relaxed italic px-4">
            &quot;{slides[current].subtitle}&quot;
          </p>
          
          <p className="text-base md:text-xl text-[#FFD700]/90 mb-10 font-black drop-shadow-md uppercase tracking-[0.2em]">
            {slides[current].leader}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://www.youtube.com/@brunoboavista5252"
              target="_blank"
              className="flex items-center space-x-3 bg-white hover:bg-[#FFD700] hover:text-navy text-navy font-black py-3.5 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.4)] uppercase tracking-[0.15em] text-[9px] sm:text-xs w-full sm:w-auto justify-center group"
            >
              <Youtube size={18} className="text-red-600 group-hover:text-white transition-colors" />
              <span>Cultos ao Vivo</span>
            </a>
            <a
              href="#contato"
              className="flex items-center space-x-3 bg-navy/80 backdrop-blur-md border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-white font-black py-3.5 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_12px_30px_rgba(0,0,0,0.2)] uppercase tracking-[0.15em] text-[9px] sm:text-xs w-full sm:w-auto justify-center"
            >
              <Heart size={18} />
              <span>Pedir Oração</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30 mb-8"
        >
          <ChevronDown size={32} />
        </motion.div>
        
        {/* Progress Indicators */}
        <div className="flex space-x-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${i === current ? 'bg-[#D4AF37] w-16 shadow-[0_0_20px_rgba(212,175,55,0.8)]' : 'bg-white/20 w-8'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
