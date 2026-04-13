'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/#home' },
    { name: 'A Igreja', href: '/#sobre' },
    { name: 'Liderança', href: '/#lideranca' },
    { name: 'Mídia', href: '/#midia' },
    { name: 'Cultos', href: '/#cultos' },
    { name: 'Contribuição', href: '/#contribuicao' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#060B1A] backdrop-blur-2xl border-b border-[#D4AF37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-[#060B1A]/90 via-[#060B1A]/40 to-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 cursor-pointer">
          <div className="w-14 sm:w-20 h-14 sm:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] group transition-transform hover:scale-110">
            <img src="/img/logo_1.png" alt="IALF Logo" className="w-full h-full object-contain p-1 sm:p-1.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl sm:text-3xl leading-none text-white tracking-tight drop-shadow-[0_4px_6px_rgba(0,0,0,1)] uppercase">Luz da Fé</span>
            <span className="text-[11px] sm:text-sm text-yellow-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Igreja</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center ml-16 space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black text-white hover:text-[#D4AF37] transition-all uppercase tracking-[0.25em] drop-shadow-[0_4px_8px_rgba(0,0,0,1)] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D4AF37] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center space-x-6 border-l-2 border-white/20 pl-8 ml-4">
            <a href="https://www.instagram.com/boavista_bruno" target="_blank" className="text-white hover:text-[#D4AF37] transition-all hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/share/1HVxqE9R3P/" target="_blank" className="text-white hover:text-[#D4AF37] transition-all hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"><Facebook size={20} /></a>
            <a href="https://www.youtube.com/@brunoboavista5252" target="_blank" className="text-white hover:text-[#D4AF37] transition-all hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#D4AF37] transition-all p-3 bg-navy/40 rounded-xl backdrop-blur-md border border-white/20 shadow-xl"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#060B1A] z-40 lg:hidden flex flex-col items-center justify-center space-y-10"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="w-28 sm:w-40 h-28 sm:h-40 bg-white rounded-full mb-6 sm:mb-10 p-4 sm:p-6 shadow-[0_0_50px_rgba(212,175,55,0.3)] border-4 border-[#D4AF37] block cursor-pointer transition-transform hover:scale-105">
              <img src="/img/logo_1.png" alt="IALF Logo" className="w-full h-full object-contain" />
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl sm:text-3xl md:text-4xl font-serif font-black text-white hover:text-[#D4AF37] transition-all uppercase tracking-[0.15em] sm:tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-8 sm:space-x-12 pt-8 sm:pt-12 border-t border-white/10 w-64 sm:w-72 justify-center">
              <Instagram className="text-white hover:text-[#D4AF37] transition-colors" size={32} />
              <Facebook className="text-white hover:text-[#D4AF37] transition-colors" size={32} />
              <Youtube className="text-white hover:text-[#D4AF37] transition-colors" size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
