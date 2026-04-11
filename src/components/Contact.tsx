'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Fale Conosco</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Pedido de Oração & Contato</h2>
          <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif text-navy mb-8">Envie seu pedido</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-500 tracking-widest mb-2 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Como você se chama?" 
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-500 tracking-widest mb-2 ml-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(99) 99999-9999" 
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-slate-500 tracking-widest mb-2 ml-1">Mensagem ou Pedido</label>
                  <textarea 
                    rows={5} 
                    placeholder="Escreva aqui seu pedido de oração ou dúvida..." 
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-white border-2 border-slate-200 text-black font-bold py-5 rounded-2xl uppercase tracking-[0.2em] text-sm shadow-md hover:bg-[#B38728] hover:text-white hover:border-transparent active:scale-95 transition-all flex items-center justify-center space-x-3 group">
                  <Send size={18} className="group-hover:text-white transition-colors" />
                  <span>Enviar Pedido</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 shadow-lg">
                <MapPin size={30} />
              </div>
              <div>
                <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-2">Endereço</h4>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.+Tomé+de+Souza,+897+-+A+-+Bairro+São+Sebastião,+Codó+-+MA,+65400-000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 text-lg leading-relaxed hover:text-[#D4AF37] transition-colors block"
                >
                  R. Tomé de Souza, 897 - A<br />
                  Bairro São Sebastião<br />
                  Codó - MA, 65400-000
                </a>
              </div>
            </div>

            {/* ... middle code ... */}

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 shadow-lg">
                <MessageCircle size={30} />
              </div>
              <div>
                <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-2">WhatsApp</h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  (99) 98259-3769
                </p>
              </div>
            </div>

            {/* Nova Imagem Visão */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group mt-8"
            >
              <img 
                src="/img/visao.jpeg" 
                alt="Nossa Visão" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-serif italic text-xl">IALF - Uma visão de Reino</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
