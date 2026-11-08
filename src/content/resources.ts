export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category: "Toolkit" | "Policy Brief" | "Curriculum Guide" | "Research Paper" | "Infographic";
  description: string;
  targetAudience: string;
  fileFormat: "PDF" | "ZIP" | "Document";
  fileSizePlaceholder: string;
  publishYear: string;
  downloadUrlPlaceholder: string;
}

export interface ResourcesContent {
  headline: string;
  subheadline: string;
  resources: ResourceItem[];
}

/**
 * Resources & Publications Configuration
 * Open-access toolkits and knowledge products for students, SMEs, and researchers.
 */
export const resourcesData: ResourcesContent = {
  headline: "Open Climate Knowledge & Action Toolkits",
  subheadline:
    "We believe environmental knowledge should be open and accessible. Download our field-tested toolkits, research briefs, and educational modules.",
  resources: [
    {
      id: "res-1",
      slug: "grassroots-river-cleanup-brand-audit-guide",
      title: "Community Waterway Cleanup & Brand Audit Field Manual",
      category: "Toolkit",
      description:
        "A step-by-step operational guide for student organizers on planning safe community cleanups, categorizing plastic polymers, and executing systematic brand audits.",
      targetAudience: "Youth volunteer leads, community groups, university clubs",
      fileFormat: "PDF",
      fileSizePlaceholder: "X.X MB",
      publishYear: "2026",
      downloadUrlPlaceholder: "/downloads/waterway-cleanup-field-manual-placeholder.pdf",
    },
    {
      id: "res-2",
      slug: "secondary-school-eco-club-starter-pack",
      title: "Secondary School Eco-Club Curriculum Starter Pack",
      category: "Curriculum Guide",
      description:
        "A bilingual (English/Bangla) guide containing 12 experiential school semester projects covering schoolyard composting, rain gauges, and biodiversity surveys.",
      targetAudience: "School teachers, student club presidents, education coordinators",
      fileFormat: "PDF",
      fileSizePlaceholder: "X.X MB",
      publishYear: "2026",
      downloadUrlPlaceholder: "/downloads/eco-club-starter-pack-placeholder.pdf",
    },
    {
      id: "res-3",
      slug: "sme-circular-packaging-transition-handbook",
      title: "Circular Packaging Transition Handbook for Bangladeshi MSMEs",
      category: "Toolkit",
      description:
        "A practical handbook detailing sustainable alternatives to single-use plastics, including jute polymers, paper composites, and reusable delivery models.",
      targetAudience: "Entrepreneurs, small manufacturing firms, packaging designers",
      fileFormat: "PDF",
      fileSizePlaceholder: "X.X MB",
      publishYear: "2026",
      downloadUrlPlaceholder: "/downloads/sme-circular-packaging-handbook-placeholder.pdf",
    },
    {
      id: "res-4",
      slug: "coastal-youth-adaptation-whitepaper",
      title: "Youth on the Frontline: Decentralized Adaptation in the Bengal Delta",
      category: "Policy Brief",
      description:
        "A research brief synthesizing field observations from coastal youth fellows regarding saline intrusion, drinking water vulnerabilities, and community resilience.",
      targetAudience: "Policymakers, development agencies, climate researchers",
      fileFormat: "PDF",
      fileSizePlaceholder: "X.X MB",
      publishYear: "2026",
      downloadUrlPlaceholder: "/downloads/coastal-youth-adaptation-whitepaper-placeholder.pdf",
    },
  ],
};

