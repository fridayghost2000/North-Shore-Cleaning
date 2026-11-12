import React from 'react';
import Modal from '../../components/Modal';
import CouponCard from './CouponCard';
import { couponsData } from './couponsData';

export default function CouponsModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Promotional Coupons & Special Offers"
      subtitle="Mention any of these codes when scheduling your Day 1 Walkthrough with Jerry"
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-4">
        {couponsData.map((c) => (
          <CouponCard key={c.id} coupon={c} />
        ))}

        <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-500 text-center border border-slate-200 mt-2">
          Offers valid for commercial accounts in Beverly, Danvers, Peabody, Salem, Marblehead, and North Shore, MA. One coupon per facility.
        </div>
      </div>
    </Modal>
  );
}

