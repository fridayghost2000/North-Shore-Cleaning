import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { areasData } from './areasData';
import { useApp } from '../../context/AppContext';

export default function AreasServedPage() {
  const navigate = useNavigate();
  const { setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Beverly (HQ)',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleQuickEstimateSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you ${formData.name}! Jerry will contact you regarding cleaning services in ${formData.location}.`, 'success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: 'Beverly (HQ)',
        notes: '',
      });
    }, 800);
  };

  const detailedMunicipalities = [
    {
      name: 'Beverly',
      zip: '01915',
      isHQ: true,
      tag: 'Headquarters & Operations Center',
      desc: 'Home of our main headquarters at 100 Cummings Center, Suite 425C. We provide daily and nightly commercial cleaning for Cummings Center suites, medical offices, technology firms, and downtown businesses.',
      icon: 'apartment',
    },
    {
      name: 'Danvers',
      zip: '01923',
      tag: 'Corporate & Route 1 Corridors',
      desc: 'Rapidly accessible corporate campuses, dental clinics, retail complexes, and medical facilities along Route 1, Route 128, and Endicott Street.',
      icon: 'location_city',
    },
    {
      name: 'Salem',
      zip: '01970',
      tag: 'Historic & Professional District',
      desc: 'Professional legal offices, healthcare centers, non-profit institutions, and commercial business properties in downtown Salem and Highland Ave.',
      icon: 'account_balance',
    },
    {
      name: 'Peabody',
      zip: '01960',
      tag: 'Centennial Park & Industrial Hub',
      desc: 'Major commercial cleaning coverage across Centennial Industrial Park, medical plazas, corporate centers, and manufacturing warehouses.',
      icon: 'warehouse',
    },
    {
      name: 'Marblehead',
      zip: '01945',
      tag: 'Executive & Private Suites',
      desc: 'Boutique office suites, private medical practices, financial consulting firms, and retail spaces demanding discreet, thorough upkeep.',
      icon: 'shield_moon',
    },
    {
      name: 'Lynnfield',
      zip: '01940',
      tag: 'MarketStreet & Corporate Corridors',
      desc: 'Executive suites, lifestyle retail centers, and modern office spaces situated near MarketStreet Lynnfield and surrounding corporate parks.',
      icon: 'storefront',
    },
    {
      name: 'Swampscott',
      zip: '01907',
      tag: 'Coastal Commercial Spaces',
      desc: 'Medical clinics, professional services, dental centers, and community non-profit facilities maintained with strict sanitation protocols.',
      icon: 'domain',
    },
    {
      name: 'Hamilton & Wenham',
      zip: '01936 / 01984',
      tag: 'Academic & Institutional Grounds',
      desc: 'Private academies, institutional centers, estate commercial properties, and non-profit headquarters across northern Essex County.',
      icon: 'school',
    },
    {
      name: 'Middleton & Topsfield',
      zip: '01949 / 01983',
      tag: 'Flex Spaces & Logistics Warehouses',
      desc: 'Contractor facilities, industrial distribution centers, technology flex spaces, and suburban corporate office complexes.',
      icon: 'local_shipping',
    },
    {
      name: 'Gloucester & Cape Ann',
      zip: '01930',
      tag: 'Marine & Regional Facilities',
      desc: 'Commercial marine operations, creative office studios, medical branches, and community institutions throughout Cape Ann.',
      icon: 'sailing',
    },
  ];

  const coverageBenefits = [
    {
      title: 'Centrally Located Headquarters',
      desc: 'Based directly inside the Cummings Center in Beverly, our teams reach any Essex County facility within minutes.',
      icon: 'my_location',
    },
    {
      title: '24/7 Rapid Emergency Response',
      desc: 'Active commercial accounts enjoy priority access to emergency water extraction, disinfectant misting, and spill cleanup.',
      icon: 'alarm_on',
    },
    {
      title: 'Local Background-Checked Staff',
      desc: 'Our cleaners live locally in Massachusetts, have verified credentials, and maintain strict security & alarm protocols.',
      icon: 'badge',
    },
    {
      title: 'Zero Subcontractors',
      desc: 'Every clean is performed by direct North Shore Cleaning Systems personnel under Jerry Sheehan’s active oversight.',
      icon: 'handshake',
    },
  ];

  return (
    <div className="w-full bg-surface-container-low pb-20">
      {/* 1. Breadcrumb Bar */}
      <div className="w-full bg-white border-b border-border-subtle py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-cyan-vibrant transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-400">About Us</span>
          <span className="text-slate-400">/</span>
          <span className="text-navy-deep font-bold">Areas Served (Essex County)</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-vibrant font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  Essex County Coverage
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs border border-slate-200">
                  Headquartered in Beverly, MA
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15]">
                Commercial Cleaning Areas Served in Essex County & North Shore, MA
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Prompt dispatch, customized custodial programs, and owner-supervised janitorial services across Massachusetts’ premier commercial centers.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From our corporate headquarters at 100 Cummings Center in Beverly, our teams deliver spotless maintenance for business parks, medical campuses, and executive suites throughout northern Massachusetts.
              </p>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">location_on</span>
                  11+ Cities Covered
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">bolt</span>
                  Rapid Local Dispatch
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified</span>
                  Zero Travel Surcharges
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm shadow-lg hover:shadow-cyan-vibrant/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  Check Availability in Your City
                </button>

                <a
                  href="tel:9788095533"
                  className="px-5 py-3.5 rounded-xl bg-navy-deep hover:bg-navy-mid text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-cyan-300">call</span>
                  Speak with Jerry: 978-809-5533
                </a>
              </div>
            </div>

            {/* Right Column: HQ Anchor Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-white/10 text-left relative overflow-hidden">
                <div className="relative z-10 flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">domain</span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                      Central Dispatch Hub
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      100 Cummings Center, Suite 425C
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">Beverly, MA 01915</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed border-l-2 border-cyan-400 pl-4 py-1">
                    "Being situated right inside the Cummings Center allows our crews to provide unmatched responsiveness to tenants and immediate dispatch throughout all adjacent towns."
                  </p>

                  <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span>Direct Hotline:</span>
                      <a href="tel:9788095533" className="text-cyan-300 font-bold hover:text-white">
                        978-809-5533
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dispatch Hours:</span>
                      <span className="text-white font-semibold">Mon-Sat 24 Hours Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coverage Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coverageBenefits.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-border-subtle shadow-sm flex flex-col gap-2 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              </div>
              <h4 className="text-sm font-bold text-navy-deep">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Municipalities Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div>
              <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Municipal Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-2">
                Cities & Towns We Proudly Maintain
              </h2>
              <p className="text-sm text-slate-600">
                Explore our localized custodial operations across Essex County's primary business centers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detailedMunicipalities.map((muni, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-white border transition-all flex flex-col justify-between gap-4 ${
                    muni.isHQ
                      ? 'border-cyan-300 shadow-md ring-2 ring-cyan-400/20'
                      : 'border-border-subtle shadow-xs hover:border-cyan-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-cyan-vibrant flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">{muni.icon}</span>
                        </div>
                        <h3 className="text-base font-extrabold text-navy-deep">{muni.name}</h3>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        ZIP {muni.zip}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-cyan-vibrant mb-2">{muni.tag}</div>

                    <p className="text-xs text-slate-600 leading-relaxed">{muni.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Daily Shifts
                    </span>
                    <button
                      onClick={() => setIsEstimateModalOpen(true)}
                      className="text-cyan-vibrant hover:text-navy-deep font-bold cursor-pointer"
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Protocols Note */}
            <div className="p-8 rounded-3xl bg-white border border-border-subtle text-left flex flex-col gap-4">
              <h3 className="text-xl font-bold text-navy-deep">
                Need Service in an Adjacent Community?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your business is located just outside our primary listed municipalities (such as Woburn, Wakefield, Burlington, or southern New Hampshire borders), contact Jerry Sheehan directly. We regularly take on multi-facility corporate accounts and regional office portfolios throughout greater Massachusetts.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="tel:9788095533"
                  className="px-5 py-2.5 rounded-xl bg-navy-deep text-white font-bold text-xs hover:bg-navy-mid transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-cyan-300">call</span>
                  Inquire by Phone: 978-809-5533
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            {/* Quick Estimate Card */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Local Estimate
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Request Service Quote
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Confirm fast service availability for your commercial location with zero long-term commitment.
              </p>

              <form onSubmit={handleQuickEstimateSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-300"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 978-555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-300"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Your City / Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08284c] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-300"
                  >
                    {areasData.map((area, idx) => (
                      <option key={idx} value={area.name}>
                        {area.name} (ZIP {area.zip})
                      </option>
                    ))}
                    <option value="Other Essex County">Other Essex County City</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span>Direct Line:</span>
                <a href="tel:9788095533" className="text-cyan-300 hover:text-white font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">call</span>
                  978-809-5533
                </a>
              </div>
            </div>

            {/* Walkthrough Scheduling Banner */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-subtle text-left flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">handshake</span>
              </div>
              <h4 className="text-base font-bold text-navy-deep">
                Schedule Local Walkthrough
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Founder Jerry Sheehan personally tours your facility anywhere in Essex County to develop a tailored cleaning blueprint.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="mt-1 py-2.5 px-4 rounded-xl bg-surface-container text-navy-deep font-bold text-xs hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule Free Walkthrough →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cross Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-border-subtle pt-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              onClick={() => navigate('/about')}
              className="p-8 rounded-3xl bg-white border border-border-subtle hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Company Heritage
              </span>
              <h4 className="text-xl font-extrabold text-navy-deep group-hover:text-cyan-vibrant transition-colors mb-2">
                About Company & Jerry Sheehan →
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn how Jerry founded North Shore Cleaning Systems in 2009 with an owner-supervised, zero-contract model.
              </p>
            </div>

            <div
              onClick={() => navigate('/testimonials')}
              className="p-8 rounded-3xl bg-white border border-border-subtle hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Client Proof
              </span>
              <h4 className="text-xl font-extrabold text-navy-deep group-hover:text-cyan-vibrant transition-colors mb-2">
                Read 5-Star Client Reviews →
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discover what clinic directors, corporate CEOs, and facility managers across Beverly and Essex County say about our service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

