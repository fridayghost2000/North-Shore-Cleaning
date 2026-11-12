import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from './TestimonialSlider';
import { useApp } from '../../context/AppContext';

export default function TestimonialsGrid() {
  const { setIsEstimateModalOpen } = useApp();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-surface-container-low relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Client Feedback"
          badgeColor="gold"
          title="TESTIMONIALS"
          subtitle="What our corporate office and medical facility clients in Massachusetts say about Jerry and our team."
        />

        {/* Interactive Testimonial Slider / Carousel */}
        <div className="mt-8">
          <TestimonialSlider />
        </div>

        {/* Authority Callout Banner from code.html */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-navy-deep via-navy-mid to-navy-deep text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <span className="text-xs font-bold text-secondary-container uppercase tracking-wider">
                Established Commercial Authority
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                DISCOVER WHY WE'RE EVERYONE'S FAVORITE COMMERCIAL CLEANER!
              </h3>
              <p className="text-sm sm:text-base font-bold text-cyan-200 leading-relaxed">
                We've cleaned hundreds of businesses over the years and have established our brand as the leader in commercial cleaning services in Massachusetts!!
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Why not get your day off to a clean start? Get in touch with us today to get started! If you have any questions or comments, please feel free to call us at the number below, send us an e-mail, or submit a Request for Information form. We offer complete building maintenance plans that will fit your budget and needs.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-cyan-vibrant text-white font-bold text-xs sm:text-sm hover:bg-cyan-bright transition-all shadow-md cursor-pointer"
                >
                  Get Your Estimate
                </button>
                <a
                  href="tel:9788095533"
                  className="px-5 py-3 rounded-xl bg-navy-mid text-white font-bold text-xs sm:text-sm hover:bg-secondary border border-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary-container">call</span>
                  978-809-5533
                </a>
              </div>
            </div>

            {/* Real Embedded YouTube Video */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-2 border-white/20 bg-black aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/EEpRzFidEV8?rel=0"
                  title="North Shore Cleaning Systems Commercial Overview"
                  className="w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-2.5 flex items-center justify-between px-1">
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-300 text-[15px]">verified</span>
                  Official Commercial Overview
                </span>
                <a
                  href="https://youtu.be/EEpRzFidEV8?si=oZG1qerYFhh9OqdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] sm:text-xs text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1 transition-colors"
                >
                  Watch on YouTube
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

