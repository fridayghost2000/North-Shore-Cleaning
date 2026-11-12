import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function FreeEstimateForm({ initialValues = {} }) {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: initialValues.name || '',
    email: initialValues.email || '',
    phone: initialValues.phone || '',
    service: initialValues.service || 'Commercial Office Cleaning',
    message: initialValues.message || '',
    isHuman: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setSubmitted(true);
    showToast(
      `Thank you ${formData.name}! Your free estimate request for ${formData.service} has been received. Jerry will contact you shortly.`,
      'success'
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Commercial Office Cleaning',
      message: '',
      isHuman: true,
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-border-subtle" id="estimate">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-1 bg-cyan-vibrant rounded-full"></div>
        <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider">
          Fast Response Guaranteed
        </span>
      </div>
      <h3 className="text-2xl font-extrabold text-navy-deep mb-2">
        FREE ESTIMATE
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
        Tell us about your facility size and requirements. Jerry and our supervisory dispatch will reach back quickly with a tailored plan.
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px]">task_alt</span>
          </div>
          <h4 className="text-lg font-bold text-emerald-900">
            Estimate Request Confirmed!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-md">
            Jerry will personally review your specifications and contact you at <strong>{formData.phone || formData.email}</strong> within 1-2 business hours.
          </p>
          <button
            onClick={handleReset}
            className="mt-2 text-xs font-bold text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy-deep" htmlFor="est-name">
                Full Name *
              </label>
              <input
                id="est-name"
                required
                type="text"
                placeholder="e.g. Jerry / Michelle"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none focus:ring-2 focus:ring-cyan-vibrant/20 transition-all text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy-deep" htmlFor="est-email">
                Email Address *
              </label>
              <input
                id="est-email"
                required
                type="email"
                placeholder="work@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none focus:ring-2 focus:ring-cyan-vibrant/20 transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy-deep" htmlFor="est-phone">
                Phone Number *
              </label>
              <input
                id="est-phone"
                required
                type="tel"
                placeholder="978-000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none focus:ring-2 focus:ring-cyan-vibrant/20 transition-all text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy-deep" htmlFor="est-service">
                Subject / Service Needed
              </label>
              <select
                id="est-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="h-12 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none focus:ring-2 focus:ring-cyan-vibrant/20 transition-all text-sm"
              >
                <option value="Commercial Office Cleaning">Commercial Office Cleaning</option>
                <option value="Floor Stripping & Waxing">Floor Stripping & Waxing</option>
                <option value="Carpet & Upholstery Cleaning">Carpet & Upholstery Cleaning</option>
                <option value="Green Cleaning">Green Cleaning</option>
                <option value="Tile & Grout Cleaning">Tile & Grout Cleaning</option>
                <option value="Day Porter Services">Day Porter Services</option>
                <option value="COVID-19 Disinfectant">COVID-19 Disinfectant</option>
                <option value="Residential Cleaning">Residential Cleaning</option>
                <option value="Janitorial Products & Supplies">Janitorial Products & Supplies</option>
                <option value="Post-Construction Clean">Post-Construction Clean</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-navy-deep" htmlFor="est-message">
              Message / Facility Specs
            </label>
            <textarea
              id="est-message"
              rows={4}
              placeholder="Approximate square footage, frequency (daily/weekly/monthly), special flooring, or problem stains..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="p-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none focus:ring-2 focus:ring-cyan-vibrant/20 transition-all text-sm"
            />
          </div>

          {/* Anti-spam Verification Box */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between max-w-sm">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.isHuman}
                onChange={(e) => setFormData({ ...formData, isHuman: e.target.checked })}
                className="w-5 h-5 rounded text-cyan-vibrant focus:ring-0 cursor-pointer accent-cyan-vibrant"
              />
              <span className="text-xs font-medium text-slate-700">I'm not a robot</span>
            </label>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-[20px] text-cyan-bright">
                verified_user
              </span>
              <span className="text-[0.6rem] text-slate-400 font-bold">reCAPTCHA</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-vibrant text-white font-bold text-sm hover:bg-cyan-bright transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-1"
          >
            <span>SUBMIT ESTIMATE REQUEST</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </form>
      )}
    </div>
  );
}

