'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

const galleryPhotos = [
  { url: "/img/foto10.png" },
  { url: "/img/foto3.jpeg" },
  { url: "/img/foto4.jpg" },
  { url: "/img/foto7.png" },
  { url: "/img/pastor1.jpeg" },
  { url: "/img/pastor2.jpeg" },
  { url: "/img/pastor3.jpeg" },
  { url: "/img/pastor4.jpeg" },
  { url: "/img/pastor5.jpeg" },
  { url: "/img/santa_ceia.png" },
  { url: "/img/visao.jpeg" },
];

const Gallery = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Auto-slide for the section carousel
  useEffect(() => {
    if (selectedImage !== null) return;
    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % galleryPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [selectedImage]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const nextSection = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSection((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevSection = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSection((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryPhotos.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  return (
    <section id="midia" className="py-24 relative overflow-hidden bg-navy">
      {/* Full-width Blurred Background (Modern & Immersive) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={galleryPhotos[currentSection].url} 
            alt="" 
            className="w-full h-full object-cover blur-3xl scale-110" 
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-3 block">Mídia & Fotos</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Galeria de Momentos</h2>
          <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
        </div>

        {/* Section Carousel View */}
        <div className="max-w-6xl mx-auto relative group">
          {/* Page numbering ABOVE the image */}
          <div className="flex justify-center mb-6">
            <span className="bg-white/10 backdrop-blur-xl text-[#D4AF37] px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-2xl border border-white/20">
              {currentSection + 1} / {galleryPhotos.length}
            </span>
          </div>

          <div 
            className="relative h-[50vh] md:h-[75vh] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] cursor-pointer bg-black"
            onClick={() => setSelectedImage(currentSection)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Main Image (Contain to see full photo) */}
                <motion.img
                  src={galleryPhotos[currentSection].url}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative z-10 w-full h-full object-contain photo-enhance"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
              <div className="flex items-center space-x-4 text-white p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit border border-white/10">
                <Maximize2 size={20} className="text-[#D4AF37]" />
                <span className="text-xs uppercase font-bold tracking-[0.3em]">Clique para ampliar</span>
              </div>
            </div>

            {/* Carousel Controls (Section) */}
            <button 
              onClick={prevSection}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl p-5 rounded-full text-white hover:bg-[#D4AF37] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-20 border border-white/10"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSection}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl p-5 rounded-full text-white hover:bg-[#D4AF37] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-20 border border-white/10"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {galleryPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSection(i)}
                className={`h-2 rounded-full transition-all duration-700 ${i === currentSection ? 'bg-[#D4AF37] w-14 shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-white/10 w-5'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-3xl flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => {
              setSelectedImage(null);
              setIsZoomed(false);
            }}
          >
            {/* Close Button */}
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white z-[130] transition-colors p-2 bg-white/5 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>

            {/* Page numbering ABOVE image in Lightbox */}
            <div className="relative w-full h-full flex flex-col items-center justify-center pt-24 pb-20">
              <div className="mb-8 z-[130]">
                <span className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase bg-white/10 px-8 py-3 rounded-full border border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl">
                  {selectedImage + 1} / {galleryPhotos.length}
                </span>
              </div>

              {/* Lightbox Navigation avec Cercles Dourados */}
              <div className="fixed inset-x-6 md:inset-x-20 top-1/2 -translate-y-1/2 flex justify-between z-[120] pointer-events-none">
                <button 
                  className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-[#B38728] hover:scale-110 active:scale-95 transition-all pointer-events-auto border-4 border-white/20"
                  onClick={prevLightbox}
                >
                  <ChevronLeft size={48} strokeWidth={2} />
                </button>
                <button 
                  className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:bg-[#B38728] hover:scale-110 active:scale-95 transition-all pointer-events-auto border-4 border-white/20"
                  onClick={nextLightbox}
                >
                  <ChevronRight size={48} strokeWidth={2} />
                </button>
              </div>

              {/* Main Image Container */}
              <motion.div
                key={selectedImage}
                className={`relative transition-all duration-500 cursor-zoom-in ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
              >
                <img
                  src={galleryPhotos[selectedImage].url}
                  alt={`Igreja Luz da Fé - Foto ${selectedImage + 1}`}
                  className="max-w-[90vw] max-h-[75vh] object-contain rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] border-[6px] border-white/10"
                />
                
                {/* Float controls for zoom hint */}
                <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-xl p-3 rounded-full text-[#D4AF37] border border-white/20 shadow-xl select-none">
                  {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                </div>
              </motion.div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[11px] uppercase tracking-[0.6em] hidden md:block bg-white/5 px-8 py-3 rounded-full backdrop-blur-md">
              Clique na imagem para zoom • Clique fora para sair
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
