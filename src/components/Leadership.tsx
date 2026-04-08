'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const familySlides = [
  { url: "/img/pastor_e_familia1.jpg", alt: "Família Pastoral IALF - Momento 1" },
  { url: "/img/pastor_e_familia2.jpg", alt: "Família Pastoral IALF - Momento 2" }
];

const Leadership = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % familySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % familySlides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? familySlides.length - 1 : prev - 1));

  return (
    <section id="lideranca" className="py-24 bg-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 min-h-[600px]">
          {/* Photos Carousel Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative min-h-[450px] lg:min-h-full"
          >
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={current}
                  src={familySlides[current].url} 
                  alt={familySlides[current].alt} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover photo-enhance" 
                />
              </AnimatePresence>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent z-10"></div>
              
              {/* Controls */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {familySlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#D4AF37] w-10' : 'bg-white/30 w-4'}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#D4AF37] hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#D4AF37] hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-10">
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Nossa Liderança</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Família Pastoral</h2>
              <div className="w-24 h-2 gold-gradient rounded-full"></div>
            </div>

            <div className="space-y-10">
              <div className="bg-white/5 p-8 rounded-[2.5rem] border-l-8 border-[#D4AF37] relative shadow-2xl backdrop-blur-sm">
                <p className="text-gray-100 text-xl md:text-2xl leading-relaxed italic font-light">
                  Eu e a minha casa serviremos ao Senhor. (Josué 24:15) — Um lar edificado na rocha é a base para uma vida de vitórias e comunhão plena com Deus.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-serif text-2xl font-bold">PB</span>
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] font-bold text-lg leading-none mb-2 tracking-wide uppercase">Pr. Bruno Boavista</h4>
                    <p className="text-gray-400 text-sm">Liderança Apostólica e Visão</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
                  <div className="w-16 h-16 bg-navy-light rounded-2xl flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-serif text-2xl font-bold">MA</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-none mb-2 tracking-wide uppercase">Miss. Andreia</h4>
                    <p className="text-gray-400 text-sm">Pastoreio e Aconselhamento</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-serif text-2xl font-bold">RC</span>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-bold text-lg leading-none mb-2 tracking-wide uppercase">Rodrigo Castelo</h4>
                    <p className="text-gray-500 text-sm">Juventude e Futuro</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
