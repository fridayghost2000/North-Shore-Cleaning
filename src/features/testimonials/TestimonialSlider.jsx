import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from './testimonialsData';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per page: 1 on mobile, 2 on md+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - itemsPerPage);

  // Auto-advance every 5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const totalPages = maxIndex + 1;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Controls: Rating Pill & Navigation Arrows */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined material-symbols-fill text-[19px] text-amber-400"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <span className="text-xs sm:text-sm font-bold text-navy-deep">
            5.0 Star Verified Reviews
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-500 font-medium">
            • Essex County Business Community
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full bg-white text-navy-deep hover:bg-[#043F7B] hover:text-white border border-slate-200 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full bg-white text-navy-deep hover:bg-[#043F7B] hover:text-white border border-slate-200 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        className="overflow-hidden rounded-2xl py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <TestimonialCard testimonial={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-2.5 bg-[#043F7B]'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

