import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { initiativesContentList } from "@/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initiativesContentList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = initiativesContentList.find((i) => i.slug === slug);

  if (!item) {
    return {
      title: "Initiative Not Found | Green Lead",
    };
  }

  return {
    title: `${item.title} | Green Lead`,
    description: item.tagline,
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = initiativesContentList.find((i) => i.slug === slug);

  if (!initiative) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-emerald-950 via-primary/95 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.15),transparent_50%)]" />
        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-emerald-200/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 text-xs px-3 py-1">
              {initiative.badge}
            </Badge>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-4xl">
            {initiative.title}
          </h1>

          <p className="mt-4 text-lg text-emerald-100/90 max-w-3xl font-medium leading-relaxed">
            {initiative.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#1f7347] hover:bg-[#185d39] text-white font-medium text-xs px-5 py-2 rounded-md shadow-xs"
            >
              <Link href="/get-involved">
                Join this Initiative <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-xs px-5 py-2 rounded-md"
            >
              <Link href="/contact">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview & Key Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Overview
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  {initiative.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {initiative.features && initiative.features.length > 0 && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                    Key Features & Components
                  </h2>
                  <div className="space-y-4">
                    {initiative.features.map((feat, idx) => (
                      <Card key={feat.title} className="border-border/80">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base font-semibold flex items-center gap-2">
                            <span className="flex h-6 w-6 rounded-full bg-primary/10 text-primary text-xs items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            {feat.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feat.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 1 Col: Quick Facts Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/80 bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-base font-bold">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase block">
                      Target Audience
                    </span>
                    <span className="text-foreground font-medium">
                      Youth leaders, community stewards, and students across Bangladesh
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase block">
                      Coverage
                    </span>
                    <span className="text-foreground font-medium">
                      All 8 Administrative Divisions & Climate Vulnerable Hotspots
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase block">
                      Approach
                    </span>
                    <span className="text-foreground font-medium">
                      Community-led, data-driven, and action-oriented
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Box */}
              <div className="rounded-xl p-6 bg-gradient-to-br from-primary to-emerald-900 text-white shadow-md">
                <h3 className="font-heading font-bold text-lg mb-2">Want to get involved?</h3>
                <p className="text-xs text-emerald-100 mb-4 leading-relaxed">
                  Join our grassroots volunteer network, propose an academic partnership, or support this initiative.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-slate-900 hover:bg-emerald-50 font-bold"
                >
                  <Link href="/get-involved">Get Involved Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
