import React from 'react';
import Modal from '../../components/Modal';
import BookNowForm from './BookNowForm';
import EmergencyDispatchCard from './EmergencyDispatchCard';

export default function BookingModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Book a Walkthrough or Dispatch"
      subtitle="Meet with Jerry onsite to craft your custom cleaning specifications"
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-6">
        <EmergencyDispatchCard />
        <BookNowForm />
      </div>
    </Modal>
  );
}

