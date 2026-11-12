import React from 'react';

export default function Badge({
  children,
  variant = 'cyan',
  size = 'sm',
  icon,
  className = '',
}) {
  const baseStyles = 'inline-flex items-center font-bold uppercase tracking-wider rounded-full';

  const variants = {
    cyan: 'bg-cyan-vibrant/10 text-cyan-vibrant border border-cyan-vibrant/20',
    cyanSolid: 'bg-cyan-vibrant text-white',
    emerald: 'bg-[#D1FAE5] text-success-emerald border border-success-emerald/20',
    gold: 'bg-gold-light text-gold-accent border border-amber-300',
    navy: 'bg-navy-mid/60 text-secondary-container backdrop-blur-sm border border-secondary-container/20',
    slate: 'bg-slate-surface text-slate-700 border border-border-subtle',
    blue: 'bg-secondary-fixed text-on-secondary-fixed',
  };

  const sizes = {
    xs: 'text-[0.65rem] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-sm px-3.5 py-1.5 gap-2',
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.cyan} ${sizes[size] || sizes.sm} ${className}`}>
      {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
      {children}
    </span>
  );
}

