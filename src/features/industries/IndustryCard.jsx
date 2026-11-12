import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IndustryCard({ industry, onSelect }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/industries/${industry.slug || industry.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="p-5 rounded-2xl bg-slate-bg hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-3 border border-border-subtle group cursor-pointer w-full hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-white text-cyan-vibrant flex items-center justify-center shadow-sm group-hover:bg-cyan-vibrant group-hover:text-white transition-all group-hover:scale-105 border border-slate-100">
        <span className="material-symbols-outlined text-[28px]">{industry.icon}</span>
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-bold text-navy-deep group-hover:text-cyan-vibrant transition-colors">
          {industry.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {industry.tagline}
        </p>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
        className="text-[11px] font-bold text-secondary-container bg-navy-deep hover:bg-cyan-vibrant group-hover:opacity-100 transition-all px-3 py-1 rounded-full flex items-center gap-1 mt-auto cursor-pointer"
      >
        <span>Explore Sector</span>
        <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
