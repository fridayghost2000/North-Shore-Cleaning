import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading';
import ServiceCard from './ServiceCard';
import ServiceDetailModal from './ServiceDetailModal';
import { servicesData } from './servicesData';
import { useApp } from '../../context/AppContext';

export default function ServicesGrid() {
  const { selectedService, setSelectedService, setIsEstimateModalOpen } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredServices = servicesData.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'commercial') return ['office-cleaning', 'day-porter-services', 'janitorial-products'].includes(s.id);
    if (filter === 'floors') return ['floor-stripping-and-waxing', 'tile-and-grout', 'carpet-and-upholstery'].includes(s.id);
    if (filter === 'eco') return ['green-cleaning', 'covid-19-disinfectant', 'residential-cleaning'].includes(s.id);
    return true;
  });

  return (
    <section className="w-full py-16 sm:py-24 bg-slate-bg" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="Commercial & Specialty Solutions"
          title="Our Services"
          subtitle="Our customer is always our number one priority. We know how to clean and will only send a professional staff to your location."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'commercial', label: 'Commercial & Janitorial' },
            { id: 'floors', label: 'Floors, Tile & Carpet' },
            { id: 'eco', label: 'Eco & Disinfection' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-navy-deep text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </div>

        {/* Additional Highlight Row for Carpet & Day Porter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-border-subtle flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">dry_cleaning</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-deep mb-1">
                Carpet & Upholstery Deep Care
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                Carpet and upholstery cleaning prolongs the useful life of your carpet and fabric and improves indoor air quality through thermal extraction.
              </p>
              <button
                onClick={() =>
                  setSelectedService(
                    servicesData.find((s) => s.id === 'carpet-and-upholstery')
                  )
                }
                className="text-xs font-bold text-cyan-vibrant hover:text-navy-deep transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Explore Carpet Specifications
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-sm border border-border-subtle flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">shield_person</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-deep mb-1">
                Day Porter Services & Supplies
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                Continuous daytime facility upkeep, lobby replenishment, restroom stocking, trash mitigation, and complete janitorial consumables supply.
              </p>
              <button
                onClick={() =>
                  setSelectedService(
                    servicesData.find((s) => s.id === 'day-porter-services')
                  )
                }
                className="text-xs font-bold text-cyan-vibrant hover:text-navy-deep transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Explore Day Porter Protocols
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsEstimateModalOpen(true)}
            className="px-8 py-3.5 rounded-xl bg-cyan-vibrant text-white font-bold text-sm hover:bg-cyan-bright transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">calculate</span>
            GET INSTANT CUSTOM ESTIMATE
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}

