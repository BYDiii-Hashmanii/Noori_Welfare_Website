import React, { useState } from 'react';
import { X, Copy, Check, ShieldCheck, Heart, Building, Phone } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectIsBankModalOpen } from '../store/selectors';
import { closeBankModal, openDonationModal } from '../store/actions';

export const BankDetailsModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsBankModalOpen);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#173B52] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Building className="w-4 h-4 text-[#F4D943]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">Official Foundation Accounts</h3>
              <p className="text-[11px] sm:text-xs text-white/80">Verified accounts of Noori Welfare Foundation, Bagh</p>
            </div>
          </div>

          <button
            onClick={() => dispatch(closeBankModal())}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 text-left">
          
          <div className="bg-emerald-50 text-[#168A50] p-3 rounded-xl text-xs flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <p className="font-medium leading-relaxed">
              All contributions directly fund food packages, eye surgeries, and orphan education.
            </p>
          </div>

          {/* Account 1: EasyPaisa / JazzCash / Raast */}
          <div className="border border-slate-200/80 rounded-2xl p-3.5 bg-white space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B52] uppercase tracking-wider">
                Mobile Wallets
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#168A50]">
                EasyPaisa · JazzCash · Raast
              </span>
            </div>
            <div className="flex items-center justify-between pt-0.5">
              <div>
                <p className="text-sm font-bold text-[#168A50] font-mono">0344 5144456</p>
                <p className="text-[11px] text-slate-500">Title: Noori Welfare Representative</p>
              </div>
              <button
                onClick={() => copyToClipboard('03445144456', 'wallet')}
                className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-[#168A50] hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                {copiedKey === 'wallet' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'wallet' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Account 2: Meezan Bank */}
          <div className="border border-slate-200/80 rounded-2xl p-3.5 bg-white space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#173B52] uppercase tracking-wider">
                Meezan Bank Ltd
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800">
                Bagh AJK Branch
              </span>
            </div>
            <div className="space-y-1 text-xs text-slate-600">
              <p>Account Title: <strong className="text-[#173B52]">Noori Welfare Trust Bagh</strong></p>
              <div className="flex items-center justify-between">
                <div>
                  <p>Account No: <strong className="text-[#173B52] font-mono">0102-0105892341</strong></p>
                  <p className="text-[10px] text-slate-400 font-mono">IBAN: PK65MEZN0001020105892341</p>
                </div>
                <button
                  onClick={() => copyToClipboard('PK65MEZN0001020105892341', 'iban')}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-[#168A50] hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  {copiedKey === 'iban' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'iban' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Receipt notice */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              After transfer, send screenshot to WhatsApp{' '}
              <strong className="underline font-bold">+92 344 5144456</strong> for immediate receipt acknowledgment.
            </p>
          </div>

          <div className="pt-1">
            <button
              onClick={() => {
                dispatch(closeBankModal());
                dispatch(openDonationModal());
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-full transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Record Donation Online</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
