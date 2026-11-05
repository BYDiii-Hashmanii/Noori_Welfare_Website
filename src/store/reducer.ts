import { AppState, initialAppState } from './state';
import { AppAction } from './actions';

export function appReducer(state: AppState = initialAppState, action: AppAction): AppState {
  switch (action.type) {
    case '[UI] Toggle Mobile Menu':
      return {
        ...state,
        mobileMenuOpen: action.payload !== undefined ? action.payload : !state.mobileMenuOpen
      };

    case '[UI] Open Donation Modal':
      return {
        ...state,
        donation: {
          ...state.donation,
          isModalOpen: true,
          selectedCause: action.payload?.cause || state.donation.selectedCause,
          selectedAmount: action.payload?.amount || state.donation.selectedAmount,
          submittedReceipt: false
        }
      };

    case '[UI] Close Donation Modal':
      return {
        ...state,
        donation: {
          ...state.donation,
          isModalOpen: false
        }
      };

    case '[UI] Open Volunteer Modal':
      return {
        ...state,
        isVolunteerModalOpen: true
      };

    case '[UI] Close Volunteer Modal':
      return {
        ...state,
        isVolunteerModalOpen: false
      };

    case '[UI] Open Bank Modal':
      return {
        ...state,
        isBankModalOpen: true
      };

    case '[UI] Close Bank Modal':
      return {
        ...state,
        isBankModalOpen: false
      };

    case '[UI] Open Campaign Modal':
      return {
        ...state,
        selectedCampaign: action.payload
      };

    case '[UI] Close Campaign Modal':
      return {
        ...state,
        selectedCampaign: null
      };

    case '[Work] Set Filter':
      return {
        ...state,
        activeFilter: action.payload
      };

    case '[Donation] Set Amount':
      return {
        ...state,
        donation: {
          ...state.donation,
          selectedAmount: action.payload,
          customAmount: ''
        }
      };

    case '[Donation] Set Custom Amount':
      return {
        ...state,
        donation: {
          ...state.donation,
          customAmount: action.payload,
          selectedAmount: Number(action.payload) || 0
        }
      };

    case '[Donation] Set Currency':
      return {
        ...state,
        donation: {
          ...state.donation,
          currency: action.payload
        }
      };

    case '[Donation] Set Cause':
      return {
        ...state,
        donation: {
          ...state.donation,
          selectedCause: action.payload
        }
      };

    case '[Donation] Set Type':
      return {
        ...state,
        donation: {
          ...state.donation,
          donationType: action.payload
        }
      };

    case '[Donation] Set IsZakat':
      return {
        ...state,
        donation: {
          ...state.donation,
          isZakat: action.payload
        }
      };

    case '[Donation] Set Payment Method':
      return {
        ...state,
        donation: {
          ...state.donation,
          paymentMethod: action.payload
        }
      };

    case '[Donation] Update Donor Info':
      return {
        ...state,
        donation: {
          ...state.donation,
          donorName: action.payload.name !== undefined ? action.payload.name : state.donation.donorName,
          donorEmail: action.payload.email !== undefined ? action.payload.email : state.donation.donorEmail,
          donorPhone: action.payload.phone !== undefined ? action.payload.phone : state.donation.donorPhone
        }
      };

    case '[Donation] Submit Donation':
      return {
        ...state,
        donation: {
          ...state.donation,
          submittedReceipt: true
        }
      };

    case '[Donation] Reset Donation':
      return {
        ...state,
        donation: {
          ...state.donation,
          submittedReceipt: false,
          customAmount: '',
          donorName: '',
          donorEmail: '',
          donorPhone: ''
        }
      };

    case '[Volunteer] Update Form':
      return {
        ...state,
        volunteerForm: {
          ...state.volunteerForm,
          ...action.payload
        }
      };

    case '[Volunteer] Submit Form':
      return {
        ...state,
        volunteerForm: {
          ...state.volunteerForm,
          submitted: true
        }
      };

    case '[Volunteer] Reset Form':
      return {
        ...state,
        volunteerForm: {
          fullName: '',
          phone: '',
          email: '',
          city: 'Bagh, AJK',
          role: 'Field Volunteer',
          availability: 'Weekends',
          notes: '',
          submitted: false
        }
      };

    case '[Contact] Update Form':
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          ...action.payload
        }
      };

    case '[Contact] Submit Form':
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          submitted: true
        }
      };

    case '[Contact] Reset Form':
      return {
        ...state,
        contactForm: {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          submitted: false
        }
      };

    default:
      return state;
  }
}
