import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isCouponsOpen, setIsCouponsOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const closeToast = () => setToast(null);

  return (
    <AppContext.Provider
      value={{
        isCouponsOpen,
        setIsCouponsOpen,
        isEstimateModalOpen,
        setIsEstimateModalOpen,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedService,
        setSelectedService,
        selectedIndustry,
        setSelectedIndustry,
        toast,
        showToast,
        closeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

