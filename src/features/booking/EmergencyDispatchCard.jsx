import React from 'react';

export default function EmergencyDispatchCard() {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-navy-deep text-white shadow-xl flex flex-col gap-4 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-cyan-vibrant text-white flex items-center justify-center shrink-0 shadow-md">
          <span className="material-symbols-outlined text-[26px]">support_agent</span>
        </div>
        <div>
          <span className="text-xs font-bold text-secondary-container tracking-wider uppercase">
            24/7 Immediate Dispatch
          </span>
          <h3 className="text-lg font-bold text-white">
            Direct Phone Access to Jerry
          </h3>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Need immediate emergency disinfection, post-construction cleanup, or an immediate consultation? Speak directly with management.
      </p>

      <a
        href="tel:9788095533"
        className="w-full py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-extrabold text-base text-center hover:bg-cyan-bright hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
        978-809-5533
      </a>
    </div>
  );
}

