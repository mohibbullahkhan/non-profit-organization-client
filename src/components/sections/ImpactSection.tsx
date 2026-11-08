"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  Clock,
  TreePine,
  Trash2,
  School,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { impactData } from "@/content";

export function ImpactSection() {
  const statIcons = [
    Award,
    Clock,
    TreePine,
    Trash2,
    School,
    MapPin,
  ];

  return (
    <section className="py-20 bg-background border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs py-1 px-3"
          >
            <TrendingUp className="h-3.5 w-3.5 mr-1 text-emerald-600" />
            Social Proof & Scalability
          </Badge>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            {impactData.headline}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            {impactData.narrative}
          </p>
        </div>

        {/* 6 Key Stat Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {impactData.keyStats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-5 border border-border/80 shadow-xs text-center flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="h-10 w-10 mx-auto rounded-xl bg-secondary flex items-center justify-center text-primary mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-primary tracking-tight mb-1">
                    {stat.valuePlaceholder}
                  </div>
                  <div className="font-semibold text-xs text-foreground mb-1">
                    {stat.label}
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground line-clamp-2 mt-2 pt-2 border-t border-border/50">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Focus Highlights Band */}
        <div className="rounded-3xl bg-secondary/50 border border-border p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                Frontline Regional Hubs Across Bangladesh
              </h3>
              <p className="text-xs text-muted-foreground">
                Tailoring community interventions to distinct delta, haor, urban, and arid micro-ecologies.
              </p>
            </div>
            <Badge variant="outline" className="bg-card self-start md:self-auto text-xs">
              8 Divisions Covered
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {impactData.regionalFocus.slice(0, 3).map((reg) => (
              <div
                key={reg.division}
                className="bg-card rounded-xl p-4 border border-border/60 shadow-xs space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm text-foreground">
                    {reg.division}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {reg.ecosystemType}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Challenge: </strong>
                  {reg.keyChallenge}
                </p>
                <p className="text-[11px] text-primary font-medium">
                  → {reg.youthInterventionPlaceholder}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Radical Transparency Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-950 via-primary to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              Institutional Credibility
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {impactData.transparencyCommitment.title}
            </h3>
            <p className="text-xs text-emerald-100/80 max-w-xl">
              We publish open audit data, third-party field evaluations, and financial breakdowns so every supporter knows exactly how resources are utilized.
            </p>
          </div>

          <Button asChild className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold px-5 shrink-0 shadow-md">
            <Link href="/impact">
              View Verified Data <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
