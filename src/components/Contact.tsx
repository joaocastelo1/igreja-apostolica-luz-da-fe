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
                <p className="text-slate-600 text-lg leading-relaxed">
                  Rua Tomé de Souza, 897-A<br />
                  Bairro São Sebastião<br />
                  Codó - MA
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 shadow-lg">
                <MessageCircle size={30} />
              </div>
              <div>
                <h4 className="font-bold text-navy uppercase tracking-wider text-sm mb-2">WhatsApp</h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  (99) 9259-3769
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] border-4 border-white">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Tom%C3%A9%20de%20Souza,%20897-A,%20Bairro%20S%C3%A3o%20Sebasti%C3%A3o,%20Cod%C3%B3-MA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
