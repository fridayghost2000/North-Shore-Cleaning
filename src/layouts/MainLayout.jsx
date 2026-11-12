import React from 'react';
import { TopBar, Navbar, Footer } from '../features/navigation';
import { CouponsModal } from '../features/coupons';
import { EstimateModal } from '../features/estimate-calculator';
import { BookingModal } from '../features/booking';
import Toast from '../components/Toast';
import { useApp } from '../context/AppContext';

export default function MainLayout({ children }) {
  const {
    isCouponsOpen,
    setIsCouponsOpen,
    isEstimateModalOpen,
    setIsEstimateModalOpen,
    isBookingModalOpen,
    setIsBookingModalOpen,
    toast,
    closeToast,
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Fixed/Sticky Navigation Suite */}
      <TopBar />
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <CouponsModal
        isOpen={isCouponsOpen}
        onClose={() => setIsCouponsOpen(false)}
      />

      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Feedback Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

