import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import { HeroSection } from './features/hero';
import { WelcomeSection, AboutPage } from './features/about';
import { ServicesGrid } from './features/services';
import { IndustriesGrid, IndustryDetailPage } from './features/industries';
import { TestimonialsGrid, TestimonialsPage } from './features/testimonials';
import { FAQSection } from './features/faq';
import { DualIntakeSection } from './features/estimate-calculator';
import { AreasServedSection, AreasServedPage } from './features/areas-served';
import { ServiceDetailPage } from './features/services';
import { CareersPage } from './features/careers';
import { TermsOfServicePage } from './features/legal';

function HomePage() {
  return (
    <>
      {/* 1. Hero Ambient Banner */}
      <HeroSection />

      {/* 2. Welcome & Day 1 Walkthrough Protocol */}
      <WelcomeSection />

      {/* 3. Comprehensive Services Grid with Filter Tabs & Detail Modal */}
      <ServicesGrid />

      {/* 4. Industries Served Matrix */}
      <IndustriesGrid />

      {/* 5. Authentic Client Reviews & Authority Showcase */}
      <TestimonialsGrid />

      {/* 6. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 7. Dual Intake: Free Estimate & Book Now Walkthrough */}
      <DualIntakeSection />

      {/* 7. Regional Footprint & Areas Served */}
      <AreasServedSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/company-and-jerry" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about/testimonials" element={<TestimonialsPage />} />
            <Route path="/areas-served" element={<AreasServedPage />} />
            <Route path="/about/areas-served" element={<AreasServedPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/industries" element={<HomePage />} />
            <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </AppProvider>
    </BrowserRouter>
  );
}
