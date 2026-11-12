import React from 'react';
import Modal from '../../components/Modal';
import Badge from '../../components/Badge';
import { useApp } from '../../context/AppContext';

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  const { setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();

  if (!service) return null;

  const handleRequestQuote = () => {
    onClose();
    setIsEstimateModalOpen(true);
  };

  const handleBookWalkthrough = () => {
    onClose();
    setIsBookingModalOpen(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      subtitle={service.tagline}
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-6">
        {/* Service Hero Image */}
        <div className="relative h-60 rounded-xl overflow-hidden bg-slate-100 shadow-inner">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge variant={service.badgeVariant || 'cyan'}>
              {service.badge}
            </Badge>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div>
          <h4 className="text-sm font-bold text-navy-deep uppercase tracking-wider mb-2">
            Service Specifications
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.fullDetails}
          </p>
        </div>

        {/* Key Inclusions Check List */}
        <div>
          <h4 className="text-sm font-bold text-navy-deep uppercase tracking-wider mb-3">
            What's Included in Every Visit:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
              >
                <span className="material-symbols-outlined text-[18px] text-cyan-vibrant shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <a
            href="tel:9788095533"
            className="text-xs font-bold text-navy-deep hover:text-cyan-vibrant flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
            Questions? Call Jerry 978-809-5533
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={handleBookWalkthrough}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-deep font-bold text-xs transition-colors cursor-pointer"
            >
              Book Walkthrough
            </button>
            <button
              onClick={handleRequestQuote}
              className="px-5 py-2.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

