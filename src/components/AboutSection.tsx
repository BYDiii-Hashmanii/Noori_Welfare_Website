import React from 'react';
import { ShieldCheck, Heart, MapPin, CheckCircle2, Award } from 'lucide-react';
import { useAppDispatch } from '../store/StoreContext';
import { openVolunteerModal, openDonationModal } from '../store/actions';

export const AboutSection: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-[#f8faf8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Volunteer Team Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              {/* Real team photo with Noori Foundation t-shirts */}
              <img
                src="/assets/aistudio/image_d110e12b.png"
                alt="Noori Welfare Foundation open-ground ration drive in Bagh Azad Kashmir"
                className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07382f]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  Grassroots Dedicated Team
                </span>
                <p className="text-base sm:text-lg font-bold text-white mt-1">
                  Youth & volunteers of Dhundar, Bagh united under the NWF banner.
                </p>
              </div>
            </div>

            {/* Overlapping Trust Stat Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-2xl">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900">100% Donation Policy</p>
                <p className="text-xs text-slate-500">Every Rupee Reaches Needy Families</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Origin Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#007a55]">
                  Who We Are
                </span>
                <span className="w-8 h-0.5 bg-amber-400 rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d24] tracking-tight leading-tight">
                Rooted in Compassion, Built on Unwavering Trust.
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong>Noori Welfare Foundation (NWF)</strong> was founded in the high mountain valleys of Bagh, Azad Jammu & Kashmir, with a sacred promise: that no child in our community goes to bed hungry, and no elderly villager suffers blindness or illness simply because they cannot afford treatment.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operating directly out of our hub on <strong>Chiran Dhundar Road, Bagh</strong>, we have zero overhead waste. Our programs are executed entirely by local community volunteers, teachers, and doctors who personally verify every deserving family.
            </p>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#007a55] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Zakat Compliant</p>
                  <p className="text-[11px] text-slate-500">Strict adherence to Shariah guidelines</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#007a55] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Doorstep Verification</p>
                  <p className="text-[11px] text-slate-500">Direct assessment of needy households</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <Heart className="w-5 h-5 text-[#007a55] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Al-Shifa Healthcare Partner</p>
                  <p className="text-[11px] text-slate-500">Free eye operations with certified surgeons</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                <MapPin className="w-5 h-5 text-[#007a55] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Remote Mountain Access</p>
                  <p className="text-[11px] text-slate-500">4x4 relief teams reach snowbound areas</p>
                </div>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => dispatch(openDonationModal())}
                className="bg-[#007a55] hover:bg-[#006344] text-white font-bold text-sm py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Donate for Hope
              </button>
              <button
                onClick={() => dispatch(openVolunteerModal())}
                className="border border-slate-300 hover:border-[#007a55] text-slate-700 hover:text-[#007a55] font-bold text-sm py-3 px-6 rounded-full transition-all"
              >
                Join As a Volunteer →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
