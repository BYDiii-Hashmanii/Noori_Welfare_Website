import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectContactForm } from '../store/selectors';
import { updateContactForm, submitContactForm } from '../store/actions';

export const ContactSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(selectContactForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    dispatch(submitContactForm());
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 sm:w-12 h-0.5 bg-[#F4D943] rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#168A50]">
              Get In Touch
            </span>
            <span className="w-8 sm:w-12 h-0.5 bg-[#F4D943] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173B52] tracking-tight">
            Visit Our Center or Call Us
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#173B52]/80 font-medium mt-1.5">
            Have questions about donations, ration packs, or patient referrals? We are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* Location Card */}
            <div className="bg-[#F7F8F4] p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-[#168A50] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-[#173B52]">Relief Office & Ground Station</h4>
                <p className="text-xs text-[#173B52]/80 font-medium">
                  Chiran Dhundar Rd, Bagh, Azad Jammu & Kashmir, Pakistan
                </p>
                <p className="text-[11px] text-[#168A50] font-semibold">Near Al-Shifa Eye Hospital partner zone</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#F7F8F4] p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-[#F4D943] text-amber-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#168A50]" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#173B52]">Direct Helplines</h4>
                <div className="flex flex-col gap-0.5 text-xs text-[#173B52] font-bold">
                  <a href="tel:+923445144456" className="hover:text-[#168A50] transition-colors">
                    +92 344 5144456 (General & WhatsApp)
                  </a>
                  <a href="tel:+923457084827" className="hover:text-[#168A50] transition-colors">
                    0345 7084827 (Medical & Eye Camp Helpline)
                  </a>
                  <p className="text-[11px] text-slate-500 font-normal">
                    0344 6753608 · 0340 5129343
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="bg-[#F7F8F4] p-4 sm:p-5 rounded-2xl border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#168A50]" />
              </div>
              <div className="text-left space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-[#173B52]">Email & Inquiries</h4>
                <a href="mailto:nooriwelfare@gmail.com" className="text-xs text-[#168A50] font-bold block hover:underline">
                  nooriwelfare@gmail.com
                </a>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-0.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Center Hours: 9:00 AM – 5:00 PM (Emergency 24/7)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F8F4] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200">
            {form.submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-[#168A50] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#173B52]">Message Dispatched!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for contacting Noori Welfare Foundation. Our team in Bagh will reply to your inquiry shortly.
                </p>
                <button
                  onClick={() => dispatch(updateContactForm({ submitted: false } as any))}
                  className="text-xs font-bold text-[#168A50] underline hover:text-[#127343]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#173B52] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Khan"
                      value={form.name}
                      onChange={(e) => dispatch(updateContactForm({ name: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#173B52] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="asad@example.com"
                      value={form.email}
                      onChange={(e) => dispatch(updateContactForm({ email: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#173B52] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="0344 1234567"
                      value={form.phone}
                      onChange={(e) => dispatch(updateContactForm({ phone: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#173B52] mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Donation / Patient Referral"
                      value={form.subject}
                      onChange={(e) => dispatch(updateContactForm({ subject: e.target.value }))}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#173B52] mb-1">Message *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can we assist you or collaborate?"
                    value={form.message}
                    onChange={(e) => dispatch(updateContactForm({ message: e.target.value }))}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:border-[#168A50]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-xs hover:shadow-sm transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to NWF</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
