import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function WelcomeSection() {
  const navigate = useNavigate();
  const { setIsBookingModalOpen } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-16 sm:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image Stack with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img
                src="/about-cleaner.jpg"
                alt="Professional cleaner maintaining client facility"
                className="w-full h-auto aspect-[4/3] max-h-[460px] object-cover"
                loading="eager"
              />
            </div>

            {/* Decorative backing block */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-surface-container -z-0"></div>

            {/* Floating Day 1 Walkthrough Badge */}
            <div className="absolute top-6 left-6 z-20 px-4 py-3 rounded-xl bg-navy-deep/95 text-white backdrop-blur-md shadow-xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">handshake</span>
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Day 1 Onsite Walkthrough</div>
                <div className="text-xs text-secondary-container font-medium">Tailored Custodial Blueprint</div>
              </div>
            </div>
          </div>

          {/* Right Column: Welcome Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left lg:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-deep tracking-tight leading-tight">
              CLEANING IS OUR <span className="text-secondary">BUSINESS</span>
            </h2>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-bg border border-border-subtle flex items-start gap-3.5">
              <span className="material-symbols-outlined text-cyan-vibrant text-[26px] mt-0.5 shrink-0">
                check_circle
              </span>
              <p className="text-sm sm:text-base text-navy-deep font-semibold leading-relaxed tracking-wide">
                FIND OUT WHY WE ARE THE MOST REPUTABLE COMMERCIAL CLEANING SERVICES IN MASSACHUSETTS TODAY!
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              On day one, we will walk through your business and discuss your particular needs with you. By doing so, your North Shore Cleaning Systems crew member(s) will be able to give you an accurate clean every time!
            </p>

            {/* Expandable Company Details */}
            {isExpanded && (
              <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs sm:text-sm text-slate-700 space-y-2 animate-fade-in">
                <p>
                  <strong>Owner Supervised Operations:</strong> Founder Jerry and our regional leadership team personally inspect accounts to verify compliance with CDC, EPA, and OSHA cleanliness protocols.
                </p>
                <p>
                  <strong>Flexible Scheduling:</strong> Whether your company requires nightly off-hours janitorial shifts, midday porter upkeep, weekend deep buffing, or emergency response, we engineer custom shifts with zero client downtime.
                </p>
              </div>
            )}

            {/* Two Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low border border-slate-100">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  domain_verification
                </span>
                <span className="text-xs sm:text-sm font-bold text-navy-deep">
                  Customized Facility Protocols
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low border border-slate-100">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  nest_clock_farsight_analog
                </span>
                <span className="text-xs sm:text-sm font-bold text-navy-deep">
                  Minimal Operational Disruption
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3 rounded-xl bg-cyan-vibrant text-white font-bold text-xs sm:text-sm hover:bg-cyan-bright transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                Read More Details
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <a
                href="tel:9788095533"
                className="px-5 py-3 rounded-xl bg-surface-container text-navy-deep font-bold text-xs sm:text-sm hover:bg-surface-container-high transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">support_agent</span>
                Speak with Jerry • 978-809-5533
              </a>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-3 rounded-xl text-secondary hover:text-cyan-vibrant font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Schedule Walkthrough →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
