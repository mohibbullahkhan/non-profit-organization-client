export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Youth Perspectives" | "Climate Science" | "Circular Economy" | "Policy & Advocacy" | "Field Notes";
  excerpt: string;
  publishDatePlaceholder: string;
  readingTime: string;
  author: {
    namePlaceholder: string;
    rolePlaceholder: string;
    avatarPlaceholder: string;
  };
  tags: string[];
  featured: boolean;
}

export interface BlogContent {
  headline: string;
  subheadline: string;
  categories: string[];
  posts: BlogPost[];
}

/**
 * Blog & Editorial Content Configuration
 * Authentic perspectives highlighting youth climate action and Bangladesh environmental issues.
 */
export const blogData: BlogContent = {
  headline: "Insights, Field Notes & Youth Dispatches",
  subheadline:
    "Exploring climate science, grassroots solutions, circular economy shifts, and bold policy ideas from Bangladesh's young changemakers.",
  categories: [
    "All Topics",
    "Youth Perspectives",
    "Climate Science",
    "Circular Economy",
    "Policy & Advocacy",
    "Field Notes",
  ],
  posts: [
    {
      id: "post-1",
      slug: "why-delta-youth-must-lead-climate-adaptation",
      title: "Frontline Resilience: Why Bangladesh's Delta Youth Must Lead Climate Adaptation",
      category: "Youth Perspectives",
      excerpt:
        "Living at the intersection of rising tides and monsoon cycles gives young Bangladeshis unique experiential expertise that textbook policies often overlook.",
      publishDatePlaceholder: "[Month DD, YYYY]",
      readingTime: "5 min read",
      author: {
        namePlaceholder: "[Youth Author 1]",
        rolePlaceholder: "Coastal Youth Fellow",
        avatarPlaceholder: "/images/authors/author-placeholder-1.jpg",
      },
      tags: ["Delta Resilience", "Youth Leadership", "Climate Justice", "Adaptation"],
      featured: true,
    },
    {
      id: "post-2",
      slug: "brand-audits-revealing-the-true-cost-of-plastic-in-dhaka",
      title: "Beyond the Riverbank: How Systematic Waste Audits Expose the Single-Use Packaging Crisis",
      category: "Field Notes",
      excerpt:
        "Cleaning rivers is only half the battle. Documenting the specific consumer brands generating non-degradable waste creates the evidence required for real policy accountability.",
      publishDatePlaceholder: "[Month DD, YYYY]",
      readingTime: "7 min read",
      author: {
        namePlaceholder: "[Youth Author 2]",
        rolePlaceholder: "Research & Audit Lead",
        avatarPlaceholder: "/images/authors/author-placeholder-2.jpg",
      },
      tags: ["Plastic Pollution", "Waste Audits", "River Conservation", "Extended Producer Responsibility"],
      featured: false,
    },
    {
      id: "post-3",
      slug: "practical-circular-economy-playbook-for-bangladeshi-smes",
      title: "The Circular Shift: How Small Businesses in Dhaka Can Cut Waste and Boost Profitability",
      category: "Circular Economy",
      excerpt:
        "Micro and small businesses often perceive sustainability as an expensive luxury. Here is a pragmatic roadmap showing how waste valorization cuts operating costs.",
      publishDatePlaceholder: "[Month DD, YYYY]",
      readingTime: "6 min read",
      author: {
        namePlaceholder: "[Contributing Expert 1]",
        rolePlaceholder: "SME Transition Advisor",
        avatarPlaceholder: "/images/authors/author-placeholder-3.jpg",
      },
      tags: ["Circular Economy", "SME Growth", "Waste Valorization", "Sustainable Enterprise"],
      featured: false,
    },
    {
      id: "post-4",
      slug: "making-climate-science-tangible-in-secondary-classrooms",
      title: "From Textbook Jargon to Schoolyard Botany: Making Climate Science Tangible for Teens",
      category: "Climate Science",
      excerpt:
        "When students measure soil acidity and cultivate indigenous micro-gardens on school rooftops, abstract ecological anxieties transform into active agency.",
      publishDatePlaceholder: "[Month DD, YYYY]",
      readingTime: "4 min read",
      author: {
        namePlaceholder: "[Contributing Educator 1]",
        rolePlaceholder: "Secondary Eco-Club Mentor",
        avatarPlaceholder: "/images/authors/author-placeholder-4.jpg",
      },
      tags: ["Eco-Literacy", "STEM Education", "School Gardens", "Future Generations"],
      featured: false,
    },
  ],
};

