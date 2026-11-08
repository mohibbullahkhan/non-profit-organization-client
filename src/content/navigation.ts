export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  links: {
    title: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export interface NavigationConfig {
  mainNav: NavItem[];
  actionNav: {
    primaryCTA: NavItem;
    secondaryCTA: NavItem;
  };
  footerColumns: FooterColumn[];
  legalLinks: {
    title: string;
    href: string;
  }[];
}

/**
 * Global Navigation Configuration matching the user's requested navbar structure:
 * HOME | Green Leadership | IMPACT | INITIATIVES (dropdown) | RE-ENERGIZE BANGLADESH |
 * CLIMATE CONVERSATION | UNPLASTIC BANGLADESH | Green Stream | Publications | CIT | OUR TEAM
 */
export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "Green Leadership",
      href: "/green-leadership",
      description: "Empowering youth leadership, governance, and climate action across Bangladesh.",
    },
    {
      title: "IMPACT",
      href: "/impact",
      description: "Transparent metrics, field case studies, and verified environmental outcomes.",
    },
    {
      title: "INITIATIVES",
      href: "/initiatives/re-power-youth",
      description: "Key grassroots initiatives, youth hubs, and action programs.",
      children: [
        {
          title: "RE Power Youth",
          href: "/initiatives/re-power-youth",
          description: "Renewable energy engineering accelerator and youth solar installations.",
          badge: "Active",
        },
        {
          title: "W4C",
          href: "/initiatives/w4c",
          description: "Women for Climate — coastal female leadership and resilient livelihoods.",
          badge: "Cohort",
        },
        {
          title: "CLAN",
          href: "/initiatives/clan",
          description: "Climate Leadership Action Network — decentralized youth chapters.",
        },
        {
          title: "REF'25",
          href: "/initiatives/ref-25",
          description: "Renewable Energy Forum — annual summit and youth policy dialogue.",
        },
        {
          title: "GCL",
          href: "/initiatives/gcl",
          description: "Green Community Leaders — grassroots village and union stewards.",
        },
        {
          title: "CLIMATED",
          href: "/initiatives/climated",
          description: "Climate education and green clubs in middle and secondary schools.",
        },
        {
          title: "Stories of climate action",
          href: "/initiatives/stories-of-climate-action",
          description: "Human stories and photo essays from the climate frontline.",
        },
        {
          title: "GL at COP",
          href: "/initiatives/gl-at-cop",
          description: "Youth delegations and Loss & Damage advocacy at UN summits.",
        },
        {
          title: "h-map",
          href: "/initiatives/h-map",
          description: "Crowdsourced climate hazard and vulnerability mapping platform.",
        },
      ],
    },
    {
      title: "RE-ENERGIZE BANGLADESH",
      href: "/re-energize-bangladesh",
      description: "Our national youth campaign for 100% just clean energy transition.",
    },
    {
      title: "CLIMATE CONVERSATION",
      href: "/climate-conversation",
      description: "Podcast series, expert dialogues, and youth debate roundtables.",
    },
    {
      title: "UNPLASTIC BANGLADESH",
      href: "/unplastic-bangladesh",
      description: "Macroplastic interception, river cleanup drives, and zero-waste advocacy.",
    },
    {
      title: "Green Stream",
      href: "/green-stream",
      description: "Youth dispatches, digital environmental essays, and multimedia stories.",
    },
    {
      title: "Publications",
      href: "/publications",
      description: "Peer-reviewed policy briefs, community handbooks, and field research.",
    },
    {
      title: "CIT",
      href: "/cit",
      description: "Climate Innovation & Technology — open-source hardware and green lab solutions.",
    },
    {
      title: "OUR TEAM",
      href: "/team",
      description: "Meet the organizers, advisors, mentors, and community coordinators.",
    },
  ],

  actionNav: {
    primaryCTA: {
      title: "Get Involved",
      href: "/get-involved",
    },
    secondaryCTA: {
      title: "Support",
      href: "/get-involved/donate",
    },
  },

  footerColumns: [
    {
      title: "Organization",
      links: [
        { title: "Home", href: "/" },
        { title: "Green Leadership", href: "/green-leadership" },
        { title: "Our Team", href: "/team" },
        { title: "Impact & Evidence", href: "/impact" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Core Initiatives",
      links: [
        { title: "RE Power Youth", href: "/initiatives/re-power-youth" },
        { title: "W4C (Women for Climate)", href: "/initiatives/w4c" },
        { title: "CLAN Network", href: "/initiatives/clan" },
        { title: "CLIMATED in Schools", href: "/initiatives/climated" },
        { title: "h-map GIS Platform", href: "/initiatives/h-map" },
      ],
    },
    {
      title: "Spotlight Campaigns",
      links: [
        { title: "RE-ENERGIZE BANGLADESH", href: "/re-energize-bangladesh" },
        { title: "UNPLASTIC BANGLADESH", href: "/unplastic-bangladesh" },
        { title: "Climate Conversation", href: "/climate-conversation" },
        { title: "CIT Tech Lab", href: "/cit" },
        { title: "REF Forum", href: "/initiatives/ref-25" },
      ],
    },
    {
      title: "Resources & Media",
      links: [
        { title: "Publications", href: "/publications" },
        { title: "Green Stream Blog", href: "/green-stream" },
        { title: "Stories of Action", href: "/initiatives/stories-of-climate-action" },
        { title: "Get Involved / Volunteer", href: "/get-involved" },
        { title: "Support & Donate", href: "/get-involved/donate" },
      ],
    },
  ],

  legalLinks: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Ethics & Transparency", href: "/ethics" },
  ],
};
