/**
 * Cloned authentic site content from greenleadglobal.org
 * Ready for manual editing and customization.
 */

export interface ClonedTeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface InitiativePageData {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string[];
  features?: { title: string; description: string }[];
  highlights?: string[];
  sections?: { heading: string; text: string }[];
  quotes?: { quote: string; author: string }[];
}

export const siteIdentity = {
  name: "Green Lead",
  tagline: "Leading for a green world",
  motto: "Mobilizing Green Leaders for a Peaceful World",
  footerCopyright: "Copyright © 2026 Green Lead | Powered by Climate Intelligent Technologies (CIT)",
  socials: {
    facebook: "https://facebook.com/greenleadglobal",
    twitter: "https://twitter.com/greenleadglobal",
    linkedin: "https://linkedin.com/company/greenleadglobal",
    instagram: "https://instagram.com/greenleadglobal",
    whatsapp: "https://wa.me/#",
  }
};

export const homePageContent = {
  hero: {
    badge: "Mobilizing Green Leaders for a Peaceful World",
    title: "Leading for a Green World",
    subtitle: "Aligning People's purposes in life toward building a green and peaceful world.",
    ctaPrimary: { text: "Join Our Movement", href: "/get-involved" },
    ctaSecondary: { text: "Explore Initiatives", href: "/initiatives/re-power-youth" }
  },
  currentReality: {
    eyebrow: "Our Current Reality",
    heading: "Where are we?",
    text: "The world faces a triple planetary crisis—climate change, pollution, and biodiversity loss. Countries are affected disproportionately by these issues and their interconnected social impacts, creating existential challenges for people to live and thrive on Earth."
  },
  vision: {
    eyebrow: "Our Vision",
    heading: "Where do we want to go?",
    text: "We envision a green world where people genuinely care about the environment to live a peaceful life."
  },
  journeyForward: {
    eyebrow: "The Journey Forward",
    heading: "How can we reach there?",
    text: "We have lived on Earth for thousands of years, evolving to build modern civilization and thriving like no other species. Now, facing one of humanity's greatest existential crises, we must rethink how we use resources and live on this planet.",
    quote: "No problem can be solved from the same level of consciousness that created it.",
    quoteAuthor: "Albert Einstein"
  },
  theoryOfChange: {
    eyebrow: "Theory of Change",
    heading: "What is our Theory of Change?",
    paragraphs: [
      "We believe the triple planetary crisis is, at its core, a leadership crisis. Traditional leadership has failed by prioritizing profit over people and the planet. We need a new model — Green Leadership — that puts the planet and people first, driving systemic change in our economy and consumption.",
      "If we empower youth in the most affected areas to lead, they will pursue green jobs and entrepreneurship, boosting their economic resilience and ability to address climate and environmental challenges.",
      "We believe the most vulnerable group, especially the youth, should be most prepared as they are the most potential group to build a sustainable future for them."
    ]
  },
  greenCircleOfChange: {
    heading: "The Green Circle of Change",
    subtitle: "How do we promote and help practice \"Green Leadership\" as a tool for systemic change?",
    description: "Transforming our world through green leadership, sustainable business practices, and lifestyle choices for a green tomorrow. We believe in creating a sustainable future through collective action and innovative solutions.",
    pillars: [
      {
        number: "01",
        title: "Building Awareness through Engagement",
        description: "Engaging communities, schools, and digital platforms to awaken environmental consciousness and urgency."
      },
      {
        number: "02",
        title: "Increasing Capacity through Training",
        description: "Providing structured bootcamps, technical toolkits, and leadership accelerators to build actionable skills."
      },
      {
        number: "03",
        title: "Amplifying Impact through Resource",
        description: "Deploying seed funds, open publications, research manuals, and technological infrastructure to multiply local efforts."
      },
      {
        number: "04",
        title: "Strengthening Ecosystem through Convening",
        description: "Hosting summits, national forums, and global coalition delegations connecting grassroots leaders with policymakers."
      }
    ]
  },
  partners: [
    { name: "BYLC - Bangladesh Youth Leadership Center", role: "Strategic Leadership Partner" },
    { name: "ICCCAD - International Centre for Climate Change & Development", role: "Climate Research & Innovation Partner" },
    { name: "IUB - Independent University, Bangladesh", role: "Academic & Campus Partner" },
    { name: "Sonali Bioplastics", role: "Circular Economy & Material Innovation Partner" }
  ]
};

export const greenLeadershipPageContent = {
  title: "Green Leadership Manifesto",
  author: "Md. Fahim Hossain",
  authorRole: "Founder, Green Lead",
  tagline: "A Call to Lead for People, Planet, and Peace",
  definition: "Green Leadership is the practice of responsible leadership that enables ethical decisions shaping the future of life on Earth. From individual actions to institutional transformations, it embodies the ability to inspire and guide others to act responsibly for the well-being of people and the planet.",
  officialLaunch: {
    title: "Official Launch Event",
    description: "Green Leadership Manifesto was officially launched at the National Museum of Technology, Sweden, during the Impact Pioneers’25 by the Swedish Institute — a celebration of global sustainability leadership and collaboration."
  },
  keyThemes: [
    "Ethical Decision-Making for Planetary Wellbeing",
    "Transitioning from Exploitative Profit to Regenerative Systems",
    "Grassroots Youth Empowerment across Climate-Vulnerable Communities",
    "Institutional Accountability and Cross-Sector Sustainability"
  ]
};

export const impactPageContent = {
  title: "Impact",
  headline: "Creating Climate Impact Through Youth & Community",
  subtitle: "Measurable grassroots action, community mobilization, and systemic transformation.",
  timeline: [
    { year: "2025", title: "Renewable Energy Forum 2025", description: "Convening national stakeholders, youth innovators, and policy leaders on Bangladesh's clean power target." },
    { year: "2025", title: "Renewable Energy Training 2025", description: "Hands-on professional technical training on PV installation and green career pathways." },
    { year: "2024", title: "Global Community Leader (GCL)", description: "Accelerating localized village climate adaptation and grassroots leadership fellowships." },
    { year: "2024", title: "Unplastic Bangladesh 2024", description: "National campaign tracking plastic waste across all 8 divisions and running public education drives." },
    { year: "2024", title: "Women for Climate (W4C)", description: "Empowering female changemakers in climate-vulnerable coastal belts." },
    { year: "2023", title: "Climate Case @Bandarban", description: "Field investigation and indigenous community support in remote hilly zones." },
    { year: "2023", title: "Unplastic Bangladesh 2023", description: "First nationwide plastic pickup and brand audit drive launched with Sonali Bioplastics." },
    { year: "Ongoing", title: "climatED - Climate Education", description: "Publishing digital flipbooks and training youth in secondary schools." },
    { year: "Ongoing", title: "ENGAGE: Inspiring Climate Action", description: "Public dialogue and youth engagement forums." }
  ],
  stats: [
    { value: "100,000+", label: "People Reached Across Bangladesh" },
    { value: "8", label: "Divisions Actively Covered" },
    { value: "12+", label: "National & Global Climate Initiatives" },
    { value: "50+", label: "Partner Institutions & Communities" }
  ]
};

export const initiativesContentList: InitiativePageData[] = [
  {
    slug: "re-power-youth",
    title: "RE Power Youth",
    badge: "Renewable Energy Transition",
    tagline: "Empowering Next-Generation Energy Leaders",
    overview: [
      "RE-Power Youth is a youth-led initiative that empowers young people to become active contributors to the renewable energy transition through knowledge, skills, and leadership.",
      "The project is built on the belief that youth are not only advocates for change but also future professionals, innovators, and decision-makers shaping a sustainable energy future."
    ],
    features: [
      {
        title: "Explore the RE-ACT Toolkit",
        description: "A comprehensive open resource designed to provide practical guidance on renewable energy fundamentals, community engagement, and solar deployment."
      },
      {
        title: "Explore the RE-ACT Workbook",
        description: "Step-by-step exercises and worksheets for learners and student organizers to design clean energy interventions in their communities."
      },
      {
        title: "Highlights from RE Power Youth",
        description: "Showcasing student training bootcamps, technical demonstrations, and solar technology workshops across campuses."
      }
    ]
  },
  {
    slug: "w4c",
    title: "W4C — Women for Climate",
    badge: "Gender & Climate Justice",
    tagline: "Empowering Female Changemakers in Climate Action",
    overview: [
      "Women for Climate (W4C) focuses on empowering young women from climate-vulnerable communities to take on leadership roles in adaptation, local resilience, and sustainable livelihoods.",
      "By addressing the intersection of gender and climate vulnerability, W4C ensures women are equipped with skills, voice, and financial access to protect their households and ecosystems."
    ],
    features: [
      {
        title: "Coastal Women Leadership Bootcamps",
        description: "Training grassroots women in cyclone preparedness, saline-tolerant farming, and community organizing."
      },
      {
        title: "Safe Drinking Water Collectives",
        description: "Supporting women-managed rainwater harvesting and community reverse-osmosis filtration hubs."
      }
    ]
  },
  {
    slug: "clan",
    title: "CLAN — Climate Leaders Action Network",
    badge: "Movement & Network",
    tagline: "A Unified Global & National Network for Climate Action",
    overview: [
      "Climate change is a global challenge that requires collective action. Historically a 'clan' is a group of people united by a common mission and symbol of unity and strength.",
      "We believe we need to act as a single clan in this global crisis, and inspired by this, our CLAN stands for Climate Leaders Action Network.",
      "CLAN aims to create a supportive and collaborative environment where individuals and organizations can come together, share knowledge, and drive impactful change."
    ],
    features: [
      {
        title: "Feature Your Climate Initiatives",
        description: "Showcase your climate initiatives and projects to a global audience. We believe in celebrating and highlighting the efforts of each member."
      },
      {
        title: "Exposure to Opportunities",
        description: "Gain access to exclusive opportunities, events, and resources related to climate action. Be at the forefront of emerging trends in the climate sector."
      },
      {
        title: "Networking Opportunities",
        description: "Connect with like-minded individuals, climate experts, and organizations from around the world. Build a powerful network that amplifies your impact."
      },
      {
        title: "Partnership Opportunities",
        description: "Explore collaboration possibilities with other CLAN members. Forge partnerships that lead to innovative, lasting environmental interventions."
      },
      {
        title: "Co-Lead Climate Initiatives",
        description: "Take an active role in shaping and co-leading climate initiatives within the network."
      }
    ]
  },
  {
    slug: "ref-25",
    title: "REF'25 — Renewable Energy Forum 2025",
    badge: "Flagship Forum",
    tagline: "Accelerating Bangladesh's Clean Energy Transition",
    overview: [
      "Renewable Energy Forum 2025 (REF'25) brings together youth innovators, government policymakers, researchers, and energy developers to debate and co-create roadmaps for a 100% renewable future.",
      "Focusing on policy barriers, rooftop solar acceleration, and grid modernization, REF'25 gives young professionals an unprecedented platform to influence national energy plans."
    ],
    features: [
      {
        title: "High-Level Policy Roundtables",
        description: "Direct discussions between energy ministry officials, utility providers, and youth leaders."
      },
      {
        title: "Youth Clean-Tech Pitch Showcases",
        description: "Presenting innovative solar hardware, smart monitoring devices, and energy transition case studies."
      }
    ]
  },
  {
    slug: "gcl",
    title: "GCL — Global Community Leaders",
    badge: "Grassroots Fellowship",
    tagline: "Empowering Local Stewards at the Grassroots",
    overview: [
      "Global Community Leaders (GCL) is a grassroots leadership fellowship designed to identify, train, and support changemakers in remote, vulnerable communities across Bangladesh.",
      "GCL fellows receive tailored training in environmental stewardship, participatory planning, and sustainable livelihood models."
    ],
    features: [
      {
        title: "Grassroots Village Fellowships",
        description: "Providing seed grants and direct mentoring to local youth leaders running conservation drives."
      },
      {
        title: "Indigenous Knowledge Integration",
        description: "Documenting and supporting traditional ecological knowledge for flood, drought, and biodiversity management."
      }
    ]
  },
  {
    slug: "climated",
    title: "climatED — A Digital Library for Climate Education",
    badge: "Climate Education",
    tagline: "Interactive Flipbooks and Experiential Climate Science",
    overview: [
      "climatED is our digital library and curriculum initiative bringing experiential climate education to students and classrooms across Bangladesh.",
      "Through interactive flipbooks, student eco-clubs, and schoolyard workshops, climatED breaks down complex climate science into practical everyday actions."
    ],
    features: [
      { title: "GreenSight 01", description: "Why people aren't motivated to address climate change?" },
      { title: "GreenSight 02", description: "Water will primarily be middling the effects of climate change?" },
      { title: "GreenSight 03", description: "Why is the weather so angry?" },
      { title: "GreenSight 04", description: "Are you causing Climate Change?" },
      { title: "GreenSight 05", description: "Why we need to plant trees to decelerate temperature rise?" },
      { title: "GreenSight 06", description: "Thousand have lived without love, not without water." },
      { title: "GreenSight 07", description: "Why People Aren't Motivated to Address Climate Change?" },
      { title: "GreenSight 08", description: "How are we polluting the ocean?" },
      { title: "GreenSight 09", description: "Is climate change a myth?" },
      { title: "GreenSight 10", description: "Can face masks ever be a threat?" }
    ]
  },
  {
    slug: "stories-of-climate-action",
    title: "Stories of Climate Action",
    badge: "Storytelling & Digital Voices",
    tagline: "Youth Leaders Making a Difference",
    overview: [
      "Behind every climate statistic is a human story. Stories of Climate Action documents the courage, ingenuity, and daily struggles of youth organizers and frontline communities in Bangladesh.",
      "Through photo essays, short video dispatches, and in-depth articles, we share stories that inspire hope and prompt immediate action."
    ],
    features: [
      {
        title: "Frontline Citizen Journalism",
        description: "Equipping young community members with tools to document environmental challenges and solutions."
      },
      {
        title: "Multimedia Exhibitions",
        description: "Presenting photographs and video narratives at national cultural centers and international climate forums."
      }
    ]
  },
  {
    slug: "gl-at-cop",
    title: "GL at COP — Green Lead at COP29",
    badge: "International Climate Diplomacy",
    tagline: "Amplifying Global South Youth Voices on the World Stage",
    overview: [
      "COP (Conference of Parties) is the formal meeting where governments assess global efforts to advance the Paris Agreement and limit global warming to 1.5°C.",
      "At COP29 in Baku, Azerbaijan, Green Lead founder Md. Fahim Hossain and fellow youth representatives joined international leaders, NGOs, and experts to champion bold climate action and Loss & Damage accountability.",
      "We partnered with youth leaders from Bangladesh, Indonesia, Brazil, Costa Rica, and the USA to ensure frontline realities guide international funding commitments."
    ],
    features: [
      {
        title: "Md. Fahim Hossain (Founder, Green Lead)",
        description: "Represented Green Lead at COP29 in Baku, Azerbaijan, speaking on youth-led systemic change."
      },
      {
        title: "Amanullah Porag (Founder & ED, Youth for NDCs)",
        description: "Advocating for youth-led solutions, collaborative NDC implementation, and stronger climate resilience."
      },
      {
        title: "Sohanur Rahman (Executive Coordinator, YouthNet Global)",
        description: "Leading national youth climate justice coalitions and advocating for uncompromised loss & damage funding."
      },
      {
        title: "Fariha S Aumi (Co-Founder & CSO, BrighTech71)",
        description: "Sharing messages and technological perspectives for Bangladeshi youth at COP29."
      }
    ]
  },
  {
    slug: "h-map",
    title: "h-map — Housing & Climate Vulnerability Mapping",
    badge: "Community GIS & Data",
    tagline: "Empowering Vulnerable Communities Through Geospatial Data",
    overview: [
      "H-MAP addresses the severe lack of micro-level data in vulnerable informal settlements by mobilizing trained youth mappers to document physical infrastructure, environmental hazards, and housing quality.",
      "The project directly benefits 5,000+ low-income residents across selected communities by improving living conditions, disaster resilience, and access to municipal services.",
      "By empowering youth as local resilience champions, H-MAP embeds digital tools and community voices into municipal housing, disaster management, and sanitation strategies."
    ],
    features: [
      {
        title: "Micro-Level Hazard Mapping",
        description: "Documenting flood inundation markers, drainage bottlenecks, and solid waste accumulation points."
      },
      {
        title: "Direct Benefit to 5,000+ Residents",
        description: "Enabling evidence-based resource allocation for structural reinforcements, clean water, and sanitation."
      },
      {
        title: "Open Geospatial Models",
        description: "Providing municipal planners and NGOs with replicable, open datasets to scale climate-resilient informal housing."
      }
    ]
  }
];

export const reEnergizeBangladeshContent = {
  title: "RE-ENERGIZE BANGLADESH",
  tagline: "Bangladesh Re-Energizing! Accelerating the Clean Energy Transition",
  overview: "Re-Energize Bangladesh is a national youth-driven campaign raising awareness, building skills, and driving policy recommendations for a rapid, just transition to renewable energy.",
  recognizedBy: "Recognized as one of the winners of the ICCCAD Youth Innovation Fund in 2024.",
  stats: [
    { value: "4.96%", label: "Renewable Energy Share in Current Generation" },
    { value: "40%", label: "National Clean Energy Target by 2041" },
    { value: "1,000+", label: "Youth Trained in Clean Energy Skills" }
  ],
  keySections: [
    {
      title: "Generation Mix: Where do we get our electricity from?",
      description: "Analyzing Bangladesh's heavy reliance on imported fossil fuels and natural gas, highlighting the economic vulnerability and urgent need for decentralized solar and wind."
    },
    {
      title: "The Renewable Energy Ambitions of Bangladesh",
      description: "Evaluating national policy roadmaps, net-metering incentives, and utility-scale solar potential to build energy sovereignty."
    },
    {
      title: "RE Policy and Resource Corner",
      description: "Providing downloadable policy briefs, rooftop solar feasibility guides, and technical calculators for homeowners and businesses."
    },
    {
      title: "RE-Power School & Professional Training",
      description: "Hands-on training programs on renewable energy engineering, system design, and career pathways in the green job market."
    }
  ],
  mediaFeatures: [
    "The Business Standard",
    "The Climate Watch",
    "National Daily Features"
  ]
};

export const unplasticContent = {
  title: "UNPLASTIC BANGLADESH",
  tagline: "A Global Action Campaign Against Plastic Pollution, Born in Bangladesh",
  overview: "Unplastic is a global action campaign against plastic pollution, born in Bangladesh and built on a simple conviction: that lasting change begins with people, not just policy. Launched in 2023 by Green Lead in partnership with Sonali Bioplastics, Unplastic invited individuals and communities to collect plastic waste, dispose of it responsibly, and conduct Plastic Pollution 101 sessions.",
  reach: "Over 100,000 people reached across all 8 divisions through nationwide campaigns and live plastic dashboards.",
  pillars: [
    {
      title: "Plastic Waste Dashboard",
      description: "Tracking plastic waste share across all eight divisions of Bangladesh, mapping major pollution hotspots along rivers and coastal shores."
    },
    {
      title: "Option 1: Clean up Plastic",
      description: "Mobilizing youth groups and neighborhood clubs to organize cleanup drives and measure volume collected."
    },
    {
      title: "Option 2: Take a Plastic Pollution Session",
      description: "Hosting interactive 'Plastic Pollution 101' educational workshops in schools, colleges, and community centers."
    },
    {
      title: "Brand Audits & Producer Accountability",
      description: "Recording plastic packaging types and manufacturing brands to substantiate demands for Extended Producer Responsibility."
    }
  ]
};

export const climateConversationContent = {
  title: "CLIMATE CONVERSATION",
  tagline: "Where Environmental Awareness Meets Engaging Dialogue",
  overview: "Welcome to 'Climate Conversation' — an insightful dialogue series bringing together founders, youth activists, researchers, and community champions to share their journeys and solutions.",
  episodes: [
    {
      title: "Climate Conversation with Mariam Ispahani",
      role: "Founder and CEO of Sonali Bioplastics",
      description: "Mariam Ispahani is a passionate advocate for our planet and accelerating the green transition throughout several climate tech initiatives. She motivates everyone, especially youth, to get involved in climate action efforts and make a difference."
    },
    {
      title: "Climate Conversation with Md Almamun Rakib",
      role: "National Climate Action Focal at Lal Sabuj Society (LLS) & ICCCAD Youth Fellow 2023",
      description: "Born in Mehendiganj, Barishal — one of Bangladesh's most climate-vulnerable communities — Rakib's firsthand experience of riverbank erosion and climate displacement motivated his lifelong commitment to grassroots climate organizing."
    },
    {
      title: "Climate Conversation with Meet Joyee Chakma",
      role: "Youth Representative at ICCCAD",
      description: "Joyee Chakma works to ensure that climate adaptation solutions empower indigenous and marginalized communities in the Chittagong Hill Tracts."
    },
    {
      title: "Climate Conversation with Shimi Chak",
      role: "Environmental Science Graduate from AUW & ICCCAD Youth Fellow",
      description: "Represented the youth of Bangladesh and indigenous communities at COP28, sharing insights on youth advocacy and biodiversity conservation."
    }
  ]
};

export const citContent = {
  title: "CIT — Climate Intelligent Technologies",
  tagline: "Building Intelligent Solutions for a Green World",
  overview: "Climate Intelligent Technologies (CIT) is committed to accelerating climate solutions through technology, data, and innovation. Our mission is to empower communities and institutions with intelligent tools for climate adaptation, mitigation, and sustainable development.",
  services: [
    { title: "Climate Data Solutions", description: "AI and IoT tools for monitoring climate impact, air quality, and water salinity in real time." },
    { title: "Green Tech Advisory", description: "Supporting organizations, academic institutions, and businesses in adopting sustainable technology." },
    { title: "Digital Climate Education", description: "Creating interactive digital platforms for awareness, skills, and climate literacy." },
    { title: "Customized Climate Tools", description: "Building data dashboards, telemetry systems, and analytics for municipal and NGO partners." }
  ],
  team: [
    { name: "Arpita Mallik", role: "CSE Researcher & Developer", bio: "CSE undergrad with a strong work ethic, driven by growth and a passion for lifelong learning." },
    { name: "Ratnajit Dhar", role: "Software Engineer", bio: "CSE undergrad exploring how technology keeps changing and shaping the world around us." },
    { name: "Mehreen Rahman", role: "Green Tech Solutions Lead", bio: "Pioneering green technology solutions with focus on scalable impact." },
    { name: "Sidratul Muntaha", role: "Digital Solutions Developer", bio: "Passionate about technology, innovation, and building impactful digital solutions." },
    { name: "Pulak Bhowmik", role: "Tech Innovator & Systems Lead", bio: "Passionate learner and tech enthusiast focused on creating meaningful solutions." }
  ]
};

export const publicationsContent = {
  title: "Publications",
  tagline: "Open-Access Research, Manifestos, and Climate Policy Briefs",
  featured: {
    title: "Green Leadership Manifesto",
    author: "Md. Fahim Hossain",
    description: "Our seminal document outlining the ethics, principles, and systemic necessity of Green Leadership for people, planet, and peace."
  },
  list: [
    { title: "Green Leadership Manifesto", category: "Manifesto & Vision", year: "2025" },
    { title: "A Changing Economic Landscape: Youth in Green Jobs", category: "Economic Research", year: "2025" },
    { title: "Building a More Equal Future: Gender & Climate in Coastal Bangladesh", category: "Policy Brief", year: "2024" },
    { title: "From Ambition to Action: Accelerating Bangladesh's Rooftop Solar", category: "Energy Transition", year: "2024" },
    { title: "Connecting the Digital Economy to Local Climate Adaptation", category: "Tech & Society", year: "2024" },
    { title: "Ideas on the Horizon: Micro-Plastic Audits in Riverine Systems", category: "Environmental Science", year: "2024" },
    { title: "Preparing for an Uncertain World: Community Disaster Resilience", category: "Field Manual", year: "2023" },
    { title: "Skills for a Changing Workplace: The Circular Economy Playbook", category: "Toolkit", year: "2023" }
  ]
};

export const greenStreamContent = {
  title: "Green Stream",
  tagline: "Digital Stories, Investigative Articles, and Changemaker Spotlights",
  articles: [
    {
      title: "Turning Waste into Opportunity: Hameed Hasan Alvee on Revolutionizing Plastic Recycling in Bangladesh",
      date: "Global Recycling Day 2025",
      category: "Circular Economy",
      excerpt: "An in-depth look at how local engineering innovations are turning discarded plastic polymers into valuable industrial materials, preventing thousands of tons from entering the Buriganga."
    },
    {
      title: "Women for Climate: Empowering Future Changemakers in Coastal Communities",
      date: "Feature Story",
      category: "Gender & Resilience",
      excerpt: "How young women in Satkhira and Khulna are taking control of local rainwater harvesting, defying saline intrusion and securing drinking water for entire villages."
    },
    {
      title: "Re-Energizing Bangladesh: The Untold Story of Youth in Solar Engineering",
      date: "Energy Dispatch",
      category: "Clean Energy",
      excerpt: "Meet the student innovators building low-cost solar telemetry sensors to make renewable energy accessible to rural schools and clinics."
    }
  ]
};

export const teamPageContent = {
  title: "OUR TEAM",
  tagline: "The People Leading Green Lead",
  mission: "Our mission is to empower youth and communities to build sustainable, green, and peaceful societies through innovative solutions and ethical leadership.",
  purpose: "Our purpose is to align individuals' life missions with the stewardship of life on Earth, fostering a systemic shift from exploitation to regeneration.",
  coreValues: [
    { title: "Integrity & Ethics", description: "We put people and the planet first, ensuring transparency in all actions and research." },
    { title: "Youth Leadership", description: "We believe those most affected by climate extremes must hold the steering wheel of change." },
    { title: "Collective Action", description: "True impact arises when individuals unite under a shared purpose as one clan." },
    { title: "Innovation & Evidence", description: "We ground our campaigns in verified data, open technology, and scientific truth." }
  ],
  coreMembers: [
    { name: "Abdul Kaium", role: "Core Member / Project Coordinator" },
    { name: "Abdul Mannan Jihad", role: "Core Member / Community Mobilizer" },
    { name: "Emon Chowdhury", role: "Core Member / Youth Programs Lead" },
    { name: "Juhayer Mahtab", role: "Core Member / Research & Policy Associate" },
    { name: "Mohammad Shariful Islam", role: "Core Member / Operations Lead" },
    { name: "Nasiba Fatima", role: "Core Member / Communications & Media" },
    { name: "Pulak Bhowmik", role: "Core Member / Technology & Systems Lead" },
    { name: "Rizia Parveen Rita", role: "Core Member / Gender & Inclusion Lead" },
    { name: "Somaya Amin Brishti", role: "Core Member / Volunteer Coordinator" },
    { name: "Srijit Paul", role: "Core Member / Outreach & Partnerships" }
  ],
  perks: [
    "Hands-on experience in national climate campaigns and policy delegations",
    "Direct mentorship from senior environmental scientists and energy experts",
    "Access to exclusive global climate networks, fellowships, and youth summits",
    "Opportunity to co-lead grassroots projects with verified community impact"
  ]
};
