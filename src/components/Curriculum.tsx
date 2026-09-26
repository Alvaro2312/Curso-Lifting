import React, { useState } from 'react';
import { 
  Eye, 
  FlaskConical, 
  Layers, 
  Search, 
  Sparkles, 
  TrendingUp, 
  ChevronDown, 
  CheckCircle,
  BookOpen,
  Download
} from 'lucide-react';
import { MODULES_DATA } from '../data/courseData';

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

interface CurriculumProps {
  onOpenReservation: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenReservation }) => {
  const [expandedModule, setExpandedModule] = useState<string>("m1");

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? "" : id);
  };

  return (
    <section 
      id="temario" 
      className="py-16 sm:py-24 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <BookOpen className="hidden sm:inline-block w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Plan de Estudio Riguroso y Completo</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            ¿Qué Aprenderás en Este Curso?
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Una formación estructurada paso a paso para que termines con la solvencia técnica de una experta y las habilidades de negocio para tener clientas constantes.
          </p>
        </div>

        {/* Modules Accordion / Cards List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {MODULES_DATA.map((module) => {
            const isExpanded = expandedModule === module.id;
            return (
              <div
                key={module.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'shadow-lg'
                    : 'shadow-2xs'
                }`}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isExpanded ? 'var(--border-gold)' : 'var(--border-subtle)',
                }}
              >
                {/* Header button */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Number Badge */}
                    <span 
                      className="w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--accent-gold)',
                        borderColor: 'var(--border-primary)',
                      }}
                    >
                      {module.number}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                          {module.title}
                        </h3>
                        <span 
                          className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold border"
                          style={{
                            backgroundColor: 'var(--badge-bg)',
                            color: 'var(--accent-gold)',
                            borderColor: 'var(--badge-border)',
                          }}
                        >
                          {module.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      style={{
                        backgroundColor: isExpanded ? 'var(--accent-gold)' : 'var(--bg-subtle)',
                        color: isExpanded ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div 
                    className="px-5 sm:px-6 pb-6 pt-2 border-t space-y-4 animate-in fade-in duration-200"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {module.description}
                    </p>

                    <div 
                      className="rounded-xl p-4 sm:p-5 border"
                      style={{
                        backgroundColor: 'var(--bg-subtle)',
                        borderColor: 'var(--border-subtle)',
                      }}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                        Temas Específicos que Dominarás:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0 mt-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within Curriculum */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">
            ¿Quieres ver el dossier y temario descargable en PDF?
          </p>
          <button
            type="button"
            onClick={onOpenReservation}
            className="btn-theme-primary inline-flex items-center gap-2 px-7 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Documento</span>
          </button>
        </div>
      </div>
    </section>
  );
};
