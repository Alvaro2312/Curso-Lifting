import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyBenefits } from './components/KeyBenefits';
import { TechniqueComparison } from './components/TechniqueComparison';
import { Curriculum } from './components/Curriculum';
import { Mentors } from './components/Mentors';
import { Methodology } from './components/Methodology';
import { CourseAudience } from './components/CourseAudience';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { SchedulePricing } from './components/SchedulePricing';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  return (
    <div 
      data-theme="blanco-morado-palorosa"
      className="min-h-screen flex flex-col bg-theme-main text-theme-primary selection:bg-[var(--accent-gold)] selection:text-[var(--bg-primary)] transition-colors duration-300"
    >
      {/* Top sticky Navigation */}
      <Navbar 
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 2. Exclusive Key Benefits */}
        <KeyBenefits />

        {/* 3. Technique Comparison: Traditional vs. Korean (K-Lash) */}
        <TechniqueComparison onOpenReservation={handleOpenReservation} />

        {/* 4. Complete Syllabus & Modules */}
        <Curriculum onOpenReservation={handleOpenReservation} />

        {/* 5. Mentors Section (Tiare Ávalos & Álvaro Petrillo) */}
        <Mentors />

        {/* 6. Methodology (Live Demo, Real Model Practice, Unlimited Advice, Certification) */}
        <Methodology />

        {/* 7. Who Is This For / Who Is This Not For */}
        <CourseAudience onOpenReservation={handleOpenReservation} />

        {/* 8. Motivational ROI & Profitability Calculator */}
        <RoiCalculator onOpenReservation={handleOpenReservation} />

        {/* 8. Satisfied Student Testimonials & Before/After Gallery */}
        <Testimonials />

        {/* 9. Investment & Reservation Conditions ($120.000 / 50% reservation) */}
        <SchedulePricing onOpenReservation={handleOpenReservation} />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenReservation={handleOpenReservation} />

      {/* Reservation & WhatsApp Booking Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
