import React from 'react';
import { useApp } from '../../context/AppContext';
import TrustBadges from './TrustBadges';

export default function HeroSection() {
  const { setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();

  return (
    <section className="relative w-full bg-navy-deep text-white overflow-hidden py-14 sm:py-18 lg:py-20">
      {/* Subtle architectural ambient lights */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-bright/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Official Welcome & Customer Commitment */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 text-left">
            <span className="text-secondary-container font-extrabold uppercase tracking-widest text-xs sm:text-sm">
              Welcome to
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
              NORTH SHORE <br />
              <span className="text-secondary-container">CLEANING SYSTEMS INC.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              We continually strive to be a great company and North Shore Cleaning Systems is committed to providing high-quality services to our customers. North Shore Cleaning Systems will customize an array of services in order to meet the exact needs of your office or business.
            </p>

            {/* CTAs: Free Estimate & Book Now */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setIsEstimateModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-cyan-vibrant text-white font-bold text-sm hover:bg-cyan-bright transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px] group-hover:rotate-12 transition-transform">
                  calculate
                </span>
                Free Estimate
              </button>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-white text-navy-deep font-bold text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px] text-cyan-vibrant">
                  calendar_month
                </span>
                Book Now
              </button>
            </div>

            {/* Trust Badges */}
            <TrustBadges />
          </div>

          {/* Right Column: Clean Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-mid border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfbTlxRKEYvh_zuKKJDrvxnszLoUR715Hw3RdfQlCFawMJdBEAqwVOVgnDN7wCM27H6UJY-EWwKj2RCpaZ-0XSc5ZFdJAFZG2n2jdUgg3Ni-ou38GFABZI73flsTIh6l6i3mbe_czr9bUiBtell9PG4FQ4voXjQZ4XMaYbCV3G-hN4n-m3icV0azHgHemqkMOFS5ui07xM_zDG2Lgt_kIWHaJrbS-x8e-pYd9ivWc"
                alt="Uniformed professional commercial cleaning crew polishing a corporate office floor in Beverly MA"
                className="w-full h-[300px] sm:h-[350px] lg:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-vibrant/90 text-white text-xs font-bold backdrop-blur-sm shadow-md">
                  Active North Shore Service
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 bg-navy-deep/85 px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
                  100% Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

