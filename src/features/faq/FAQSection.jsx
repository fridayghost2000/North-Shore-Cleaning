import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading';
import { faqData } from './faqData';
import { useApp } from '../../context/AppContext';

export default function FAQSection() {
  const { setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  // First item open by default
  const [openIds, setOpenIds] = useState([1]);

  const categories = ['All', 'Contracts & Policies', 'Services & Protocols', 'Supplies & Safety', 'Getting Started'];

  const filteredFaqs = faqData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-border-subtle relative" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Authentic Answers"
          badgeColor="cyan"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about our commercial cleaning standards, Day 1 walkthrough, flexible agreements, and facility safety."
        />

        {/* Category Filter Pills & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pt-2">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-navy-deep text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Toggle */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              onClick={expandAll}
              className="hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-cyan-vibrant transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5 text-left">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-cyan-200 shadow-sm ring-1 ring-cyan-400/20'
                    : 'bg-surface-container-low border-border-subtle hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                        isOpen
                          ? 'bg-cyan-50 text-cyan-vibrant'
                          : 'bg-white text-slate-500 shadow-xs'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{faq.icon}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant block mb-1">
                        {faq.category}
                      </span>
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                          isOpen ? 'text-navy-deep' : 'text-slate-800'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen
                        ? 'bg-navy-deep text-white rotate-180'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1 pt-3 sm:pl-[68px]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Assistance Banner */}
        <div className="mt-12 sm:mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#062c54] via-[#043F7B] to-[#042548] text-white shadow-xl text-left border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">contact_support</span>
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Direct Owner Access
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                Have a facility question not covered here?
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed max-w-xl">
                Jerry Sheehan and our operations supervisors are ready to evaluate your floor plan and construct an accurate cleaning proposal.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setIsEstimateModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex-1 md:flex-none text-center"
            >
              Get Free Estimate
            </button>
            <a
              href="tel:9788095533"
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 flex-1 md:flex-none border border-white/20"
            >
              <span className="material-symbols-outlined text-[16px] text-cyan-300">call</span>
              <span>978-809-5533</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

