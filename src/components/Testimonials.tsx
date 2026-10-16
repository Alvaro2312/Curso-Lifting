import React, { useState, useRef, useEffect } from 'react';
import { Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.88;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < TESTIMONIALS.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section 
      id="testimonios" 
      className="py-16 sm:py-24 transition-colors duration-300 border-y"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Alumnas que Transformaron su Pasión en un Negocio Rentable
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Descubre las experiencias y resultados de profesionales que comenzaron desde cero y hoy atienden con total seguridad técnica.
          </p>
        </div>

        {/* Desktop Grid (Visible in tablet and desktop) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="card-luxury p-6 sm:p-7 rounded-2xl flex flex-col justify-between shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--accent-gold)] text-[var(--accent-gold)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>
              <div 
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border"
                  style={{ borderColor: 'var(--border-primary)' }}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">{t.name}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel (Visible only on mobile) */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="w-[88%] min-w-[88%] snap-center shrink-0 card-luxury p-6 rounded-2xl flex flex-col justify-between shadow-sm border border-[var(--border-subtle)]"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--accent-gold)] text-[var(--accent-gold)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div 
                  className="flex items-center gap-3 pt-4 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border"
                    style={{ borderColor: 'var(--border-primary)' }}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{t.name}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators & Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-[var(--accent-gold)]' : 'w-2 bg-[var(--border-primary)]'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="w-8 h-8 rounded-full border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(Math.min(TESTIMONIALS.length - 1, activeIndex + 1))}
                disabled={activeIndex === TESTIMONIALS.length - 1}
                className="w-8 h-8 rounded-full border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
