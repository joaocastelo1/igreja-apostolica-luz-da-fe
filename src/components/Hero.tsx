'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Heart } from 'lucide-react';

const slides = [
  {
    image: "/img/visao_area_do_templo.jpeg",
    title: "Igreja Apostólica Luz da Fé",
    subtitle: "Um lugar onde a Glória de Deus se manifesta em cada detalhe",
    leader: "Sob a liderança do Pastor Bruno Boavista Castelo Branco",
  },
  {
    image: "/img/pastor1.jpeg",
    title: "Chamado e Vocação",
    subtitle: "Pastor Bruno Boavista Castelo Branco guiando com amor e fé",
    leader: "Uma voz profética para esta geração em Codó-MA",
  },
  {
    image: "/img/pastor2.jpeg",
    title: "Palavra e Poder",
    subtitle: "Mensagens de restauração que transformam vidas",
    leader: "Bairro São Sebastião - Venha ser abençoado",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
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
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Even stronger overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy/90 z-10" />
          <motion.img
            src={slides[current].image}
            alt="Hero Background"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full w-full object-cover photo-enhance"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Enhanced font weights and shadows for "destaque" */}
          <span className="text-[#D4AF37] font-black tracking-[0.5em] uppercase text-xs sm:text-base mb-8 block drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            Seja Bem-vindo à IALF
          </span>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-white mb-8 leading-tight drop-shadow-[0_15px_20px_rgba(0,0,0,1)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            {slides[current].title}
          </h1>
          <p className="text-2xl md:text-4xl text-gray-100 mb-8 font-medium drop-shadow-[0_5px_10px_rgba(0,0,0,1)] max-w-4xl mx-auto leading-relaxed">
            {slides[current].subtitle}
          </p>
          <p className="text-lg md:text-2xl text-[#D4AF37] mb-12 italic opacity-100 font-bold drop-shadow-[0_3px_6px_rgba(0,0,0,1)]">
            {slides[current].leader}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="https://www.youtube.com/@brunoboavista5252"
              target="_blank"
              className="flex items-center space-x-3 bg-white hover:bg-gray-100 text-navy font-black py-6 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.6)] uppercase tracking-[0.2em] text-sm w-full sm:w-auto justify-center"
            >
              <Youtube size={24} className="text-red-600" />
              <span>Assistir no YouTube</span>
            </a>
            <a
              href="#contato"
              className="flex items-center space-x-3 gold-gradient text-white font-black py-6 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(212,175,55,0.4)] uppercase tracking-[0.2em] text-sm w-full sm:w-auto justify-center"
            >
              <Heart size={24} />
              <span>Pedir Oração</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 shadow-md ${i === current ? 'bg-[#D4AF37] w-20 shadow-[0_0_15px_rgba(212,175,55,1)]' : 'bg-white/40 w-10'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
