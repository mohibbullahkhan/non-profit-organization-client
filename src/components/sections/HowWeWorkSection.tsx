"use client";

import * as React from "react";
import Link from "next/link";
import {
  Workflow,
  GraduationCap,
  Wrench,
  Anchor,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HowWeWorkSection() {
  const steps = [
    {
      step: "01",
      icon: GraduationCap,
      title: "Mobilize & Educate",
      tagline: "Building Environmental Literacy from Classrooms to Campuses",
      description:
        "We activate youth networks across public secondary schools and universities, conducting interactive eco-literacy workshops and establishing student-governed green clubs.",
      keyAction: "XX+ School Eco-Clubs & Student Volunteer Chapters",
    },
    {
      step: "02",
      icon: Wrench,
      title: "Prototype & Train",
      tagline: "Hands-on Hardware Sprints & Leadership Fellowships",
      description:
        "Through Youth Climate Labs and the Green Eco-Fellowship, we coach students to build open-source flood sensors, water salinity tools, and project management blueprints.",
      keyAction: "6-Month Residential Bootcamp & Seed Micro-Grants",
    },
    {
      step: "03",
      icon: Anchor,
      title: "Deploy on Frontlines",
      tagline: "Direct Interception & Ecosystem Regeneration",
      description:
        "Fellows and community volunteers install riverine waste interceptors, reforest vulnerable embankments with mangrove saplings, and conduct SME zero-waste audits.",
      keyAction: "Waterway Interceptors & Coastal Bio-Shield Drives",
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Measure & Advocate",
      tagline: "Radical Transparency & Policy Impact",
      description:
        "Every cleanup logs brand audit evidence to pressure corporate polluters. Sensor readings are published openly, equipping local authorities with ground-truth environmental data.",
      keyAction: "Open-Access Research Briefs & Policy Submissions",
    },
  ];

  return (
    <section className="py-20 bg-secondary/40 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary text-xs py-1 px-3"
          >
            <Workflow className="h-3.5 w-3.5 mr-1 text-primary" />
            Our Methodology
          </Badge>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            How We Work: The 4-Stage Impact Engine
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Rather than isolated one-off events, our model connects education, technology prototyping, field deployment, and policy advocacy into a continuous feedback loop.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-card rounded-3xl p-6 border border-border/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all text-left"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-primary/30">
                      {item.step}
                    </span>
                    <div className="h-11 w-11 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary/80 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <div className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/80">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.keyAction}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
            <Link href="/about#theory-of-change">
              Explore Our Full Theory of Change <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
