import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu, X, MapPin, Phone, Instagram, Facebook, Youtube,
  Calendar, Users, Heart, Music, BookOpen, ChevronRight,
  ChevronLeft, MessageCircle, Clock, Play, ZoomIn
} from 'lucide-react';

// Assets baseados nas fotos enviadas pelo usuário
// Assets baseados nas fotos enviadas pelo usuário
const ASSETS = {
  LOGO: "/img/logo 1.png",
  CHURCH_SERVICE: "/img/igreja cheia dentro.jpeg",
  PASTOR_PREACHING: "/img/pastor bruno.jpeg",
  PASTOR_FAMILY: "/img/pastor e familia.jpeg",
  ALTAR: "/img/igreja cheia dentro.jpeg",
  EXTERIOR: "/img/banner luz da fe.jpeg",
};

const PLACEHOLDERS = {
  CULT: "/img/banner.png",
  ALTAR: "/img/igreja cheia dentro.jpeg",
  FAMILY: "/img/pastor e familia.jpeg",
  PREACH: "/img/pastor bruno.jpeg",
};

// --- Custom Hook for Scroll Animations ---
const useIntersectionObserver = () => {
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const currentObserver = observer.current;
    elements.forEach(el => currentObserver.observe(el));

    return () => {
      if (currentObserver) {
        elements.forEach(el => currentObserver.unobserve(el));
      }
    };
  }, [elements]);

  return setElements;
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'A Igreja', href: '#sobre' },
    { name: 'Liderança', href: '#lideranca' },
    { name: 'Mídia', href: '#midia' },
    { name: 'Cultos', href: '#cultos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A1128]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-gold shadow-lg">
            <img src={ASSETS.LOGO} alt="IALF Logo" className="w-full h-full object-contain p-1 photo-enhance" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-none text-white tracking-tight`}>LUZ DA FÉ</span>
            <span className="text-[9px] text-blue-300 uppercase tracking-[0.25em] font-semibold">Igreja Apostólica IALF</span>
          </div>
        </div>

        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold text-gray-100 hover:text-gold transition-colors uppercase tracking-[0.15em]">
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-gold transition-colors">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-dark-blue z-40 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="w-32 h-32 bg-white rounded-full mb-8 p-4">
            <img src={ASSETS.LOGO} alt="IALF Logo" className="w-full h-full object-contain" />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-8">
            <Instagram className="text-white hover:text-gold" />
            <Facebook className="text-white hover:text-gold" />
            <a href="https://www.youtube.com/@brunoboavista5252" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const slides = [
    {
      title: "A Glória de Deus na Sua Vida!",
      subtitle: "Seja bem-vindo à Igreja Apostólica Luz da Fé em Codó-MA.",
      image: ASSETS.EXTERIOR,
    },
    {
      title: "Um Lugar de Transformação",
      subtitle: "Sob a liderança do Pastor Bruno Boavista Castelo Branco.",
      image: ASSETS.ALTAR,
    },
    {
      title: "Adoração em Família",
      subtitle: "Venha louvar a Deus conosco!",
      image: ASSETS.CHURCH_SERVICE,
    },
    {
      title: "Nossa Casa",
      subtitle: "Um lugar de paz e comunhão.",
      image: ASSETS.EXTERIOR,
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-[#0A1128]/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover photo-enhance animate-[ken-burns_20s_infinite_alternate] transition-transform duration-[10000ms] ${index === current ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-sm mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">IALF - Codó</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 max-w-5xl leading-tight opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
              <a href="#contato" className="gold-gradient text-white font-bold py-5 px-12 rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all uppercase text-xs tracking-[0.2em]">
                Venha nos visitar
              </a>
              <a href="#midia" className="border-2 border-white/50 text-white font-bold py-5 px-12 rounded-full hover:bg-white hover:text-black transition-all uppercase text-xs tracking-[0.2em] backdrop-blur-sm">
                Assista aos cultos
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gold w-12' : 'bg-white/30 w-6'}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => {
  return (
    <div className="text-center mb-16 fade-in">
      <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block">{subtitle}</span>
      <h2 className={`text-4xl md:text-6xl font-serif mb-6 ${light ? 'text-white' : 'text-dark-blue'}`}>{title}</h2>
      <div className="w-24 h-1.5 gold-gradient mx-auto rounded-full"></div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 fade-in order-2 lg:order-1">
            <div className="relative group">
              <img
                src={PLACEHOLDERS.PREACH} // Foto do Pastor Bruno no púlpito
                alt="Pastor Bruno Pregando"
                className="rounded-2xl shadow-3xl relative z-10 w-full photo-enhance"
              />
              <div className="absolute -bottom-8 -right-8 w-full h-full border-4 border-gold/30 rounded-2xl -z-0"></div>
              <div className="absolute top-4 left-4 z-20 bg-dark-blue/80 backdrop-blur-md p-4 rounded-xl text-white text-sm font-bold border-l-4 border-gold">
                "Pregando a Verdade"
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 fade-in order-1 lg:order-2"> 
            <SectionHeading title="Igreja Apostólica" subtitle="Conheça a IALF" />
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p className="font-semibold text-dark-blue text-xl">
                Somos a Igreja Apostólica Luz da Fé (IALF), um lugar onde a Glória de Deus se manifesta em cada detalhe.
              </p>
              <p>
                Localizada em Codó-MA, Bairro São Sebastião, nossa igreja é guiada por princípios apostólicos, focada na restauração de vidas e no fortalecimento das famílias através da palavra de Deus. Sob a liderança do <strong>Pastor Presidente Bruno</strong>, buscamos ser um farol de esperança e fé em nossa comunidade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shrink-0">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue uppercase tracking-wider text-xs">Palavra Viva</h4>
                    <p className="text-sm">Ensino fiel das escrituras.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shrink-0">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue uppercase tracking-wider text-xs">Acolhimento</h4>
                    <p className="text-sm">Um lugar para recomeçar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section id="lideranca" className="py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-[#0A1128] rounded-[3rem] overflow-hidden shadow-3xl flex flex-col lg:flex-row fade-in border border-white/5">
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img
              src={PLACEHOLDERS.FAMILY} // Foto da Família Pastoral
              alt="Família Pastoral IALF"
              className="absolute inset-0 w-full h-full object-cover photo-enhance"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Igreja Apostólica</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Pastor Bruno & Família</h2>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-gold pl-6 py-2">
                "Nossa missão é ver a Glória de Deus alcançando cada lar em Codó e além."
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Com um coração voltado para o serviço e o ensino, o Pastor Bruno Boavista Castelo Branco lidera a IALF com transparência e fervor espiritual. Juntamente com sua esposa e filhos, ele dedica-se ao pastoreio integral, cuidando de cada membro com amor, excelência e dedicação.
              </p>
            </div>
            <div className="flex space-x-6 mt-12">
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-gold transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Instagram size={26} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-gold transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Facebook size={26} />
              </a>
              <a href="https://www.youtube.com/@brunoboavista5252" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-gold transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Youtube size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const galleryImages = [
    { url: "/img/banner.png", title: "Nossa Fachada" },
    { url: "/img/banda.png", title: "Ministério de Louvor" },
    { url: "/img/pastor bruno.jpeg", title: "Ministração Pastor Bruno" },
    { url: "/img/louvor.jpeg", title: "Momento de Adoração" },
    { url: "/img/igreja com a banda.png", title: "Adoração em Família" },
    { url: "/img/santa ceia.png", title: "Santa Ceia do Senhor" },
    { url: "/img/igreja luz pastor e membros.jpeg", title: "Família Luz da Fé" },
    { url: "/img/igreja.png", title: "Nossa Casa" },
    { url: "/img/igreja cheia dentro.jpeg", title: "Culto Cheio da Glória" },
    { url: "/img/foto3.jpeg", title: "Momentos Luz da Fé" },
    { url: "/img/foto4.jpg", title: "Momentos Luz da Fé" },
    { url: "/img/foto6.png", title: "Momentos Luz da Fé" },
    { url: "/img/foto7.png", title: "Momentos Luz da Fé" },
    { url: "/img/foto8.png", title: "Momentos Luz da Fé" },
    { url: "/img/foto9.png", title: "Momentos Luz da Fé" },
    { url: "/img/foto10.png", title: "Momentos Luz da Fé" },
  ];

  // Auto-slide para o carrossel da seção
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Prevenir rolagem quando a janela do álbum está aberta
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <section id="midia" className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-3xl rounded-full translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Nossa Igreja" subtitle="Álbum de Fotos" />
        
        {/* Carrossel Animado da Seção */}
        <div className="max-w-5xl mx-auto cursor-pointer group fade-in" onClick={() => setSelectedImage(carouselIndex)}>
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-8 border-white">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${idx === carouselIndex ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-1'}`}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover photo-enhance" 
                />
              </div>
            ))}
            
            {/* Overlay Informativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/95 via-transparent to-transparent flex flex-col items-center justify-end pb-12">
              <div className="animate-bounce mb-6 bg-gold p-4 rounded-full shadow-2xl text-white">
                <ZoomIn size={32} />
              </div>
              <h3 className="text-white font-serif text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-2xl">
                {galleryImages[carouselIndex].title}
              </h3>
              <p className="text-gold uppercase tracking-[0.4em] font-bold text-sm bg-[#0A1128]/80 px-10 py-4 rounded-full backdrop-blur-md border border-gold/30 shadow-2xl">
                Clique para ampliar • {carouselIndex + 1}/{galleryImages.length}
              </p>
            </div>

            {/* Indicadores de progresso */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === carouselIndex ? 'bg-gold w-10' : 'bg-white/40 w-4'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Janela de Fotos Ampliada (Imersiva e Limpa) */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center animate-[fadeIn_0.4s_ease-out] cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botão Flutuante 'Voltar ao Site' */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[120]">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="gold-gradient text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-2xl hover:scale-110 transition-all flex items-center space-x-3 border-2 border-white/20"
              >
                <X size={20} />
                <span>Voltar ao Site</span>
              </button>
            </div>
            
            {/* Conteúdo Principal */}
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-10">
              {/* Botão Anterior */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1)) }} 
                className="hidden md:flex text-white/50 hover:text-gold z-[110] p-10 transition-all hover:scale-125"
              >
                <ChevronLeft size={80} strokeWidth={1} />
              </button>
              
              <div className="relative max-w-full max-h-full flex items-center justify-center animate-[scaleIn_0.5s_ease-out]">
                <img 
                  src={galleryImages[selectedImage].url} 
                  alt={galleryImages[selectedImage].title} 
                  className="max-w-[95vw] max-h-[85vh] object-contain shadow-[0_0_100px_rgba(212,175,55,0.1)] photo-enhance select-none" 
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Contador discreto no rodapé da imagem */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-50 text-white font-bold tracking-[0.3em] uppercase text-[10px]">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Botão Próximo */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0)) }} 
                className="hidden md:flex text-white/50 hover:text-gold z-[110] p-10 transition-all hover:scale-125"
              >
                <ChevronRight size={80} strokeWidth={1} />
              </button>

              {/* Mobile controls */}
              <div className="flex md:hidden absolute bottom-10 space-x-12">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1)) }} 
                  className="text-white/50 hover:text-gold p-4"
                >
                  <ChevronLeft size={64} strokeWidth={1} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0)) }} 
                  className="text-white/50 hover:text-gold p-4"
                >
                  <ChevronRight size={64} strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* Aviso de clique para fechar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-widest hidden md:block">
              Clique em qualquer lugar para sair
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ScheduleSection = () => {
  const events = [
    { day: "Domingo", name: "Culto de Celebração", time: "19:00", desc: "Celebração apostólica com louvor e palavra profética." },
    { day: "Terça-feira", name: "Noite de Clamor", time: "20:00", desc: "Oração fervorosa por curas, milagres e libertação." },
    { day: "Quinta-feira", name: "Ensino da Palavra", time: "20:00", desc: "Aprofundamento bíblico e discipulado para toda a família." }
  ];

  return (
    <section id="cultos" className="py-28 bg-[#0A1128] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full gold-gradient opacity-[0.03] -skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full gold-gradient opacity-[0.03] skew-x-12 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Agenda Semanal" subtitle="Venha Adorar" light />
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 fade-in hover:bg-white/10 transition-all duration-500 group">
              <div className="flex flex-col items-center justify-center p-6 bg-gold/10 rounded-[2rem] min-w-[160px] border border-gold/30 group-hover:scale-105 transition-transform">
                <Calendar className="text-gold mb-3" size={32} />
                <span className="font-bold text-2xl uppercase tracking-widest">{event.day}</span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-serif text-gold mb-3 tracking-tight">{event.name}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{event.desc}</p>
              </div>
              <div className="flex items-center space-x-3 text-3xl font-bold bg-white/5 py-4 px-8 rounded-2xl border border-white/10 shadow-lg">
                <Clock className="text-gold" size={28} />
                <span>{event.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 fade-in">
          <a
            href="https://www.youtube.com/@brunoboavista5252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full transition-all hover:scale-105 shadow-2xl"
          >
            <Youtube size={32} />
            <span className="font-bold uppercase tracking-[0.2em] text-sm">Assista ao vivo no YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contato" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Canais de Atendimento" subtitle="Contato" />
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 fade-in">
            <div className="bg-gray-50 p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-3xl font-serif text-dark-blue mb-8 tracking-tight">Pedido de Oração</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <input type="text" placeholder="Seu Nome Completo" className="w-full bg-white border border-gray-200 rounded-2xl p-5 outline-none focus:border-gold transition-all shadow-sm text-lg" />
                  <input type="tel" placeholder="Seu WhatsApp" className="w-full bg-white border border-gray-200 rounded-2xl p-5 outline-none focus:border-gold transition-all shadow-sm text-lg" />
                </div>
                <textarea placeholder="Como podemos orar por você?" rows={6} className="w-full bg-white border border-gray-200 rounded-2xl p-5 outline-none focus:border-gold transition-all shadow-sm text-lg resize-none"></textarea>
                <button className="w-full gold-gradient text-white font-bold py-6 rounded-2xl uppercase tracking-[0.2em] text-sm hover:shadow-xl transition-all transform hover:-translate-y-1 shadow-lg">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 fade-in">
            <div className="space-y-10">
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center space-x-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="text-white" size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-blue mb-1 uppercase tracking-wider text-xs">Nossa Localização</h4>
                  <p className="text-gray-600 text-lg">Rua Tomé de Souza, 897-A, Bairro São Sebastião, Codó-MA</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center space-x-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="text-white" size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-blue mb-1 uppercase tracking-wider text-xs">Secretaria</h4>
                  <p className="text-gray-600 text-lg">(27) 99999-9999 (WhatsApp)</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Tom%C3%A9%20de%20Souza,%20897-A,%20Bairro%20S%C3%A3o%20Sebasti%C3%A3o,%20Cod%C3%B3-MA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-10 border-4 border-gold shadow-2xl p-2 overflow-hidden">
            <img src={ASSETS.LOGO} alt="IALF Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">Igreja Apostólica Luz da Fé</h2>
          <p className="text-blue-300 font-bold tracking-[0.4em] uppercase text-xs mb-12">A Glória de Deus na sua vida!</p>
          <div className="flex space-x-10">
            <a href="#" className="text-gray-400 hover:text-gold transition-all transform hover:-translate-y-1"><Instagram size={36} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-all transform hover:-translate-y-1"><Facebook size={36} /></a>
            <a href="https://www.youtube.com/@brunoboavista5252" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-all transform hover:-translate-y-1"><Youtube size={36} /></a>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} IALF - Codó-MA. Todos os direitos reservados.</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Excelência e Fé em cada passo</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5527999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-50 gold-gradient text-white p-6 rounded-full shadow-3xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center animate-bounce duration-[3000ms]"
  >
    <MessageCircle size={40} />
  </a>
);

// --- Main App ---

const App = () => {
  const setElements = useIntersectionObserver();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.fade-in')) as HTMLElement[];
    setElements(els);
  }, [setElements]);

  return (
    <div className="relative selection:bg-gold selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <LeadershipSection />
      <MediaSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
