import React from 'react';
import { Users, Handshake, Heart } from 'lucide-react';
import { useAppDispatch } from '../store/StoreContext';
import { openDonationModal } from '../store/actions';

export const ImpactStrip: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section id="impact" className="relative overflow-hidden bg-[#07382f] text-white py-10 sm:py-12 border-y border-emerald-800/60">
      {/* Background Subtle Watermark Overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/aistudio/image_ec1e43ef.png')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
          
          {/* Stat 1: Thousands of People Helped */}
          <div className="flex flex-col items-center text-center px-4 py-2 lg:border-r lg:border-emerald-700/50">
            <div className="w-12 h-12 rounded-full bg-emerald-800/60 flex items-center justify-center mb-3 text-emerald-300">
              <Users className="w-6 h-6 text-emerald-200" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Thousands
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">
              of People Helped
            </p>
          </div>

          {/* Stat 2: Numerous Relief Camps */}
          <div className="flex flex-col items-center text-center px-4 py-2 lg:border-r lg:border-emerald-700/50">
            <div className="w-12 h-12 rounded-full bg-emerald-800/60 flex items-center justify-center mb-3 text-emerald-300">
              <Handshake className="w-6 h-6 text-emerald-200" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Numerous
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">
              Relief Camps
            </p>
          </div>

          {/* Stat 3: Countless Acts of Kindness */}
          <div className="flex flex-col items-center text-center px-4 py-2 lg:border-r lg:border-emerald-700/50">
            <div className="w-12 h-12 rounded-full bg-emerald-800/60 flex items-center justify-center mb-3 text-emerald-300">
              <Heart className="w-6 h-6 fill-emerald-300 text-emerald-300" />
            </div>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Countless
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">
              Acts of Kindness
            </p>
          </div>

          {/* Right Callout: "Your Donations. Their Hope." matching template */}
          <div 
            onClick={() => dispatch(openDonationModal())}
            className="flex flex-col items-center lg:items-end justify-center px-6 py-3 cursor-pointer group text-center lg:text-right"
          >
            <div className="space-y-0.5">
              <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight text-white leading-tight">
                Your Donations.
              </h3>
              <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight text-amber-300 leading-tight">
                Their Hope.
              </h3>
            </div>
            {/* Golden Brush Curve Accent Underline matching template */}
            <div className="mt-1">
              <svg className="w-28 sm:w-36 h-3 text-amber-400" viewBox="0 0 140 12" fill="none">
                <path
                  d="M2 9C40 2 100 2 138 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-[11px] text-emerald-200 group-hover:text-amber-200 transition-colors mt-1 font-semibold flex items-center gap-1">
              Make a contribution today →
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
