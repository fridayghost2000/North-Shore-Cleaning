import React from 'react';

export default function SectionHeading({
  badge,
  badgeColor = 'cyan',
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignments = {
    center: 'items-center text-center mx-auto',
    left: 'items-start text-left',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignments[align] || alignments.center} ${className}`}>
      {badge && (
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-8 h-1 rounded-full ${badgeColor === 'gold' ? 'bg-gold-accent' : 'bg-cyan-vibrant'}`}></span>
          <span className={`text-xs font-bold tracking-widest uppercase ${badgeColor === 'gold' ? 'text-gold-accent' : 'text-cyan-vibrant'}`}>
            {badge}
          </span>
          {align === 'center' && (
            <span className={`w-8 h-1 rounded-full ${badgeColor === 'gold' ? 'bg-gold-accent' : 'bg-cyan-vibrant'}`}></span>
          )}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-deep'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

