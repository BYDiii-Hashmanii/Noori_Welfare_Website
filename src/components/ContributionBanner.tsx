import React from 'react';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { useAppDispatch } from '../store/StoreContext';
import { openDonationModal } from '../store/actions';

export const ContributionBanner: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with HD Template Asset */}
        <div 
          onClick={() => dispatch(openDonationModal())}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        >
          <img
            src="/assets/aistudio/banner_hd.png"
            alt="Every Contribution Matters - Support Our Mission - Noori Welfare Foundation"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-101"
          />
        </div>
      </div>
    </section>
  );
};
