'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play, Bell } from 'lucide-react';

const YouTubeSection = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4AF37] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4AF37] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-8 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-pulse">
            <Youtube size={48} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Acompanhe no YouTube</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Se você não pode estar presente em nossos cultos físicos, junte-se a nós online. Mensagens de esperança, louvores e ministrações diretas para o seu lar.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.youtube.com/@brunoboavista5252" 
              target="_blank"
              className="group relative inline-flex items-center space-x-4 bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Play size={24} fill="white" />
              <span className="relative uppercase tracking-widest text-sm">Inscrever-se no Canal</span>
            </a>

            <div className="flex items-center space-x-4 text-white/60">
              <div className="p-3 bg-white/5 rounded-full">
                <Bell size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest">Ative as notificações</span>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50">
             <div className="p-8 border border-white/10 rounded-3xl">
                <p className="text-[#D4AF37] font-bold text-3xl mb-2 italic">Ao Vivo</p>
                <p className="text-sm text-gray-400">Domingos às 18:30</p>
             </div>
             <div className="p-8 border border-white/10 rounded-3xl">
                <p className="text-[#D4AF37] font-bold text-3xl mb-2 italic">+100</p>
                <p className="text-sm text-gray-400">Mensagens Disponíveis</p>
             </div>
             <div className="p-8 border border-white/10 rounded-3xl">
                <p className="text-[#D4AF37] font-bold text-3xl mb-2 italic">IALF</p>
                <p className="text-sm text-gray-400">Transmissão em HD</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
