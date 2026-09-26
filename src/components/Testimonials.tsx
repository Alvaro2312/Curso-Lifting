import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';

export const Testimonials: React.FC = () => {
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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

