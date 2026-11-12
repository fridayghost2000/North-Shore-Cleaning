import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function InstantCalculator({ onProceedWithEstimate }) {
  const [sqft, setSqft] = useState(3500);
  const [facilityType, setFacilityType] = useState('office');
  const [frequency, setFrequency] = useState('3x');
  const [includeFloors, setIncludeFloors] = useState(false);
  const [includeDisinfection, setIncludeDisinfection] = useState(false);

  // Rate multipliers based on commercial standard
  const facilityMultipliers = {
    office: 1.0,
    medical: 1.35,
    dental: 1.25,
    school: 1.15,
    industrial: 0.9,
    residential: 1.2,
  };

  const frequencyDiscounts = {
    daily: 0.85, // Volume discount per visit
    '3x': 0.92,
    weekly: 1.0,
    biweekly: 1.1,
    onetime: 1.45,
  };

  // Base rate calculation
  const baseRatePerSqft = 0.085;
  const rawCost = sqft * baseRatePerSqft * (facilityMultipliers[facilityType] || 1.0);
  const adjustedPerVisit = Math.round(rawCost * (frequencyDiscounts[frequency] || 1.0));
  
  let addOns = 0;
  if (includeFloors) addOns += Math.round(sqft * 0.045);
  if (includeDisinfection) addOns += Math.round(sqft * 0.035);

  const totalMin = Math.max(125, adjustedPerVisit + addOns);
  const totalMax = Math.round(totalMin * 1.25);

  const recommendedHours = Math.max(1.5, (sqft / 2200)).toFixed(1);

  return (
    <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-border-subtle">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-cyan-vibrant uppercase tracking-wider">
            Interactive Cost Model
          </span>
          <h3 className="text-lg font-bold text-navy-deep">
            Real-Time Facility Estimate Calculator
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-cyan-vibrant/10 text-cyan-vibrant text-xs font-bold">
          Estimated Range
        </span>
      </div>

      <div className="space-y-5">
        {/* Facility Type Selector */}
        <div>
          <label className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
            1. Select Facility Archetype
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'office', label: 'Commercial Office' },
              { id: 'medical', label: 'Medical / Clinical' },
              { id: 'dental', label: 'Dental Clinic' },
              { id: 'school', label: 'School / Daycare' },
              { id: 'industrial', label: 'Warehouse / Industrial' },
              { id: 'residential', label: 'Private Residence' },
            ].map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFacilityType(type.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                  facilityType === type.id
                    ? 'bg-navy-deep text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Square Footage Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-navy-deep uppercase tracking-wider">
              2. Facility Size (Square Feet)
            </label>
            <span className="text-sm font-extrabold text-cyan-vibrant bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">
              {sqft.toLocaleString()} sq. ft.
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="30000"
            step="250"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-vibrant"
          />
          <div className="flex justify-between text-[11px] text-slate-600 mt-1">
            <span>Small Suite (500 sq ft)</span>
            <span>Mid-sized Floor (10,000 sq ft)</span>
            <span>Large Campus (30,000+ sq ft)</span>
          </div>
        </div>

        {/* Frequency Radio Buttons */}
        <div>
          <label className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
            3. Cleaning Frequency
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'daily', label: 'Daily (5x/wk)' },
              { id: '3x', label: '3x / Week' },
              { id: 'weekly', label: '1x / Week' },
              { id: 'biweekly', label: 'Bi-Weekly' },
              { id: 'onetime', label: 'One-Time Deep' },
            ].map((freq) => (
              <button
                key={freq.id}
                type="button"
                onClick={() => setFrequency(freq.id)}
                className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                  frequency === freq.id
                    ? 'bg-cyan-vibrant text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>

        {/* Add-on Checkboxes */}
        <div>
          <label className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
            4. Specialty Add-Ons
          </label>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer hover:border-cyan-vibrant">
              <input
                type="checkbox"
                checked={includeFloors}
                onChange={(e) => setIncludeFloors(e.target.checked)}
                className="w-4 h-4 text-cyan-vibrant rounded accent-cyan-vibrant cursor-pointer"
              />
              <span>Floor Stripping & Wax Buff</span>
            </label>
            <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer hover:border-cyan-vibrant">
              <input
                type="checkbox"
                checked={includeDisinfection}
                onChange={(e) => setIncludeDisinfection(e.target.checked)}
                className="w-4 h-4 text-cyan-vibrant rounded accent-cyan-vibrant cursor-pointer"
              />
              <span>Electrostatic CDC Misting</span>
            </label>
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="p-5 rounded-2xl bg-navy-deep text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-secondary-container uppercase tracking-wider">
              Estimated Bracket per Visit
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
              ${totalMin} - ${totalMax}
              <span className="text-xs text-slate-300 font-normal ml-1">/ visit</span>
            </div>
            <div className="text-xs text-cyan-200/80 mt-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-400">schedule</span>
              Est. Crew Duration: ~{recommendedHours} hours / clean
            </div>
          </div>

          <button
            type="button"
            onClick={() => onProceedWithEstimate && onProceedWithEstimate({ sqft, facilityType, frequency, totalMin, totalMax })}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Lock In This Rate</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

