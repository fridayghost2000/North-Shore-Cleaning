import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const navigate = useNavigate();
  const { setIsCouponsOpen, setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();
  const [callbackName, setCallbackName] = useState('');
  const [callbackEmail, setCallbackEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackEmail) return;
    setSubmitted(true);
    showToast(`Thank you ${callbackName || 'Client'}! Jerry will follow up with you today.`, 'success');
    setCallbackName('');
    setCallbackEmail('');
  };

  const scrollTo = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <footer className="w-full bg-navy-deep text-white pt-16 pb-10 border-t border-navy-mid/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-mid/40">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2.5">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-md hover:shadow-lg transition-all focus:outline-none"
              >
                <img
                  src="/logo.png"
                  alt="North Shore Cleaning Systems Inc."
                  className="h-9 sm:h-10 w-auto object-contain block"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <span className="text-xs uppercase tracking-widest text-[#6EC1E4] font-bold">
                Commercial Sanitation & Janitorial Authority
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Setting the premier benchmark for corporate campus sanitization, clinical medical cleaning, and enterprise facility maintenance across Beverly, MA and the greater North Shore region.
            </p>

            <div className="flex flex-col gap-2.5 text-sm text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0 mt-0.5">location_on</span>
                <span>100 Cummings CTR, Suite 425C, Beverly, MA 01915</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0">call</span>
                <a href="tel:9788095533" className="hover:text-secondary-container transition-colors font-bold text-white">
                  978-809-5533
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0">verified</span>
                <span>Mon-Sat 24 Hours Active Dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  About Us & Jerry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  All Services Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/testimonials')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Client Reviews & Proof
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/areas-served')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Regional Areas Served
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/careers')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Careers & Job Openings
                </button>
              </li>
              <li>
                <button onClick={() => setIsEstimateModalOpen(true)} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Instant Estimate Tool
                </button>
              </li>
              <li>
                <button onClick={() => setIsBookingModalOpen(true)} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Schedule Walkthrough
                </button>
              </li>
              <li>
                <button onClick={() => setIsCouponsOpen(true)} className="hover:text-secondary-container transition-colors text-left text-amber-300 flex items-center gap-1 cursor-pointer">
                  <span>Special Coupons</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">Save</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white tracking-wide">Core Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleServiceClick('commercial-office-cleaning')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Commercial Office Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('floor-stripping-and-waxing')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Floor Stripping & Waxing
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('carpet-and-upholstery-cleaning')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Carpet & Upholstery Care
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('green-cleaning')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Green Cleaning (Eco)
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('tile-and-grout-cleaning')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Tile & Grout Pressure Extraction
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('day-porter-services')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Day Porter Services & Restock
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('covid-19-disinfectant-misting')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  COVID-19 Disinfectant Misting
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('residential-estate-cleaning')} className="hover:text-secondary-container transition-colors text-left cursor-pointer">
                  Residential Estate Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('janitorial-products')} className="hover:text-secondary-container transition-colors text-left font-semibold text-[#6EC1E4] cursor-pointer">
                  Janitorial Products & Supplies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Drop Us a Line Quick Callback */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white tracking-wide">Drop Us a Line</h4>
            <p className="text-xs text-slate-300">
              Enter your email and Jerry will follow up directly today to discuss your building's cleaning specifications.
            </p>

            <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-2 mt-1">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={callbackName}
                onChange={(e) => setCallbackName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-navy-mid/60 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-vibrant"
              />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={callbackEmail}
                onChange={(e) => setCallbackEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-navy-mid/60 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-vibrant"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-cyan-vibrant text-white font-bold text-xs hover:bg-cyan-bright transition-colors cursor-pointer shadow-sm"
              >
                Request Callback
              </button>
            </form>

            <div className="pt-2 text-[11px] text-slate-400">
              Need immediate dispatch? Call{' '}
              <a href="tel:9788095533" className="text-secondary-container font-bold hover:underline">
                978-809-5533
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} North Shore Cleaning Systems, Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => navigate('/terms-of-service')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Terms of Custodial Service
            </button>
            <span>•</span>
            <button onClick={() => navigate('/terms-of-service#si')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Safety Information & Standards (#si)
            </button>
            <span>•</span>
            <button onClick={() => navigate('/terms-of-service#security')} className="hover:text-cyan-300 transition-colors cursor-pointer">
              Privacy & Facility Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
