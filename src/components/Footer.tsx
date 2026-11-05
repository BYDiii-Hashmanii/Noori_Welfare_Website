import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { useAppDispatch } from '../store/StoreContext';
import { openDonationModal, openVolunteerModal, openBankModal } from '../store/actions';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const dispatch = useAppDispatch();

  return (
    <footer className="bg-[#173B52] text-slate-300 pt-10 sm:pt-14 pb-6 sm:pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <div onClick={() => onNavigate('home')} className="cursor-pointer inline-block">
              <Logo variant="light" size="md" />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300/80 font-normal leading-relaxed pr-2 max-w-sm">
              Noori Welfare Foundation is a grassroots non-profit serving mountain communities across Bagh and Azad Jammu & Kashmir through food relief, free healthcare camps, and education.
            </p>

            <div className="pt-1">
              <button
                onClick={() => dispatch(openBankModal())}
                className="text-xs font-bold text-[#F4D943] hover:text-white underline transition-colors"
              >
                Official Bank & EasyPaisa Accounts →
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-2.5 text-left">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs sm:text-sm text-slate-300/80 font-medium">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-[#F4D943] transition-colors py-0.5">
                Home
              </button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-[#F4D943] transition-colors py-0.5">
                About Us
              </button>
              <button onClick={() => onNavigate('projects')} className="text-left hover:text-[#F4D943] transition-colors py-0.5">
                Our Projects
              </button>
              <button onClick={() => onNavigate('impact')} className="text-left hover:text-[#F4D943] transition-colors py-0.5">
                Our Impact
              </button>
              <button onClick={() => dispatch(openDonationModal())} className="text-left hover:text-[#F4D943] transition-colors py-0.5 font-bold text-[#F4D943]">
                Donate Now
              </button>
              <button onClick={() => dispatch(openVolunteerModal())} className="text-left hover:text-[#F4D943] transition-colors py-0.5">
                Volunteer
              </button>
            </div>
          </div>

          {/* Col 3: Contact & Support (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-2.5 text-left">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
              Relief Office
            </h4>
            <ul className="space-y-2 text-xs text-slate-300/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F4D943] shrink-0 mt-0.5" />
                <span>Chiran Dhundar Rd, Bagh, Azad Jammu & Kashmir</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F4D943] shrink-0" />
                <a href="tel:+923445144456" className="text-white hover:text-[#F4D943] font-bold transition-colors">
                  +92 344 5144456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F4D943] shrink-0" />
                <a href="mailto:nooriwelfare@gmail.com" className="hover:text-[#F4D943] transition-colors">
                  nooriwelfare@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => dispatch(openDonationModal())}
                className="inline-flex items-center gap-1.5 bg-[#168A50] hover:bg-[#127343] text-white text-xs font-bold py-2 px-4 rounded-full transition-all shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate Now</span>
              </button>
              <span className="text-[11px] text-slate-400">100% Volunteer Relief</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center sm:text-left">
          <p>© 2025 Noori Welfare Foundation. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-slate-300">
            <span>Together for a Better Tomorrow</span>
            <span className="text-[#F4D943]">💛</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
