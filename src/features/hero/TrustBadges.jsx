import React from 'react';

export default function TrustBadges() {
  const badges = [
    {
      icon: 'verified_user',
      iconColor: 'text-secondary-container',
      title: 'Fully Insured',
      subtitle: '& Bonded Crew',
    },
    {
      icon: 'schedule',
      iconColor: 'text-emerald-400',
      title: '24/7 Availability',
      subtitle: 'Off-Hours Active',
    },
    {
      icon: 'star',
      iconColor: 'text-amber-400',
      title: 'Essex County',
      subtitle: 'Top Rated Partner',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 max-w-lg">
      {badges.map((b, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 bg-navy-mid/40 py-2 px-3 rounded-lg border border-white/10 backdrop-blur-sm"
        >
          <span className={`material-symbols-outlined material-symbols-fill text-[19px] shrink-0 ${b.iconColor}`}>
            {b.icon}
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-white leading-tight">{b.title}</span>
            <span className="text-[10px] text-slate-300 leading-tight">{b.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

