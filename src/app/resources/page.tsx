import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { ResourcesClient } from "@/components/resources/ResourcesClient";
import { resourcesData } from "@/content";

export const metadata: Metadata = {
  title: "Open Resources, Toolkits & Policy Briefs",
  description:
    "Download open-access climate field manuals, school eco-club starter packs, SME circular packaging roadmaps, and delta adaptation research whitepapers.",
  openGraph: {
    title: "Resources & Publications | Global Youth Change Makers",
    description:
      "Open-access climate toolkits, research briefs, and curriculum starter packs for students, educators, and SMEs in Bangladesh.",
    url: "https://globalyouthchangemakers.org/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Knowledge Commons"
        badgeIcon={<FileText className="h-3.5 w-3.5" />}
        title={resourcesData.headline}
        subtitle={resourcesData.subheadline}
        breadcrumbs={[{ title: "Resources" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResourcesClient />
        </div>
      </section>

      <CtaBanner
        title="Need Custom Curriculum or Corporate Training?"
        description="We tailor climate literacy workshops and circular transition toolkits for institutions and business associations."
        primaryCtaText="Request a Workshop"
        primaryCtaHref="/contact"
      />
    </>
  );
}
