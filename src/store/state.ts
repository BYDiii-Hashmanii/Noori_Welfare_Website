export interface Campaign {
  id: string;
  title: string;
  category: 'food' | 'medical' | 'community' | 'education' | 'qurbani';
  categoryLabel: string;
  image: string;
  location: string;
  date: string;
  summary: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  partner?: string;
  isFeatured?: boolean;
  objectPosition?: string;
}

export interface ProjectAppeal {
  id: string;
  title: string;
  subtitle: string;
  category: 'food' | 'medical' | 'community' | 'education';
  image: string;
  targetAmount: number;
  raisedAmount: number;
  donorsCount: number;
  unitCost: number;
  unitLabel: string;
  description: string;
}

export interface DonationState {
  isModalOpen: boolean;
  selectedCause: string;
  selectedAmount: number;
  customAmount: string;
  currency: 'PKR' | 'USD' | 'GBP';
  donationType: 'one-time' | 'monthly';
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  isZakat: boolean;
  paymentMethod: 'bank' | 'easypaisa' | 'jazzcash' | 'raast';
  submittedReceipt: boolean;
}

export interface AppState {
  campaigns: Campaign[];
  activeFilter: 'all' | 'food' | 'medical' | 'community' | 'education' | 'qurbani';
  selectedCampaign: Campaign | null;
  projectAppeals: ProjectAppeal[];
  donation: DonationState;
  isVolunteerModalOpen: boolean;
  isBankModalOpen: boolean;
  mobileMenuOpen: boolean;
  volunteerForm: {
    fullName: string;
    phone: string;
    email: string;
    city: string;
    role: string;
    availability: string;
    notes: string;
    submitted: boolean;
  };
  contactForm: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submitted: boolean;
  };
}

export const initialCampaigns: Campaign[] = [
  {
    id: 'food-distribution-drive',
    title: 'Food Distribution',
    category: 'food',
    categoryLabel: 'Food Distribution',
    image: '/assets/aistudio/card_food_hd.png',
    location: 'Dhundar Valley, Bagh, AJK',
    date: 'Ongoing Seasonal Relief',
    summary: 'Essential food supplies and fresh meat packs delivered directly to vulnerable families.',
    description: 'During severe winters and seasonal hardships, families in remote districts of Bagh face extreme scarcity of staple foods. NWF volunteers coordinate with village elders to organize open-ground ration drives, ensuring dignified delivery of flour, rice, cooking oil, lentils, and fresh meat.',
    impactMetrics: [
      { label: 'Families Fed', value: '4,200+' },
      { label: 'Ration Kits', value: '5,000+' },
      { label: 'Villages Covered', value: '18' }
    ],
    partner: 'DarAlIman Welfare Collaboration',
    isFeatured: true
  },
  {
    id: 'free-eye-medical-camp',
    title: 'Medical Camps',
    category: 'medical',
    categoryLabel: 'Medical Camps',
    image: '/assets/aistudio/card_medical_hd.png',
    location: 'Al-Shifa Trust Eye Hospital & NWF Center, Dhundar, Bagh',
    date: 'Annual Specialized Camp',
    summary: 'Healthcare for everyone: free checkups, cataract surgeries, and prescription glasses.',
    description: 'Organized in strategic collaboration with Al-Shifa Trust Eye Hospital at Dhundar. The medical camp offers comprehensive ophthalmic examinations by qualified surgeons, free cataract removal procedures, post-op medications, and subsidized spectacles for elders and school children.',
    impactMetrics: [
      { label: 'Patients Examined', value: '1,850+' },
      { label: 'Surgeries Performed', value: '320+' },
      { label: 'Free Glasses Distributed', value: '950+' }
    ],
    partner: 'Al-Shifa Trust Eye Hospital',
    isFeatured: true
  },
  {
    id: 'community-support-drive',
    title: 'Community Support',
    category: 'community',
    categoryLabel: 'Community Support',
    image: '/assets/aistudio/card_community_hd.png',
    location: 'Chiran Dhundar Rd & Bagh District',
    date: 'Emergency Response',
    summary: 'Standing with the underprivileged through direct household relief and welfare supplies.',
    description: 'When landslides, severe weather, or economic hardships impact Bagh, Noori Welfare Foundation teams mobilize instantly. Equipped with safety gear and local knowledge, our youth volunteers navigate rugged terrain to deliver door-to-door aid to widowed mothers, the elderly, and disabled villagers.',
    impactMetrics: [
      { label: 'Active Volunteers', value: '120+' },
      { label: 'Emergency Dispatches', value: '85+' },
      { label: 'Beneficiary Households', value: '3,100+' }
    ],
    isFeatured: true
  },
  {
    id: 'education-support-care',
    title: 'Education Support',
    category: 'education',
    categoryLabel: 'Education Support',
    image: '/assets/aistudio/card_education_hd.png',
    location: 'Bagh District Primary Schools',
    date: 'Academic Welfare Program',
    summary: 'Supporting education and bright futures for underprivileged children and orphans.',
    description: 'Noori Welfare Foundation sponsors uniforms, textbooks, school bags, and examination fees for deserving students in Bagh schools, ensuring financial distress never halts a bright child’s educational journey.',
    impactMetrics: [
      { label: 'Students Sponsored', value: '640+' },
      { label: 'Schools Supported', value: '12' },
      { label: 'Books & Uniforms', value: '1,200 Kits' }
    ],
    isFeatured: true
  },
  {
    id: 'qurbani-meat-drive',
    title: 'Eid-ul-Adha Qurbani Meat Distribution',
    category: 'qurbani',
    categoryLabel: 'Qurbani Drive',
    image: '/assets/aistudio/hero_photo_hd.png',
    location: 'Bagh, Azad Jammu & Kashmir',
    date: 'Annual Eid Drive',
    summary: 'Fresh, hygienic sacrificial meat packed into family packages and distributed to impoverished households.',
    description: 'Ensuring that even the poorest households celebrate Eid with dignity. Our volunteer team oversees the slaughtering, hygienic meat processing, weighing, sealing in food-grade bags, and systematic distribution across Bagh and outlying hamlets.',
    impactMetrics: [
      { label: 'Meat Packs Distributed', value: '2,400+ Bags' },
      { label: 'Livestock Shares', value: '140+ Cows/Goats' },
      { label: 'Communities Served', value: '26 Hamlets' }
    ]
  },
  {
    id: 'field-volunteer-squad',
    title: 'NWF Relief Taskforce & Youth Corps',
    category: 'community',
    categoryLabel: 'Community Support',
    image: '/assets/aistudio/image_ec1e43ef.png',
    location: 'Dhundar Base Station, Bagh AJK',
    date: 'Community Network',
    summary: 'Our frontline youth corps deployed for disaster aid, patient transport, and elder assistance.',
    description: 'The foundation is built on selfless local volunteers who know every mountain path and family circumstance. They guarantee 100% transparency and zero administrative waste.',
    impactMetrics: [
      { label: 'Active Field Units', value: '14 Units' },
      { label: 'Emergency Hotline', value: '24/7 Response' }
    ]
  },
  {
    id: 'dar-aliman-drive',
    title: 'Collaborative Ration Distribution Drive',
    category: 'food',
    categoryLabel: 'Food Distribution',
    image: '/assets/aistudio/image_d110e12b.png',
    location: 'Dhundar Foothills, Bagh',
    date: 'Joint Humanitarian Initiative',
    summary: 'Partnering with DarAlIman for expanded outreach to remote mountain settlers.',
    description: 'Through humanitarian alliances, NWF pools logistical assets with global and national partners to maximize relief reach without duplicate distribution.',
    impactMetrics: [
      { label: 'Joint Beneficiaries', value: '1,500+ Families' },
      { label: 'Delivery Vehicles', value: '8 4x4 Jeeps' }
    ],
    partner: 'DarAlIman Global'
  },
  {
    id: 'free-eye-poster-camp',
    title: 'Al-Shifa Free Eye Hospital Camp',
    category: 'medical',
    categoryLabel: 'Medical Camps',
    image: '/assets/aistudio/image_4f4366fb.png',
    location: 'Dhundar, Bagh AJK',
    date: 'Certified Clinical Outreach',
    summary: 'Comprehensive eye screening, surgical operations, and free medicines.',
    description: 'Full clinical diagnostics with eye surgeons from Al-Shifa Trust Eye Hospital offering free eye operations and lenses.',
    impactMetrics: [
      { label: 'Operations', value: '320+' },
      { label: 'Consultations', value: '1,850+' }
    ],
    partner: 'Al-Shifa Trust'
  }
];

export const initialProjectAppeals: ProjectAppeal[] = [
  {
    id: 'monthly-ration-kit',
    title: 'Monthly Family Food Ration Pack',
    subtitle: 'Provide 30 days of staple nutrition for a needy family of 6.',
    category: 'food',
    image: '/assets/aistudio/card_food_hd.png',
    targetAmount: 1500000,
    raisedAmount: 1120000,
    donorsCount: 384,
    unitCost: 6500,
    unitLabel: 'PKR / Month / Family',
    description: 'Includes 20kg flour, 5kg basmati rice, 5kg sugar, 3 liters cooking oil, assorted pulses, tea, salt, and spices.'
  },
  {
    id: 'free-cataract-surgery',
    title: 'Free Cataract Eye Surgery & Camp',
    subtitle: 'Restore eyesight for elderly patients through Al-Shifa Trust partnership.',
    category: 'medical',
    image: '/assets/aistudio/card_medical_hd.png',
    targetAmount: 850000,
    raisedAmount: 640000,
    donorsCount: 198,
    unitCost: 12000,
    unitLabel: 'PKR / Patient Surgery',
    description: 'Covers pre-op diagnostics, IOL lens implant, specialized surgeon fees, post-op antibiotic drops, and protective eyewear.'
  },
  {
    id: 'eid-qurbani-share',
    title: 'Eid Qurbani Meat Share & Packaging',
    subtitle: 'Spread the joy of Eid-ul-Adha to underprivileged mountain villages.',
    category: 'food',
    image: '/assets/aistudio/hero_photo_hd.png',
    targetAmount: 2200000,
    raisedAmount: 1780000,
    donorsCount: 245,
    unitCost: 18000,
    unitLabel: 'PKR / 1 Share',
    description: 'Full adherence to Islamic guidelines, health inspection of animals, clean portioning, and door-to-door distribution.'
  },
  {
    id: 'orphan-education-support',
    title: 'Orphan & Needy Student Education Fund',
    subtitle: 'School uniforms, bags, books, stationery, and tuition fees for deserving children.',
    category: 'education',
    image: '/assets/aistudio/card_education_hd.png',
    targetAmount: 900000,
    raisedAmount: 510000,
    donorsCount: 162,
    unitCost: 4000,
    unitLabel: 'PKR / Month / Child',
    description: 'Ensuring financial hardship never robs a bright child of their right to learn, grow, and break the cycle of poverty.'
  }
];

export const initialAppState: AppState = {
  campaigns: initialCampaigns,
  activeFilter: 'all',
  selectedCampaign: null,
  projectAppeals: initialProjectAppeals,
  donation: {
    isModalOpen: false,
    selectedCause: 'General Donation / Where Most Needed',
    selectedAmount: 5000,
    customAmount: '',
    currency: 'PKR',
    donationType: 'one-time',
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    isZakat: false,
    paymentMethod: 'bank',
    submittedReceipt: false
  },
  isVolunteerModalOpen: false,
  isBankModalOpen: false,
  mobileMenuOpen: false,
  volunteerForm: {
    fullName: '',
    phone: '',
    email: '',
    city: 'Bagh, AJK',
    role: 'Field Volunteer',
    availability: 'Weekends',
    notes: '',
    submitted: false
  },
  contactForm: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submitted: false
  }
};
