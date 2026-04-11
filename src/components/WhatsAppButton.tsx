import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5599982593769?text=Olá,%20gostaria%20de%20pedir%20oração."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 gold-gradient text-white p-5 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce cursor-pointer group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-navy text-white text-xs font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-1">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
