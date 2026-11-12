import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { setIsCouponsOpen, setIsEstimateModalOpen, setIsBookingModalOpen, setSelectedService, setSelectedIndustry } = useApp();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (!isOpen) return null;

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleNavClick = (anchorId) => {
    onClose();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (slug) => {
    onClose();
    navigate(`/services/${slug}`);
  };

  const handleIndustryClick = (slug) => {
    onClose();
    navigate(`/industries/${slug}`);
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
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
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
                if (window.location.pathname !== '/') navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Home
            </button>

            {/* About Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('about')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
              >
                <span>About Us</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'about' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'about' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/about');
                    }}
                    className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer"
                  >
                    About Company & Jerry
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/testimonials');
                    }}
                    className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer"
                  >
                    Client Testimonials (5-Star)
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/areas-served');
                    }}
                    className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer"
                  >
                    Areas Served (Essex County)
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('services')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
              >
                <span>Our Services</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'services' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'services' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button onClick={() => handleNavClick('services')} className="text-left px-2 py-1.5 text-xs font-bold text-cyan-vibrant cursor-pointer">
                    View All Services Overview
                  </button>
                  <button onClick={() => handleServiceClick('commercial-office-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Commercial Office Cleaning
                  </button>
                  <button onClick={() => handleServiceClick('floor-stripping-and-waxing')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Floor Stripping & Waxing
                  </button>
                  <button onClick={() => handleServiceClick('carpet-and-upholstery-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Carpet & Upholstery Deep Cleaning
                  </button>
                  <button onClick={() => handleServiceClick('green-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Green Cleaning (Eco-Friendly)
                  </button>
                  <button onClick={() => handleServiceClick('tile-and-grout-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Tile & Grout Pressure Extraction
                  </button>
                  <button onClick={() => handleServiceClick('day-porter-services')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Day Porter Services & Restock
                  </button>
                  <button onClick={() => handleServiceClick('covid-19-disinfectant-misting')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    COVID-19 Disinfectant Misting
                  </button>
                  <button onClick={() => handleServiceClick('residential-estate-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Residential Estate Cleaning
                  </button>
                  <button onClick={() => handleServiceClick('janitorial-products')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant font-semibold text-[#043F7B] cursor-pointer">
                    Janitorial Products
                  </button>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div>
              <button
                onClick={() => toggleSubmenu('industries')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
              >
                <span>Industries Served</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform ${openSubmenu === 'industries' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openSubmenu === 'industries' && (
                <div className="ml-4 pl-2 border-l-2 border-slate-200 flex flex-col gap-1 py-1">
                  <button onClick={() => handleNavClick('industries')} className="text-left px-2 py-1.5 text-xs font-bold text-cyan-vibrant cursor-pointer">
                    View All Industries Overview
                  </button>
                  <button onClick={() => handleIndustryClick('commercial-office')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Commercial Office
                  </button>
                  <button onClick={() => handleIndustryClick('medical-and-healthcare')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Medical & Healthcare
                  </button>
                  <button onClick={() => handleIndustryClick('dental-clinics')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Dental Clinics
                  </button>
                  <button onClick={() => handleIndustryClick('child-care-centers')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Child Care Centers
                  </button>
                  <button onClick={() => handleIndustryClick('schools-and-education')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Schools & Education
                  </button>
                  <button onClick={() => handleIndustryClick('post-construction-cleaning')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Post-Construction Clean
                  </button>
                  <button onClick={() => handleIndustryClick('industrial-and-warehouses')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Industrial & Warehouses
                  </button>
                  <button onClick={() => handleIndustryClick('non-profit-facilities')} className="text-left px-2 py-1.5 text-xs text-slate-600 hover:text-cyan-vibrant cursor-pointer">
                    Non-Profit Facilities
                  </button>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('quote')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Get Free Estimate
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-100 hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              setIsEstimateModalOpen(true);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
          >
            Calculate Free Estimate
          </button>
          <button
            onClick={() => {
              onClose();
              setIsBookingModalOpen(true);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-deep text-xs font-bold transition-colors cursor-pointer"
          >
            Schedule Day 1 Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
}
