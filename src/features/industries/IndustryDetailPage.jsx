import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { industriesData } from './industriesData';
import { useApp } from '../../context/AppContext';

export default function IndustryDetailPage() {
  const { industrySlug } = useParams();
  const navigate = useNavigate();
  const { setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();

  // Find matching industry by slug or id
  const industry = industriesData.find(
    (item) => item.slug === industrySlug || item.id === industrySlug
  );

  // Quick form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    facilityType: industry ? industry.title : 'Commercial Office',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep facilityType updated if route changes
  useEffect(() => {
    if (industry) {
      setFormData((prev) => ({ ...prev, facilityType: industry.title }));
    }
  }, [industry]);

  // Scroll to top whenever the industry route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [industrySlug]);

  if (!industry) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[36px]">domain_disabled</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-deep mb-2">Industry Sector Not Found</h1>
        <p className="text-slate-600 mb-6 max-w-md">
          The requested industry page does not exist or may have been relocated.
        </p>
        <Link
          to="/#industries"
          className="px-6 py-3 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm shadow-md transition-all"
        >
          Return to Industries Overview
        </Link>
      </div>
    );
  }

  // Filter other industries for recommendations
  const otherIndustries = industriesData.filter((i) => i.id !== industry.id).slice(0, 3);

  const handleQuickEstimateSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you ${formData.name}! Jerry will contact you shortly regarding ${industry.title} sanitation services.`, 'success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        facilityType: industry.title,
        notes: '',
      });
    }, 800);
  };

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
          <Link to="/#industries" className="hover:text-cyan-vibrant transition-colors">
            Industries Served
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-navy-deep font-bold">{industry.title}</span>
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
                  <span className="material-symbols-outlined text-[16px]">{industry.icon}</span>
                  {industry.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs border border-slate-200">
                  {industry.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15]">
                {industry.title} Cleaning Services
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {industry.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {industry.description}
              </p>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified</span>
                  Industry Certified
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">lock_reset</span>
                  No Rigid Contracts
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified_user</span>
                  Bonded & Insured Crews
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm shadow-lg hover:shadow-cyan-vibrant/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  Get Free Estimate for this Facility
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

            {/* Right Column: Hero Visual with Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] group">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent"></div>

                {/* Floating Quality Badge - Positioned safely at top-right so no text is obscured */}
                <div className="absolute top-3.5 right-3.5 z-20 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-navy-deep shadow-lg border border-white/40 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">100% Satisfaction</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Guaranteed Results</div>
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white text-left z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[15px]">security</span>
                    North Shore Cleaning Systems
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    {industry.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Overview & Authentic Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Overview Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
                Sector Standards & Facility Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {industry.fullDetails}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {industry.overview}
              </p>

              {/* Jerry Sheehan Leadership Quote */}
              <div className="mt-8 p-6 rounded-2xl bg-cyan-50/70 border-l-4 border-cyan-vibrant flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "Every industry requires an exact approach. From medical-grade sanitizers in surgical suites to electrostatic spraying in daycares, our North Shore crews execute customized blueprints for every square foot—without tying you down with long-term contracts."
                </span>
                <span className="text-xs font-bold text-navy-deep pt-1">
                  — Jerry Sheehan, Founder & President
                </span>
              </div>
            </div>

            {/* Scope of Work / Protocols Grid */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider">
                  Targeted Custodial Protocols
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight">
                  What We Maintain in {industry.title}
                </h3>
                <p className="text-sm text-slate-600">
                  Custom-engineered sanitization procedures built to satisfy demanding regulatory standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.protocols?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface-container-low border border-slate-100 flex flex-col gap-2.5 hover:border-cyan-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white text-cyan-vibrant shadow-xs flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <h4 className="text-sm font-bold text-navy-deep leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Benefits */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-6">
                Why Massachusetts Facilities Choose North Shore Cleaning Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {industry.keyPoints?.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory & Accreditations Standards */}
            {industry.standards && industry.standards.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-4">
                  Regulatory Compliance & Industry Standards
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industry.standards.map((std, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2.5 rounded-xl bg-navy-deep/5 border border-navy-deep/10 text-navy-deep font-bold text-xs flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified</span>
                      {std}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {industry.faqs && industry.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col gap-4">
                  {industry.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-surface-container-low border border-slate-100">
                      <h4 className="text-sm sm:text-base font-bold text-navy-deep mb-2 flex items-start gap-2">
                        <span className="text-cyan-vibrant font-black">Q:</span>
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            {/* Quick Estimate Card */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Fast Response
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Request Facility Quote
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Receive an accurate, competitive proposal tailored to your specific facility requirements with zero contract lock-in.
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
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Industry Sector</label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08284c] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-300"
                  >
                    {industriesData.map((ind) => (
                      <option key={ind.id} value={ind.title}>
                        {ind.title}
                      </option>
                    ))}
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
                Day 1 Onsite Walkthrough
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Founder Jerry Sheehan or an operations supervisor personally walks through your business to engineer an accurate cleaning checklist.
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

      {/* 4. Explore Other Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-border-subtle pt-12 text-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider block">
                More Sectors
              </span>
              <h3 className="text-2xl font-extrabold text-navy-deep">
                Explore Other Industries We Serve
              </h3>
            </div>
            <Link
              to="/#industries"
              className="text-xs sm:text-sm font-bold text-cyan-vibrant hover:text-cyan-bright transition-colors flex items-center gap-1"
            >
              View All Industries
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherIndustries.map((other) => (
              <div
                key={other.id}
                onClick={() => navigate(`/industries/${other.slug}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-border-subtle hover:-translate-y-1 cursor-pointer group"
              >
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-navy-deep group-hover:text-cyan-vibrant transition-colors mb-2">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {other.description}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-cyan-vibrant flex items-center gap-1">
                    Learn More
                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

