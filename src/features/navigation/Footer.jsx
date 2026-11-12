import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function Footer() {
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-navy-deep text-white pt-16 pb-10 border-t border-navy-mid/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-mid/40">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-md">
                <img
                  src="/logo.png"
                  alt="North Shore Cleaning Systems Inc."
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-secondary-container uppercase tracking-wider">
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
                <button onClick={() => scrollTo('about')} className="hover:text-secondary-container transition-colors text-left">
                  About Us & Jerry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('industries')} className="hover:text-secondary-container transition-colors text-left">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('testimonials')} className="hover:text-secondary-container transition-colors text-left">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => setIsEstimateModalOpen(true)} className="hover:text-secondary-container transition-colors text-left">
                  Instant Quote Calculator
                </button>
              </li>
              <li>
                <button onClick={() => setIsBookingModalOpen(true)} className="hover:text-secondary-container transition-colors text-left">
                  Book Walkthrough
                </button>
              </li>
              <li>
                <button onClick={() => setIsCouponsOpen(true)} className="hover:text-secondary-container transition-colors text-left text-amber-300 flex items-center gap-1">
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
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Office Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Floor Stripping & Waxing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Carpet & Upholstery Care
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Green Cleaning (Eco)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Tile & Grout Cleaning
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  Day Porter Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left">
                  COVID-19 Disinfectant
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-secondary-container transition-colors text-left font-semibold text-[#6EC1E4]">
                  Janitorial Products & Supplies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Drop Us a Line Quick Callback */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white tracking-wide">Drop Us a Line</h4>
            <p className="text-xs text-slate-300">
              Instant dispatch support and estimate inquiries.
            </p>
            <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                value={callbackName}
                onChange={(e) => setCallbackName(e.target.value)}
                placeholder="Your Name or Facility"
                className="h-10 px-3 rounded-lg bg-navy-mid text-white placeholder:text-slate-400 text-xs border border-navy-mid/60 focus:border-cyan-vibrant focus:outline-none"
              />
              <input
                type="email"
                required
                value={callbackEmail}
                onChange={(e) => setCallbackEmail(e.target.value)}
                placeholder="Work Email *"
                className="h-10 px-3 rounded-lg bg-navy-mid text-white placeholder:text-slate-400 text-xs border border-navy-mid/60 focus:border-cyan-vibrant focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-lg bg-cyan-vibrant text-white font-bold text-xs hover:bg-cyan-bright transition-colors flex items-center justify-center gap-1.5 mt-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                Request Callback
              </button>
              {submitted && (
                <p className="text-xs text-emerald-300 flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Received! Jerry will be in touch.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} North Shore Cleaning Systems Inc. 100 Cummings CTR, Suite 425C Beverly, MA 01915. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Licensing & Bond Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

