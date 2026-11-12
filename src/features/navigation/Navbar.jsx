import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsCouponsOpen, setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
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

  const handleIndustryClick = (slug) => {
    navigate(`/industries/${slug}`);
  };

  const isHome = location.pathname === '/';
  const isAboutActive =
    location.pathname.startsWith('/about') ||
    location.pathname.startsWith('/testimonials') ||
    location.pathname.startsWith('/areas-served');

  return (
    <>
      <header className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 border-t-[3px] border-[#0099B9] ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white shadow-[0_1px_6px_rgba(0,0,0,0.06)] py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-left py-0.5 focus:outline-none"
            >
              <img
                src="/logo.png"
                alt="North Shore Cleaning Systems Inc."
                className="h-12 sm:h-13 md:h-14 w-auto max-w-[260px] sm:max-w-[300px] object-contain block shrink-0"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-slate-700">
              {/* Home */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`${isHome ? 'text-[#0099B9] font-bold border-b-2 border-[#0099B9] pb-0.5' : 'hover:text-[#043F7B]'} transition-colors`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group py-1.5">
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className={`flex items-center gap-0.5 ${isAboutActive ? 'text-[#0099B9] font-bold' : 'hover:text-[#043F7B]'} transition-colors focus:outline-none cursor-pointer`}
                >
                  About Us
                  <span className="material-symbols-outlined text-[15px] text-slate-500 group-hover:text-[#043F7B] transition-colors">expand_more</span>
                </button>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 flex flex-col gap-1">
                    <button
                      onClick={() => navigate('/about')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        location.pathname.startsWith('/about')
                          ? 'bg-[#0099B9]/10 text-[#0099B9] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0099B9]'
                      }`}
                    >
                      About Company & Jerry
                    </button>
                    <button
                      onClick={() => navigate('/testimonials')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        location.pathname.startsWith('/testimonials')
                          ? 'bg-[#0099B9]/10 text-[#0099B9] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0099B9]'
                      }`}
                    >
                      Client Testimonials (5-Star)
                    </button>
                    <button
                      onClick={() => navigate('/areas-served')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        location.pathname.startsWith('/areas-served')
                          ? 'bg-[#0099B9]/10 text-[#0099B9] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0099B9]'
                      }`}
                    >
                      Areas Served (Essex County)
                    </button>
                  </div>
                </div>
              </div>

              {/* Our Services Dropdown */}
              <div className="relative group py-1.5">
                <button
                  type="button"
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-0.5 ${location.pathname.startsWith('/services') ? 'text-[#0099B9] font-bold' : 'hover:text-[#043F7B]'} transition-colors focus:outline-none cursor-pointer`}
                >
                  Our Services
                  <span className="material-symbols-outlined text-[15px] text-slate-500 group-hover:text-[#043F7B] transition-colors">expand_more</span>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block w-72 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 flex flex-col gap-1">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-left px-3 py-2 rounded-lg bg-[#0099B9]/10 text-[#0099B9] font-bold transition-colors text-xs cursor-pointer"
                    >
                      All Services Overview
                    </button>
                    <button
                      onClick={() => handleServiceClick('commercial-office-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Commercial Office Cleaning
                    </button>
                    <button
                      onClick={() => handleServiceClick('floor-stripping-and-waxing')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Floor Stripping & Waxing
                    </button>
                    <button
                      onClick={() => handleServiceClick('carpet-and-upholstery-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Carpet & Upholstery Deep Cleaning
                    </button>
                    <button
                      onClick={() => handleServiceClick('green-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Green Cleaning (Eco-Friendly)
                    </button>
                    <button
                      onClick={() => handleServiceClick('tile-and-grout-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Tile & Grout Pressure Extraction
                    </button>
                    <button
                      onClick={() => handleServiceClick('day-porter-services')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Day Porter Services & Restock
                    </button>
                    <button
                      onClick={() => handleServiceClick('covid-19-disinfectant-misting')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      COVID-19 Disinfectant Misting
                    </button>
                    <button
                      onClick={() => handleServiceClick('residential-estate-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Residential Estate Cleaning
                    </button>
                    <button
                      onClick={() => handleServiceClick('janitorial-products')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer font-semibold text-[#043F7B]"
                    >
                      Janitorial Products
                    </button>
                  </div>
                </div>
              </div>

              {/* Industries Served Dropdown */}
              <div className="relative group py-1.5">
                <button
                  type="button"
                  onClick={() => handleNavClick('industries')}
                  className={`flex items-center gap-0.5 ${location.pathname.startsWith('/industries') ? 'text-[#0099B9] font-bold' : 'hover:text-[#043F7B]'} transition-colors focus:outline-none cursor-pointer`}
                >
                  Industries Served
                  <span className="material-symbols-outlined text-[15px] text-slate-500 group-hover:text-[#043F7B] transition-colors">expand_more</span>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block w-72 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 flex flex-col gap-1">
                    <button
                      onClick={() => handleNavClick('industries')}
                      className="text-left px-3 py-2 rounded-lg bg-[#0099B9]/10 text-[#0099B9] font-bold transition-colors text-xs cursor-pointer"
                    >
                      All Industries Overview
                    </button>
                    <button
                      onClick={() => handleIndustryClick('commercial-office')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Commercial Office
                    </button>
                    <button
                      onClick={() => handleIndustryClick('medical-and-healthcare')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Medical & Healthcare
                    </button>
                    <button
                      onClick={() => handleIndustryClick('dental-clinics')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Dental Clinics
                    </button>
                    <button
                      onClick={() => handleIndustryClick('child-care-centers')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Child Care Centers
                    </button>
                    <button
                      onClick={() => handleIndustryClick('schools-and-education')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Schools & Education
                    </button>
                    <button
                      onClick={() => handleIndustryClick('post-construction-cleaning')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Post-Construction Clean
                    </button>
                    <button
                      onClick={() => handleIndustryClick('industrial-and-warehouses')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Industrial & Warehouses
                    </button>
                    <button
                      onClick={() => handleIndustryClick('non-profit-facilities')}
                      className="text-left px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#0099B9] transition-colors text-xs cursor-pointer"
                    >
                      Non-Profit Facilities
                    </button>
                  </div>
                </div>
              </div>

              {/* Careers */}
              <Link
                to="/careers"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`${location.pathname === '/careers' ? 'text-[#0099B9] font-bold border-b-2 border-[#0099B9] pb-0.5' : 'hover:text-[#043F7B]'} transition-colors`}
              >
                Careers
              </Link>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => handleNavClick('estimate')}
                className="hover:text-[#043F7B] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEstimateModalOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#043F7B] text-white text-[11px] sm:text-[11.5px] font-bold hover:bg-[#0099B9] transition-colors shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] text-[#6EC1E4]">grid_view</span>
                Get Free Estimate
              </button>

              {/* User Profile Button */}
              <button
                type="button"
                onClick={() => {
                  setIsBookingModalOpen(true);
                }}
                title="Client Portal / Schedule"
                className="w-7 h-7 rounded-full bg-[#043F7B] text-white flex items-center justify-center hover:bg-[#0099B9] transition-colors shadow-xs cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-[15px]">person</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none"
                aria-label="Open mobile menu"
              >
                <span className="material-symbols-outlined text-[22px]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
