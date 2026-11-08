"use client";

import * as React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Waves,
  Trash2,
  Briefcase,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProblemContextSection() {
  return (
    <section className="py-20 bg-background border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Badge
            variant="outline"
            className="border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300 text-xs py-1 px-3"
          >
            <AlertTriangle className="h-3.5 w-3.5 mr-1 text-amber-600" />
            The Delta Emergency
          </Badge>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Why Bangladesh Needs a Youth-Led Environmental Revolution
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Bangladesh stands on the frontline of global climate breakdown. Yet traditional top-down conferences rarely translate into clean coastlines, resilient villages, or sustainable livelihoods. We address the three interconnected bottlenecks:
          </p>
        </div>

        {/* Interactive Crisis & Opportunity Tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="coastal" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto p-1.5 bg-secondary/80 rounded-2xl border border-border">
              <TabsTrigger
                value="coastal"
                className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm flex items-center justify-center gap-2"
              >
                <Waves className="h-4 w-4" />
                <span>1. Delta & Coastline Stress</span>
              </TabsTrigger>
              <TabsTrigger
                value="plastics"
                className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm flex items-center justify-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                <span>2. Waterway Packaging Waste</span>
              </TabsTrigger>
              <TabsTrigger
                value="livelihoods"
                className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm flex items-center justify-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                <span>3. Youth Leadership & Green Jobs</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Coastal Stress */}
            <TabsContent value="coastal" className="mt-8 focus-visible:outline-none">
              <Card className="border-border/80 shadow-md overflow-hidden bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                        <MapPin className="h-4 w-4" />
                        Frontline Focus: Coastal Delta & Bay of Bengal
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                        Saline Intrusion, Tidal Surges, and Coastal Displacement
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Rising sea levels and recurring super-cyclones push saltwater deep into agricultural delta soil, poisoning drinking water for millions. Embankment erosion demands low-cost, bio-shield solutions that coastal communities themselves can build and sustain.
                      </p>

                      <div className="bg-secondary/60 rounded-xl p-4 border border-border/60">
                        <h4 className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Our Targeted Intervention:
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Through the <strong>Clean Coast & River Initiative</strong> and <strong>Youth Climate Labs</strong>, local student fellows plant native mangrove bio-shields and deploy open-source water salinity sensors.
                        </p>
                      </div>

                      <div className="pt-2">
                        <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary">
                          <Link href="/programs/clean-coast-river-initiative">
                            Explore Coastal Interventions <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 to-primary text-emerald-50 rounded-2xl p-6 text-center space-y-4">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block">
                        Frontline Reality
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                        XX Million
                      </div>
                      <p className="text-xs text-emerald-100/80 leading-normal">
                        People across southern Bangladesh vulnerable to coastal inundation and saline freshwater scarcity.
                      </p>
                      <div className="pt-2 border-t border-emerald-800/60 text-[11px] text-emerald-300/80">
                        * Baseline ecological vulnerability data (verified local study placeholder)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Plastics */}
            <TabsContent value="plastics" className="mt-8 focus-visible:outline-none">
              <Card className="border-border/80 shadow-md overflow-hidden bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                        <MapPin className="h-4 w-4" />
                        Frontline Focus: Buriganga, Karnaphuli & Delta Waterways
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                        Rivers Choking Under Single-Use Packaging Waste
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Over 80% of single-use sachets and consumer plastic in Bangladesh ends up directly in urban canals and riverbeds. Without systematic brand audits and extended producer responsibility, cleanup drives alone cannot turn the tide.
                      </p>

                      <div className="bg-secondary/60 rounded-xl p-4 border border-border/60">
                        <h4 className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Our Targeted Intervention:
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          We mobilize youth crews to install floating plastic interceptors and conduct standardized <strong>brand audits</strong>, holding polluters publicly accountable with actionable waste metrics.
                        </p>
                      </div>

                      <div className="pt-2">
                        <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary">
                          <Link href="/programs/clean-coast-river-initiative">
                            Learn About Waste Audits <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 to-primary text-emerald-50 rounded-2xl p-6 text-center space-y-4">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block">
                        Annual Waste Flow
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                        XX,000+ MT
                      </div>
                      <p className="text-xs text-emerald-100/80 leading-normal">
                        Estimated mismanaged single-use plastic entering major drainage and river systems annually.
                      </p>
                      <div className="pt-2 border-t border-emerald-800/60 text-[11px] text-emerald-300/80">
                        * Placeholder metric mapped against municipal river audits
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Youth Livelihoods */}
            <TabsContent value="livelihoods" className="mt-8 focus-visible:outline-none">
              <Card className="border-border/80 shadow-md overflow-hidden bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                        <MapPin className="h-4 w-4" />
                        Frontline Focus: National Youth Demographic & MSMEs
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                        Bridging University Education and Grassroots Green Careers
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nearly one-third of Bangladesh is aged 15–35. Young graduates often lack experiential pathways into green industries, while small businesses struggle to afford circular consulting. We connect young talent directly with sustainable industry transformation.
                      </p>

                      <div className="bg-secondary/60 rounded-xl p-4 border border-border/60">
                        <h4 className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Our Targeted Intervention:
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Our <strong>Green Eco-Fellowship</strong> and <strong>SME Circular Accelerator</strong> provide residential training, seed micro-grants, and green enterprise diagnostics to turn eco-passion into viable careers.
                        </p>
                      </div>

                      <div className="pt-2">
                        <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary">
                          <Link href="/programs/green-eco-fellowship">
                            Discover Fellowship Pathways <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 to-primary text-emerald-50 rounded-2xl p-6 text-center space-y-4">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block">
                        Demographic Dividend
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                        XX Million
                      </div>
                      <p className="text-xs text-emerald-100/80 leading-normal">
                        Young Bangladeshis with the power to remodel industry, demand accountability, and fortify ecosystems.
                      </p>
                      <div className="pt-2 border-t border-emerald-800/60 text-[11px] text-emerald-300/80">
                        * National census demographic placeholder
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
