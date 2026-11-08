export interface StatMetric {
  id: string;
  label: string;
  valuePlaceholder: string;
  subtext: string;
  category: "mobilization" | "conservation" | "education" | "footprint";
}

export interface RegionalFocusArea {
  division: string;
  ecosystemType: string;
  activePrograms: string[];
  keyChallenge: string;
  youthInterventionPlaceholder: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  programSlug: string;
  challenge: string;
  solution: string;
  resultPlaceholder: string;
  quotePlaceholder: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ImpactContent {
  headline: string;
  narrative: string;
  keyStats: StatMetric[];
  regionalFocus: RegionalFocusArea[];
  caseStudies: CaseStudy[];
  transparencyCommitment: {
    title: string;
    points: string[];
    annualReportLinkPlaceholder: string;
  };
}

/**
 * Impact Data Configuration
 * Strictly using placeholders for all metrics, numbers, and case-study outcomes.
 */
export const impactData: ImpactContent = {
  headline: "Measurable, Ground-Level Change Across Bangladesh",
  narrative:
    "We believe true impact is not measured in social media impressions, but in tangible kilograms of waste diverted, square meters of coastline fortified, students educated, and youth leaders actively governing local climate solutions.",
  keyStats: [
    {
      id: "stat-1",
      label: "Youth Leaders Certified",
      valuePlaceholder: "XX+",
      subtext: "Graduates of our intensive environmental fellowship driving grassroots hubs.",
      category: "mobilization",
    },
    {
      id: "stat-2",
      label: "Volunteer Hours Logged",
      valuePlaceholder: "XX,000+",
      subtext: "Hands-on hours contributed across cleanups, school sessions, and nursery work.",
      category: "mobilization",
    },
    {
      id: "stat-3",
      label: "Coastline & Embankment Trees",
      valuePlaceholder: "XX,000+",
      subtext: "Native saline-tolerant mangrove and indigenous tree saplings nurtured.",
      category: "conservation",
    },
    {
      id: "stat-4",
      label: "Waterway Plastic Diverted",
      valuePlaceholder: "XX+ Metric Tons",
      subtext: "Macroplastics removed from riverbanks and channeled into circular recyclers.",
      category: "footprint",
    },
    {
      id: "stat-5",
      label: "School Eco-Clubs Activated",
      valuePlaceholder: "XX+",
      subtext: "Active secondary school student clubs driving peer-to-peer environmental education.",
      category: "education",
    },
    {
      id: "stat-6",
      label: "Districts with Active Chapters",
      valuePlaceholder: "XX / 64",
      subtext: "Geographic footprint across administrative districts of Bangladesh.",
      category: "mobilization",
    },
  ],

  regionalFocus: [
    {
      division: "Chattogram Division",
      ecosystemType: "Coastal Delta & Hill Tracts",
      activePrograms: ["Clean Coast & River Initiative", "Youth Climate Labs"],
      keyChallenge: "Beach microplastics, tidal surges, and watershed contamination.",
      youthInterventionPlaceholder:
        "Mobilizing coastal volunteer networks for seasonal cleanups and sensor-based flood alerts.",
    },
    {
      division: "Khulna Division",
      ecosystemType: "Mangrove Fringe & Saline Wetlands",
      activePrograms: ["Green Eco-Fellowship", "Clean Coast & River Initiative"],
      keyChallenge: "Soil salinization, freshwater scarcity, and cyclonic vulnerability.",
      youthInterventionPlaceholder:
        "Mangrove buffer planting alongside community rainwater harvesting demonstrations.",
    },
    {
      division: "Dhaka Division",
      ecosystemType: "Urban River Basin & Dense Megacity",
      activePrograms: ["Climate Literacy in Schools", "SME Circular Accelerator"],
      keyChallenge: "Severe river pollution, single-use consumer waste, and air quality deterioration.",
      youthInterventionPlaceholder:
        "Eco-literacy workshops in secondary schools and zero-waste audits for urban micro-enterprises.",
    },
    {
      division: "Sylhet Division",
      ecosystemType: "Haor Basin & Riparian Wetlands",
      activePrograms: ["Youth Climate Labs", "Green Eco-Fellowship"],
      keyChallenge: "Flash flooding, wetland biodiversity loss, and climate-induced agricultural shifts.",
      youthInterventionPlaceholder:
        "Student-engineered water level telemetry and youth wetland advocacy circles.",
    },
    {
      division: "Rajshahi & Rangpur Divisions",
      ecosystemType: "Barind Tract & Drought-Prone Plain",
      activePrograms: ["Green Eco-Fellowship", "Climate Literacy in Schools"],
      keyChallenge: "Groundwater depletion, seasonal drought stress, and extreme heatwaves.",
      youthInterventionPlaceholder:
        "Community tree canopy drives and schoolyard water conservation projects.",
    },
  ],

  caseStudies: [
    {
      id: "case-1",
      title: "Interception of Macroplastics Along the Karnaphuli Riverbank",
      location: "Chattogram, Bangladesh",
      programSlug: "clean-coast-river-initiative",
      challenge:
        "Heavy concentration of non-biodegradable packaging choking coastal fishing channels and riverbanks.",
      solution:
        "Mobilized XX youth volunteers over XX weekends to conduct systematic barrier collection and brand audits.",
      resultPlaceholder:
        "Diverted XX metric tons of refuse, mapped top single-use polymer producers, and instituted a community trash monitoring committee.",
      quotePlaceholder: {
        text: "“When young people lead from the shoreline, entire communities step forward to protect their waterways.”",
        author: "[Community Volunteer Lead Name]",
        role: "Chattogram Chapter Coordinator",
      },
    },
    {
      id: "case-2",
      title: "Student-Led Composting & Micro-Gardening in Secondary Schools",
      location: "Dhaka, Bangladesh",
      programSlug: "climate-literacy-schools",
      challenge:
        "Lack of interactive science education regarding soil degradation and food waste in urban public schools.",
      solution:
        "Set up student eco-clubs in XX schools with aerobic composting bins and vertical micro-gardens.",
      resultPlaceholder:
        "Engaged XX+ middle school students, eliminated organic waste disposal in participating schools, and created hands-on botany curricula.",
      quotePlaceholder: {
        text: "“The eco-club turned abstract science textbook chapters into living, green reality for our students.”",
        author: "[Secondary School Educator Name]",
        role: "Senior Science Teacher",
      },
    },
  ],

  transparencyCommitment: {
    title: "Our Commitment to Radical Financial & Operational Transparency",
    points: [
      "Every financial contribution is tied to measurable, open-source program milestones.",
      "Annual third-party audit summaries and impact evaluations published openly every year.",
      "Zero tolerance for inflated metrics or vanity environmental claims.",
    ],
    annualReportLinkPlaceholder: "/resources/annual-impact-report-[YEAR]-placeholder.pdf",
  },
};

