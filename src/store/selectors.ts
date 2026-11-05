import { AppState, Campaign } from './state';

export const selectCampaigns = (state: AppState): Campaign[] => state.campaigns;

export const selectActiveFilter = (state: AppState) => state.activeFilter;

export const selectFilteredCampaigns = (state: AppState): Campaign[] => {
  if (state.activeFilter === 'all') {
    return state.campaigns;
  }
  return state.campaigns.filter(c => c.category === state.activeFilter);
};

export const selectSelectedCampaign = (state: AppState) => state.selectedCampaign;

export const selectDonationState = (state: AppState) => state.donation;

export const selectProjectAppeals = (state: AppState) => state.projectAppeals;

export const selectIsVolunteerModalOpen = (state: AppState) => state.isVolunteerModalOpen;

export const selectIsBankModalOpen = (state: AppState) => state.isBankModalOpen;

export const selectMobileMenuOpen = (state: AppState) => state.mobileMenuOpen;

export const selectVolunteerForm = (state: AppState) => state.volunteerForm;

export const selectContactForm = (state: AppState) => state.contactForm;
