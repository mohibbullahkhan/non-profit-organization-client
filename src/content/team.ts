export interface TeamMember {
  id: string;
  namePlaceholder: string;
  rolePlaceholder: string;
  category: "Executive Leadership" | "Program Directorate" | "Advisory Council" | "Youth Ambassador";
  bioPlaceholder: string;
  avatarPlaceholderUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TeamPageContent {
  headline: string;
  subheadline: string;
  members: TeamMember[];
  recruitmentNotice: {
    isOpen: boolean;
    title: string;
    description: string;
    ctaHref: string;
  };
}

/**
 * Team Content Configuration
 * Strict compliance: all names and profiles use clearly designated placeholders.
 */
export const teamData: TeamPageContent = {
  headline: "Guided by Youth Energy, Backed by Seasoned Mentorship",
  subheadline:
    "Meet the passionate community organizers, environmental researchers, and student innovators driving the Global Youth Change Makers movement.",
  members: [
    {
      id: "exec-1",
      namePlaceholder: "[Team Member 1 - Executive Director]",
      rolePlaceholder: "Founder & Executive Director",
      category: "Executive Leadership",
      bioPlaceholder:
        "Environmental policy researcher and youth organizer with experience in community climate resilience and non-profit governance.",
      avatarPlaceholderUrl: "/images/team-placeholder-1.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_1]",
        twitter: "https://x.com/[PROFILE_PLACEHOLDER_1]",
        email: "director@[ORGANIZATION_DOMAIN].org",
      },
    },
    {
      id: "exec-2",
      namePlaceholder: "[Team Member 2 - Head of Programs]",
      rolePlaceholder: "Director of Programs & Impact",
      category: "Executive Leadership",
      bioPlaceholder:
        "Specialist in coastal ecosystem restoration, monitoring methodologies, and grassroots youth volunteer coordination.",
      avatarPlaceholderUrl: "/images/team-placeholder-2.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_2]",
        email: "programs@[ORGANIZATION_DOMAIN].org",
      },
    },
    {
      id: "dir-1",
      namePlaceholder: "[Team Member 3 - Youth Labs Lead]",
      rolePlaceholder: "Lead, Youth Climate Labs",
      category: "Program Directorate",
      bioPlaceholder:
        "Renewable systems graduate specializing in open-source sensor design and community hardware prototyping.",
      avatarPlaceholderUrl: "/images/team-placeholder-3.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_3]",
      },
    },
    {
      id: "dir-2",
      namePlaceholder: "[Team Member 4 - Education & Schools Lead]",
      rolePlaceholder: "Lead, Climate Literacy in Schools",
      category: "Program Directorate",
      bioPlaceholder:
        "Curriculum developer passionate about hands-on ecological education, teacher workshops, and school eco-clubs.",
      avatarPlaceholderUrl: "/images/team-placeholder-4.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_4]",
      },
    },
    {
      id: "advisor-1",
      namePlaceholder: "[Advisor 1 - Senior Climate Scientist]",
      rolePlaceholder: "Scientific Advisor - Coastal Ecology",
      category: "Advisory Council",
      bioPlaceholder:
        "Academic researcher providing scientific oversight on water quality assessments, mangrove species selection, and environmental data integrity.",
      avatarPlaceholderUrl: "/images/team-placeholder-5.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_5]",
      },
    },
    {
      id: "advisor-2",
      namePlaceholder: "[Advisor 2 - Environmental Law Specialist]",
      rolePlaceholder: "Legal & Policy Advisor",
      category: "Advisory Council",
      bioPlaceholder:
        "Senior advocate offering guidance on environmental justice, legal protection of public riverbanks, and national biodiversity regulations.",
      avatarPlaceholderUrl: "/images/team-placeholder-6.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_6]",
      },
    },
    {
      id: "ambassador-1",
      namePlaceholder: "[Youth Ambassador 1 - Coastal Hub]",
      rolePlaceholder: "Regional Ambassador - Chattogram & Cox's Bazar",
      category: "Youth Ambassador",
      bioPlaceholder:
        "University student mobilizing youth volunteer chapters for river cleanup campaigns and plastic brand audits.",
      avatarPlaceholderUrl: "/images/team-placeholder-7.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_7]",
      },
    },
    {
      id: "ambassador-2",
      namePlaceholder: "[Youth Ambassador 2 - Haor Basin Hub]",
      rolePlaceholder: "Regional Ambassador - Sylhet Haor Region",
      category: "Youth Ambassador",
      bioPlaceholder:
        "Grassroots advocate organizing rural youth for flash-flood disaster preparedness and wetland preservation.",
      avatarPlaceholderUrl: "/images/team-placeholder-8.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/[PROFILE_PLACEHOLDER_8]",
      },
    },
  ],
  recruitmentNotice: {
    isOpen: true,
    title: "Join Our Team & Chapter Network",
    description:
      "We are always on the lookout for dedicated student organizers, field researchers, and creative storytellers across Bangladesh.",
    ctaHref: "/get-involved/volunteer",
  },
};

