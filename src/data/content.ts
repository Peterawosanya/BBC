export interface MusicProject {
  id: string;
  title: string;
  artist: string;
  featuredArtist?: string;
  role: string;
  year: string;
  cover: string;
  tagline: string;
  overview: string;
  collaboration: string;
  contribution: string[];
  links: { label: string; url: string }[];
}

export const profile = {
  name: 'Temitope Emmanuel',
  fullName: 'Adegbohun Temitope Emmanuel',
  title: 'Entertainment Entrepreneur · Artist Relations · Music Executive',
  tagline: 'Founder, Billionaire Boys Crew (BBC)',
  location: 'Lagos, Nigeria',
  portrait: '/images/portrait.jpg',
  logo: '/images/bbc-logo.jpg',
  bio: `Adegbohun Temitope Emmanuel is an entertainment entrepreneur, artist relations professional and music executive. He is the founder of Billionaire Boys Crew (BBC), an entertainment outfit he built from the ground up — running events, coordinating artists and driving music releases from concept to release day.

His work sits at the intersection of talent and business: negotiating venues, planning budgets, managing artists on the ground, and making sure every record and every show lands the way it was imagined.

From street-rooted street anthems to event production, Temitope has spent his career building platforms where artists and audiences meet.`,
  email: 'temitopeemmanuel@gmail.com',
  phone: '+234 806 234 5146',
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/bbc_temitope' },
    { label: 'X (Twitter)', url: 'https://x.com/bbc_temitope' },
  ],
};

export const experience = [
  {
    period: 'The Foundation',
    title: 'Discovering the Vision',
    description:
      'A deep interest in music and the people who make it grew into something more — an understanding of the industry from the inside, and a conviction that artists need more than talent to win.',
    tags: ['Vision', 'Industry Study'],
  },
  {
    period: 'Building BBC',
    title: 'Founding Billionaire Boys Crew',
    description:
      'Founded Billionaire Boys Crew (BBC), an entertainment outfit built to create opportunities — a platform for events, artist coordination and music releases, run with the discipline of a business.',
    tags: ['Founding', 'Leadership', 'Brand Building'],
  },
  {
    period: 'Releases & Records',
    title: 'Executive Producing Music',
    description:
      'Drove singles from concept to release day — coordinating artists and features, shaping rollout strategy and putting BBC-branded records into the market, including Enu Oshey, Aje and Shey You Get.',
    tags: ['A&R', 'Release Strategy', 'Coordination'],
  },
  {
    period: 'Events & Production',
    title: 'Producing Rave with BBC',
    description:
      'Planned and executed Rave with BBC, a full-scale live event — venue negotiation, artist lineup and coordination, budget planning, ticketing and promotion, all delivered under one roof.',
    tags: ['Event Production', 'Logistics', 'Promotion'],
  },
  {
    period: 'Today',
    title: 'Artist Relations & Growth',
    description:
      'Working at the intersection of talent and business — representing artist interests, building relationships across the industry and positioning BBC for its next chapter.',
    tags: ['Artist Relations', 'Business Development'],
  },
];

export const projects: MusicProject[] = [
  {
    id: 'enu-oshey',
    title: 'Enu Oshey',
    artist: 'OLW Maro',
    featuredArtist: 'Otega',
    role: 'Executive Production · Release Coordination',
    year: 'BBC Release',
    cover: '/images/cover-enu-oshey.jpg',
    tagline: 'A street-ready anthem built on loyalty and talk.',
    overview:
      'Enu Oshey pairs OLW Maro with street-hop heavyweight Otega over a percussive, diary-of-the-streets beat. The record speaks to watching your circle and letting actions talk — a theme that resonated immediately with the core audience.',
    collaboration:
      'OLW Maro fronts the record while Otega delivers a feature verse that anchors the track in the street-hop tradition. BBC drove the collaboration from initial link-up through to release.',
    contribution: [
      'Coordinated the collaboration between OLW Maro and Otega',
      'Managed release planning and rollout for the single',
      'Positioned the record within the street-hop audience',
    ],
    links: [],
  },
  {
    id: 'aje',
    title: 'Aje',
    artist: 'Folahanmi',
    featuredArtist: 'Otega',
    role: 'Executive Production · Release Coordination',
    year: 'BBC Release',
    cover: '/images/cover-aje.jpg',
    tagline: 'A pursuit-of-money record with hustle in its bones.',
    overview:
      'Aje — "money" in Yoruba — is a hustler\u2019s anthem. Folahanmi carries the melody while Otega adds grit, making a record built for motivation and movement.',
    collaboration:
      'Folahanmi and Otega trade verses over an Afro-street production, with BBC coordinating both artists and driving the single\u2019s journey to release day.',
    contribution: [
      'Brought Folahanmi and Otega together on the record',
      'Oversaw production coordination and timeline to release',
      'Ran the promotional push behind the single',
    ],
    links: [],
  },
  {
    id: 'shey-you-get',
    title: 'Shey You Get',
    artist: 'System of Hype',
    role: 'Executive Production · Release Coordination',
    year: 'BBC Release',
    cover: '/images/cover-shey-you-get.jpg',
    tagline: 'A playful, high-energy record made for the moment.',
    overview:
      'Shey You Get is System of Hype at full energy — a catchy, danceable record with a hook that sticks. It showcases the lighter, party-facing side of the BBC catalogue.',
    collaboration:
      'A System of Hype record from the BBC stable — coordinated, branded and released under BBC\u2019s music arm.',
    contribution: [
      'Coordinated the recording and release of the single',
      'Handled rollout and audience positioning',
      'Delivered the record as part of the BBC catalogue',
    ],
    links: [],
  },
];

export const eventCaseStudy = {
  title: 'Rave with BBC',
  subtitle: 'A full-scale live event — planned, promoted and delivered by BBC.',
  flyer: '/images/event-flyer.jpg',
  venue: 'Anchor Event Centre',
  location: 'Ikeja, Lagos',
  date: 'Saturday, 30 November',
  time: '8 PM till dawn',
  lineup: ['Otega', 'Olamma 🌟', 'Leebelle', 'DJ Soundnote', 'DJ Kaycee', '+ more'],
  hostedBy: 'Billionaire Boys Crew',
  gallery: [
    '/images/event-1.jpg',
    '/images/event-2.jpg',
    '/images/event-3.jpg',
    '/images/event-4.jpg',
    '/images/event-5.jpg',
    '/images/event-6.jpg',
  ],
  description:
    'Rave with BBC was the crew\u2019s flagship live event — a night bringing street-hop energy to Ikeja with a lineup of performers and DJs. From the first planning meeting to the last song of the night, the event was run end-to-end by the BBC team.',
  timeline: [
    {
      phase: 'Planning',
      title: 'Concept & Planning',
      description:
        'Defined the event concept, audience and date. Mapped out the full production plan — from venue requirements to artist bookings and promotional timeline.',
    },
    {
      phase: 'Artists',
      title: 'Artist Coordination',
      description:
        'Booked and coordinated the lineup — Otega, Olamma, Leebelle and DJs Soundnote and Kaycee — managing availability, performance terms and on-the-day logistics.',
    },
    {
      phase: 'Venue',
      title: 'Venue Negotiation',
      description:
        'Negotiated and secured Anchor Event Centre in Ikeja — handling terms, capacity planning and event-day access.',
    },
    {
      phase: 'Budget',
      title: 'Budget Planning',
      description:
        'Built and managed the event budget — balancing production costs, artist fees and marketing spend against ticket revenue targets.',
    },
    {
      phase: 'Ticketing',
      title: 'Ticketing & Tables',
      description:
        'Set up ticketing tiers including regular tickets and VIP tables, with direct booking channels for guests and supporters.',
    },
    {
      phase: 'Promotion',
      title: 'Promotion & Hype',
      description:
        'Ran the promotional campaign across social channels and street-level promotion, building momentum in the weeks leading to the event.',
    },
    {
      phase: 'Execution',
      title: 'Event Execution',
      description:
        'Delivered the event on the night — artist management, crowd coordination, and a full house from 8 PM till dawn.',
    },
  ],
};

export const galleryCaption: Record<string, string> = {
  '/images/event-1.jpg': 'Rave with BBC venue and stage',
  '/images/event-2.jpg': 'Artist performance at Rave with BBC',
  '/images/event-3.jpg': 'Live performance at Rave with BBC',
  '/images/event-4.jpg': 'Rave with BBC event performance',
  '/images/event-5.jpg': 'BBC branding at Rave with BBC',
  '/images/event-6.jpg': 'BBC event photo',
};
