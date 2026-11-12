import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="h-full min-h-[300px] p-6 sm:p-7 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-border-subtle">
      <div>
        {/* Stars and Top Badge */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined material-symbols-fill text-[19px] text-amber-400"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          {testimonial.location && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#043F7B]/10 text-[#043F7B] text-[11px] font-bold shrink-0">
              {testimonial.location}
            </span>
          )}
          {testimonial.badge && (
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-extrabold shrink-0">
              {testimonial.badge}
            </span>
          )}
        </div>

        {/* Quote text */}
        <p className="text-xs sm:text-sm text-slate-700 italic mb-6 leading-relaxed">
          “{testimonial.quote}”
        </p>
      </div>

      {/* Author Info */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div>
          <h4 className="text-sm font-bold text-[#043F7B] flex items-center gap-1.5">
            {testimonial.name}
            {testimonial.verified && (
              <span className="material-symbols-outlined text-emerald-500 text-[18px]">
                verified
              </span>
            )}
          </h4>
          <span className="text-xs text-slate-500">{testimonial.role}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <span className="material-symbols-outlined text-[18px]">format_quote</span>
        </div>
      </div>
    </div>
  );
}

