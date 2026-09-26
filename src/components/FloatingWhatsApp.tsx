import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface FloatingWhatsAppProps {
  onOpenReservation?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola Tiare y Álvaro! Quiero reservar mi cupo para el Curso Lifting de Pestañas (Tradicional y Coreana) con el 50% ($60.000). ¿Quedan cupos disponibles?"
    );
    window.open(`https://wa.me/${COURSE_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Main floating button */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
        aria-label="Hablar por WhatsApp para reservar cupo"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        
        {/* Ping badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4AF37] text-[9px] font-bold text-black items-center justify-center">1</span>
        </span>
      </button>
    </div>
  );
};
