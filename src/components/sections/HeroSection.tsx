"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  PlayCircle,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-border/60">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-500/10 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Pill Highlights */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs py-1 px-3 rounded-full font-medium flex items-center gap-1.5 shadow-xs"
              >
                <Sprout className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                Bangladesh Youth Climate Network
              </Badge>
              <Badge
                variant="outline"
                className="bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 text-xs py-1 px-3 rounded-full font-medium flex items-center gap-1.5"
              >
                <MapPin className="h-3 w-3 text-amber-600" />
                Active in 64 Districts
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.12]">
              Empowering Youth to{" "}
              <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">
                Protect Our Delta
              </span>{" "}
              and Drive Green Transition
            </h1>

            {/* Sub-narrative */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From the saline-stressed coastlines of the Bay of Bengal to urban river basins, we equip student engineers, grassroots organizers, and small enterprises with open climate technologies, field fellowships, and circular solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-12 shadow-md shadow-primary/25 rounded-xl transition-all hover:scale-[1.02]"
              >
                <Link href="/programs">
                  Explore Programs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-5 h-12 rounded-xl transition-all"
              >
                <Link href="/get-involved/volunteer">Join as a Volunteer</Link>
              </Button>

              {/* Approach Dialog Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-foreground/80 hover:text-primary font-medium text-sm h-12 px-3 flex items-center gap-2"
                  >
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span>Our Approach</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                      <Sprout className="h-5 w-5 text-primary" />
                      Our Theory of Action
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground pt-2 space-y-3 leading-relaxed text-left">
                      <p>
                        We operate on a straightforward premise: <strong>Bangladesh does not lack climate vulnerability awareness—it lacks youth-led engineering and grassroots implementation capacity.</strong>
                      </p>
                      <ul className="space-y-2 text-xs text-foreground/90 pt-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Grassroots Prototyping:</strong> Student-engineered low-cost flood sensors and water salinity telemetry.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Direct Field Interception:</strong> Mobilizing youth volunteers for river plastic recovery and mangrove buffers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>SME Circular Economy:</strong> Transitioning local micro-enterprises to eco-packaging and zero-waste models.</span>
                        </li>
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="pt-2 flex justify-end">
                    <Button asChild size="sm" className="bg-primary text-primary-foreground">
                      <Link href="/about">Read Full Mission</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust & Independence Indicators */}
            <div className="pt-4 border-t border-border/80 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>100% Youth-Governed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Verified Field Metrics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Zero Commercial / Spam Injections</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Original Nature-Tech SVG Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Nature-Tech Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-6 bg-gradient-to-br from-card via-card to-secondary/40 border border-border/80 shadow-2xl overflow-hidden">
              {/* Top status bar inside graphic */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-foreground">
                    Delta Action Hub Active
                  </span>
                </div>
                <Badge variant="secondary" className="text-[10px] bg-secondary font-mono">
                  BD-DELTA-SYS
                </Badge>
              </div>

              {/* Abstract Stylized Delta / River SVG Illustration */}
              <div className="py-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 280"
                  className="w-full h-auto drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Abstract illustration of Bengal Delta waterways and climate resilience hubs"
                >
                  <defs>
                    <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#0d5a44" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#062e23" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Topographic organic terrain curves */}
                  <path
                    d="M20 180C70 140 130 220 200 160C270 100 330 180 380 140V260H20V180Z"
                    fill="currentColor"
                    className="text-emerald-950/10 dark:text-emerald-400/5"
                  />
                  <path
                    d="M10 210C60 170 140 240 220 190C300 140 340 220 390 190V270H10V210Z"
                    fill="currentColor"
                    className="text-emerald-900/15 dark:text-emerald-300/10"
                  />

                  {/* Bengal River Network paths */}
                  <path
                    d="M200 20C210 70 230 120 190 160C160 190 170 230 210 270"
                    stroke="url(#riverGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />
                  <path
                    d="M190 160C130 170 90 200 60 260"
                    stroke="url(#riverGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M200 120C250 140 290 180 330 250"
                    stroke="url(#riverGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Pulsing Regional Nodes */}
                  <circle cx="200" cy="80" r="12" fill="#0d5a44" fillOpacity="0.2" />
                  <circle cx="200" cy="80" r="6" fill="#10b981" />
                  <text x="220" y="85" fill="currentColor" className="text-[10px] font-sans font-bold text-foreground">
                    Dhaka Central Hub
                  </text>

                  <circle cx="330" cy="220" r="14" fill="#0d5a44" fillOpacity="0.2" />
                  <circle cx="330" cy="220" r="7" fill="#10b981" />
                  <text x="260" y="245" fill="currentColor" className="text-[10px] font-sans font-bold text-foreground">
                    Chattogram & Coast
                  </text>

                  <circle cx="80" cy="230" r="14" fill="#0d5a44" fillOpacity="0.2" />
                  <circle cx="80" cy="230" r="7" fill="#10b981" />
                  <text x="30" y="255" fill="currentColor" className="text-[10px] font-sans font-bold text-foreground">
                    Sundarbans Delta
                  </text>

                  {/* Renewable Energy Sun Node */}
                  <circle cx="330" cy="60" r="26" fill="url(#sunGrad)" />
                  <path
                    d="M330 40V34M330 86V80M310 60H304M356 60H350"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Bottom Quick Feature Strips */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/60">
                <div className="bg-secondary/60 rounded-xl p-3 text-left">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground block">
                    Youth Climate Labs
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    XX+ Hardware Models
                  </span>
                </div>
                <div className="bg-secondary/60 rounded-xl p-3 text-left">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground block">
                    Aquatic Interception
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    XX,000+ kg Plastic
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
