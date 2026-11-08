export interface VolunteerTrack {
  id: string;
  title: string;
  targetProfile: string;
  commitHours: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface DonationTier {
  id: string;
  title: string;
  amountPlaceholder: string;
  frequency: "One-Time" | "Monthly";
  impactEquivalencyPlaceholder: string;
  description: string;
}

export interface PartnerTrack {
  type: "Academic Institutions" | "Corporates & SMEs" | "International Non-Profits" | "Community Foundations";
  description: string;
  collaborationModes: string[];
  partnerPlaceholderBadge: string;
}

export interface GetInvolvedContent {
  headline: string;
  subheadline: string;
  volunteerTracks: VolunteerTrack[];
  donationTiers: DonationTier[];
  partnerTracks: PartnerTrack[];
  frequentlyAskedQuestions: {
    question: string;
    answer: string;
  }[];
}

/**
 * Get Involved Flow Configuration (Volunteer, Donate, Partner)
 * Clear multi-path conversion options.
 */
export const getInvolvedData: GetInvolvedContent = {
  headline: "Become a Catalyst for Sustainable Change",
  subheadline:
    "Whether you are a student ready to volunteer on the frontline, an organization seeking high-impact collaboration, or a supporter funding youth initiatives, your action counts.",
  volunteerTracks: [
    {
      id: "track-field",
      title: "Field Action & Community Volunteer",
      targetProfile: "High school & university students eager for hands-on ecological action.",
      commitHours: "4–6 hours / weekend event",
      description:
        "Participate in physical river and beach cleanups, coastal mangrove planting, and community audit events.",
      responsibilities: [
        "Support sorting and documentation of intercepted river plastic.",
        "Assist in community tree-planting logistics and sapling aftercare.",
        "Facilitate registration and participant safety at public events.",
      ],
      skillsGained: [
        "Environmental audit methodology",
        "Community crisis response coordination",
        "Team leadership under field conditions",
      ],
    },
    {
      id: "track-creative",
      title: "Youth Climate Storyteller & Media Fellow",
      targetProfile: "Photographers, writers, videographers, and graphic designers.",
      commitHours: "3–5 hours / week (flexible)",
      description:
        "Translate complex environmental challenges and inspiring youth field actions into compelling visual stories and essays.",
      responsibilities: [
        "Capture photo and video dispatches during community action days.",
        "Draft youth perspective articles for the organization's publication hub.",
        "Produce accessible educational infographics for social media campaigns.",
      ],
      skillsGained: [
        "Science communication & public journalism",
        "Multimedia production for non-profit campaigns",
        "Digital audience engagement strategy",
      ],
    },
    {
      id: "track-tech",
      title: "Climate Tech Tinkerer & Data Analyst",
      targetProfile: "Engineering, computer science, and environmental science students.",
      commitHours: "5–8 hours / week",
      description:
        "Assist in designing open-source flood sensors, analyzing waste audit datasets, and maintaining research dashboards.",
      responsibilities: [
        "Assemble and test Arduino/ESP32 water level telemetry hardware.",
        "Clean and visualize geographical pollution data using GIS and open databases.",
        "Collaborate on open-source hardware documentation.",
      ],
      skillsGained: [
        "Embedded hardware prototyping for environmental sensing",
        "Geospatial and environmental data visualization",
        "Open-source collaboration practices",
      ],
    },
  ],

  donationTiers: [
    {
      id: "tier-1",
      title: "Seed a School Eco-Club",
      amountPlaceholder: "[BDT XXX / $XX]",
      frequency: "One-Time",
      impactEquivalencyPlaceholder:
        "Provides 1 public secondary school with organic composting kits, botanical seeds, and student learning handbooks.",
      description: "Directly funds experiential environmental education for dozens of students.",
    },
    {
      id: "tier-2",
      title: "Sponsor a Community River Trap",
      amountPlaceholder: "[BDT XXXX / $XX]",
      frequency: "One-Time",
      impactEquivalencyPlaceholder:
        "Funds the fabrication, installation, and first 3 months of maintenance for a localized floating plastic interceptor.",
      description: "Prevents kilograms of non-biodegradable debris from reaching open waters.",
    },
    {
      id: "tier-3",
      title: "Sustain a Youth Climate Fellow",
      amountPlaceholder: "[BDT XXXX / $XX]",
      frequency: "Monthly",
      impactEquivalencyPlaceholder:
        "Provides catalytic seed funding, leadership mentorship, and project resources for 1 grassroots youth organizer.",
      description: "Empowers a certified youth leader to drive sustained change in their home district.",
    },
  ],

  partnerTracks: [
    {
      type: "Academic Institutions",
      description:
        "We co-create university climate labs, facilitate student research internships, and host inter-college climate competitions.",
      collaborationModes: [
        "Establishment of on-campus Youth Climate Lab sprint hubs.",
        "Joint research publications on coastal pollution and local adaptation.",
        "Academic credit recognition for fellowship participation.",
      ],
      partnerPlaceholderBadge: "[Institutional Academic Partner XX]",
    },
    {
      type: "Corporates & SMEs",
      description:
        "We assist enterprises in adopting circular supply chain principles, reducing packaging waste, and executing authentic CSR programs.",
      collaborationModes: [
        "Tailored zero-waste and circular packaging advisory sessions.",
        "Corporate employee volunteer action days on river cleanups.",
        "Transparent, audited sponsorship of youth leadership cohorts.",
      ],
      partnerPlaceholderBadge: "[Responsible Enterprise Partner XX]",
    },
    {
      type: "International Non-Profits",
      description:
        "We serve as trusted, agile ground-level execution partners for global climate funds and development organizations in Bangladesh.",
      collaborationModes: [
        "Grassroots project implementation across coastal and haor belts.",
        "Local youth mobilization for international climate awareness agendas.",
        "Transparent milestone-based monitoring, evaluation, and reporting.",
      ],
      partnerPlaceholderBadge: "[International Coalition Ally XX]",
    },
  ],

  frequentlyAskedQuestions: [
    {
      question: "Can high school students join as volunteers?",
      answer:
        "Yes! High school students can join our school-based eco-clubs, weekend tree planting drives, and cleanup days with guardian consent.",
    },
    {
      question: "Are volunteer roles certified?",
      answer:
        "All volunteers completing minimum milestone hours receive an authenticated certificate of service and community impact verification.",
    },
    {
      question: "How do you ensure donation transparency?",
      answer:
        "100% of community contributions are ring-fenced for direct program expenditures. Detailed financial breakdowns and receipts are published in our annual transparency report.",
    },
  ],
};

