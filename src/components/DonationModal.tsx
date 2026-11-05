import React, { useState } from 'react';
import { X, Heart, Copy, Check, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectDonationState } from '../store/selectors';
import {
  closeDonationModal,
  setDonationAmount,
  setDonationCustomAmount,
  setDonationCause,
  setDonationType,
  setDonationIsZakat,
  updateDonorInfo,
  submitDonation,
  resetDonation
} from '../store/actions';

export const DonationModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const donation = useAppSelector(selectDonationState);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!donation.isModalOpen) return null;

  const presetAmounts = [2500, 6500, 12000, 18000, 35000];

  const causes = [
    'General Donation / Where Most Needed',
    'Monthly Family Ration Pack (PKR 6,500)',
    'Free Cataract Eye Surgery (PKR 12,000)',
    'Eid Qurbani Sacrificial Share (PKR 18,000)',
    'Orphan & Student Education (PKR 4,000)',
    'Winter Warmth & Blanket Kit (PKR 3,500)'
  ];

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleAmountClick = (amt: number) => {
    dispatch(setDonationAmount(amt));
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDonationCustomAmount(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitDonation());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Deep Navy theme */}
        <div className="bg-[#173B52] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-[#F4D943] text-[#F4D943]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">Support Noori Welfare Foundation</h3>
              <p className="text-[11px] sm:text-xs text-white/80">Bringing food, medicine, and dignity across Bagh, AJK</p>
            </div>
          </div>

          <button
            onClick={() => dispatch(closeDonationModal())}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-left">
          {donation.submittedReceipt ? (
            /* Confirmation View */
            <div className="py-6 sm:py-8 text-center space-y-3.5">
              <div className="w-14 h-14 bg-emerald-50 text-[#168A50] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#173B52]">JazakAllah Khair!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for your generous pledge of{' '}
                <strong className="text-[#168A50]">
                  PKR {donation.selectedAmount.toLocaleString()}
                </strong>{' '}
                towards <strong>{donation.selectedCause}</strong>.
              </p>

              {/* Bank Transfer Instructions */}
              <div className="bg-[#F7F8F4] p-3.5 sm:p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left space-y-1.5">
                <p className="text-xs font-bold text-[#173B52]">Next Step for Direct Bank / EasyPaisa:</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Please transfer the funds to our verified account below and share the transaction slip via WhatsApp to{' '}
                  <a href="https://wa.me/923445144456" className="font-bold text-[#168A50] underline">
                    +92 344 5144456
                  </a>{' '}
                  for an immediate verified acknowledgment receipt.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5">
                <button
                  onClick={() => dispatch(closeDonationModal())}
                  className="bg-[#168A50] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full hover:bg-[#127343]"
                >
                  Close Window
                </button>
                <button
                  onClick={() => dispatch(resetDonation())}
                  className="border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full hover:bg-slate-50"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          ) : (
            /* Main Donation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Frequency Selector */}
              <div>
                <label className="block text-[11px] font-bold text-[#173B52] mb-1 uppercase tracking-wider">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => dispatch(setDonationType('one-time'))}
                    className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                      donation.donationType === 'one-time'
                        ? 'bg-emerald-50 border-[#168A50] text-[#168A50]'
                        : 'border-slate-200 text-[#173B52]/70 hover:bg-slate-50'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(setDonationType('monthly'))}
                    className={`py-2 px-3 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                      donation.donationType === 'monthly'
                        ? 'bg-emerald-50 border-[#168A50] text-[#168A50]'
                        : 'border-slate-200 text-[#173B52]/70 hover:bg-slate-50'
                    }`}
                  >
                    Monthly Sustainer
                  </button>
                </div>
              </div>

              {/* Cause Selector */}
              <div>
                <label className="block text-[11px] font-bold text-[#173B52] mb-1 uppercase tracking-wider">
                  Select Cause / Project
                </label>
                <select
                  value={donation.selectedCause}
                  onChange={(e) => dispatch(setDonationCause(e.target.value))}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50] bg-white font-medium"
                >
                  {causes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Selection */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-[#173B52] uppercase tracking-wider">
                    Select Amount (PKR)
                  </label>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#168A50] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={donation.isZakat}
                      onChange={(e) => dispatch(setDonationIsZakat(e.target.checked))}
                      className="rounded-sm text-[#168A50] focus:ring-[#168A50]"
                    />
                    <span>This is Zakat</span>
                  </label>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`py-2 px-1 text-center font-bold text-xs sm:text-sm rounded-xl border transition-all ${
                        donation.selectedAmount === amt && !donation.customAmount
                          ? 'bg-[#168A50] border-[#168A50] text-white shadow-2xs'
                          : 'border-slate-200 text-[#173B52] hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      PKR {amt >= 1000 ? `${amt / 1000}k` : amt}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">
                    Custom PKR:
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter custom amount"
                    value={donation.customAmount}
                    onChange={handleCustomChange}
                    className="w-full text-xs sm:text-sm pl-24 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>
              </div>

              {/* Official Accounts Card */}
              <div className="bg-[#F7F8F4] p-3.5 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#173B52]">
                    Verified Charity Accounts
                  </span>
                  <span className="text-[11px] font-semibold text-[#168A50] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Direct Transfer
                  </span>
                </div>

                {/* Account Details Box */}
                <div className="space-y-2 text-xs">
                  {/* EasyPaisa / JazzCash */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#173B52]">EasyPaisa / JazzCash / Raast</p>
                      <p className="text-[#168A50] font-mono font-bold text-sm">0344 5144456</p>
                      <p className="text-[10px] text-slate-500">Title: Noori Welfare Foundation</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('03445144456', 'wallet')}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-[#168A50] hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      {copiedKey === 'wallet' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'wallet' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Meezan Bank */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#173B52]">Meezan Bank Ltd (Bagh Branch)</p>
                      <p className="text-slate-600 font-mono font-bold text-xs">A/C: 0102-0105892341</p>
                      <p className="text-[10px] text-slate-500">IBAN: PK65MEZN0001020105892341</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('01020105892341', 'bank')}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-[#168A50] hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      {copiedKey === 'bank' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'bank' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Donor Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#173B52] mb-1">Donor Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Anonymous or Name"
                    value={donation.donorName}
                    onChange={(e) => dispatch(updateDonorInfo({ name: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#173B52] mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    placeholder="For receipt delivery"
                    value={donation.donorPhone}
                    onChange={(e) => dispatch(updateDonorInfo({ phone: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-xs hover:shadow-sm transition-all cursor-pointer active:scale-98"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Confirm Pledge & Get Receipt Instructions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
