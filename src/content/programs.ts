export interface ProgramMilestone {
  title: string;
  metricPlaceholder: string;
  description: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Innovation" | "Leadership" | "Field Action" | "Education" | "Economic Transition";
  status: "Active" | "Cohort Open" | "Upcoming" | "Completed";
  shortDescription: string;
  overview: string;
  objectives: string[];
  keyActivities: string[];
  targetParticipants: string;
  duration: string;
  partnerSupportPlaceholder: string;
  milestones: ProgramMilestone[];
  ctaText: string;
  ctaHref: string;
}

/**
 * Original Initiatives & Programs for Global Youth Change Makers
 * Completely original structure and program names.
 */
export const programsData: Program[] = [
  {
    id: "program-1",
    slug: "youth-climate-labs",
    title: "Youth Climate Labs",
    subtitle: "Community Hackspaces for Climate Adaptation & Clean Tech Prototyping",
    category: "Innovation",
    status: "Active",
    shortDescription:
      "Decentralized makerspaces empowering student engineers and innovators to prototype low-cost climate monitoring and adaptation hardware.",
    overview:
      "Youth Climate Labs are community innovation centers established in partnership with university engineering departments and vocational institutes. Fellows build open-source flood warning sensors, localized solar charging solutions, and low-cost water filtration prototypes suited for rural coastal communities.",
    objectives: [
      "Democratize climate hardware innovation for Bangladeshi university students.",
      "Build open-source, affordable disaster resilience tools for coastal communities.",
      "Bridge academic research with grassroots community deployment.",
    ],
    keyActivities: [
      "Open hardware prototyping hackathons with engineering mentors.",
      "Field testing sensor arrays in flood-prone riverine districts.",
      "Publishing open-source CAD and PCB design blueprints for public use.",
    ],
    targetParticipants: "Engineering students, hardware tinkerers, polytechnic graduates, and local problem-solvers.",
    duration: "Year-Round (Quarterly cohort sprints)",
    partnerSupportPlaceholder: "Supported in collaboration with [Academic Partner X] and [Tech Innovation Lab Y]",
    milestones: [
      {
        title: "Prototypes Tested",
        metricPlaceholder: "XX+ Hardware Models",
        description: "Open-source climate resilience prototypes built and validated in field conditions.",
      },
      {
        title: "Active Tinkerer Hubs",
        metricPlaceholder: "XX Campus Labs",
        description: "Equipped student workshops established in public and private institutions.",
      },
    ],
    ctaText: "Apply to Join a Lab Sprint",
    ctaHref: "/programs/youth-climate-labs#apply",
  },
  {
    id: "program-2",
    slug: "green-eco-fellowship",
    title: "Green Eco-Fellowship",
    subtitle: "Nurturing the Next Generation of Grassroots Environmental Organizers",
    category: "Leadership",
    status: "Cohort Open",
    shortDescription:
      "An intensive 6-month capacity-building accelerator providing climate science, policy analysis, and community organizing skills to emerging youth leaders.",
    overview:
      "The Green Eco-Fellowship is designed to address the leadership deficit in climate resilience. Fellows undergo residential training, receive direct mentorship from environmental scientists, and manage a micro-grant funded community project in their home districts.",
    objectives: [
      "Train youth organizers in climate policy, public speaking, and project governance.",
      "Provide catalytic seed grants to youth-led local environmental interventions.",
      "Form an active alumni network of youth advocates across all 64 districts.",
    ],
    keyActivities: [
      "Intensive 10-day foundational residential training bootcamp.",
      "Monthly masterclasses led by climate policy specialists and legal experts.",
      "Guided community project deployment funded by organizational seed micro-grants.",
    ],
    targetParticipants: "Young professionals, university graduates, and local community leaders aged 18–28.",
    duration: "6 Months (Intensive training + field project execution)",
    partnerSupportPlaceholder: "In partnership with [Youth Leadership Foundation A] and [Environmental Council B]",
    milestones: [
      {
        title: "Fellows Graduated",
        metricPlaceholder: "XX+ Youth Fellows",
        description: "Young leaders certified and spearheading local resilience campaigns.",
      },
      {
        title: "Micro-Projects Funded",
        metricPlaceholder: "XX Seed Initiatives",
        description: "Grassroots community initiatives seeded and tracked for measurable outcomes.",
      },
    ],
    ctaText: "Explore Fellowship Curriculum",
    ctaHref: "/programs/green-eco-fellowship",
  },
  {
    id: "program-3",
    slug: "clean-coast-river-initiative",
    title: "Clean Coast & River Initiative",
    subtitle: "Community-Led Aquatic Restoration and Macroplastic Interception",
    category: "Field Action",
    status: "Active",
    shortDescription:
      "Mobilizing youth volunteers to intercept waterway pollution, conduct beach audits, and restore mangrove ecosystems along vulnerable coastal shorelines.",
    overview:
      "Bangladesh's riverine arteries and coastal delta are severely burdened by single-use plastics and industrial runoff. The Clean Coast & River Initiative blends hands-on community cleanup events with scientific brand audits to demand corporate packaging accountability.",
    objectives: [
      "Intercept macroplastic waste before reaching deep marine ecosystems.",
      "Collect brand audit data to substantiate national single-use plastic reduction policies.",
      "Reforest degraded coastal embankments with native saline-tolerant mangrove saplings.",
    ],
    keyActivities: [
      "Bi-weekly community cleanup campaigns across major riverbanks and beaches.",
      "Standardized brand audits classifying plastic polymers and producer origins.",
      "Community nursery cultivation and coastal mangrove planting drives.",
    ],
    targetParticipants: "Grassroots youth volunteers, fishermen communities, and local civic societies.",
    duration: "Continuous seasonal field campaigns",
    partnerSupportPlaceholder: "Carried out alongside [Local Municipality Partners] and [Coastal Conservation Alliance]",
    milestones: [
      {
        title: "Waste Diverted",
        metricPlaceholder: "XX,000+ kg Plastic",
        description: "Macroplastics intercepted and transferred to verified recycling facilities.",
      },
      {
        title: "Embankment Mangroves",
        metricPlaceholder: "XX,000+ Saplings",
        description: "Native coastal trees planted to mitigate tidal surge erosion.",
      },
    ],
    ctaText: "Join a Cleanup Crew",
    ctaHref: "/get-involved/volunteer",
  },
  {
    id: "program-4",
    slug: "climate-literacy-schools",
    title: "Climate Literacy in Schools",
    subtitle: "Bringing Experiential Climate Education into Classrooms",
    category: "Education",
    status: "Active",
    shortDescription:
      "Establishing student-led eco-clubs and training secondary school teachers to deliver interactive climate science and biodiversity lessons.",
    overview:
      "Real environmental transformation begins with scientific literacy at an early age. We partner with public secondary schools to establish interactive student eco-clubs, build campus compost units, and provide teachers with engaging multimedia lesson plans.",
    objectives: [
      "Integrate practical climate science experiments into middle and secondary schools.",
      "Foster campus sustainability habits including waste segregation and school gardens.",
      "Train teachers to facilitate discussions on local ecological risks and biodiversity.",
    ],
    keyActivities: [
      "Setting up student-governed Green Clubs with structured quarterly project guides.",
      "Schoolyard biodiversity mapping and organic composting workshops.",
      "Inter-school youth climate speech and eco-art exhibitions.",
    ],
    targetParticipants: "Secondary school students (Grades 6–10) and secondary science educators.",
    duration: "Full Academic Year Cycle",
    partnerSupportPlaceholder: "Coordinated with [District Education Boards] and [Teacher Training Institute C]",
    milestones: [
      {
        title: "Schools Participating",
        metricPlaceholder: "XX+ Secondary Schools",
        description: "Active partner schools running certified eco-club curriculums.",
      },
      {
        title: "Students Reached",
        metricPlaceholder: "XX,000+ Young Learners",
        description: "Students trained in environmental basics and practical campus conservation.",
      },
    ],
    ctaText: "Nominate Your School",
    ctaHref: "/programs/climate-literacy-schools",
  },
  {
    id: "program-5",
    slug: "sme-circular-accelerator",
    title: "SME Circular Accelerator",
    subtitle: "Guiding Small Enterprises Toward Resource Efficiency & Zero-Waste Supply",
    category: "Economic Transition",
    status: "Upcoming",
    shortDescription:
      "Providing practical circularity audits, packaging redesign workshops, and green certification guidance for youth-led micro and small enterprises.",
    overview:
      "Bangladesh's economy is powered by micro, small, and medium businesses. This accelerator bridges the gap between environmental stewardship and commercial profitability by assisting youth entrepreneurs with eco-friendly alternatives, energy audits, and waste valorization strategies.",
    objectives: [
      "Reduce industrial waste footprint among emerging artisanal and manufacturing SMEs.",
      "Connect sustainable youth enterprises with impact investors and ethical buyers.",
      "Develop pragmatic, sector-specific circular roadmaps for apparel, packaging, and food businesses.",
    ],
    keyActivities: [
      "Circularity readiness diagnostics and resource-flow assessments.",
      "Technical seminars on bio-packaging, material upcycling, and rooftop solar adoption.",
      "Pitch showcases connecting eco-innovators with green finance facilities.",
    ],
    targetParticipants: "Youth-owned small businesses, green startups, and artisanal cooperatives.",
    duration: "4-Month Targeted Accelerator Cohorts",
    partnerSupportPlaceholder: "Supported by [Chamber of Commerce Alliance] and [Green Finance Facility D]",
    milestones: [
      {
        title: "SMEs Transitioned",
        metricPlaceholder: "XX+ Businesses",
        description: "Enterprises implementing measurable circular material changes.",
      },
      {
        title: "Waste Reduction",
        metricPlaceholder: "XX% Average Footprint Cut",
        description: "Verified reduction in single-use packaging and production waste.",
      },
    ],
    ctaText: "Register SME for Cohort",
    ctaHref: "/programs/sme-circular-accelerator",
  },
];

