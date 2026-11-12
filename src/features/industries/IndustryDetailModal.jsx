import React from 'react';
import Modal from '../../components/Modal';
import { useApp } from '../../context/AppContext';

export default function IndustryDetailModal({ industry, isOpen, onClose }) {
  const { setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();

  if (!industry) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={industry.title}
      subtitle={industry.tagline}
      maxWidth="max-w-xl"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-cyan-50/60 border border-cyan-100">
          <div className="w-12 h-12 rounded-xl bg-white text-cyan-vibrant flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[28px]">{industry.icon}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {industry.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2.5">
            Key Protocols & Standards:
          </h4>
          <ul className="flex flex-col gap-2">
            {industry.keyPoints.map((pt, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
              >
                <span className="material-symbols-outlined text-[16px] text-cyan-vibrant">check</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <a
            href="tel:9788095533"
            className="text-xs font-bold text-navy-deep hover:text-cyan-vibrant flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">call</span>
            Call Jerry 978-809-5533
          </a>
          <button
            onClick={() => {
              onClose();
              setIsEstimateModalOpen(true);
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">calculate</span>
            Estimate for {industry.title}
          </button>
        </div>
      </div>
    </Modal>
  );
}

