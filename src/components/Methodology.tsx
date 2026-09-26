import React from 'react';
import { Video, Camera, Headphones, Award, CheckCircle2 } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <Video className="w-6 h-6 text-[var(--accent-gold)]" />,
      title: "1. Demostración del Procedimiento",
      badge: "Paso a Paso HD",
      description: "Tiare te enseñará el procedimiento completo de lifting tradicional y lifting coreano paso a paso. Podrás observar en detalle los ángulos exactos, la aplicación milimétrica del producto desde la raíz y cada secreto de la técnica.",
      footerText: "No te pierdas los detalles",
    },
    {
      icon: <Camera className="w-6 h-6 text-[var(--accent-gold)]" />,
      title: "2. Práctica en Modelo Real",
      badge: "Requisito Obligatorio",
      description: "Cada alumna deberá realizar su práctica en una modelo real. Esa práctica debe ser grabada en video, fotografiada con luz adecuada y enviada a la profesora para su corrección minuciosa y aprobación.",
      footerText: "La práctica hace a la maestra",
    },
    {
      icon: <Award className="w-6 h-6 text-[var(--accent-gold)]" />,
      title: "3. Evaluación & Certificación",
      badge: "Diploma Oficial",
      description: "Una vez que la profesora revise tu aislamiento, curvatura, simetría y cuidado de la fibra capilar, recibirás el Certificado que te avala para atender con total confianza.",
      footerText: "Paso indispensable del curso",
    },
    {
      icon: <Headphones className="w-6 h-6 text-[var(--accent-gold)]" />,
      title: "4. Asesoría Ilimitada Post-Curso",
      badge: "Sin Fecha de Vencimiento",
      description: "Sabemos que las verdaderas dudas surgen cuando estás a solas con tus primeras clientas. Por eso cuentas con asesoría ilimitada directa para consultar cualquier caso o dificultad.",
      footerText: "Te acompañaremos siempre",
    },
  ];

  return (
    <section 
      id="metodologia"
      className="py-16 sm:py-24 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span>Metodología Pedagógica Comprobada</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Cómo Aprenderás: De la Teoría a la Práctica Real
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Un método diseñado para darte la certeza de que tus procedimientos serán seguros, duraderos y profesionales desde tu primer día de atención.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-luxury p-6 rounded-2xl flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      color: 'var(--accent-gold)',
                      borderColor: 'var(--badge-border)',
                    }}
                  >
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t flex items-center gap-2 text-xs text-[var(--text-muted)]"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                <span>{step.footerText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
