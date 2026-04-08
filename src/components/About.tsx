'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutSlides = [
  { url: "/img/logo_1.png", title: "Nossa Identidade", isLogo: true },
  { url: "/img/banner.png", title: "Nossa Casa", isLogo: false },
  { url: "/img/visao_area_do_templo.jpeg", title: "Nossa Visão", isLogo: false }
];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % aboutSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1));

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Slideshow Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-50 border-[12px] border-white aspect-[4/3] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center p-8"
                >
                  <img 
                    src={aboutSlides[current].url} 
                    alt={aboutSlides[current].title} 
                    className={`w-full h-full ${aboutSlides[current].isLogo ? 'object-contain scale-75' : 'object-cover'} photo-enhance`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute inset-x-0 bottom-6 flex justify-center space-x-2 z-20">
                {aboutSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#D4AF37] w-8' : 'bg-navy/20 w-3'}`}
                  />
                ))}
              </div>

              {/* Arrow controls (visible on hover) */}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-navy hover:text-[#D4AF37]">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-navy hover:text-[#D4AF37]">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-10">
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Nossa Essência</span>
              <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">Um lugar de Glória e Transformação</h2>
              <div className="w-24 h-2 gold-gradient rounded-full"></div>
            </div>

            <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed font-light">
              <p className="font-medium text-navy border-l-4 border-[#D4AF37] pl-6 italic">
                Somos a Igreja Apostólica Luz da Fé (IALF), um lugar onde a Glória de Deus se manifesta em cada detalhe.
              </p>
              <p>
                Localizada na Rua Tomé de Souza, em Codó-MA, nossa igreja é guiada por princípios apostólicos, focada na restauração de vidas e no fortalecimento das famílias através da Palavra de Deus.
              </p>
              <p>
                Sob a liderança do <strong>Pastor Bruno Boavista Castelo Branco</strong>, buscamos ser um farol de esperança e fé, transformando vidas através do amor de Cristo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest">Ensino Bíblico</h4>
                  <p className="text-xs text-slate-500 mt-1">Palavra Profunda e Viva</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest">Comunhão</h4>
                  <p className="text-xs text-slate-500 mt-1">Ambiente Familiar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
