import React, { useState } from 'react';
import { Sparkles, TrendingUp, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface RoiCalculatorProps {
  onOpenReservation: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenReservation }) => {
  const [pricePerService, setPricePerService] = useState<number>(25000);
  const [clientsPerWeek, setClientsPerWeek] = useState<number>(4);

  const courseCost = COURSE_INFO.price; // 120000
  const clientsNeededToRecover = Math.ceil(courseCost / pricePerService);
  const weeklyRevenue = pricePerService * clientsPerWeek;
  const monthlyRevenue = weeklyRevenue * 4;

  return (
    <section 
      id="calculadora" 
      className="py-16 sm:py-24 transition-colors duration-300 border-b"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="badge-theme inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span>Calculadora de Rentabilidad & Retorno</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            ¿En Cuánto Tiempo Recuperas tu Inversión?
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            A continuación encontrarás una calculadora que te ayudará a estimar en cuánto tiempo puedes recuperar tu inversión. Es muy fácil. <strong>Paso 1:</strong> Elige el precio que le darás a tu servicio de lifting. <strong>Paso 2:</strong> Indica cuántas clientas atenderás en la semana. <strong>Paso 3:</strong> Descubre tus ingresos mensuales e identifica en cuánto tiempo recuperarás tu inversión.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="card-luxury max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls (Left) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Price per service */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    Precio Lifting:
                  </label>
                  <span 
                    className="text-base sm:text-lg font-bold px-3 py-1 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--accent-gold)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    ${pricePerService.toLocaleString('es-CL')}
                  </span>
                </div>
                <input
                  type="range"
                  min={18000}
                  max={45000}
                  step={1000}
                  value={pricePerService}
                  onChange={(e) => setPricePerService(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent-gold)]"
                  style={{ backgroundColor: 'var(--bg-subtle)' }}
                />
              </div>

              {/* Slider 2: Clients per week */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    Clientas que Atenderás por Semana:
                  </label>
                  <span 
                    className="text-base sm:text-lg font-bold px-3 py-1 rounded-lg border"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    {clientsPerWeek} {clientsPerWeek === 1 ? 'clienta' : 'clientas'}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={clientsPerWeek}
                  onChange={(e) => setClientsPerWeek(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent-gold)]"
                  style={{ backgroundColor: 'var(--bg-subtle)' }}
                />
              </div>

              {/* Mini fact */}
              <div 
                className="p-3.5 rounded-xl border text-xs flex items-start gap-2.5"
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                <span>
                  El lifting de pestañas es uno de los servicios con menor costo de insumos y mayor margen de ganancia neta en la estética.
                </span>
              </div>
            </div>

            {/* Results Display (Right) */}
            <div 
              className="lg:col-span-6 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6 border"
              style={{
                background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-subtle) 100%)',
                borderColor: 'var(--border-primary)',
              }}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--accent-gold)] block mb-1">
                  Proyección Financiera
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-primary)]">
                  Ingreso Mensual Estimado
                </h3>
                <div className="mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-gold)]">
                    ${monthlyRevenue.toLocaleString('es-CL')}
                  </span>
                </div>
              </div>

              {/* Highlight metrics */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div 
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  <span className="text-[11px] text-[var(--text-muted)] block">
                    Recuperas la inversión en el curso con solo:
                  </span>
                  <span className="text-xl font-bold text-[var(--text-primary)] block mt-0.5">
                    {clientsNeededToRecover} clientas
                  </span>
                </div>
                <div 
                  className="p-3 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  <span className="text-[11px] text-[var(--text-muted)] block">
                    Tiempo estimado de retorno:
                  </span>
                  <span className="text-xl font-bold text-[var(--accent-gold)] block mt-0.5">
                    ~{Math.max(1, Math.ceil(clientsNeededToRecover / clientsPerWeek))} {Math.max(1, Math.ceil(clientsNeededToRecover / clientsPerWeek)) === 1 ? 'semana' : 'semanas'}
                  </span>
                </div>
              </div>

              {/* CTA button */}
              <button
                type="button"
                onClick={onOpenReservation}
                className="btn-theme-primary w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Empezar a Generar Ingresos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
