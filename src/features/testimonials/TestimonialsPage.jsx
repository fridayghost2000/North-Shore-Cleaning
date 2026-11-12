import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { testimonialsData } from './testimonialsData';
import { useApp } from '../../context/AppContext';

export default function TestimonialsPage() {
  const navigate = useNavigate();
  const { setIsEstimateModalOpen, setIsBookingModalOpen, showToast } = useApp();

  const [activeFilter, setActiveFilter] = useState('all');
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

  const filteredReviews = testimonialsData.filter((item) => {
    if (activeFilter === 'medical') {
      return item.role?.toLowerCase().includes('clinic') || item.location?.toLowerCase().includes('medical');
    }
    if (activeFilter === 'corporate') {
      return (
        item.role?.toLowerCase().includes('administrator') ||
        item.role?.toLowerCase().includes('ceo') ||
        item.role?.toLowerCase().includes('owner') ||
        item.role?.toLowerCase().includes('manager')
      );
    }
    return true;
  });

  const testimonialHighlights = [
    {
      stat: '5.0 / 5.0',
      label: 'Average Client Rating',
      desc: 'Consistent 5-star ratings from facility directors across Essex County',
    },
    {
      stat: '100%',
      label: 'Satisfaction Guarantee',
      desc: 'Owner-supervised quality inspections with immediate shift resolution',
    },
    {
      stat: '15+ Years',
      label: 'Commercial Heritage',
      desc: 'Serving businesses continuously from Beverly, MA since August 2009',
    },
    {
      stat: 'Zero',
      label: 'Locked-In Contracts',
      desc: 'Clients stay because of reliable cleanliness, not legal pressure',
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
          <span className="text-navy-deep font-bold">Client Testimonials (5-Star)</span>
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
                  <span className="material-symbols-outlined text-[16px]">hotel_class</span>
                  5-Star Client Reputation
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">
                  Verified Local Reviews
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15]">
                Client Testimonials & 5-Star Reviews
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Read authentic feedback from corporate CEOs, medical clinic administrators, and facility managers across Massachusetts.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe genuine client satisfaction is the only metric that matters. Every quote below reflects real ongoing partnerships—where business leaders know they can call founder Jerry Sheehan directly.
              </p>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-amber-500 text-[18px]">star</span>
                  5.0 Star Rating
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">verified</span>
                  100% Real Feedback
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">handshake</span>
                  Multi-Year Clients
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

            {/* Right Column: Rating Authority Visual */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-white/10 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined text-amber-400 text-[28px] fill-current">
                        star
                      </span>
                    ))}
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">5.0 / 5.0</div>
                    <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mt-1">
                      Premier Cleanliness Standards
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-1">
                    "We have had cleaners come and go and he is the first one that does a stand up excellent job. He cleans and disinfects this office like it were a hospital."
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-slate-300">
                    <span className="font-bold text-white">— Cathy, Branch Administrator</span>
                    <span className="text-cyan-300 font-semibold">Beverly Office Branch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stat Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonialHighlights.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-border-subtle shadow-sm flex flex-col gap-1 text-left"
            >
              <div className="text-2xl sm:text-3xl font-black text-navy-deep">{stat.stat}</div>
              <div className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider">{stat.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials Wall & Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            {/* Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-3 rounded-2xl border border-border-subtle shadow-xs">
              <span className="text-xs font-bold text-navy-deep px-3">Filter by Facility Type:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-navy-deep text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All Reviews ({testimonialsData.length})
                </button>
                <button
                  onClick={() => setActiveFilter('corporate')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === 'corporate'
                      ? 'bg-navy-deep text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Corporate & Office
                </button>
                <button
                  onClick={() => setActiveFilter('medical')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === 'medical'
                      ? 'bg-navy-deep text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Medical & Specialty
                </button>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-6">
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border-subtle flex flex-col justify-between gap-6 hover:shadow-md transition-shadow relative"
                >
                  {/* Rating Stars & Verification Badge */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-amber-400 text-[20px] fill-current">
                          star
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <span className="material-symbols-outlined text-[15px]">verified</span>
                      Verified Client
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>

                  {/* Author Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy-deep">{item.name}</div>
                        <div className="text-xs text-slate-500 font-medium">
                          {item.role} • {item.location}
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-cyan-vibrant/40 text-[32px]">format_quote</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Jerry's Assurance */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 text-left flex flex-col gap-3">
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider">
                Direct Accountability
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                "Our reputation is built one clean at a time."
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If an area ever needs additional attention, you never have to navigate an automated phone tree or wait days for a response. Call or text Jerry directly at 978-809-5533 and our operations team will inspect and resolve it immediately.
              </p>
              <div className="pt-2">
                <a
                  href="tel:9788095533"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-deep hover:text-cyan-vibrant transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Direct Phone / Text: 978-809-5533
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            {/* Quick Estimate Card */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Zero Risk
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Experience 5-Star Cleanliness
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Join hundreds of satisfied Massachusetts businesses with customized cleaning and no contract lock-in.
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
                Founder Jerry Sheehan personally evaluates your facility to engineer an accurate, cost-effective cleaning schedule.
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
              onClick={() => navigate('/areas-served')}
              className="p-8 rounded-3xl bg-white border border-border-subtle hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Local Presence
              </span>
              <h4 className="text-xl font-extrabold text-navy-deep group-hover:text-cyan-vibrant transition-colors mb-2">
                Areas Served in Massachusetts →
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore our full Essex County coverage from Beverly and Danvers to Salem, Peabody, and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

