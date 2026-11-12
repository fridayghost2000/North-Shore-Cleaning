import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ service, onSelect }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/services/${service.slug || service.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-border-subtle hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0 group-hover:bg-cyan-vibrant group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-navy-deep group-hover:text-cyan-vibrant transition-colors leading-tight">
              {service.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          className="w-full py-2.5 px-4 rounded-xl bg-navy-deep text-white font-bold text-xs uppercase tracking-wider hover:bg-cyan-vibrant transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow"
        >
          <span>{service.title}</span>
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
