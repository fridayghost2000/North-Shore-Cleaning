import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function AboutPage() {
  const navigate = useNavigate();
  const { setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    facilityType: 'Commercial Office',
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
      showToast(`Thank you ${formData.name}! Jerry will contact you shortly.`, 'success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        facilityType: 'Commercial Office',
        notes: '',
      });
    }, 800);
  };

  const corePillars = [
    {
      title: 'Owner-Supervised Operations',
      desc: 'Founder Jerry Sheehan and leadership personally conduct routine account walkthroughs to ensure every task on the tailored checklist is performed to perfection.',
      icon: 'verified_user',
    },
    {
      title: 'No Long-Term Contracts',
      desc: 'We never lock our clients into rigid multi-year agreements. We believe in earning your business and loyalty through consistent, spotless results every single month.',
      icon: 'lock_open_right',
    },
    {
      title: 'Day 1 Onsite Walkthrough',
      desc: 'Before touching a mop or vacuum, we walk your entire facility with you to map out high-traffic touchpoints, flooring types, and customized operational requirements.',
      icon: 'handshake',
    },
    {
      title: 'Screened & Bonded Crews',
      desc: 'Our cleaning professionals undergo thorough background checks, rigorous protocol training, and strict confidentiality instruction for alarms, lockouts, and client data.',
      icon: 'shield_person',
    },
    {
      title: 'Hospital-Grade Disinfection',
      desc: 'We utilize EPA-registered List N virucidal chemicals and advanced electrostatic misting to neutralize viruses, bacteria, and allergens without harming surfaces.',
      icon: 'sanitizer',
    },
    {
      title: 'Minimal Operational Disruption',
      desc: 'Whether you need overnight janitorial shifts, early-morning sanitization, or quiet daytime porter service, our schedules adapt completely to your workflow.',
      icon: 'nest_clock_farsight_analog',
    },
  ];

  const standards = [
    'OSHA Bloodborne Pathogen Standards',
    'CDC Cleanliness & Disinfection Guidelines',
    'EPA List N Virucidal Disinfection',
    'Green Seal Certified Cleaning Solutions',
    'Full General Liability & Workers Comp Coverage',
    'Confidential Security & Alarm Protocols',
  ];

  const faqs = [
    {
      q: 'How long has North Shore Cleaning Systems been in business?',
      a: 'North Shore Cleaning Systems, Inc. was founded in August 2009 by Jerry Sheehan in Beverly, Massachusetts. For over 15 years, we have maintained corporate headquarters, medical suites, schools, and commercial facilities throughout Essex County.',
    },
    {
      q: 'Why does Jerry Sheehan refuse to lock clients into long contracts?',
      a: 'We believe contracts protect bad cleaning companies, not clients. By offering flexible month-to-month service agreements, our team stays accountable and motivated to deliver top-tier quality every single shift.',
    },
    {
      q: 'Do you bring your own cleaning supplies and equipment?',
      a: 'Yes. We supply commercial HEPA-filter vacuums, high-speed rotary floor buffers, pressure extraction units, microfiber cloths, and EPA-registered disinfectants. We also stock restroom paper goods, soap, and trash liners upon request.',
    },
    {
      q: 'What occurs during the Day 1 Onsite Walkthrough?',
      a: 'Jerry Sheehan or an operations supervisor personally inspects your facility alongside your facilities manager. We measure square footage, evaluate flooring, identify priority touchpoints, and construct a bespoke custodial checklist.',
    },
    {
      q: 'Are your cleaners bonded and insured?',
      a: 'Yes. Every crew member is fully covered under our comprehensive commercial liability policy and Massachusetts workers’ compensation insurance, with bonded coverage for complete peace of mind.',
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
          <span className="text-navy-deep font-bold">About Company & Jerry</span>
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
                  <span className="material-symbols-outlined text-[16px]">domain</span>
                  Established August 2009
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs border border-slate-200">
                  Owner Supervised
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15]">
                About North Shore Cleaning Systems & Founder Jerry Sheehan
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Over 15 years of owner-supervised commercial janitorial excellence headquartered at 100 Cummings Center in Beverly, Massachusetts.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded with a straightforward philosophy: provide honest, detail-oriented commercial cleaning without trapping clients in rigid, fine-print contracts. Every account receives direct accountability from leadership and tailored custodial programs.
              </p>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified</span>
                  15+ Years Active
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">lock_reset</span>
                  Zero Contract Lock
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">security</span>
                  Bonded & Insured
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm shadow-lg hover:shadow-cyan-vibrant/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  Get Free Estimate
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
                  src="/about-cleaner.jpg"
                  alt="Jerry Sheehan and professional cleaners at North Shore Cleaning Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent"></div>

                {/* Floating Quality Badge - Positioned safely at top-right */}
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
                    North Shore Cleaning Systems Inc.
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    Headquartered at 100 Cummings Center, Beverly, MA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Narrative & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Story & Philosophy */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-4">
                Our Story & Company Heritage
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                In August 2009, Jerry Sheehan founded North Shore Cleaning Systems with a clear realization: Massachusetts businesses were frustrated by revolving-door cleaning franchises that promised high standards in the sales pitch, only to send untrained sub-contractors and lock facilities into long ironclad agreements.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Jerry committed to a different standard: owner-supervised crews, direct phone access to leadership, and customized cleaning schedules engineered around the customer’s true operational needs. Operating out of the Cummings Center in Beverly, our teams now maintain corporate offices, medical clinics, schools, dental centers, and industrial facilities across Essex County.
              </p>

              {/* Jerry Sheehan Leadership Quote */}
              <div className="mt-8 p-6 rounded-2xl bg-cyan-50/70 border-l-4 border-cyan-vibrant flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-800 italic leading-relaxed">
                  "On day one, we will walk through your business and discuss your particular needs with you. By doing so, your North Shore Cleaning Systems crew member(s) will be able to give you an accurate clean every time!"
                </span>
                <span className="text-xs font-bold text-navy-deep pt-1">
                  — Jerry Sheehan, Founder & President
                </span>
              </div>
            </div>

            {/* Foundational Pillars */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider">
                  The North Shore Advantage
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight">
                  Why Massachusetts Businesses Trust Us
                </h3>
                <p className="text-sm text-slate-600">
                  Six foundational commitments that separate our service from ordinary commercial cleaning companies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((item, idx) => (
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

            {/* Regulatory & Safety Standards */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-4">
                Safety, Insurance & Compliance Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Our staff is certified and trained in handling biohazards, medical cross-contamination controls, EPA-approved virucidal disinfection, and commercial floor chemical safety.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {standards.map((std, idx) => (
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

            {/* FAQs */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-6">
                Frequently Asked Questions About Us
              </h3>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
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
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            {/* Quick Estimate Card */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Direct Contact
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Get Your Free Estimate
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Talk directly with Jerry Sheehan or receive a custom estimate tailored to your facility with zero contract lock-in.
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
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Facility Type</label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08284c] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-300"
                  >
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Medical & Healthcare">Medical & Healthcare</option>
                    <option value="Dental Clinic">Dental Clinic</option>
                    <option value="Child Care Center">Child Care Center</option>
                    <option value="School / Education">School / Education</option>
                    <option value="Industrial & Warehouse">Industrial & Warehouse</option>
                    <option value="Other Facility">Other Facility</option>
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

      {/* 4. Cross Links (Testimonials & Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-border-subtle pt-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div
              onClick={() => navigate('/areas-served')}
              className="p-8 rounded-3xl bg-white border border-border-subtle hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Regional Coverage
              </span>
              <h4 className="text-xl font-extrabold text-navy-deep group-hover:text-cyan-vibrant transition-colors mb-2">
                Explore Areas Served in Essex County →
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                View our service footprint covering Beverly, Danvers, Salem, Peabody, Marblehead, and neighboring Massachusetts cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

