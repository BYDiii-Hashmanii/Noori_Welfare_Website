import { Campaign } from './state';

export type AppAction =
  | { type: '[UI] Toggle Mobile Menu'; payload?: boolean }
  | { type: '[UI] Open Donation Modal'; payload?: { cause?: string; amount?: number } }
  | { type: '[UI] Close Donation Modal' }
  | { type: '[UI] Open Volunteer Modal' }
  | { type: '[UI] Close Volunteer Modal' }
  | { type: '[UI] Open Bank Modal' }
  | { type: '[UI] Close Bank Modal' }
  | { type: '[UI] Open Campaign Modal'; payload: Campaign }
  | { type: '[UI] Close Campaign Modal' }
  | { type: '[Work] Set Filter'; payload: 'all' | 'food' | 'medical' | 'community' | 'education' | 'qurbani' }
  | { type: '[Donation] Set Amount'; payload: number }
  | { type: '[Donation] Set Custom Amount'; payload: string }
  | { type: '[Donation] Set Currency'; payload: 'PKR' | 'USD' | 'GBP' }
  | { type: '[Donation] Set Cause'; payload: string }
  | { type: '[Donation] Set Type'; payload: 'one-time' | 'monthly' }
  | { type: '[Donation] Set IsZakat'; payload: boolean }
  | { type: '[Donation] Set Payment Method'; payload: 'bank' | 'easypaisa' | 'jazzcash' | 'raast' }
  | { type: '[Donation] Update Donor Info'; payload: { name?: string; email?: string; phone?: string } }
  | { type: '[Donation] Submit Donation' }
  | { type: '[Donation] Reset Donation' }
  | { type: '[Volunteer] Update Form'; payload: Partial<AppStateVolunteerForm> }
  | { type: '[Volunteer] Submit Form' }
  | { type: '[Volunteer] Reset Form' }
  | { type: '[Contact] Update Form'; payload: Partial<AppStateContactForm> }
  | { type: '[Contact] Submit Form' }
  | { type: '[Contact] Reset Form' };

export interface AppStateVolunteerForm {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  role: string;
  availability: string;
  notes: string;
}

export interface AppStateContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Action Creators (NgRx convention)
export const toggleMobileMenu = (open?: boolean): AppAction => ({
  type: '[UI] Toggle Mobile Menu',
  payload: open
});

export const openDonationModal = (payload?: { cause?: string; amount?: number }): AppAction => ({
  type: '[UI] Open Donation Modal',
  payload
});

export const closeDonationModal = (): AppAction => ({
  type: '[UI] Close Donation Modal'
});

export const openVolunteerModal = (): AppAction => ({
  type: '[UI] Open Volunteer Modal'
});

export const closeVolunteerModal = (): AppAction => ({
  type: '[UI] Close Volunteer Modal'
});

export const openBankModal = (): AppAction => ({
  type: '[UI] Open Bank Modal'
});

export const closeBankModal = (): AppAction => ({
  type: '[UI] Close Bank Modal'
});

export const openCampaignModal = (campaign: Campaign): AppAction => ({
  type: '[UI] Open Campaign Modal',
  payload: campaign
});

export const closeCampaignModal = (): AppAction => ({
  type: '[UI] Close Campaign Modal'
});

export const setWorkFilter = (filter: 'all' | 'food' | 'medical' | 'community' | 'education' | 'qurbani'): AppAction => ({
  type: '[Work] Set Filter',
  payload: filter
});

export const setDonationAmount = (amount: number): AppAction => ({
  type: '[Donation] Set Amount',
  payload: amount
});

export const setDonationCustomAmount = (customAmount: string): AppAction => ({
  type: '[Donation] Set Custom Amount',
  payload: customAmount
});

export const setDonationCurrency = (currency: 'PKR' | 'USD' | 'GBP'): AppAction => ({
  type: '[Donation] Set Currency',
  payload: currency
});

export const setDonationCause = (cause: string): AppAction => ({
  type: '[Donation] Set Cause',
  payload: cause
});

export const setDonationType = (donationType: 'one-time' | 'monthly'): AppAction => ({
  type: '[Donation] Set Type',
  payload: donationType
});

export const setDonationIsZakat = (isZakat: boolean): AppAction => ({
  type: '[Donation] Set IsZakat',
  payload: isZakat
});

export const setPaymentMethod = (paymentMethod: 'bank' | 'easypaisa' | 'jazzcash' | 'raast'): AppAction => ({
  type: '[Donation] Set Payment Method',
  payload: paymentMethod
});

export const updateDonorInfo = (payload: { name?: string; email?: string; phone?: string }): AppAction => ({
  type: '[Donation] Update Donor Info',
  payload
});

export const submitDonation = (): AppAction => ({
  type: '[Donation] Submit Donation'
});

export const resetDonation = (): AppAction => ({
  type: '[Donation] Reset Donation'
});

export const updateVolunteerForm = (payload: Partial<AppStateVolunteerForm>): AppAction => ({
  type: '[Volunteer] Update Form',
  payload
});

export const submitVolunteerForm = (): AppAction => ({
  type: '[Volunteer] Submit Form'
});

export const updateContactForm = (payload: Partial<AppStateContactForm>): AppAction => ({
  type: '[Contact] Update Form',
  payload
});

export const submitContactForm = (): AppAction => ({
  type: '[Contact] Submit Form'
});
