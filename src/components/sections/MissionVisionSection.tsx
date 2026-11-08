"use client";

import * as React from "react";
import Link from "next/link";
import {
  Compass,
  Eye,
  Target,
  Sparkles,
  Shield,
  Users,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/content";

export function MissionVisionSection() {
  const coreValues = [
    {
      icon: Cpu,
      title: "Scientific Rigor & Open Tech",
      description:
        "Every intervention is grounded in verified ecological science, measurable data, and open-source hardware prototyping.",
    },
    {
      icon: Users,
      title: "Grassroots Sovereignty",
      description:
        "Local coastal and riverine communities lead their own conservation agendas rather than having top-down agendas imposed.",
    },
    {
      icon: Shield,
      title: "Radical Transparency",
      description:
        "Zero vanity metrics or inflated statistics. Complete public disclosure of micro-grant disbursements and impact results.",
    },
    {
      icon: Sparkles,
      title: "Intergenerational Equity",
      description:
        "Securing the ecological health, clean water, and fertile soil of Bangladesh for generations to follow.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Pill & Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary text-xs py-1 px-3"
          >
            <Compass className="h-3.5 w-3.5 mr-1 text-primary" />
            Purpose & North Star
          </Badge>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Driven by Purpose, Grounded in Local Accountability
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            We are not just a youth organization; we are an institutional bridge connecting youthful ambition with systemic ecological resilience.
          </p>
        </div>

        {/* Dual Mission & Vision Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mission Card */}
          <Card className="relative overflow-hidden border-primary/20 bg-card shadow-lg rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
              <Target className="h-6 w-6" />
            </div>

            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Our Mission
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-foreground mb-4">
              To Equip, Mobilize & Amplify Frontline Youth
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteMetadata.mission}
            </p>
          </Card>

          {/* Vision Card */}
          <Card className="relative overflow-hidden border-emerald-500/20 bg-card shadow-lg rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-6">
              <Eye className="h-6 w-6" />
            </div>

            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-widest block mb-2">
              Our Vision
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-foreground mb-4">
              A Thriving, Youth-Led Climate-Resilient Bengal Delta
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteMetadata.vision}
            </p>
          </Card>
        </div>

        {/* 4 Core Pillars / Principles */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wider">
              The 4 Pillars Anchoring Our Movement
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-5 border border-border/80 shadow-xs hover:border-primary/40 transition-colors space-y-3 text-left"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary/30 text-primary">
              <Link href="/about">
                Read Our Story & Theory of Change <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
