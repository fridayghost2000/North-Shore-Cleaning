import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function CouponCard({ coupon }) {
  const { showToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    showToast(`Coupon code ${coupon.code} copied to clipboard! Mention this to Jerry.`, 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="relative p-5 rounded-2xl bg-white border-2 border-dashed border-amber-300 shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Top Tag */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
          {coupon.badge}
        </span>
        <span className="text-[11px] font-medium text-slate-400">
          {coupon.expiry}
        </span>
      </div>

      <div>
        <div className="text-2xl font-extrabold text-navy-deep mb-1">
          {coupon.discount}
        </div>
        <h4 className="text-sm font-bold text-navy-deep mb-2">
          {coupon.title}
        </h4>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          {coupon.validFor}
        </p>
      </div>

      {/* Code and Copy Box */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="px-3 py-1.5 rounded-lg bg-slate-100 font-mono text-xs font-bold text-navy-deep tracking-wider">
          {coupon.code}
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
}

