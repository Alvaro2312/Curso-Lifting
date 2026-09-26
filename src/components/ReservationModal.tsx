import React, { useState } from 'react';
import { X, Calendar, MessageCircle, ShieldCheck, Check, Sparkles, Landmark, Send } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const nameText = fullName.trim() || 'Alumna Interesada';
    const phoneText = phone.trim() ? ` (Tel: ${phone})` : '';

    const message = encodeURIComponent(
      `¡Hola Tiare y Álvaro! Mi nombre es ${nameText}${phoneText}. Quiero reservar mi cupo para el Curso de Lifting de Pestañas de Cero a Pro (Tradicional + Coreana + Publicidad en Redes) con el 50% (${COURSE_INFO.reservationAmount}) mediante Transferencia Electrónica.\n\n¿Me pueden enviar los datos bancarios para realizar la transferencia de la reserva? ¡Muchas gracias!`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${COURSE_INFO.whatsappNumber}?text=${message}`, '_blank');
      onClose();
      setSubmitted(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="card-luxury rounded-3xl max-w-lg w-full p-6 sm:p-8 border shadow-2xl relative max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-gold)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer"
          style={{
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-subtle)',
          }}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="badge-theme inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[var(--accent-gold)]" />
            <span>Reserva de Cupo Oficial</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Asegura tu Lugar con el 50%
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Solo {COURSE_INFO.availableSpots} cupos para garantizar revisión personalizada en modelo real.
          </p>
        </div>

        {/* Inversión Summary Card */}
        <div 
          className="p-4 rounded-2xl border mb-6 space-y-2 text-xs"
          style={{
            backgroundColor: 'var(--bg-subtle)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-secondary)',
          }}
        >
          <div className="flex justify-between items-center text-sm font-bold text-[var(--text-primary)]">
            <span>Valor Total del Curso:</span>
            <span>{COURSE_INFO.formattedPrice} CLP</span>
          </div>
          <div className="flex justify-between items-center text-xs font-semibold text-[var(--accent-gold)]">
            <span>Reserva hoy (50%):</span>
            <span 
              className="text-sm font-bold px-2 py-0.5 rounded border"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--accent-gold)',
                borderColor: 'var(--border-primary)',
              }}
            >
              {COURSE_INFO.reservationAmount} CLP
            </span>
          </div>
          <p 
            className="text-[11px] pt-1 border-t text-[var(--text-muted)]"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            *El 50% restante se cancela hasta un día antes de la primera clase.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
              Tu Nombre Completo:
            </label>
            <input
              type="text"
              required
              placeholder="Ej: Camila Soto"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border text-sm placeholder:opacity-50 focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
              Teléfono / WhatsApp:
            </label>
            <input
              type="tel"
              placeholder="+56 9 1234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border text-sm placeholder:opacity-50 focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          {/* Payment Method Notice */}
          <div 
            className="p-3.5 rounded-2xl border flex items-center gap-3.5 text-xs"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
              style={{ 
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <Landmark className="w-4 h-4 text-[var(--accent-gold)]" />
            </div>
            <div>
              <span className="font-bold text-[var(--text-primary)] block text-xs">
                Medio de Pago: Transferencia Electrónica
              </span>
              <span className="text-[var(--text-muted)] text-[11px] leading-tight block mt-0.5">
                Reserva tu cupo con el 50% ({COURSE_INFO.reservationAmount}). Te enviaremos los datos bancarios de inmediato.
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 py-4 px-6 text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>
              {submitted ? 'Conectando con WhatsApp...' : 'Continuar Reserva en WhatsApp'}
            </span>
          </button>

          <p className="text-[11px] text-center text-[var(--text-muted)] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            Atención personalizada y confirmación inmediata de tu cupo.
          </p>
        </form>
      </div>
    </div>
  );
};
