import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { useAppDispatch } from '../store/StoreContext';
import { openDonationModal } from '../store/actions';

interface HeroProps {
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore }) => {
  const dispatch = useAppDispatch();

  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-14 pb-16 lg:pb-24">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            {/* Tagline Kicker with Golden Accent Line */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#07382f]">
                Noori Welfare Foundation (NWF)
              </span>
              <span className="h-0.5 w-12 sm:w-16 bg-amber-400 rounded-full" />
            </div>

            {/* Main Headline matching template styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#072d24] leading-[1.12]">
              Together, We Can{' '}
              <span className="text-[#00875a] inline-block">
                Make a Difference<span className="text-[#00875a]">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Supporting families, feeding the hungry, and bringing hope to communities in need across Bagh and Azad Jammu & Kashmir.
            </p>

            {/* Dual CTAs matching template pill designs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => dispatch(openDonationModal())}
                className="inline-flex items-center gap-2.5 bg-[#05372d] hover:bg-[#007a55] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-md hover:shadow-xl transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 border-2 border-[#05372d] text-[#05372d] hover:bg-[#05372d] hover:text-white font-bold text-sm sm:text-base py-3 px-6 rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Community Trust Note */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>100% Volunteer Driven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Bagh Registered Charity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Crystal Clear HD Hero Graphic matching template */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              
              {/* HD Template Hero Graphic */}
              <div className="relative overflow-hidden rounded-3xl drop-shadow-2xl group">
                <img
                  src="/assets/aistudio/hero_hd.png"
                  alt="Noori Welfare Foundation volunteers actively preparing ration and meat distribution"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                />

                {/* Ground Operations Tag */}
                <div className="absolute bottom-4 left-4 bg-[#07382f]/90 backdrop-blur-md rounded-xl py-1.5 px-3.5 text-white flex items-center gap-2 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold">Relief Operations · Dhundar & Bagh, AJK</span>
                </div>
              </div>

              {/* Decorative overlapping badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-2xl p-3 shadow-xl border border-emerald-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#007a55] flex items-center justify-center font-black text-lg">
                  10+
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Years Serving</p>
                  <p className="text-[10px] text-slate-500">Communities in Bagh AJK</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Sweeping Green Wave Divider along bottom matching the template */}
      <div className="relative w-full mt-10 lg:mt-14 overflow-hidden leading-none">
        <svg
          className="w-full h-12 sm:h-20 lg:h-28 text-[#007a55]"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Subtle light accent wave */}
          <path
            d="M0 40C320 90 420 10 720 50C1020 90 1200 20 1440 60V120H0V40Z"
            fill="#e6f7f0"
            fillOpacity="0.6"
          />
          {/* Main sweeping green curve */}
          <path
            d="M0 65C300 120 480 30 780 75C1080 120 1260 45 1440 80V120H0V65Z"
            fill="#007a55"
          />
        </svg>
      </div>
    </section>
  );
};
