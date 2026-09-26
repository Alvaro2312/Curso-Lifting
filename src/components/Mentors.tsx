import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { MENTORS } from '../data/courseData';
import tiareImg from '../assets/tiare-avalos.png';
import alvaroImg from '../assets/alvaro-petrillo.png';

const MentorAvatar: React.FC<{ name: string; candidateImages?: string[]; initialImage: string }> = ({
  name,
  candidateImages = [],
  initialImage
}) => {
  const isTiare = name.toLowerCase().includes('tiare');
  const directAsset = isTiare ? tiareImg : alvaroImg;
  const [idx, setIdx] = React.useState(0);
  const sources = [directAsset, ...candidateImages, initialImage];
  const currentSrc = sources[idx] || directAsset;

  return (
    <img
      src={currentSrc}
      alt={name}
      onError={() => {
        if (idx < sources.length - 1) {
          setIdx(prev => prev + 1);
        }
      }}
      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
    />
  );
};

export const Mentors: React.FC = () => {
  return (
    <section 
      id="expositores" 
      className="py-16 sm:py-24 transition-colors duration-300 border-y relative"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <span id="mentores" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-theme inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span>Formación con Especialistas Reales</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            La Mezcla Perfecta
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            La sinergia perfecta entre maestría técnica en estética de la mirada y estrategia comercial para que tu inversión se traduzca en independencia financiera.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {MENTORS.map((mentor, index) => (
            <div
              key={index}
              className="card-luxury rounded-3xl p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Profile Top: Avatar + Names */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div 
                    className="w-28 h-28 rounded-2xl overflow-hidden shadow-md shrink-0 relative border"
                    style={{ borderColor: 'var(--border-primary)' }}
                  >
                    <MentorAvatar
                      name={mentor.name}
                      candidateImages={mentor.candidateImages}
                      initialImage={mentor.image}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                      {mentor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--accent-gold)]">
                      {mentor.title}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] font-medium">
                      {mentor.experience}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Quote box */}
                <div 
                  className="p-4 rounded-xl italic text-xs sm:text-sm border-l-3"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-secondary)',
                    borderLeftColor: 'var(--accent-gold)',
                  }}
                >
                  "{mentor.quote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
