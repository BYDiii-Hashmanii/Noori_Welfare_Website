import React from 'react';
import { Heart, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { useAppDispatch, useAppSelector } from '../store/StoreContext';
import { selectMobileMenuOpen } from '../store/selectors';
import { toggleMobileMenu, openDonationModal, openVolunteerModal } from '../store/actions';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector(selectMobileMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Our Projects' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'donate-section', label: 'Donate' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    if (mobileMenuOpen) {
      dispatch(toggleMobileMenu(false));
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Prominent Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="shrink-0 flex items-center"
          >
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links - Aligned, single-line, elegant typography */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#168A50]'
                      : 'text-[#173B52]/80 hover:text-[#168A50]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#168A50] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Visible & Elegant Donate Now Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => dispatch(openDonationModal())}
              className="inline-flex items-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Right Controls: Compact Donate Pill + Touch-friendly Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => dispatch(openDonationModal())}
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#168A50] hover:bg-[#127343] text-white text-xs font-bold px-3 py-2 rounded-full shadow-xs active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-[#173B52] hover:bg-slate-100 hover:text-[#168A50] transition-colors focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop blur */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#168A50]'
                      : 'text-[#173B52] hover:bg-slate-50 hover:text-[#168A50]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#168A50]" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  dispatch(openDonationModal());
                  dispatch(toggleMobileMenu(false));
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#168A50] hover:bg-[#127343] text-white font-bold py-3 rounded-xl text-sm shadow-sm active:scale-98"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to NWF</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  dispatch(openVolunteerModal());
                  dispatch(toggleMobileMenu(false));
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#173B52]/80 hover:text-[#168A50]"
              >
                Become a Volunteer →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
