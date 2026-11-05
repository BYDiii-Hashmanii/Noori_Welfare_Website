import React from 'react';
import { Users, Heart, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectVolunteerForm } from '../store/selectors';
import { updateVolunteerForm, submitVolunteerForm } from '../store/actions';

export const VolunteerSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectVolunteerForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;
    dispatch(submitVolunteerForm());
  };

  return (
    <section id="volunteer" className="py-16 sm:py-24 bg-[#f8faf8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Volunteer Corps Story & Real Photo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#007a55]">
                  Join the Mission
                </span>
                <span className="w-10 h-0.5 bg-amber-400 rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d24] tracking-tight">
                Be the Hands That Bring Relief.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Our foundation is 100% powered by passionate youth, teachers, and professionals across Bagh.
              </p>
            </div>

            {/* Real Photo: Volunteers in front of Noori Distribution Shutter */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-900 group">
              <img
                src="/assets/aistudio/image_ec1e43ef.png"
                alt="Noori Welfare Foundation volunteer squad in Bagh"
                className="w-full h-[280px] sm:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-xs sm:text-sm text-white font-semibold">
                  Field team ready for disaster response and door-to-door ration delivery in Dhundar Bagh.
                </p>
              </div>
            </div>

            {/* Perks / Roles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 text-left space-y-1">
                <p className="text-xs font-bold text-[#007a55]">01. Food Packaging</p>
                <p className="text-[11px] text-slate-500">Weighing, sealing, and loading food ration sacks.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 text-left space-y-1">
                <p className="text-xs font-bold text-[#007a55]">02. Medical Camps</p>
                <p className="text-[11px] text-slate-500">Patient registration, crowd guidance & doctor support.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 text-left space-y-1">
                <p className="text-xs font-bold text-[#007a55]">03. Mountain Dispatches</p>
                <p className="text-[11px] text-slate-500">Delivering supplies to snowbound remote hamlets.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Volunteer Registration Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">Volunteer Registration</h3>
                  <p className="text-xs text-slate-500">Give a few hours to make an eternal difference</p>
                </div>
              </div>

              {form.submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-[#007a55] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Thank You, {form.fullName}!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Our team lead from Bagh will reach out to you on <strong>{form.phone}</strong> before our upcoming relief drive.
                  </p>
                  <button
                    onClick={() => dispatch(updateVolunteerForm({ submitted: false } as any))}
                    className="text-xs font-bold text-[#007a55] underline hover:text-[#006344]"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={form.fullName}
                      onChange={(e) => dispatch(updateVolunteerForm({ fullName: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0344 1234567"
                        value={form.phone}
                        onChange={(e) => dispatch(updateVolunteerForm({ phone: e.target.value }))}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City / Tehsil</label>
                      <input
                        type="text"
                        placeholder="Bagh / Dhundar / Rawalakot"
                        value={form.city}
                        onChange={(e) => dispatch(updateVolunteerForm({ city: e.target.value }))}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Volunteer Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => dispatch(updateVolunteerForm({ role: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] bg-white"
                    >
                      <option value="Field Volunteer">Field Ration Packaging & Loading</option>
                      <option value="Medical Assistant">Medical Camp Support (Nurse / Student / Doctor)</option>
                      <option value="Logistics & Transport">Logistics & 4x4 Vehicle Support</option>
                      <option value="Media & Photography">Media, Social & Photography</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Availability</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {['Weekends', 'Emergency 24/7', 'Flexible'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => dispatch(updateVolunteerForm({ availability: time }))}
                          className={`py-2 px-2 rounded-lg font-semibold border text-center transition-all ${
                            form.availability === time
                              ? 'bg-emerald-50 border-[#007a55] text-[#007a55]'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#007a55] hover:bg-[#006344] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Join NWF Volunteer Corps</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Questions? Call volunteer coordinator at <strong>+92 344 5144456</strong>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
