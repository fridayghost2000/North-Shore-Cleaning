import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-cyan-vibrant text-white hover:bg-cyan-bright focus:ring-cyan-vibrant/40 shadow-sm hover:shadow-md',
    secondary:
      'bg-navy-deep text-white hover:bg-navy-mid focus:ring-navy-deep/40 shadow-sm hover:shadow-md',
    accent:
      'bg-secondary-container text-on-secondary-container hover:bg-cyan-bright hover:text-white font-bold',
    outline:
      'bg-transparent border border-border-subtle text-navy-deep hover:bg-slate-surface hover:border-slate-300 focus:ring-slate-400',
    ghost:
      'bg-transparent text-navy-deep hover:bg-surface-container-low hover:text-secondary',
    white:
      'bg-white text-navy-deep hover:bg-surface-container-low shadow-sm hover:shadow-md',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <span className="material-symbols-outlined text-[18px]">{Icon}</span>}
      {children}
      {IconRight && <span className="material-symbols-outlined text-[18px]">{IconRight}</span>}
    </button>
  );
}

