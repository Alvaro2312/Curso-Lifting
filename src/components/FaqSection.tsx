import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Search } from 'lucide-react';
import { FAQS, COURSE_INFO } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs = selectedCategory === "all"
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? "" : id);
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      "¡Hola! Tengo una duda específica sobre el Curso de Lifting de Pestañas (Tradicional y Coreano)."
    );
    window.open(`https://wa.me/${COURSE_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-24 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>Despeja todas tus dudas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de asegurar tu cupo para el fin de semana intensivo.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "Todas" },
            { id: "general", label: "Generales" },
            { id: "tecnica", label: "Técnica & Contenido" },
            { id: "practica", label: "Práctica & Modelo" },
            { id: "pago", label: "Inversión & Pagos" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'btn-theme-primary shadow-xs'
                  : 'card-luxury text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isOpen ? 'var(--border-gold)' : 'var(--border-subtle)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{
                      backgroundColor: isOpen ? 'var(--accent-gold)' : 'var(--bg-subtle)',
                      color: isOpen ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed border-t animate-in fade-in duration-200"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div 
          className="card-luxury mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-serif-luxury text-lg font-bold text-[var(--text-primary)]">
              ¿Tienes alguna pregunta que no está aquí?
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              Escríbenos directamente y te responderemos a la brevedad.
            </p>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1ebe5d] via-[#25D366] to-[#128c7e] hover:from-[#19a751] hover:via-[#22be5b] hover:to-[#0f776a] rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-[1.02] border border-emerald-300/30 transition-all cursor-pointer shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white shrink-0" />
            <span className="whitespace-nowrap">Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
