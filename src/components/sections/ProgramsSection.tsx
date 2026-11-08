"use client";

import * as React from "react";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programsData } from "@/content";

export function ProgramsSection() {
  return (
    <section className="py-20 bg-background border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl text-left">
            <Badge
              variant="outline"
              className="border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs py-1 px-3"
            >
              <Layers className="h-3.5 w-3.5 mr-1 text-emerald-600" />
              Strategic Initiatives
            </Badge>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Our 5 Frontline Programs
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every initiative is engineered to solve a specific ecological challenge in Bangladesh through youth leadership, practical engineering, and community ownership.
            </p>
          </div>

          <Button asChild variant="outline" className="border-primary/30 text-primary self-start md:self-auto">
            <Link href="/programs">
              View All Program Blueprints <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>

        {/* 5 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((program, index) => {
            const isFeatured = index === 1; // Highlight the flagship fellowship
            return (
              <Card
                key={program.id}
                className={`flex flex-col justify-between rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? "border-primary bg-gradient-to-b from-card via-card to-secondary/30 ring-2 ring-primary/20 shadow-md"
                    : "border-border/80 bg-card hover:border-primary/40 shadow-xs"
                }`}
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" className="text-[11px] font-medium bg-secondary text-primary">
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

                  <h3 className="font-heading font-extrabold text-xl text-foreground leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-xs text-primary/80 font-medium line-clamp-1 mt-1">
                    {program.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {program.shortDescription}
                  </p>

                  {/* Program Milestones / Key Stat */}
                  <div className="bg-secondary/60 rounded-xl p-3 border border-border/50 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                      Target Milestone
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-sm font-bold text-foreground">
                        {program.milestones[0]?.metricPlaceholder}
                      </span>
                      <span className="text-[11px] text-muted-foreground truncate">
                        {program.milestones[0]?.title}
                      </span>
                    </div>
                  </div>

                  {/* Target Audience tag */}
                  <div className="text-[11px] text-muted-foreground">
                    <strong className="text-foreground">Audience: </strong>
                    {program.targetParticipants}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-2 border-t border-border/50 flex items-center justify-between">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {program.ctaText}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {program.duration}
                  </span>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
