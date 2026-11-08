"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sprout,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a2e24] via-[#0d3b2e] to-[#06241b] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-emerald-800/60 overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle background ambient circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
              <Sprout className="h-3.5 w-3.5" />
              The Delta is Our Responsibility
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Ready to Shape Bangladesh&apos;s Climate Future?
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Whether you are a university student ready to deploy flood sensors, an educator building an eco-club, or an organization eager to fund youth solutions—your journey begins here.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold px-7 h-12 shadow-lg shadow-emerald-950/30 rounded-xl transition-all hover:scale-105"
              >
                <Link href="/get-involved/volunteer">
                  Join as a Volunteer
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-500/40 text-emerald-100 hover:bg-emerald-900/50 hover:text-white font-semibold px-6 h-12 rounded-xl transition-all"
              >
                <Link href="/get-involved/partner">
                  Partner with Us
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-emerald-200 hover:bg-emerald-900/40 hover:text-white font-medium h-12 px-4"
              >
                <Link href="/get-involved/donate">
                  <HeartHandshake className="h-4 w-4 mr-1.5 text-emerald-300" />
                  Support Financially
                </Link>
              </Button>
            </div>

            {/* Micro guarantees */}
            <div className="pt-8 border-t border-emerald-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-300/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                No membership fees for students
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Certified volunteer hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Nationwide chapter coordination
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
