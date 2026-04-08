'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeftCircle, ArrowRightCircle, ZoomIn, Camera, Maximize, Minimize } from 'lucide-react';

const galleryPhotos = [
  { url: "/img/visao_area_do_templo.jpeg", title: 'Visão do Templo' },
  { url: "/img/foto10.png", title: 'Comunhão IALF' },
  { url: "/img/santa_ceia.png", title: 'Santa Ceia' },
  { url: "/img/banda.png", title: 'Ministério de Louvor' },
  { url: "/img/igreja_com_a_banda.png", title: 'Adoração em Conjunto' },
  { url: "/img/foto3.jpeg", title: 'Momento de Louvor' },
  { url: "/img/foto4.jpg", title: 'Momentos de Fé' },
  { url: "/img/foto7.png", title: 'Família Luz da Fé' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(0);

  // Carrossel infinito para a janela principal (preview)
  React.useEffect(() => {
    if (selectedImage !== null) return; // Pausa o auto-play se o lightbox estiver aberto
    const timer = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % galleryPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [selectedImage]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setIsZoomed(false);
    setSelectedImage(selectedImage === 0 ? galleryPhotos.length - 1 : selectedImage - 1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage === null) return;
    setIsZoomed(false);
    setSelectedImage((selectedImage + 1) % galleryPhotos.length);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <section id="midia" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Álbum de Momentos</span>
          <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">Galeria de Memórias</h2>
          <div className="w-24 h-2 gold-gradient mx-auto rounded-full mb-12"></div>
        </div>

        {/* Única janela de carrossel animado */}
        <div className="max-w-4xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer group aspect-[16/10] md:aspect-[21/9] bg-navy"
             onClick={() => {
               setSelectedImage(currentPreview);
               setIsZoomed(false);
             }}>
          
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentPreview}
              src={galleryPhotos[currentPreview].url}
              alt={galleryPhotos[currentPreview].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-contain photo-enhance transition-transform group-hover:scale-110"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <motion.div
              key={`text-${currentPreview}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-white text-3xl md:text-5xl font-serif drop-shadow-md mb-2">{galleryPhotos[currentPreview].title}</h3>
              <div className="flex items-center space-x-3 text-[#D4AF37] font-bold text-sm tracking-widest uppercase bg-white/10 w-max px-4 py-2 rounded-full backdrop-blur-md border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                <Maximize size={16} />
                <span>Clique para abrir a Galeria Completa</span>
              </div>
            </motion.div>
          </div>

          {/* Indicadores do Carrossel de Preview */}
          <div className="absolute top-6 right-6 flex space-x-2 bg-navy/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Camera size={18} className="text-[#D4AF37]" />
            <span className="text-white text-xs font-bold tracking-widest">{currentPreview + 1} / {galleryPhotos.length}</span>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox with Fixed Directions and Click-to-Zoom */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-3xl flex flex-col items-center justify-center"
            onClick={() => {
              setSelectedImage(null);
              setIsZoomed(false);
            }}
          >
            {/* STABLE NAVIGATION ARROWS - Fixed positions */}
            <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-[120]">
              <button 
                className="text-white/60 hover:text-[#D4AF37] transition-all drop-shadow-2xl hover:scale-110 pointer-events-auto"
                onClick={handlePrev}
              >
                <ArrowLeftCircle size={64} strokeWidth={1} />
              </button>
              <button 
                className="text-white/60 hover:text-[#D4AF37] transition-all drop-shadow-2xl hover:scale-110 pointer-events-auto"
                onClick={handleNext}
              >
                <ArrowRightCircle size={64} strokeWidth={1} />
              </button>
            </div>

            {/* FIXED CLOSE BUTTON */}
            <button 
              className="fixed top-8 right-8 md:top-12 md:right-12 text-white hover:text-[#D4AF37] transition-all z-[130] bg-white/10 backdrop-blur-md p-4 rounded-full flex items-center space-x-2 group hover:bg-white/20 border border-white/20 shadow-2xl"
              onClick={() => {
                setSelectedImage(null);
                setIsZoomed(false);
              }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Fechar</span>
              <X size={32} />
            </button>

            {/* MAIN IMAGE WITH TOGGLE ZOOM */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <motion.div
                key={galleryPhotos[selectedImage].url}
                className="relative max-w-full max-h-full flex flex-col items-center cursor-zoom-in group"
                onClick={toggleZoom}
                animate={{ 
                  scale: isZoomed ? 1.5 : 1,
                  y: 0 
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
              >
                <img
                  src={galleryPhotos[selectedImage].url}
                  alt={galleryPhotos[selectedImage].title}
                  className={`w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-4 border-white/10 transition-all ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                />
                
                {!isZoomed && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-8 pointer-events-none"
                  >
                    <h3 className="text-white font-serif text-3xl md:text-5xl mb-4 drop-shadow-lg">{galleryPhotos[selectedImage].title}</h3>
                    <div className="w-24 h-1.5 gold-gradient mx-auto rounded-full mb-4"></div>
                    <div className="flex items-center justify-center space-x-2 text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.4em]">
                      <ZoomIn size={14} />
                      <span>{selectedImage + 1} / {galleryPhotos.length} • Clique para aumentar</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
