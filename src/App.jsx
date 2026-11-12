import React from 'react';
import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import { HeroSection } from './features/hero';
import { WelcomeSection } from './features/about';
import { ServicesGrid } from './features/services';
import { IndustriesGrid } from './features/industries';
import { TestimonialsGrid } from './features/testimonials';
import { DualIntakeSection } from './features/estimate-calculator';
import { AreasServedSection } from './features/areas-served';

export default function App() {
  return (
    <AppProvider>
      <MainLayout>
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

        {/* 6. Dual Intake: Free Estimate & Book Now Walkthrough */}
        <DualIntakeSection />

        {/* 7. Regional Footprint & Areas Served */}
        <AreasServedSection />
      </MainLayout>
    </AppProvider>
  );
}
