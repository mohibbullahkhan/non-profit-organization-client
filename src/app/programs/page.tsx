import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Users,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programsData } from "@/content";

export const metadata: Metadata = {
  title: "Frontline Programs & Strategic Initiatives",
  description:
    "Explore our 5 core initiatives: Youth Climate Labs, Green Eco-Fellowship, Clean Coast & River Initiative, Climate Literacy in Schools, and SME Circular Accelerator.",
  openGraph: {
    title: "Programs | Global Youth Change Makers",
    description:
      "Explore 5 youth-led environmental initiatives designed for measurable frontline climate resilience across Bangladesh.",
    url: "https://globalyouthchangemakers.org/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        badge="Strategic Action"
        badgeIcon={<Layers className="h-3.5 w-3.5" />}
        title="Our 5 Frontline Climate Programs"
        subtitle="Engineered for measurable ecological impact across coastal delta zones, river corridors, schools, and circular enterprises in Bangladesh."
        breadcrumbs={[{ title: "Programs" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program) => (
              <Card
                key={program.id}
                className="flex flex-col justify-between rounded-3xl border-border/80 bg-card shadow-xs hover:border-primary/40 hover:shadow-xl transition-all overflow-hidden"
              >
                <div>
                  <CardHeader className="p-6 pb-3 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-xs font-semibold bg-secondary text-primary">
                        {program.category}
                      </Badge>
                      <Badge
                        variant={program.status === "Cohort Open" ? "default" : "outline"}
                        className={`text-[10px] ${
                          program.status === "Cohort Open"
                            ? "bg-amber-600 hover:bg-amber-700 text-white font-bold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {program.status}
                      </Badge>
                    </div>

                    <h2 className="font-heading font-extrabold text-xl text-foreground leading-snug">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {program.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-primary/80 font-medium">
                      {program.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {program.overview}
                    </p>

                    {/* Milestones Preview */}
                    <div className="bg-secondary/60 rounded-xl p-3.5 border border-border/60 space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                        Core Target Milestone
                      </span>
                      <div className="font-mono text-sm font-bold text-foreground">
                        {program.milestones[0]?.metricPlaceholder}
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {program.milestones[0]?.description}
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="space-y-1 text-[11px] text-muted-foreground border-t border-border/50 pt-3">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span><strong>Participants:</strong> {program.targetParticipants}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span><strong>Duration:</strong> {program.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-2 border-t border-border/60 flex items-center justify-between">
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
                    <Link href={`/programs/${program.slug}`}>
                      View Program Blueprint
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Interested in Launching a Chapter or Program?"
        description="We collaborate with universities, schools, and municipalities across all 64 districts."
        primaryCtaText="Partner with Us"
        primaryCtaHref="/get-involved/partner"
      />
    </>
  );
}
