"use client";

import * as React from "react";
import Link from "next/link";
import {
  Trash2,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Layers,
  Camera,
  Share2,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnplasticBangladeshPage() {
  const divisionData = [
    { name: "Dhaka", pct: 88, pet: "4,200 kg", sachet: "6,800 kg", ldpe: "3,100 kg", total: "14,100 kg" },
    { name: "Chittagong", pct: 72, pet: "2,800 kg", sachet: "4,100 kg", ldpe: "1,900 kg", total: "8,800 kg" },
    { name: "Khulna", pct: 54, pet: "1,400 kg", sachet: "2,200 kg", ldpe: "950 kg", total: "4,550 kg" },
    { name: "Rajshahi", pct: 42, pet: "1,100 kg", sachet: "1,600 kg", ldpe: "720 kg", total: "3,420 kg" },
    { name: "Barishal", pct: 38, pet: "950 kg", sachet: "1,400 kg", ldpe: "610 kg", total: "2,960 kg" },
    { name: "Sylhet", pct: 31, pet: "820 kg", sachet: "1,150 kg", ldpe: "480 kg", total: "2,450 kg" },
    { name: "Rangpur", pct: 24, pet: "610 kg", sachet: "920 kg", ldpe: "390 kg", total: "1,920 kg" },
    { name: "Mymensingh", pct: 19, pet: "480 kg", sachet: "710 kg", ldpe: "310 kg", total: "1,500 kg" },
  ];

  const galleryItems = [
    { title: "Buriganga River Cleanup", place: "Dhaka Division", grad: "from-emerald-900 to-teal-950" },
    { title: "Karnafuli Estuary Audit", place: "Chittagong", grad: "from-slate-900 to-emerald-950" },
    { title: "Coastal Mangrove Interception", place: "Khulna Sundarbans", grad: "from-teal-900 to-slate-950" },
    { title: "Padma Riverbank Drive", place: "Rajshahi", grad: "from-emerald-800 to-green-950" },
    { title: "School Plastic 101 Session", place: "Barishal", grad: "from-slate-800 to-teal-950" },
    { title: "Surma River Waste Audit", place: "Sylhet", grad: "from-teal-950 to-emerald-900" },
    { title: "Campus Brand Audit Table", place: "Dhaka University", grad: "from-emerald-950 to-slate-900" },
    { title: "Women Waste Sorters Collective", place: "Satkhira", grad: "from-green-900 to-emerald-950" },
    { title: "Sonali Bioplastics Prototype Demo", place: "Innovation Lab", grad: "from-emerald-900 to-stone-900" },
    { title: "Primary School Plastic Pledge", place: "Mymensingh", grad: "from-teal-900 to-slate-900" },
    { title: "Community Recycling Workshop", place: "Rangpur", grad: "from-emerald-950 to-teal-950" },
    { title: "National Brand Audit Report Press", place: "Dhaka Press Club", grad: "from-slate-900 to-emerald-950" },
    { title: "Plastic Free Market Pilot", place: "Cox's Bazar", grad: "from-green-950 to-emerald-900" },
    { title: "Youth Volunteer Assembly", place: "National Museum", grad: "from-emerald-900 to-slate-950" },
    { title: "Macroplastic Trap Deployment", place: "Turag Canal", grad: "from-teal-950 to-slate-900" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Top Campaign Poster matching screenshot */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#eaf7ee] to-white border-b border-emerald-100">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
          {/* Green Campaign Graphic Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#174e2d] via-[#1f7347] to-[#124225] text-white p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-widest block font-heading">
                NATIONAL CLEANUP CAMPAIGN
              </span>
              <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
                UNPLASTIC BANGLADESH
              </h1>
              <p className="font-heading font-bold text-sm sm:text-base text-emerald-200">
                RIVER CLEANUP & BRAND AUDIT DRIVE
              </p>
              <div className="pt-2">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/20">
                  In Partnership with Sonali Bioplastics
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto pt-2">
            Unplastic is a global action campaign against plastic pollution, born in Bangladesh and
            built on a simple conviction: that lasting change begins with people, not just policy.
            Launched in 2023 by Green Lead in partnership with Sonali Bioplastics, Unplastic invites
            individuals and communities to intercept plastic waste, conduct brand audits, and drive
            zero-waste alternatives.
          </p>
        </div>
      </section>

      {/* 2. Plastic Waste Dashboard matching screenshot */}
      <section className="py-14 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-1">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Plastic Waste Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Live Division-Wise Waste Tracking & Brand Audit Metrics
            </p>
          </div>

          {/* 4 Metric Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="text-[10px] font-semibold text-emerald-700 uppercase block mb-1">AUDIT POINTS</span>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 tabular-nums">1,000+</div>
              <p className="text-[11px] text-slate-500 mt-1">Sites Audited</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="text-[10px] font-semibold text-emerald-700 uppercase block mb-1">MOBILIZERS</span>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-[#1f7347] tabular-nums">10,000+</div>
              <p className="text-[11px] text-slate-500 mt-1">Youth Volunteers</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="text-[10px] font-semibold text-emerald-700 uppercase block mb-1">COVERAGE</span>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 tabular-nums">8</div>
              <p className="text-[11px] text-slate-500 mt-1">Divisions Covered</p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="text-[10px] font-semibold text-emerald-700 uppercase block mb-1">INTERCEPTED</span>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-[#1f7347] tabular-nums">25,000+</div>
              <p className="text-[11px] text-slate-500 mt-1">KG Plastic Collected</p>
            </div>
          </div>

          {/* Division Horizontal Bar Chart matching screenshot */}
          <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-4">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
              Division Waste Volume Comparison
            </span>
            <div className="space-y-3">
              {divisionData.map((d) => (
                <div key={d.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-slate-700">
                    <span>{d.name}</span>
                    <span className="font-mono tabular-nums text-slate-500">{d.total}</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-[#1f7347] rounded-full transition-all"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Audit Table matching screenshot */}
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xs">
            <div className="p-3.5 bg-slate-50 border-b border-slate-200">
              <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-700">
                Detailed Brand Audit & Polymer Classification
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600 font-semibold bg-slate-50/50">
                    <th className="py-3 px-4 text-left">Division</th>
                    <th className="py-3 px-4 text-right">PET Bottles</th>
                    <th className="py-3 px-4 text-right">Multilayer Sachets</th>
                    <th className="py-3 px-4 text-right">LDPE Bags</th>
                    <th className="py-3 px-4 text-right">Total Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {divisionData.map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-900 text-left">{row.name}</td>
                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-600">{row.pet}</td>
                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-emerald-800 font-semibold">{row.sachet}</td>
                      <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-600">{row.ldpe}</td>
                      <td className="py-2.5 px-4 text-right font-mono tabular-nums font-bold text-slate-900">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Polymer Breakdown & Key Findings matching screenshot */}
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Donut Chart */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <span className="text-xs font-bold text-slate-700 block">Polymer Type Distribution</span>
              <div className="relative w-36 h-36 mx-auto">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#166534" strokeWidth="4.5" strokeDasharray="42 58" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#22c55e" strokeWidth="4.5" strokeDasharray="28 72" strokeDashoffset="-42" />
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#86efac" strokeWidth="4.5" strokeDasharray="18 82" strokeDashoffset="-70" />
                  <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#dcfce7" strokeWidth="4.5" strokeDasharray="12 88" strokeDashoffset="-88" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-heading font-black text-lg text-[#1f7347]">42%</span>
                  <span className="text-[9px] text-slate-400 font-semibold">Sachets</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 space-y-0.5 text-left pt-2">
                <p>• Multi-layer Sachets: 42% (Single-use)</p>
                <p>• PET Beverage Bottles: 28%</p>
                <p>• Thin LDPE Bags: 18%</p>
                <p>• Rigid HDPE & Others: 12%</p>
              </div>
            </div>

            {/* Key Findings */}
            <div className="md:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
              <span className="text-xs font-bold text-[#1f7347] uppercase tracking-wider block">
                Key Findings from 2024 Audit
              </span>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>
                    Non-recyclable multi-layer food and cosmetic sachets constitute over 42% of all
                    intercepted marine debris.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>
                    River outlets along Buriganga, Karnaphuli, and Surma face severe macroplastic
                    choking during monsoon rainfall.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>
                    National implementation of Extended Producer Responsibility (EPR) is urgently
                    required to mandate brand accountability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why participate & Action CTAs matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-6">
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900">
            Why participate?
          </h2>
          <div className="text-base sm:text-lg text-slate-700 space-y-3 max-w-xl mx-auto leading-relaxed">
            <p>• Hands-on contribution to halting macroplastics entering our rivers and delta.</p>
            <p>• Direct contribution of open data to Bangladesh&apos;s National Brand Audit Report.</p>
            <p>• Mobilizing neighborhood clubs, campuses, and families for a zero-waste lifestyle.</p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-[#1f7347] hover:bg-[#185d39] text-white font-bold text-xs sm:text-sm px-6 py-2.5 h-10 rounded-lg shadow-sm">
              <Link href="/get-involved">JOIN UPCOMING CLEANUP DRIVE</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs sm:text-sm px-6 py-2.5 h-10 rounded-lg">
              <Link href="/get-involved">JOIN EDUCATIONAL SESSION</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Social Media Challenge Options matching screenshot */}
      <section className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#1f7347] uppercase tracking-wider block font-heading">
              COMMUNITY CHALLENGE
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Social media challenge
            </h2>
          </div>

          {/* Option 1 Banner */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <div className="p-3 bg-[#1f7347] text-white text-center font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
              Option 1: Clean Up Plastic
            </div>
            <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
              <h4 className="font-heading font-bold text-slate-900 text-sm">DETAILS OF OPTION 1:</h4>
              <p>• Step 1: Gather friends, family, or club members in your neighborhood or school.</p>
              <p>• Step 2: Pick up plastics from roads, riverbanks, or community grounds for 1 hour.</p>
              <p>• Step 3: Weigh the collected bags and take clear photos of the collected waste.</p>
              <p>• Step 4: Share photos on social media with the hashtag <strong>#UnplasticBangladesh</strong> and tag Green Lead.</p>
            </div>
          </div>

          {/* Option 2 Banner */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
            <div className="p-3 bg-[#1f7347] text-white text-center font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
              Option 2: Take a Plastic Pollution Session
            </div>
            <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
              <h4 className="font-heading font-bold text-slate-900 text-sm">DETAILS OF OPTION 2:</h4>
              <p>• Step 1: Download our free Plastic 101 presentation and facilitator guide.</p>
              <p>• Step 2: Host a 30-minute interactive discussion with at least 10 students or coworkers.</p>
              <p>• Step 3: Take group pledge photos holding reusable bags or alternative packaging.</p>
              <p>• Step 4: Submit your session log sheet to receive official participant certificates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campaign Gallery matching screenshot */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#1f7347] uppercase tracking-widest block font-heading">
              FIELD PHOTO ARCHIVE
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Campaign Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Moments from cleanups, brand audits, and youth pledges across all 8 divisions.
            </p>
          </div>

          {/* 15 Photo Thumbnails Grid matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br shadow-2xs hover:shadow-md transition-all flex flex-col justify-end p-2.5 text-left text-white border border-slate-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 space-y-0.5">
                  <p className="text-[10px] font-bold text-white line-clamp-1 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[9px] text-emerald-200 line-clamp-1">
                    {item.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
