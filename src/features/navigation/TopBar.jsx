import React from 'react';
import { useApp } from '../../context/AppContext';

export default function TopBar() {
  const { setIsCouponsOpen, setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();

  return (
    <div className="bg-[#0F2944] text-white text-xs border-b border-[#043F7B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between min-h-[40px] py-1 gap-2">
        {/* Contact & Location info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[14px] leading-none text-[#6EC1E4]" style={{ fontSize: '14px' }}>location_on</span>
            100 Cummings CTR, #425C Beverly, MA 01915
          </span>
          <span className="hidden sm:flex items-center gap-1.5 opacity-90">
            <span className="material-symbols-outlined text-[14px] leading-none text-[#6EC1E4]" style={{ fontSize: '14px' }}>call</span>
            Give us a Call today:
            <a
              href="tel:9788095533"
              className="font-bold text-white hover:text-[#6EC1E4] transition-colors ml-0.5"
            >
              978-809-5533
            </a>
          </span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90">
            <span className="material-symbols-outlined text-[14px] leading-none text-emerald-400" style={{ fontSize: '14px' }}>schedule</span>
            Mon–Sat 24 Hours
          </span>
        </div>

        {/* Quick Action Pills / Badges - Authentic brand palette */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsCouponsOpen(true)}
            className="px-2.5 py-0.5 rounded bg-[#043F7B] text-white hover:bg-[#0099B9] transition-colors cursor-pointer text-[11px] font-bold"
          >
            Coupons
          </button>
          <button
            onClick={() => setIsEstimateModalOpen(true)}
            className="px-2.5 py-0.5 rounded bg-[#0099B9] text-white hover:bg-[#6EC1E4] hover:text-[#043F7B] transition-colors cursor-pointer text-[11px] font-bold shadow-xs"
          >
            Free Estimate
          </button>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-2.5 py-0.5 rounded bg-[#6EC1E4] text-[#043F7B] hover:bg-white transition-colors cursor-pointer text-[11px] font-bold shadow-xs"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

