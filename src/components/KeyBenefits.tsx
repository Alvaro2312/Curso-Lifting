import React from 'react';
import { 
  Eye, 
  FlaskConical, 
  Video, 
  CheckCircle2, 
  TrendingUp, 
  Headphones, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { EXCLUSIVE_BENEFITS } from '../data/courseData';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-[var(--accent-gold)]" />,
  FlaskConical: <FlaskConical className="w-6 h-6 text-[var(--accent-gold)]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[var(--accent-gold)]" />,
  Video: <Video className="w-6 h-6 text-[var(--accent-gold)]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[var(--accent-gold)]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[var(--accent-gold)]" />,
  Headphones: <Headphones className="w-6 h-6 text-[var(--accent-gold)]" />,
};

export const KeyBenefits: React.FC = () => {
  return (
    <section 
      id="beneficios"
      className="py-16 sm:py-20 transition-colors duration-300 border-y"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Eye className="hidden sm:inline-block w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Por qué esta formación marca la diferencia</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            Beneficios Exclusivos Diseñados para tu Éxito
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            No es solo un curso más de pestañas; es el método integral que te brinda el dominio técnico de las dos técnicas más cotizadas y las herramientas comerciales para monetizar tu talento desde el día uno.
          </p>
        </div>

        {/* Minimalist Grid of Exclusive Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXCLUSIVE_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="card-luxury p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all border"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  {iconMap[benefit.icon] || <Eye className="w-6 h-6 text-[var(--accent-gold)]" />}
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t flex items-center justify-between text-xs text-[var(--text-muted)]"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <span className="font-medium">{benefit.tag || "Ventaja Exclusiva"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
