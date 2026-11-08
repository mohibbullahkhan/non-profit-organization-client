import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  Target,
  Clock,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programsData } from "@/content";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: `${program.title} | Initiatives`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | Global Youth Change Makers`,
      description: program.shortDescription,
      url: `https://globalyouthchangemakers.org/programs/${program.slug}`,
    },
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHero
        badge={program.category}
        badgeIcon={<Layers className="h-3.5 w-3.5" />}
        title={program.title}
        subtitle={program.subtitle}
        breadcrumbs={[
          { title: "Programs", href: "/programs" },
          { title: program.title },
        ]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10 text-left">
              {/* Program Overview */}
              <div className="space-y-4">
                <h2 className="font-heading font-extrabold text-2xl text-foreground">
                  Program Overview
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {program.overview}
                </p>
              </div>

              {/* Objectives List */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Strategic Objectives
                </h3>
                <ul className="space-y-3">
                  {program.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground bg-secondary/40 p-4 rounded-xl border border-border/60"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Activities */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Key Field Activities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {program.keyActivities.map((act, i) => (
                    <div
                      key={i}
                      className="bg-card rounded-2xl p-4 border border-border shadow-xs space-y-2"
                    >
                      <span className="text-xs font-mono font-bold text-primary">
                        Activity 0{i + 1}
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {act}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Milestones */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Target Impact Milestones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.milestones.map((m, i) => (
                    <div
                      key={i}
                      className="bg-secondary/60 rounded-2xl p-5 border border-border/70 space-y-1.5"
                    >
                      <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                        {m.title}
                      </span>
                      <div className="font-heading font-black text-2xl text-primary font-mono">
                        {m.metricPlaceholder}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institutional Collaboration notice */}
              <div className="bg-card rounded-2xl p-5 border border-border/80 flex items-start gap-3">
                <Handshake className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground space-y-1">
                  <span className="font-bold text-foreground block">
                    Institutional Alliances:
                  </span>
                  <p>{program.partnerSupportPlaceholder}</p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Action Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <Card className="rounded-3xl border-primary/20 bg-card shadow-lg p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      Cohort Status
                    </span>
                    <Badge
                      variant={program.status === "Cohort Open" ? "default" : "outline"}
                      className={
                        program.status === "Cohort Open"
                          ? "bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
                          : "text-xs"
                      }
                    >
                      {program.status}
                    </Badge>
                  </div>

                  <div className="space-y-3 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">
                        Target Audience:
                      </span>
                      <p>{program.targetParticipants}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">
                        Program Duration:
                      </span>
                      <p className="flex items-center gap-1.5 text-foreground font-medium">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {program.duration}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-foreground block mb-0.5">
                        Operational Coverage:
                      </span>
                      <p>Active across target riverine & coastal chapters in Bangladesh.</p>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-11">
                      <Link href="/get-involved/volunteer">
                        Apply to Join Program
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-primary/30 text-primary rounded-xl">
                      <Link href="/get-involved/partner">
                        Sponsor this Program
                      </Link>
                    </Button>
                  </div>
                </Card>

                <div className="bg-secondary/40 rounded-2xl p-4 text-center border border-border/60 text-xs text-muted-foreground">
                  <p>Questions regarding program logistics?</p>
                  <Link href="/contact" className="text-primary font-semibold hover:underline mt-1 inline-block">
                    Contact Program Coordinator →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Support ${program.title}`}
        description="Help fund equipment, student kits, and field expeditions for this initiative."
        primaryCtaText="Donate to Program"
        primaryCtaHref="/get-involved/donate"
      />
    </>
  );
}
