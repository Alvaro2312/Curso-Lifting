import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { WarmiLogo } from './WarmiLogo';
import { COURSE_INFO } from '../data/courseData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Técnicas', href: '#tecnicas' },
    { label: 'Temario', href: '#temario' },
    { label: 'Expositores', href: '#expositores' },
    { label: 'Metodología', href: '#metodologia' },
    { label: '¿Para Quién?', href: '#para-quien' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Reserva', href: '#reserva' },
  ];

  const mobileNavLinks = [
    ...desktopNavLinks,
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md shadow-lg' : ''
        }`}
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderBottom: '1px solid var(--nav-border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div 
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#BA5E76]/25 group-hover:scale-105 transition-transform p-1.5 overflow-hidden"
              >
                <WarmiLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.06em] text-[var(--text-primary)] uppercase">
                  WARMI
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[var(--accent-gold)] uppercase mt-1">
                  ACADEMY
                </span>
              </div>
            </a>

            {/* Desktop Navigation (FAQ removed to give more breathing room) */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-medium">
              {desktopNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors relative py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions (PC & Tablets) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenReservation}
                className="btn-theme-primary inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reservar Cupo</span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Toggle */}
            <div className="flex items-center xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none cursor-pointer"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div 
            className="xl:hidden px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 border-b shadow-xl max-h-[80vh] overflow-y-auto"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full btn-theme-primary flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reservar Cupo</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
