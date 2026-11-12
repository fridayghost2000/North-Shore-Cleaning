import React from 'react';

export default function HeroFeatureCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 rounded-xl bg-white text-navy-deep shadow-md flex flex-col justify-between hover:shadow-lg hover:border-cyan-vibrant/30 transition-all border border-border-subtle cursor-pointer group"
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center group-hover:bg-cyan-vibrant group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </div>
        <h3 className="text-sm font-bold text-navy-deep group-hover:text-cyan-vibrant transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

