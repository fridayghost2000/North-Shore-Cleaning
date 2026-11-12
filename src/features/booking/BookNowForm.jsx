import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function BookNowForm() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setSubmitted(true);
    showToast(
      `Walkthrough scheduled for ${formData.name} on ${formData.date || 'your requested date'}! Our dispatch team will confirm by phone.`,
      'success'
    );
  };

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-sm border border-border-subtle flex flex-col" id="book-now">
      <h3 className="text-xl font-bold text-navy-deep mb-1">
        Book Day 1 Onsite Walkthrough
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
        Schedule your Day 1 Onsite Walkthrough or routine maintenance slot. Jerry will personally meet you at your location.
      </p>

      {submitted ? (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-2.5">
          <span className="material-symbols-outlined text-[32px] text-emerald-600">
            event_available
          </span>
          <h4 className="text-base font-bold text-emerald-900">
            Appointment Requested!
          </h4>
          <p className="text-xs text-emerald-800">
            Jerry's team will contact you at <strong>{formData.phone}</strong> to confirm parking and keycard access details.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', date: '', time: '', comments: '' });
            }}
            className="mt-2 text-xs font-bold text-emerald-700 underline"
          >
            Book another appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            required
            type="text"
            placeholder="Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-11 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs sm:text-sm"
          />
          <input
            required
            type="email"
            placeholder="Work Email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs sm:text-sm"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-11 px-3.5 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs sm:text-sm"
          />

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Preferred Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs"
              />
            </div>
          </div>

          <textarea
            rows={3}
            placeholder="Comments & specific building requirements (e.g. keycard access, off-hours preference)..."
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            className="p-3 rounded-xl bg-white text-navy-deep border border-slate-300 focus:border-cyan-vibrant focus:outline-none text-xs sm:text-sm"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-navy-deep text-white font-bold text-xs uppercase tracking-wider hover:bg-navy-mid transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-1"
          >
            <span>Book Walkthrough</span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </button>
        </form>
      )}
    </div>
  );
}

