import React from 'react';
import FreeEstimateForm from './FreeEstimateForm';
import { EmergencyDispatchCard, BookNowForm } from '../booking';

export default function DualIntakeSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-slate-bg" id="estimate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Free Estimate Form */}
          <div className="lg:col-span-7">
            <FreeEstimateForm />
          </div>

          {/* Right Column: Direct Dispatch & Book Now */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="book-now">
            <EmergencyDispatchCard />
            <BookNowForm />
          </div>
        </div>
      </div>
    </section>
  );
}

