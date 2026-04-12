'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    day: "Domingo",
    name: "Culto de Celebração",
    desc: "Celebração apostólica com louvor e palavra profética.",
    time: "18:30",
    gradient: "from-amber-100 to-amber-50"
  },
  {
    day: "Terça-feira",
    name: "Noite de Clamor",
    desc: "Oração fervorosa por curas, milagres e libertação.",
    time: "19:00",
    gradient: "from-blue-100 to-blue-50"
  },
  {
    day: "Quinta-feira",
    name: "Ensino da Palavra",
    desc: "Aprofundamento bíblico e discipulado para toda a família.",
    time: "19:00",
    gradient: "from-purple-100 to-purple-50"
  }
];

const scheduleSlides = [
  { url: "/img/horarios_do_culto.jpg", alt: "Horários de Culto" },
  { url: "/img/jovens2.jpeg", alt: "Rede de Jovens" }
];

const Schedule = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % scheduleSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % scheduleSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + scheduleSlides.length) % scheduleSlides.length);

  return (
    <section id="cultos" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Programe-se</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Agenda de Cultos</h2>
          <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Animated Carousel */}
        <div className="max-w-4xl mx-auto mb-16 relative group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Blurred Background (fills the container) */}
                <img 
                  src={scheduleSlides[current].url} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110" 
                />
                
                {/* Main Image (Centered and Proportional) */}
                <motion.img 
                  src={scheduleSlides[current].url} 
                  alt={scheduleSlides[current].alt} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full h-full object-contain photo-enhance" 
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full text-navy hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full text-navy hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-navy/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest border border-white/10 uppercase">
                {current + 1} / {scheduleSlides.length}
              </span>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {scheduleSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-[#D4AF37] w-8' : 'bg-navy/10 w-3'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-navy rounded-2xl text-white group-hover:bg-[#D4AF37] transition-colors duration-500">
                  <Calendar size={28} />
                </div>
                <div className="flex items-center space-x-2 text-navy font-bold">
                  <Clock size={18} className="text-[#D4AF37]" />
                  <span>{event.time}</span>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-[#D4AF37] transition-colors">
                {event.day}
              </h3>
              <h4 className="text-xl font-bold text-navy/80 mb-4">{event.name}</h4>
              <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">
                {event.desc}
              </p>

              <a 
                href="#contato" 
                className="inline-flex items-center text-navy font-bold text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors group/btn"
              >
                <span>Saiba mais</span>
                <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
