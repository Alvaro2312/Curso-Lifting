import React from 'react';
import { 
  Landmark,
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Lock, 
  CalendarCheck
} from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface SchedulePricingProps {
  onOpenReservation: () => void;
}

export const SchedulePricing: React.FC<SchedulePricingProps> = ({ onOpenReservation }) => {
  return (
    <section 
      id="reserva" 
      className="py-16 sm:py-24 transition-colors duration-300 border-y relative"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <span id="inversion" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Condiciones de Reserva & Inversión</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Tu Inversión & Condiciones de Reserva
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Transparencia total y facilidades de pago para que comiences tu formación profesional con cupo asegurado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Inversión Total & Condiciones (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between card-luxury rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <div 
                className="pb-6 border-b text-center"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--accent-gold)] block">
                  Inversión Total
                </span>

                <div className="my-3.5 flex justify-center">
                  <div className="w-full max-w-sm sm:max-w-md py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-700 text-white shadow-md shadow-purple-900/25 border border-purple-400/30 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                      {COURSE_INFO.formattedPrice}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Sin cobros ocultos ni sorpresas de último momento.
                </p>
              </div>

              {/* Conditions List */}
              <div className="mt-6 space-y-4">
                <div 
                  className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" 
                      style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--border-primary)' }}
                    >
                      <CalendarCheck className="w-4 h-4 text-[var(--accent-gold)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--text-primary)]">
                        Reserva tu cupo con el 50% ({COURSE_INFO.reservationAmount})
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        Aseguras tu lugar inmediatamente en la edición seleccionada. El 50% restante se abona hasta un día antes de iniciar las clases.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" 
                      style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--border-primary)' }}
                    >
                      <Landmark className="w-4 h-4 text-[var(--accent-gold)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--text-primary)]">
                        Pago Mediante Transferencia Electrónica
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        Los pagos son mediante transferencia electrónica. Recibirás los datos bancarios y la confirmación inmediata de tu reserva.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" 
                      style={{ backgroundColor: 'var(--badge-bg)', border: '1px solid var(--border-primary)' }}
                    >
                      <Lock className="w-4 h-4 text-[var(--accent-gold)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--text-primary)]">
                        Cupos Reducidos por Edición
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        Mantenemos grupos pequeños para brindar atención individualizada y corrección minuciosa de cada detalle práctico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Investment Card (Right 6 Cols) */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div 
              className="rounded-3xl p-7 sm:p-9 border shadow-2xl relative overflow-hidden flex flex-col justify-between h-full"
              style={{
                background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-subtle) 100%)',
                borderColor: 'var(--border-gold)',
              }}
            >
              {/* Glow accent */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 blur-3xl rounded-full pointer-events-none"
                style={{ background: 'var(--accent-gold-glow)' }}
              />

              <div className="relative z-10 space-y-6 flex flex-col justify-between h-full">
                {/* What's included checklist */}
                <div className="space-y-3.5">
                  <div 
                    className="pb-4 border-b text-center"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <span className="text-xs uppercase font-bold tracking-wider text-[var(--accent-gold)] block text-center">
                      Te recordamos lo que obtienes al inscribirte:
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1 text-center">
                      Formación Profesional Completa
                    </h3>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    {[
                      "Acceso completo a la formación profesional intensiva",
                      "Doble formación integral: Técnica Tradicional (Clásica) + Técnica Coreana",
                      "Demostración en modelo real de Técnica Tradicional + Técnica Coreana",
                      "Evaluación personalizada de tu práctica en modelo real",
                      "Diploma de aprobación exitosa del curso.",
                      "Módulo exclusivo de Publicidad en Redes con Álvaro Petrillo",
                      "Asesoría Ilimitada post-curso vía canal directo",
                      "Dossier técnico digital descargable + Plantilla de Consentimiento"
                    ].map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white shadow-md shadow-purple-600/30 flex items-center justify-center shrink-0 mt-0.5 border border-purple-400/40">
                          <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                        </div>
                        <span className="leading-snug pt-0.5">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="btn-theme-primary w-full py-4 px-6 text-sm font-bold uppercase tracking-wider rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2 group text-center"
                  >
                    <span>QUIERO ASEGURAR MI CUPO CON EL 50% DE ABONO</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
