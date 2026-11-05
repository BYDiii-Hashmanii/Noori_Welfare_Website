/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StoreProvider } from './store/StoreContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ImpactStrip } from './components/ImpactStrip';
import { WorkInAction } from './components/WorkInAction';
import { ContributionBanner } from './components/ContributionBanner';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { VolunteerSection } from './components/VolunteerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { CampaignDetailModal } from './components/CampaignDetailModal';
import { BankDetailsModal } from './components/BankDetailsModal';
import { VolunteerModal } from './components/VolunteerModal';

function MainLayout() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active navigation indicator as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = ['contact', 'volunteer', 'donate-section', 'projects', 'about', 'impact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8F4] text-[#173B52] flex flex-col font-sans selection:bg-[#168A50] selection:text-white overflow-x-hidden">
      {/* Main Navigation Header */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 3. Hero Section matching template layout & curves */}
        <Hero onLearnMore={() => scrollToSection('about')} />

        {/* 4. "Our Mission" with 4 Service Cards */}
        <MissionSection
          onAboutClick={() => scrollToSection('about-us')}
          onExploreWork={() => scrollToSection('projects')}
        />

        {/* 5. Metrics & Impact Strip with "Your Donations. Their Hope." */}
        <ImpactStrip />

        {/* 6. "Our Work in Action" - Interactive Real Photo Campaigns Showcase */}
        <WorkInAction />

        {/* 7. "Every Contribution Matters" Green Gradient Banner */}
        <ContributionBanner />

        {/* 8. Active Appeals & Projects with Progress Bars */}
        <FeaturedProjects />

        {/* 9. About Us Story & Real Volunteer Team */}
        <AboutSection />

        {/* 10. Volunteer With Us & Field Taskforce */}
        <VolunteerSection />

        {/* 11. Contact Us & Bagh Relief Office */}
        <ContactSection />
      </main>

      {/* 12. Footer matching template exact design */}
      <Footer onNavigate={scrollToSection} />

      {/* Global Interactive Modals */}
      <DonationModal />
      <CampaignDetailModal />
      <BankDetailsModal />
      <VolunteerModal />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainLayout />
    </StoreProvider>
  );
}
