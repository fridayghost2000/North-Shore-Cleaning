import React, { useState } from 'react';
import Modal from '../../components/Modal';
import InstantCalculator from './InstantCalculator';
import FreeEstimateForm from './FreeEstimateForm';
import { useApp } from '../../context/AppContext';

export default function EstimateModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('calc'); // 'calc' or 'form'
  const [prefilledValues, setPrefilledValues] = useState({});

  const handleProceedWithEstimate = (calculated) => {
    setPrefilledValues({
      message: `Calculated Estimate: ${calculated.sqft} sq ft, ${calculated.facilityType} facility, ${calculated.frequency} frequency. Estimated bracket: $${calculated.totalMin} - $${calculated.totalMax}/visit.`,
    });
    setTab('form');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Instant Commercial Estimate"
      subtitle="Calculate your custom rate or request an immediate proposal from Jerry"
      maxWidth="max-w-3xl"
    >
      <div className="flex flex-col gap-5">
        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 max-w-md mx-auto">
          <button
            onClick={() => setTab('calc')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tab === 'calc'
                ? 'bg-white text-navy-deep shadow-sm'
                : 'text-slate-600 hover:text-navy-deep'
            }`}
          >
            1. Interactive Slider Calculator
          </button>
          <button
            onClick={() => setTab('form')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tab === 'form'
                ? 'bg-white text-navy-deep shadow-sm'
                : 'text-slate-600 hover:text-navy-deep'
            }`}
          >
            2. Request Written Proposal
          </button>
        </div>

        {tab === 'calc' ? (
          <InstantCalculator onProceedWithEstimate={handleProceedWithEstimate} />
        ) : (
          <FreeEstimateForm initialValues={prefilledValues} />
        )}
      </div>
    </Modal>
  );
}

