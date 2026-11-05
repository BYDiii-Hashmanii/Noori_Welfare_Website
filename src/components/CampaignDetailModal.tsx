import React from 'react';
import { X, MapPin, Calendar, Heart, ShieldCheck, Share2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectSelectedCampaign } from '../store/selectors';
import { closeCampaignModal, openDonationModal } from '../store/actions';

export const CampaignDetailModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const campaign = useAppSelector(selectSelectedCampaign);

  if (!campaign) return null;

  const handleSponsor = () => {
    dispatch(closeCampaignModal());
    dispatch(openDonationModal({ cause: campaign.title }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={() => dispatch(closeCampaignModal())}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto">
          {/* Hero Image with Strict Aspect and Positioning */}
          <div className="relative h-52 sm:h-72 w-full bg-slate-900">
            <img
              src={campaign.image}
              alt={campaign.title}
              className={`w-full h-full object-cover ${campaign.objectPosition || 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173B52]/90 via-transparent to-black/30" />
            
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F4D943] text-[#173B52] text-[11px] font-bold">
                {campaign.categoryLabel}
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">
                {campaign.title}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-4 sm:p-6 space-y-4 text-left">
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-500 font-semibold border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1.5 text-[#173B52]">
                <MapPin className="w-3.5 h-3.5 text-[#168A50]" />
                <span>{campaign.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#173B52]">
                <Calendar className="w-3.5 h-3.5 text-[#168A50]" />
                <span>{campaign.date}</span>
              </div>
              {campaign.partner && (
                <div className="flex items-center gap-1.5 text-[#168A50] bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Partner: {campaign.partner}</span>
                </div>
              )}
            </div>

            {/* Impact Metric Chips */}
            {campaign.impactMetrics && campaign.impactMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {campaign.impactMetrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F7F8F4] p-3 rounded-xl border border-slate-200/70 text-center">
                    <p className="text-base sm:text-lg font-extrabold text-[#168A50]">{m.value}</p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#173B52]">
                Campaign Overview & Ground Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {campaign.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-slate-100">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: campaign.title,
                      text: campaign.summary,
                      url: window.location.href
                    }).catch(() => {});
                  }
                }}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors py-2"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Campaign</span>
              </button>

              <button
                onClick={handleSponsor}
                className="inline-flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 rounded-full shadow-xs transition-all cursor-pointer active:scale-98"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Support This Relief Cause</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
