"use client";

import * as React from "react";
import Link from "next/link";
import {
  Handshake,
  Building2,
  GraduationCap,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PartnersGridSection() {
  const partnerTracks = [
    {
      category: "Academic Collaborators",
      icon: GraduationCap,
      partners: [
        { name: "[Partner: University Innovation Lab A]", tag: "Engineering & Prototyping" },
        { name: "[Partner: Environmental Faculty B]", tag: "Wetland & Coast Research" },
        { name: "[Partner: Polytechnic Institute C]", tag: "Vocational Sensor Hardware" },
      ],
    },
    {
      category: "Ecosystem & Non-Profit Alliances",
      icon: Globe2,
      partners: [
        { name: "[Partner: Coastal Community Coalition D]", tag: "Grassroots Field Hubs" },
        { name: "[Partner: River Defense Alliance E]", tag: "Waste Audit Logistics" },
        { name: "[Partner: Youth Climate Network F]", tag: "National Fellowship Sprints" },
      ],
    },
    {
      category: "Responsible Enterprises & MSMEs",
      icon: Building2,
      partners: [
        { name: "[Partner: Circular Packaging SME G]", tag: "Bio-Alternative Materials" },
        { name: "[Partner: Sustainable Logistics Firm H]", tag: "Zero-Emission Fleet Pilot" },
        { name: "[Partner: Responsible Apparel Producer I]", tag: "Textile Waste Upcycling" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary text-xs py-1 px-3"
          >
            <Handshake className="h-3.5 w-3.5 mr-1 text-primary" />
            Institutional Collaboration
          </Badge>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Our Collaborative Coalition
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We partner with academic departments, community organizers, and responsible small enterprises through formal, transparent memorandums of understanding.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {partnerTracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.category}
                className="bg-card rounded-3xl p-6 border border-border/80 shadow-xs flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      {track.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {track.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="bg-secondary/40 rounded-xl p-3 border border-border/50 text-left"
                      >
                        <span className="font-mono text-xs font-semibold text-foreground block">
                          {partner.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {partner.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 text-[11px] text-muted-foreground">
                  * Vetted under organizational compliance standards
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Note */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-xs text-muted-foreground italic">
            Notice: Partner slots display structured institutional placeholders until verified bilateral project agreements are finalized. We maintain an uncompromising policy against greenwashing.
          </p>
          <Button asChild variant="outline" size="sm" className="border-primary/30 text-primary">
            <Link href="/get-involved/partner">
              Inquire About Becoming an Institutional Partner <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
