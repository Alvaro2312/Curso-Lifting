import React, { useState, useEffect } from 'react';
import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';
import { getImage } from '../utils/imageStorage';

const CANDIDATE_HERO_IMAGES = [
  '/images/Diseño sin título (83).png',
  '/Diseño sin título (83).png',
  '/images/Diseño%20sin%20t%C3%ADtulo%20(83).png',
  '/images/lifting-hero.png',
  '/images/lifting-hero.jpg',
  'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop'
];

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [customImage, setCustomImage] = useState<string | null>(null);

  useEffect(() => {
    // Load persisted image from IndexedDB / Storage if previously set
    let isMounted = true;
    getImage('hero').then((saved) => {
      if (isMounted && saved) {
        setCustomImage(saved);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola Tiare y Álvaro! Me interesa el Curso de Lifting de Pestañas de Cero a Pro (Tradicional, Coreano y Redes). Quiero saber sobre los cupos disponibles."
    );
    window.open(`https://wa.me/${COURSE_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const currentImageSrc = customImage || CANDIDATE_HERO_IMAGES[imageIdx] || CANDIDATE_HERO_IMAGES[CANDIDATE_HERO_IMAGES.length - 1];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors duration-300">
      {/* Decorative ambient background luxury orbs */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-3xl pointer-events-none -z-10 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, var(--hero-glow) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-40 right-10 w-72 h-72 blur-2xl pointer-events-none -z-10 rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--accent-gold-glow) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Persuasive Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="badge-theme inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-xs">
              <GraduationCap className="hidden sm:inline-block w-3.5 h-3.5 text-[var(--accent-gold)]" />
              <span className="uppercase tracking-wider text-[11px]">Certificación Doble Técnica & Negocio Digital</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.12]">
              Curso Lifting de Pestañas: <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">De Cero a Pro</span>
            </h1>

            {/* Sub-headline with highlights */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-[var(--accent-gold)] uppercase tracking-widest">
                Técnica Tradicional <span className="opacity-60">•</span> Técnica Coreana <span className="opacity-60">•</span> Manejo de Publicidad en Redes Sociales
              </p>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aprende el procedimiento más solicitado de la estética facial desde sus bases científicas y anatómicas hasta la cotizada técnica coreana. Diseñado para que adquieras la seguridad, el criterio profesional y la estrategia de marketing digital para tener tu agenda llena.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenReservation}
                className="btn-theme-primary w-full sm:w-auto px-8 h-14 text-sm font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 group border border-transparent"
              >
                <span>RESERVAR CUPO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn-theme-outline w-full sm:w-auto px-7 h-14 text-sm font-semibold rounded-full shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
                <span className="text-[var(--text-primary)]">Consultar por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Card */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 group"
                style={{
                  borderColor: 'var(--border-primary)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <img
                  src={currentImageSrc}
                  alt="Resultado profesional de lifting de pestañas técnica coreana"
                  onError={() => {
                    if (imageIdx < CANDIDATE_HERO_IMAGES.length - 1) {
                      setImageIdx(prev => prev + 1);
                    }
                  }}
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
