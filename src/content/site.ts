export interface SocialLink {
  platform: "facebook" | "linkedin" | "x" | "instagram" | "youtube" | "github";
  label: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  officeAddress: string;
  regionalPresence: string[];
}

export interface SiteMetadata {
  name: string;
  shortName: string;
  legalStatus: string;
  tagline: string;
  mission: string;
  vision: string;
  targetAudience: string[];
  tone: string[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
  headquarters: {
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

/**
 * Site Metadata & Core Brand Identity
 * All values adhere to strict original creative copy and clearly marked placeholders.
 */
export const siteMetadata: SiteMetadata = {
  name: "Global Youth Change Makers",
  shortName: "GYCM",
  legalStatus: "Youth-Led Non-Profit Initiative",
  tagline: "Catalyzing Youth-Led Climate Innovation and Sustainable Action across Bangladesh and Beyond",
  mission:
    "To equip, mobilize, and amplify young changemakers with the scientific literacy, practical leadership skills, and community resources needed to build climate-resilient futures and accelerate grassroots green transitions.",
  vision:
    "A thriving, climate-resilient world where youth are at the forefront of ecological regeneration, sustainable commerce, and community equity.",
  targetAudience: [
    "University students and youth advocates seeking direct environmental impact",
    "Secondary school educators and students developing eco-literacy",
    "Micro, small, and medium enterprises (MSMEs) aiming for circular operations",
    "Grassroots communities vulnerable to climate displacement and environmental stress",
    "International climate networks, NGOs, and grant-making foundations",
  ],
  tone: [
    "Inspiring and youth-energized",
    "Professional and evidence-backed",
    "Community-rooted and culturally attuned to Bangladesh",
    "Action-driven, transparent, and collaborative",
  ],
  contact: {
    email: "[EMAIL: contact@globalyouthchangemakers.org]",
    phone: "[PHONE: +880 1700-000000]",
    officeAddress: "[OFFICE ADDRESS: House XX, Road XX, Sector XX, Uttara, Dhaka, Bangladesh]",
    regionalPresence: [
      "Dhaka Division (Central Coordination)",
      "Chattogram & Cox's Bazar (Coastal Resilience Hub)",
      "Khulna & Satkhira (Sundarbans Delta Cluster)",
      "Sylhet Division (Haor & Watershed Chapter)",
      "Rajshahi Division (Arid & Agro-Ecology Chapter)",
    ],
  },
  socialLinks: [
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://facebook.com/[SOCIAL_HANDLE_FB]",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/company/[SOCIAL_HANDLE_LINKEDIN]",
    },
    {
      platform: "x",
      label: "X (formerly Twitter)",
      url: "https://x.com/[SOCIAL_HANDLE_X]",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/[SOCIAL_HANDLE_INSTA]",
    },
    {
      platform: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@[SOCIAL_HANDLE_YT]",
    },
  ],
  headquarters: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

