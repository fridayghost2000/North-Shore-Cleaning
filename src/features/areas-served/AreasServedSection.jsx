import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { areasData } from './areasData';
import { useApp } from '../../context/AppContext';

export default function AreasServedSection() {
  const { setIsEstimateModalOpen } = useApp();
  const [selectedTown, setSelectedTown] = useState('Beverly');

  return (
    <section className="w-full py-16 bg-white border-b border-border-subtle" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-1 bg-cyan-vibrant rounded-full"></span>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                Regional Coverage
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-deep">
              Areas Served Across Massachusetts
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
            <span className="material-symbols-outlined text-cyan-vibrant text-[20px]">
              pin_drop
            </span>
            Headquartered at 100 Cummings CTR, #425C Beverly, MA
          </div>
        </div>

        {/* Towns Pills Grid */}
        <div className="flex flex-wrap gap-2.5">
          {areasData.map((town) => (
            <button
              key={town.name}
              onClick={() => {
                setSelectedTown(town.name);
                setIsEstimateModalOpen(true);
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 cursor-pointer border ${
                selectedTown === town.name
                  ? 'bg-navy-deep text-white border-navy-deep shadow-md'
                  : 'bg-surface-container text-navy-deep hover:bg-secondary hover:text-white border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-cyan-vibrant">
                location_city
              </span>
              <span>{town.name}</span>
              {town.isHQ && (
                <span className="px-1.5 py-0.2 text-[9px] bg-secondary-container text-on-secondary-container rounded font-bold">
                  HQ
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500 italic">
            *Don't see your specific North Shore town? We also service surrounding communities across Essex County and Greater Boston upon request.
          </p>
          <Link
            to="/areas-served"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-vibrant hover:text-navy-deep transition-colors shrink-0"
          >
            <span>Explore All Municipal Details</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

