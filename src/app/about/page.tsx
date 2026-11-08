import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/content";
import { getOrganizationJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "About Us & Theory of Change",
  description:
    "Learn about Global Youth Change Makers: our vision, mission, decentralized youth model, and how we catalyze frontline climate resilience across Bangladesh.",
  openGraph: {
    title: "About Us | Global Youth Change Makers",
    description: siteMetadata.mission,
    url: "https://globalyouthchangemakers.org/about",
  },
};

export default function AboutPage() {
  const jsonLd = getOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        badge="Our Movement"
        badgeIcon={<Compass className="h-3.5 w-3.5" />}
        title="Catalyzing Youth Climate Agency in the Bengal Delta"
        subtitle="We exist to dismantle the false divide between international climate talk and on-the-ground ecological survival in Bangladesh."
        breadcrumbs={[{ title: "About Us" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Origin Narrative */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30">
                The Story Behind Our Founding
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
                Born on the Frontlines of Environmental Stress
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Global Youth Change Makers was conceived by students and grassroots community organizers in Bangladesh who witnessed firsthand how traditional non-profit initiatives were structured: heavy on high-level symposiums in capital cities, yet disconnected from the saltwater-poisoned wells of Satkhira, the eroding banks of the Meghna, and the plastic-clogged canals of Chattogram.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We realized that the bottleneck was not lack of climate passion among young Bangladeshis. Rather, youth lacked practical hardware hackspaces, verified scientific methodologies, seed micro-grants, and institutional legitimacy to lead solutions themselves.
              </p>
            </div>

            {/* Mission & Vision Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <Card className="rounded-2xl border-primary/20 bg-secondary/30 p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {siteMetadata.mission}
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-emerald-500/20 bg-secondary/30 p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {siteMetadata.vision}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Theory of Change */}
            <div id="theory-of-change" className="pt-12 scroll-mt-24 space-y-6">
              <div className="space-y-3">
                <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-900 text-xs">
                  <Sparkles className="h-3 w-3 mr-1 text-amber-600" />
                  Methodological Framework
                </Badge>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
                  Our Theory of Change
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  How our youth-led intervention model drives systemic environmental resilience across Bangladesh:
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border p-5 bg-card space-y-2">
                  <span className="text-xs font-bold font-mono text-primary uppercase">
                    Input & Catalyst:
                  </span>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    Open Climate Literacy & Student Engineering Sprints
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We bring interactive eco-club curriculums to high schools and equip polytechnic and university students with low-cost hardware prototyping skills through Youth Climate Labs.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-5 bg-card space-y-2">
                  <span className="text-xs font-bold font-mono text-primary uppercase">
                    Field Action:
                  </span>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    Decentralized Frontline Deployments
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Certified youth fellows deploy mangrove bio-shields, install community river plastic interceptors, and help local SMEs transition packaging away from single-use polythene.
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-5 bg-card space-y-2">
                  <span className="text-xs font-bold font-mono text-primary uppercase">
                    Systemic Outcome:
                  </span>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    Evidence-Based Corporate & Policy Accountability
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Systematic waste brand audits and open environmental sensor telemetry are published openly, equipping civil society and municipal regulators to demand corporate packaging reform.
                  </p>
                </div>
              </div>
            </div>

            {/* Independence & Governance Principles */}
            <div className="pt-8 border-t border-border space-y-4">
              <h3 className="font-heading font-bold text-xl text-foreground">
                Our Ethical Guarantees
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-2 bg-secondary/50 p-4 rounded-xl">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Commercial Hijacking:</strong> We do not allow third-party advertorials, gaming spam, or opaque sponsor links on our platforms.
                  </span>
                </div>
                <div className="flex items-start gap-2 bg-secondary/50 p-4 rounded-xl">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Strictly Marked Placeholders:</strong> We never manufacture vanity figures or unverified partner logos before bilateral agreements are in force.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground font-semibold">
                <Link href="/team">
                  Meet Our Leadership Team <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to Be Part of the Solution?"
        description="Join thousands of students and youth advocates taking frontline climate responsibility."
        primaryCtaText="Join as a Volunteer"
        primaryCtaHref="/get-involved/volunteer"
      />
    </>
  );
}
