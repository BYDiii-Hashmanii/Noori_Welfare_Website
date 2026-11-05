import React from 'react';
import { X, Heart, Users, CheckCircle2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectIsVolunteerModalOpen, selectVolunteerForm } from '../store/selectors';
import { closeVolunteerModal, updateVolunteerForm, submitVolunteerForm } from '../store/actions';

export const VolunteerModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsVolunteerModalOpen);
  const form = useAppSelector(selectVolunteerForm);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;
    dispatch(submitVolunteerForm());
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
              <Users className="w-4 h-4 text-[#F4D943]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">Join NWF Volunteer Corps</h3>
              <p className="text-[11px] sm:text-xs text-white/80">Serving communities across Bagh, Azad Kashmir</p>
            </div>
          </div>

          <button
            onClick={() => dispatch(closeVolunteerModal())}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 text-left">
          {form.submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-50 text-[#168A50] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-[#173B52]">Application Received!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for your willingness to serve, <strong>{form.fullName}</strong>. Our field coordinator in Bagh will contact you at <strong>{form.phone}</strong>.
              </p>
              <button
                onClick={() => dispatch(closeVolunteerModal())}
                className="mt-2 bg-[#168A50] text-white text-xs font-bold py-2.5 px-6 rounded-full"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#173B52] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Usman Ali"
                  value={form.fullName}
                  onChange={(e) => dispatch(updateVolunteerForm({ fullName: e.target.value }))}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#173B52] mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0344 1234567"
                    value={form.phone}
                    onChange={(e) => dispatch(updateVolunteerForm({ phone: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#173B52] mb-1">Area / Tehsil</label>
                  <input
                    type="text"
                    placeholder="Dhundar / Bagh"
                    value={form.city}
                    onChange={(e) => dispatch(updateVolunteerForm({ city: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173B52] mb-1">Preferred Role</label>
                <select
                  value={form.role}
                  onChange={(e) => dispatch(updateVolunteerForm({ role: e.target.value }))}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50] bg-white font-medium"
                >
                  <option value="Field Volunteer">Ration Sorting & Packaging</option>
                  <option value="Medical Assistant">Medical / Eye Camp Volunteer</option>
                  <option value="Logistics Driver">4x4 Transport & Mountain Dispatch</option>
                  <option value="Content & Admin">Media, Documentation & Outreach</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173B52] mb-1">Notes / Skills (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Any specific skills (driving, nursing, photography, teaching)..."
                  value={form.notes}
                  onChange={(e) => dispatch(updateVolunteerForm({ notes: e.target.value }))}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-full shadow-xs transition-all cursor-pointer mt-1"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
