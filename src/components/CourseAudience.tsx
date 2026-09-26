import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, UserCheck, UserX } from 'lucide-react';

interface CourseAudienceProps {
  onOpenReservation: () => void;
}

export const CourseAudience: React.FC<CourseAudienceProps> = ({ onOpenReservation }) => {
  const forWhom = [
    "Quieres generar ingresos recurrentes y estables mes a mes",
    "Quieres ser independiente y manejar tus propios horarios de trabajo",
    "Quieres pasar más tiempo de calidad con tus seres queridos",
    "Quieres ser tu propia jefa y no depender de un empleo tradicional",
    "Quieres dominar la cotizada técnica coreana y cobrar lo que realmente vale tu trabajo",
    "Quieres aprender de cero con la seguridad absoluta de cuidar la salud ocular de tus clientas"
  ];

  const notForWhom = [
    "Buscas fórmulas mágicas o dinero rápido sin esforzarte ni practicar",
    "Prefieres improvisar con videos de internet sin entender la química ni la anatomía capilar",
    "No estás dispuesta a practicar hasta conseguir buenos resultados",
    "No tienes interés en emprender, independizarte ni tener tus propias clientas",
    "No aceptas correcciones técnicas ni estás abierta a retroalimentación profesional"
  ];

  return (
    <section 
      id="para-quien"
      className="py-16 sm:py-24 transition-colors duration-300 border-b"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span>Claridad y Compromiso Mutuo</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            ¿Para Quién Es y Para Quién NO Es Este Curso?
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Queremos que tomes una decisión 100% segura e informada. Esta formación de alto nivel fue diseñada para quienes buscan verdadera excelencia profesional e independencia.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column: Sí es para ti */}
          <div 
            className="card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border-2"
            style={{ borderColor: 'rgba(88, 28, 135, 0.25)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-800 via-purple-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-purple-900/20">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-gold)] block">
                    Perfil de Éxito
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    Este curso es para ti si:
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-4">
                {forWhom.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column: NO es para ti */}
          <div 
            className="card-luxury p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border-2"
            style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
                  <UserX className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-600 block">
                    Transparencia Total
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    Este curso NO es para ti si:
                  </h3>
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-4">
                {notForWhom.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center shrink-0">
                      <XCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            ¿Cumples con el perfil y estás lista para dar el salto profesional?
          </p>
          <button
            type="button"
            onClick={onOpenReservation}
            className="btn-theme-primary px-7 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>Asegurar Mi Cupo Ahora</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
