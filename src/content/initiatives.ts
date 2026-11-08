export interface InitiativeDetail {
  slug: string;
  title: string;
  acronym?: string;
  category: string;
  tagline: string;
  description: string;
  longOverview: string;
  heroBadge: string;
  focusAreas: string[];
  keyOutcomes: {
    metric: string;
    label: string;
  }[];
  activities: {
    title: string;
    description: string;
  }[];
  callToAction: {
    text: string;
    href: string;
  };
}

export const initiativesData: InitiativeDetail[] = [
  {
    slug: "re-power-youth",
    title: "RE Power Youth",
    acronym: "REPY",
    category: "Renewable Energy Transition",
    tagline: "Empowering Next-Generation Engineers and Youth Advocates in Clean Energy Systems",
    description:
      "A national youth accelerator training young engineers, technical students, and community innovators in solar rooftop deployment, decentralized mini-grids, and renewable energy policy advocacy.",
    longOverview:
      "RE Power Youth bridges the technical capacity gap in Bangladesh's renewable energy transition. Through hands-on PV installation workshops, energy auditing bootcamps, and grid-integration hackathons, we prepare Bangladeshi youth to lead the 100% clean energy roadmap.",
    heroBadge: "Clean Energy & Jobs",
    focusAreas: [
      "Solar PV and battery storage system design",
      "Decentralized off-grid community micro-grids",
      "Youth green-jobs placement and enterprise incubator",
      "Just Energy Transition policy advocacy",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Youth Trained in Solar Engineering" },
      { metric: "XX kW", label: "Clean Capacity Designed & Tested" },
      { metric: "XX", label: "Campus Solar Audit Completed" },
      { metric: "XX%", label: "Alumni in Green Sector Roles" },
    ],
    activities: [
      {
        title: "Photovoltaic Installation Bootcamps",
        description:
          "Practical rooftop solar assembly, inverter wiring, and safety certification in partnership with technical institutes.",
      },
      {
        title: "Clean Energy Youth Hackathons",
        description:
          "48-hour sprints solving battery longevity, rural irrigation micro-solar, and grid stabilization challenges.",
      },
      {
        title: "Green Career Advisory",
        description:
          "Connecting graduating engineers with renewable energy contractors, EPCs, and international development agencies.",
      },
    ],
    callToAction: {
      text: "Join RE Power Youth",
      href: "/get-involved/volunteer",
    },
  },
  {
    slug: "w4c",
    title: "W4C — Women for Climate",
    acronym: "W4C",
    category: "Gender & Climate Justice",
    tagline: "Amplifying Female Climate Leadership and Resilient Livelihoods in Vulnerable Coastal Belts",
    description:
      "W4C equips young women and female community leaders with environmental leadership skills, climate-smart agriculture knowledge, and grassroots resilience financing.",
    longOverview:
      "Women disproportionately shoulder climate burdens in Bangladesh's climate frontlines, from salinity intrusion to cyclone displacement. W4C shifts women from vulnerable victims to active climate architects through leadership fellowships, saline-resilient homestead farming, and legal climate rights training.",
    heroBadge: "Gender Justice",
    focusAreas: [
      "Female climate leadership fellowships",
      "Saline-tolerant homestead gardening & rainwater harvesting",
      "Disaster early-warning communication networks",
      "Eco-entrepreneurship & women-led circular micro-enterprises",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Female Climate Leaders Graduated" },
      { metric: "XX+", label: "Homestead Rainwater Units Built" },
      { metric: "XX", label: "Coastal Unions Covered" },
      { metric: "XX+", label: "Women-Led Eco-Enterprises Supported" },
    ],
    activities: [
      {
        title: "Grassroots Women Leadership Circles",
        description:
          "Monthly community assemblies training women in local disaster governance and municipal budget tracking.",
      },
      {
        title: "Saline-Resilient Agriculture Labs",
        description:
          "Testing high-yield hydroponics and indigenous saline-tolerant seeds across Satkhira, Khulna, and Bagerhat.",
      },
      {
        title: "Safe Drinking Water Micro-Grants",
        description:
          "Crowdsourced funding for community solar-powered reverse osmosis units managed by local women collectives.",
      },
    ],
    callToAction: {
      text: "Support Women for Climate",
      href: "/get-involved/partner",
    },
  },
  {
    slug: "clan",
    title: "CLAN — Climate Leadership Action Network",
    acronym: "CLAN",
    category: "Grassroots Movement",
    tagline: "A Decentralized Network of Youth Climate Action Hubs Across All 64 Districts",
    description:
      "CLAN connects grassroots youth organizers, university societies, and indigenous youth across Bangladesh into an agile, rapid-response environmental network.",
    longOverview:
      "CLAN operates as a decentralized network where local youth chapters run localized climate campaigns—from river monitoring in Sylhet to coastal mangrove nurseries in Barishal—while sharing national campaign resources and mutual support.",
    heroBadge: "National Chapter Network",
    focusAreas: [
      "Autonomous district-level youth chapters",
      "Rapid post-cyclone community relief and recovery",
      "Local environmental rights monitoring and whistleblowing",
      "Peer-to-peer climate knowledge exchange",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Active District Chapters" },
      { metric: "XX,000+", label: "Registered Youth Volunteers" },
      { metric: "XX+", label: "Local Campaigns Completed" },
      { metric: "8", label: "Divisional Coordinators" },
    ],
    activities: [
      {
        title: "District Chapter Onboarding",
        description:
          "Equipping university eco-clubs with structured leadership guidelines, reporting tools, and seed micro-funding.",
      },
      {
        title: "Rapid Disaster Response Crews",
        description:
          "Mobilizing trained youth volunteers to provide emergency water purification and shelter aid following extreme weather.",
      },
      {
        title: "Quarterly National Network Assembly",
        description:
          "Virtual and hybrid gatherings uniting hundreds of youth leaders to coordinate synchronized national actions.",
      },
    ],
    callToAction: {
      text: "Start or Join a Local Chapter",
      href: "/get-involved/volunteer",
    },
  },
  {
    slug: "ref-25",
    title: "REF'25 / REF'26 — Renewable Energy Forum",
    acronym: "REF",
    category: "Policy Summit & Industry Dialogue",
    tagline: "The Flagship National Youth & Stakeholder Forum for Energy Transition",
    description:
      "Bringing together youth innovators, government policymakers, renewable energy developers, and multilateral financiers to accelerate Bangladesh's clean power target.",
    longOverview:
      "The Renewable Energy Forum (REF) is an annual summit convening key actors across Bangladesh's energy landscape. It provides an uncompromised platform for youth to interrogate energy policies, showcase solar innovations, and dialogue directly with utility providers and ministries.",
    heroBadge: "Flagship Forum",
    focusAreas: [
      "National renewable energy transition roadmap",
      "Green industrial financing and rooftop solar incentives",
      "Youth participation in energy master planning",
      "Grid modernization and energy storage technology",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Delegates & Policymakers" },
      { metric: "XX+", label: "Youth Innovation Pitches" },
      { metric: "XX", label: "Policy Recommendations Submitted" },
      { metric: "XX", label: "Industry Partners Engaged" },
    ],
    activities: [
      {
        title: "High-Level Ministerial Plenary",
        description:
          "Direct dialogue sessions pairing youth advocates with energy regulators and ministry officials.",
      },
      {
        title: "Youth Clean Energy Pitch Competition",
        description:
          "Seed awards and mentorship for innovative student projects in solar storage and smart-metering.",
      },
      {
        title: "National Renewable Energy Declaration",
        description:
          "Publishing the annual youth-led policy synthesis submitted to parliamentary climate caucuses.",
      },
    ],
    callToAction: {
      text: "Register for Upcoming REF",
      href: "/events",
    },
  },
  {
    slug: "gcl",
    title: "GCL — Green Community Leaders",
    acronym: "GCL",
    category: "Community Fellowship",
    tagline: "Nurturing Village-Level Youth Pioneers in Climate Adaptation and Ecological Stewardship",
    description:
      "GCL is a fellowship designed for grassroots village leaders, indigenous youth, and rural organizers who build hyper-local climate adaptation solutions.",
    longOverview:
      "While urban youth often dominate policy discussions, rural communities face climate extremes on a daily basis. GCL brings structured leadership training, ecological restoration techniques, and small adaptation grants directly to rural changemakers.",
    heroBadge: "Grassroots Fellowship",
    focusAreas: [
      "Community-led early warning systems",
      "Indigenous water management & seed banking",
      "Pesticide-free organic village farming",
      "Local biodiversity and wetland sanctuary conservation",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Village Leaders Certified" },
      { metric: "XX+", label: "Community Seed Banks Maintained" },
      { metric: "XX+", label: "Hectares of Wetland Monitored" },
      { metric: "XX+", label: "Rural Families Supported" },
    ],
    activities: [
      {
        title: "Rural Leadership Bootcamps",
        description:
          "Hands-on residential training in climate-smart agronomy, organic soil replenishment, and village governance.",
      },
      {
        title: "Indigenous Seed Preservation",
        description:
          "Establishing decentralized seed reserves to safeguard climate-resilient native rice and vegetable varieties.",
      },
      {
        title: "Pond & Canal Re-excavation Drives",
        description:
          "Community-mobilized canal clearing to restore freshwater storage in salinity-infiltrated coastal villages.",
      },
    ],
    callToAction: {
      text: "Apply to the GCL Cohort",
      href: "/get-involved/volunteer",
    },
  },
  {
    slug: "climated",
    title: "CLIMATED — Climate Education in Schools",
    acronym: "CLIMATED",
    category: "Education & Literacy",
    tagline: "Experiential Climate Science Curriculum and Green School Clubs Across Bangladesh",
    description:
      "Integrating interactive climate education, eco-clubs, and schoolyard biodiversity sanctuaries into middle and secondary school classrooms.",
    longOverview:
      "CLIMATED bridges the curriculum gap in Bangladesh's education system. We equip teachers with interactive multimedia lesson plans and establish student-led green clubs where children monitor rainfall, compost canteen waste, and cultivate native flora.",
    heroBadge: "Education Movement",
    focusAreas: [
      "Interactive school climate modules",
      "Student-run Green Clubs & Eco-Committees",
      "Schoolyard composting and tree canopies",
      "Teacher training in climate pedagogy",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Partner Secondary Schools" },
      { metric: "XX,000+", label: "Students Engaged" },
      { metric: "XX+", label: "Teachers Trained" },
      { metric: "XX+", label: "Schoolyard Gardens Created" },
    ],
    activities: [
      {
        title: "Curriculum Enrichment Kits",
        description:
          "Distributing Bengali-language climate science guidebooks and experiential experiment kits to partner schools.",
      },
      {
        title: "Inter-School Climate Olympiad",
        description:
          "Annual student competition showcasing climate science projects, essay writing, and environmental innovations.",
      },
      {
        title: "Zero-Single-Use-Plastic Campuses",
        description:
          "Guiding school administrations to eliminate disposable plastics from canteens and school events.",
      },
    ],
    callToAction: {
      text: "Nominate Your School",
      href: "/contact",
    },
  },
  {
    slug: "stories-of-climate-action",
    title: "Stories of Climate Action",
    category: "Storytelling & Digital Media",
    tagline: "Amplifying Grassroots Resilience Voices from the Frontlines of the Climate Crisis",
    description:
      "A multimedia documentary project recording human stories of courage, indigenous adaptation, and youth heroism across Bangladesh's climate hotspots.",
    longOverview:
      "Behind every climate statistic is a human story. Stories of Climate Action sends youth citizen journalists with cameras and microphones to coastal embankments, drought-hit Barind tracts, and haor wetlands to document frontline struggles and local solutions.",
    heroBadge: "Frontline Voices",
    focusAreas: [
      "Youth citizen journalism fellowships",
      "Short documentary films and photo essays",
      "Oral histories of climate displaced families",
      "Global media distribution and policy exhibits",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Original Video Stories" },
      { metric: "XX+", label: "Photo Essays Published" },
      { metric: "XX0k+", label: "Digital Audience Reached" },
      { metric: "XX+", label: "Citizen Reporters Trained" },
    ],
    activities: [
      {
        title: "Mobile Storytelling Masterclasses",
        description:
          "Training youth in smartphone documentary filming, interview ethics, and digital post-production.",
      },
      {
        title: "Exhibition at National Cultural Centers",
        description:
          "Public photo exhibitions and film screenings illustrating climate migration and coastal survival.",
      },
      {
        title: "Open Digital Story Archive",
        description:
          "Maintaining a creative commons archive of photographs and firsthand accounts for researchers and journalists.",
      },
    ],
    callToAction: {
      text: "Read Stories & Dispatch",
      href: "/blog",
    },
  },
  {
    slug: "gl-at-cop",
    title: "GL at COP — Youth Delegations at Climate Summits",
    acronym: "GL@COP",
    category: "International Diplomacy",
    tagline: "Demanding Loss & Damage Financing and Climate Justice on the Global UN Stage",
    description:
      "Preparing, sponsoring, and coordinating youth delegates from Bangladesh at the annual UN Climate Change Conferences (COP) and intersessional negotiations.",
    longOverview:
      "Bangladesh is recognized globally as ground zero for climate impacts. GL at COP ensures that youth from affected communities hold seats in global climate negotiations, bringing moral clarity, lived realities, and unyielding demands for loss and damage compensation.",
    heroBadge: "Global Diplomacy",
    focusAreas: [
      "UNFCCC youth delegate preparations",
      "Loss and Damage finance advocacy",
      "Global South youth solidarity coalitions",
      "Post-COP accountability reporting back home",
    ],
    keyOutcomes: [
      { metric: "XX+", label: "Youth Delegates at COP" },
      { metric: "XX+", label: "High-Level Interventions Delivered" },
      { metric: "XX+", label: "Global Coalitions Formed" },
      { metric: "XX+", label: "Media Features Worldwide" },
    ],
    activities: [
      {
        title: "COP Delegate Intensive Academy",
        description:
          "Rigorous preparation on UNFCCC negotiation tracks, article 6 carbon markets, and multilateral diplomacy.",
      },
      {
        title: "On-Ground Pavilion Side-Events",
        description:
          "Organizing youth-led panel discussions inside the blue zone featuring ministers and international climate leaders.",
      },
      {
        title: "Post-COP National Briefings",
        description:
          "Presenting independent COP outcome analyses to domestic civil society and national youth networks.",
      },
    ],
    callToAction: {
      text: "Follow COP Delegations",
      href: "/events",
    },
  },
  {
    slug: "h-map",
    title: "h-map — Climate Hazard & Vulnerability Mapping",
    acronym: "h-map",
    category: "Geospatial Data & Community Science",
    tagline: "Crowdsourced Open GIS Mapping of Localized Climate Vulnerability and Ecological Hazards",
    description:
      "An open-access geospatial mapping initiative documenting riverbank erosion, salinity encroachment, urban heat islands, and local disaster shelters.",
    longOverview:
      "Data is essential for resilience planning. The h-map initiative mobilizes trained youth to map micro-level climate vulnerabilities using GPS, satellite imagery, and community validation. The resulting open dataset assists disaster agencies, NGOs, and municipal councils.",
    heroBadge: "Open Geospatial Data",
    focusAreas: [
      "OpenStreetMap community data validation",
      "Micro-vulnerability tagging for flood & cyclone shelters",
      "Coastal embankment breach monitoring",
      "Urban heat island & tree canopy density analysis",
    ],
    keyOutcomes: [
      { metric: "XX,000+", label: "Vulnerability Points Mapped" },
      { metric: "XX+", label: "Shelters Verified with Clean Water" },
      { metric: "XX+", label: "Youth Mappers Certified" },
      { metric: "100%", label: "Open-Source & Free for Public" },
    ],
    activities: [
      {
        title: "Community Mapathons",
        description:
          "Collaborative virtual and field mapathons tracing vulnerable settlements and drainage infrastructure.",
      },
      {
        title: "Drone Imagery Field Ground-Truthing",
        description:
          "Utilizing aerial photography to assess tidal embankment erosion and mangrove buffer health.",
      },
      {
        title: "Public Open Data API",
        description:
          "Providing free geographic data layers for academic researchers, urban planners, and humanitarian teams.",
      },
    ],
    callToAction: {
      text: "Explore the Hazard Map",
      href: "/resources",
    },
  },
];

