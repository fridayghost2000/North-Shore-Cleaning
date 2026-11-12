import React from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const bgStyles = {
    success: 'bg-emerald-600 text-white',
    info: 'bg-navy-deep text-white',
    warning: 'bg-amber-600 text-white',
  };

  const icons = {
    success: 'check_circle',
    info: 'info',
    warning: 'warning',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md transition-all animate-bounce-in max-w-md border border-white/20">
      <div className={`p-1.5 rounded-lg ${bgStyles[type]}`}>
        <span className="material-symbols-outlined text-[20px]">{icons[type]}</span>
      </div>
      <p className="text-sm font-medium text-navy-deep">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto text-slate-400 hover:text-slate-700 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      )}
    </div>
  );
}

