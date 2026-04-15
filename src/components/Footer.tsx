import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 border-2 border-[#D4AF37]">
                <img src="/img/logobg.png" alt="Logo IALF" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">IALF</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Um lugar onde a Glória de Deus se manifesta em cada detalhe. Sob a liderança do Pastor Bruno Boavista Castelo Branco.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/boavista_bruno" target="_blank" className="p-2 bg-white/5 hover:bg-[#D4AF37] hover:text-white rounded-lg transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1HVxqE9R3P/" target="_blank" className="p-2 bg-white/5 hover:bg-[#D4AF37] hover:text-white rounded-lg transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@brunoboavista5252" target="_blank" className="p-2 bg-white/5 hover:bg-[#D4AF37] hover:text-white rounded-lg transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/#home" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/#sobre" className="hover:text-white transition-colors">Sobre a Igreja</Link></li>
              <li><Link href="/#lideranca" className="hover:text-white transition-colors">Nossa Liderança</Link></li>
              <li><Link href="/#midia" className="hover:text-white transition-colors">Galeria de Fotos</Link></li>
              <li><Link href="/#cultos" className="hover:text-white transition-colors">Programação</Link></li>
              <li><Link href="/#contribuicao" className="hover:text-white transition-colors">Contribuição</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Informações</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=R.+Tomé+de+Souza,+897+-+A+-+Bairro+São+Sebastião,+Codó+-+MA,+65400-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  R. Tomé de Souza, 897 - A, Bairro São Sebastião, Codó - MA, 65400-000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>(99) 98259-3769</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Prayer */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Pedido de Oração</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-xs text-gray-300 mb-4 italic">&quot;Buscai ao Senhor enquanto se pode achar.&quot;</p>
              <a 
                href="#contato" 
                className="block text-center bg-white text-black font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-widest hover:bg-[#B38728] hover:text-white hover:shadow-[0_10px_20px_rgba(179,135,40,0.3)] active:scale-95 transition-all shadow-md border border-slate-200"
              >
                Pedir Oração
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Igreja Apostólica Luz da Fé. Todos os direitos reservados.</p>
            <a
              href="https://igrejaa-ap-lf.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/40 px-3 py-1.5 rounded-full transition-all duration-300 group"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden border border-[#D4AF37]/60 shrink-0">
                <img src="/img/logobg.png" alt="Logo IALF" className="w-full h-full object-contain p-0.5" />
              </div>
              <span className="text-gray-300 group-hover:text-[#D4AF37] transition-colors text-[9px] tracking-widest">igrejaa-ap-lf.vercel.app</span>
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end space-y-2">
            <p className="flex items-center space-x-1">
              <span>Desenvolvido com</span>
              <Heart size={10} className="text-red-500 fill-red-500" />
              <span>para o Reino de Deus</span>
            </p>
            <div className="flex flex-col items-center md:items-end space-y-3 pt-2">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[9px]">Desenvolvedor</span>
              <p className="text-white font-medium text-[11px] tracking-wider uppercase">João Castelo de Sousa Ferreira</p>
              <a 
                href="https://wa.me/5586999032854" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="bg-white rounded-full p-1 leading-none">
                  <MessageCircle size={14} className="text-green-500" />
                </div>
                <span className="font-bold text-[10px] tracking-widest uppercase">(86) 99903-2854</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
