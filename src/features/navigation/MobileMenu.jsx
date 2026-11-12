import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { setIsCouponsOpen, setIsEstimateModalOpen, setIsBookingModalOpen, setSelectedService, setSelectedIndustry } = useApp();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (!isOpen) return null;

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleNavClick = (anchorId) => {
    onClose();
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <div className="fixed inset-0 bg-[#0B2545]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="North Shore Cleaning Systems Inc."
                className="h-10 w-auto object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Quick Call */}
          <a
            href="tel:9788095533"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 mb-4 rounded-xl bg-navy-deep text-white text-sm font-bold shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary-container">call</span>
            Call Jerry: 978-809-5533
          </a>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
            >
              Home
            </button>

            {/* About Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('about')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
              >
                <span>About Us</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'about' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'about' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button onClick={() => handleNavClick('about')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    About North Shore Clean
                  </button>
                  <button onClick={() => handleNavClick('testimonials')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Client Testimonials
                  </button>
                  <button onClick={() => handleNavClick('areas')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Areas Served (Essex County)
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('services')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
              >
                <span>Our Services</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'services' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'services' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs font-bold text-cyan-vibrant">
                    View All Services Overview
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Commercial Office Cleaning
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Floor Stripping & Waxing
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Carpet & Upholstery Cleaning
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Green Cleaning (Eco Certified)
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Tile & Grout Extraction
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Day Porter Services & Supplies
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    COVID-19 Disinfection
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Residential Estate Cleaning
                  </button>
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant font-semibold text-[#043F7B]">
                    Janitorial Products
                  </button>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('industries')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
              >
                <span>Industries Served</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'industries' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'industries' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Commercial Offices & Executive Floors
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Medical & Healthcare Clinics
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Dental Offices
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Child Care & Early Education
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Schools, Campuses & Auditoriums
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Post-Construction Fine Cleaning
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Industrial & Warehouse Logistics
                  </button>
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant">
                    Non-Profit & Community Facilities
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                handleNavClick('about');
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
            >
              Careers
            </button>

            <button
              onClick={() => handleNavClick('estimate')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
          <button
            onClick={() => {
              setIsEstimateModalOpen(true);
              onClose();
            }}
            className="w-full py-3 rounded-xl bg-cyan-vibrant text-white font-bold text-sm shadow-md hover:bg-cyan-bright transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">calculate</span>
            Instant Estimate Calculator
          </button>
          <button
            onClick={() => {
              setIsBookingModalOpen(true);
              onClose();
            }}
            className="w-full py-3 rounded-xl bg-navy-mid text-white font-bold text-sm hover:bg-navy-deep transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary-container">calendar_month</span>
            Book Day 1 Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
}

