import React from 'react';
import { WarmiLogo } from './WarmiLogo';
import { COURSE_INFO } from '../data/courseData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer 
      className="pt-16 pb-12 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#BA5E76]/25 shadow-sm p-1 overflow-hidden"
              >
                <WarmiLogo className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[var(--text-primary)] block">
                  WARMI ACADEMY
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[var(--accent-gold)] block">
                  Curso Lifting de Pestañas: De Cero a Pro
                </span>
              </div>
            </div>

            <p className="hidden md:block text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Formación profesional intensiva de fin de semana con Tiare Ávalos y Álvaro Petrillo. Aprende la química, anatomía y la técnica coreana más demandada, junto con la estrategia para llenar tu agenda.
            </p>
          </div>

          {/* Quick Links - hidden on mobile */}
          <div className="hidden md:block lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li>
                <a href="#beneficios" className="hover:text-[var(--accent-gold)] transition-colors">
                  Beneficios Exclusivos
                </a>
              </li>
              <li>
                <a href="#tecnicas" className="hover:text-[var(--accent-gold)] transition-colors">
                  Técnica Tradicional + Coreana
                </a>
              </li>
              <li>
                <a href="#temario" className="hover:text-[var(--accent-gold)] transition-colors">
                  Temario & Módulos
                </a>
              </li>
              <li>
                <a href="#expositores" className="hover:text-[var(--accent-gold)] transition-colors">
                  Expositores del Curso
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[var(--accent-gold)] transition-colors">
                  Metodología de Aprendizaje
                </a>
              </li>
              <li>
                <a href="#para-quien" className="hover:text-[var(--accent-gold)] transition-colors">
                  ¿Para Quién Es?
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[var(--accent-gold)] transition-colors">
                  Calculadora de Ganancias
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[var(--accent-gold)] transition-colors">
                  Testimonios de Alumnas
                </a>
              </li>
              <li>
                <a href="#reserva" className="hover:text-[var(--accent-gold)] transition-colors">
                  Reserva de Cupo ({COURSE_INFO.formattedPrice})
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--accent-gold)] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Action & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div className="hidden md:block space-y-2">
              <h4 className="font-serif-luxury text-base font-bold text-[var(--text-primary)] uppercase tracking-wider">
                Reserva de Cupo
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Valor del curso: <strong>{COURSE_INFO.formattedPrice} CLP</strong>. Congela tu cupo abonando el <strong>50% ({COURSE_INFO.reservationAmount})</strong> y cancela el saldo 1 día antes.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={onOpenReservation}
                className="btn-theme-primary px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center w-fit"
              >
                Reservar con 50%
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Warmi Academy. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Impartido por Tiare Ávalos & Álvaro Petrillo
          </p>
        </div>
      </div>
    </footer>
  );
};
