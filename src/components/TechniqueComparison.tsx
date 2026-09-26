import React, { useState, useEffect, useRef } from 'react';
import { Check, Layers, Camera, Upload, CheckCircle2, RotateCcw } from 'lucide-react';
import liftingTradicionalImg from '../assets/lifting-tradicional.png';
import liftingCoreanoImg from '../assets/lifting-coreano.jpg';
import { optimizeImage, saveImage, getImage, removeImage } from '../utils/imageStorage';

interface TechniqueComparisonProps {
  onOpenReservation?: () => void;
}

export const TechniqueComparison: React.FC<TechniqueComparisonProps> = () => {
  const [customTradImage, setCustomTradImage] = useState<string | null>(null);
  const [customCoreanoImage, setCustomCoreanoImage] = useState<string | null>(null);
  const [isDraggingTrad, setIsDraggingTrad] = useState(false);
  const [isDraggingCoreano, setIsDraggingCoreano] = useState(false);
  const [statusTrad, setStatusTrad] = useState<string | null>(null);
  const [statusCoreano, setStatusCoreano] = useState<string | null>(null);

  const tradInputRef = useRef<HTMLInputElement>(null);
  const coreanoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let isMounted = true;
    getImage('trad').then((saved) => {
      if (isMounted && saved) setCustomTradImage(saved);
    });
    getImage('coreano').then((saved) => {
      if (isMounted && saved) setCustomCoreanoImage(saved);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleFile = async (file: File, type: 'trad' | 'coreano') => {
    if (!file.type.startsWith('image/')) return;
    try {
      if (type === 'trad') setStatusTrad('Guardando...');
      else setStatusCoreano('Guardando...');

      const optimized = await optimizeImage(file);
      if (type === 'trad') {
        setCustomTradImage(optimized);
        await saveImage('trad', optimized);
        setStatusTrad('✓ Guardada permanentemente');
        setTimeout(() => setStatusTrad(null), 3500);
      } else {
        setCustomCoreanoImage(optimized);
        await saveImage('coreano', optimized);
        setStatusCoreano('✓ Guardada permanentemente');
        setTimeout(() => setStatusCoreano(null), 3500);
      }
    } catch (err) {
      console.error('Error guardando imagen:', err);
      if (type === 'trad') {
        setStatusTrad('Error al guardar');
        setTimeout(() => setStatusTrad(null), 3000);
      } else {
        setStatusCoreano('Error al guardar');
        setTimeout(() => setStatusCoreano(null), 3000);
      }
    }
  };

  const handleReset = async (type: 'trad' | 'coreano', e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === 'trad') {
      await removeImage('trad');
      setCustomTradImage(null);
      setStatusTrad('Restablecida');
      setTimeout(() => setStatusTrad(null), 2500);
    } else {
      await removeImage('coreano');
      setCustomCoreanoImage(null);
      setStatusCoreano('Restablecida');
      setTimeout(() => setStatusCoreano(null), 2500);
    }
  };

  const handleDrop = (e: React.DragEvent, type: 'trad' | 'coreano') => {
    e.preventDefault();
    if (type === 'trad') setIsDraggingTrad(false);
    else setIsDraggingCoreano(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0], type);
    }
  };

  const tradImageSrc = customTradImage || liftingTradicionalImg;
  const coreanoImageSrc = customCoreanoImage || liftingCoreanoImg;

  return (
    <section 
      id="tecnicas" 
      className="py-16 sm:py-24 transition-colors duration-300 border-b"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="badge-theme inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
            <span>2 Formaciones en 1 Solo Curso</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Técnica Tradicional + Técnica Coreana
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            La mayoría de los cursos solo te enseñan una técnica básica. En este intensivo dominarás ambos protocolos para adaptar el servicio a cualquier tipo de ojo, párpado y expectativa de tu clienta.
          </p>
        </div>

        {/* Side by Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Technique 1: Tradicional */}
          <div className="card-luxury rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  Protocolo Clásico
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                  Técnica Tradicional
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Ideal para clientas que buscan un rizado sutil, natural y definido. Es la técnica base que todo lashista debe dominar con soltura antes de avanzar.
                </p>
              </div>

              {/* Visual image */}
              <div 
                className={`rounded-2xl overflow-hidden h-48 sm:h-56 relative border group transition-all duration-300 ${
                  isDraggingTrad ? 'ring-4 ring-[var(--accent-gold)] scale-[1.02]' : ''
                }`}
                style={{ borderColor: 'var(--border-subtle)' }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDraggingTrad(true);
                }}
                onDragLeave={() => setIsDraggingTrad(false)}
                onDrop={(e) => handleDrop(e, 'trad')}
              >
                <img
                  src={tradImageSrc}
                  alt="Resultado real de técnica tradicional de lifting de pestañas"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white/90 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/10 pointer-events-none">
                  Curvatura uniforme natural
                </span>

                {/* Drag & drop overlay */}
                {isDraggingTrad && (
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-white z-20 pointer-events-none">
                    <Upload className="w-8 h-8 text-[var(--accent-gold)] animate-bounce" />
                    <p className="font-semibold text-xs">Suelta aquí tu imagen</p>
                  </div>
                )}

                {/* Status toast */}
                {statusTrad && (
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-[var(--accent-gold)] text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-lg z-20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                    <span>{statusTrad}</span>
                  </div>
                )}

                {/* Input and button to change photo */}
                <input
                  ref={tradInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFile(e.target.files[0], 'trad');
                    }
                  }}
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  {customTradImage && (
                    <button
                      type="button"
                      onClick={(e) => handleReset('trad', e)}
                      title="Restablecer imagen original"
                      className="opacity-80 hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full p-1.5 text-xs font-medium flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => tradInputRef.current?.click()}
                    title="Cambiar foto de técnica tradicional"
                    className="opacity-85 hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 backdrop-blur-md border border-[var(--accent-gold)]/60 text-white rounded-full px-2.5 py-1.5 text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-lg"
                  >
                    <Camera className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                    <span className="text-[11px]">Cambiar foto</span>
                  </button>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 pt-2">
                {[
                  "Curvatura suave en 'C' uniforme a lo largo de toda la fibra",
                  "Ideal para pestañas largas que solo requieren definición",
                  "Uso de moldes de silicona estándares (S, M, L)",
                  "Tiempos de exposición convencionales con neutralizado",
                  "Tarifa sugerida de cobro: $20.000 - $25.000 CLP",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--bg-subtle)' }}
                    >
                      <Check className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="mt-8 pt-6 border-t text-xs text-[var(--text-muted)]"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span>Duración estimada: 4 a 6 semanas de efecto continuo.</span>
            </div>
          </div>

          {/* Technique 2: Coreana (The Star Technique) */}
          <div 
            className="rounded-3xl p-7 sm:p-9 border shadow-xl flex flex-col justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-subtle) 100%)',
              borderColor: 'var(--border-gold)',
            }}
          >
            {/* Top Glow & Badge */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'var(--accent-gold-glow)' }}
            />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                  style={{
                    backgroundColor: 'var(--accent-gold)',
                    color: 'var(--btn-primary-text)',
                  }}
                >
                  ★ Tendencia Mundial
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                  Técnica Coreana (K-Lash Lift)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  El procedimiento más cotizado en centros estéticos premium. Eleva las pestañas desde el nacimiento en un ángulo perfecto de casi 90° sin rizar la punta ni encresparla, creando un efecto de pestañas infinitas y ordenadas.
                </p>
              </div>

              {/* Visual image */}
              <div 
                className={`rounded-2xl overflow-hidden h-48 sm:h-56 relative border group transition-all duration-300 ${
                  isDraggingCoreano ? 'ring-4 ring-[var(--accent-gold)] scale-[1.02]' : ''
                }`}
                style={{ borderColor: 'var(--border-primary)' }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDraggingCoreano(true);
                }}
                onDragLeave={() => setIsDraggingCoreano(false)}
                onDrop={(e) => handleDrop(e, 'coreano')}
              >
                <img
                  src={coreanoImageSrc}
                  alt="Resultado real de técnica coreana de lifting de pestañas con acabado glossy"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <span 
                  className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs border pointer-events-none"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    color: 'var(--accent-gold-light)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  Elevación extrema de raíz & acabado glossy
                </span>

                {/* Drag & drop overlay */}
                {isDraggingCoreano && (
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center gap-2 text-white z-20 pointer-events-none">
                    <Upload className="w-8 h-8 text-[var(--accent-gold)] animate-bounce" />
                    <p className="font-semibold text-xs">Suelta aquí tu imagen</p>
                  </div>
                )}

                {/* Status toast */}
                {statusCoreano && (
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-[var(--accent-gold)] text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-lg z-20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                    <span>{statusCoreano}</span>
                  </div>
                )}

                {/* Input and button to change photo */}
                <input
                  ref={coreanoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFile(e.target.files[0], 'coreano');
                    }
                  }}
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  {customCoreanoImage && (
                    <button
                      type="button"
                      onClick={(e) => handleReset('coreano', e)}
                      title="Restablecer imagen original"
                      className="opacity-80 hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full p-1.5 text-xs font-medium flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => coreanoInputRef.current?.click()}
                    title="Cambiar foto de técnica coreana"
                    className="opacity-85 hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 backdrop-blur-md border border-[var(--accent-gold)]/60 text-white rounded-full px-2.5 py-1.5 text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-lg"
                  >
                    <Camera className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                    <span className="text-[11px]">Cambiar foto</span>
                  </button>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 pt-2">
                {[
                  "Máxima proyección y elevación directa desde la raíz sin quiebres",
                  "Moldes anatómicos especiales con efecto lamination espejo",
                  "Especial para pestañas cortas, rectas y párpados encapotados",
                  "Nutrición profunda con queratina pura y ácido hialurónico sellado",
                  "Tarifa sugerida de cobro: $30.000 - $45.000 CLP (¡mayor margen!)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                      style={{
                        backgroundColor: 'var(--badge-bg)',
                        borderColor: 'var(--border-primary)',
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="mt-8 pt-6 border-t text-xs text-[var(--text-muted)] relative z-10"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span>Duración prolongada: 6 a 8 semanas intactas.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
