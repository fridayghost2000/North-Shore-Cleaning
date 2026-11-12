import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import IndustryCard from './IndustryCard';
import IndustryDetailModal from './IndustryDetailModal';
import { industriesData } from './industriesData';
import { useApp } from '../../context/AppContext';

export default function IndustriesGrid() {
  const { selectedIndustry, setSelectedIndustry } = useApp();

  return (
    <section className="w-full py-16 sm:py-24 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-cyan-vibrant rounded-full"></span>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                Targeted Expertise
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-deep tracking-tight">
              Industries Served in Massachusetts
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
            Every facility archetype demands compliant chemical selections, sanitation frequency, and discreet security protocols.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {industriesData.map((ind) => (
            <IndustryCard
              key={ind.id}
              industry={ind}
              onSelect={(item) => setSelectedIndustry(item)}
            />
          ))}
        </div>
      </div>

      {/* Industry Detail Modal */}
      <IndustryDetailModal
        industry={selectedIndustry}
        isOpen={!!selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
      />
    </section>
  );
}

