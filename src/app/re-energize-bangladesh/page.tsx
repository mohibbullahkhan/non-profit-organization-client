"use client";

import * as React from "react";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  Download,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Sun,
  Activity,
  BarChart3,
  Globe2,
  FileText,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReEnergizeBangladeshPage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    institution: "",
    interest: "Volunteer & Community Action",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generationData = [
    { source: "Natural Gas", percentage: "51.4%", capacity: "12,240 MW", color: "#166534" },
    { source: "Furnace Oil (HFO)", percentage: "22.6%", capacity: "5,380 MW", color: "#22c55e" },
    { source: "Coal", percentage: "14.8%", capacity: "3,520 MW", color: "#86efac" },
    { source: "Power Import", percentage: "6.2%", capacity: "1,480 MW", color: "#15803d" },
    { source: "Renewable Energy (Solar & Hydro)", percentage: "4.96%", capacity: "1,180 MW", color: "#4ade80" },
    { source: "Diesel", percentage: "0.5%", capacity: "120 MW", color: "#bbf7d0" },
  ];

  const whyCleanPower = [
    {
      title: "Economic Security & Fuel Independence",
      desc: "Halting the severe foreign currency drain caused by volatile imported LNG, coal, and heavy furnace oil.",
      icon: <TrendingUp className="h-5 w-5 text-[#2ea35e]" />,
    },
    {
      title: "Climate Mitigation & National NDCs",
      desc: "Meeting Bangladesh's updated Nationally Determined Contributions (NDCs) target under the Paris Agreement.",
      icon: <Globe2 className="h-5 w-5 text-[#2ea35e]" />,
    },
    {
      title: "Public Health & Clean Air",
      desc: "Slashing toxic sulfur dioxide, nitrogen oxides, and particulate emissions from outdated thermal power stations.",
      icon: <ShieldCheck className="h-5 w-5 text-[#2ea35e]" />,
    },
    {
      title: "Green Jobs for Engineering Youth",
      desc: "Opening thousands of high-skilled engineering, system design, and rooftop installation jobs for young graduates.",
      icon: <Users className="h-5 w-5 text-[#2ea35e]" />,
    },
    {
      title: "Decentralized Energy for Coastal Belts",
      desc: "Empowering cyclone-prone and off-grid coastal unions with resilient solar micro-grids and battery backup.",
      icon: <Sun className="h-5 w-5 text-[#2ea35e]" />,
    },
    {
      title: "Export Competitiveness (RMG)",
      desc: "Enabling ready-made garment and textile industries to satisfy global buyer requirements (RE100 & EU CBAM).",
      icon: <Award className="h-5 w-5 text-[#2ea35e]" />,
    },
  ];

  const faqs = [
    {
      q: "What is the Net Metering policy in Bangladesh?",
      a: "The Net Energy Metering (NEM) guidelines allow commercial, industrial, and residential rooftop solar consumers to export surplus power back to the national grid, earning credits against their monthly electricity bills.",
    },
    {
      q: "How can textile and RMG factories adopt solar under OPEX vs CAPEX?",
      a: "Under the CAPEX model, factories invest upfront and own the asset with a payback period of 4-5 years. Under the OPEX model (PPA), a solar developer finances, installs, and maintains the plant, selling power to the factory at a discounted tariff.",
    },
    {
      q: "What are the major bottlenecks slowing down utility-scale solar?",
      a: "Land scarcity and non-arable parcel aggregation are primary hurdles, alongside grid transmission constraints and high import duties on high-efficiency solar inverters and balance-of-system hardware.",
    },
    {
      q: "How does RE-Power Youth train young engineers?",
      a: "Through multi-week intensive bootcamps covering PVsyst simulation software, single-line diagrams (SLD), net-metering compliance, and hands-on rooftop mounting with certified solar trainers.",
    },
    {
      q: "What policy reforms is Green Lead advocating for?",
      a: "We advocate for removing import duties on high-quality solar inverters, modernizing grid wheeling regulations, scaling IDCOL concessionary financing, and mandating rooftop solar on all new industrial construction.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Banner matching screenshot */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-[#0b381d] via-[#124d29] to-[#072b15] text-white overflow-hidden border-b border-emerald-900/60">
        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-200 border border-white/20 text-xs font-semibold backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-emerald-300" />
            <span>National Clean Energy Transition Campaign</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            RE-ENERGIZE BANGLADESH
          </h1>

          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto font-normal">
            Bangladesh Re-Energizing! Accelerating the Clean Energy Transition through youth
            leadership, technical capacity, and policy advocacy.
          </p>

          <div className="pt-2">
            <span className="text-xs font-semibold text-emerald-300/90 inline-flex items-center gap-1.5">
              <Award className="h-4 w-4" /> Winner: ICCCAD Youth Innovation Fund
            </span>
          </div>
        </div>
      </section>

      {/* 2. Top Interactive Context & Gauge Section */}
      <section className="py-14 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left: Bangladesh Clean Power Map Graphic */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] aspect-square rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 p-6 border border-emerald-200 shadow-sm flex flex-col items-center justify-between text-center">
                <div className="h-12 w-12 rounded-xl bg-[#2ea35e] text-white flex items-center justify-center shadow-md">
                  <Sun className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1f7347] uppercase tracking-wider">
                    Solar Radiation Map
                  </span>
                  <p className="font-heading font-extrabold text-base text-slate-900">
                    4.5–5.0 kWh/m²/day
                  </p>
                  <p className="text-[11px] text-slate-500">
                    High daily average solar insolation across all 8 divisions
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-emerald-200/60 flex justify-between text-xs font-semibold text-slate-700">
                  <span>Target: 40% Clean</span>
                  <span className="text-[#2ea35e]">Year 2041</span>
                </div>
              </div>
            </div>

            {/* Right: Clean Energy Speedometer / Gauge */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold text-[#1f7347] uppercase tracking-wider block">
                Current Clean Generation Status
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Where does Bangladesh stand today?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Despite enormous rooftop and utility-scale solar potential, renewable energy
                currently accounts for only <strong>~4.96%</strong> of national electricity
                generation. To reach the national 40% target by 2041, Bangladesh must rapidly scale
                up clean generation.
              </p>

              {/* Speedometer Gauge Visual matching screenshot */}
              <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Renewable Energy Share:</span>
                  <span className="font-heading font-semibold text-xl text-[#1f7347] tabular-nums">4.96%</span>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden relative border border-slate-200">
                  {/* Current progress */}
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-[#1f7347] rounded-full transition-all"
                    style={{ width: "12.4%" }}
                  />
                </div>

                <div className="flex justify-between text-[11px] font-medium text-slate-500 tabular-nums">
                  <span>Current: 4.96% (1,180 MW)</span>
                  <span>Target: 40% (24,000 MW by 2041)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "GENERATION MIX: WHERE DO WE GET OUR ELECTRICITY FROM?" */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Green Title Header Bar matching screenshot */}
          <div className="p-3 rounded-lg bg-[#1f7347] text-white text-center shadow-xs">
            <h2 className="font-heading font-semibold text-sm sm:text-base tracking-wide uppercase">
              GENERATION MIX: WHERE DO WE GET OUR ELECTRICITY FROM?
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left 7 Cols: Data Table matching screenshot */}
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-lg border border-slate-200 shadow-2xs">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-heading font-semibold">
                      <th className="py-2.5 px-4 text-left">Fuel Source</th>
                      <th className="py-2.5 px-4 text-right">Generation Share</th>
                      <th className="py-2.5 px-4 text-right">Capacity (MW)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {generationData.map((row) => (
                      <tr key={row.source} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-2 px-4 font-medium text-slate-800 flex items-center gap-2">
                          <span
                            className="h-2 w-2 rounded-full shrink-0"
                            style={{ backgroundColor: row.color }}
                          />
                          <span>{row.source}</span>
                        </td>
                        <td className="py-2 px-4 text-right font-mono tabular-nums font-semibold text-slate-900">
                          {row.percentage}
                        </td>
                        <td className="py-2 px-4 text-right font-mono tabular-nums text-slate-600">
                          {row.capacity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right 5 Cols: Generation Mix Pie Chart matching screenshot */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-lg bg-[#FCFCFA] border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 mb-3">Generation Fuel Mix</span>
              {/* SVG Donut / Pie Chart */}
              <div className="relative w-44 h-44">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  {/* Natural Gas ~51.4% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#166534"
                    strokeWidth="4"
                    strokeDasharray="51.4 48.6"
                    strokeDashoffset="0"
                  />
                  {/* Furnace Oil ~22.6% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeDasharray="22.6 77.4"
                    strokeDashoffset="-51.4"
                  />
                  {/* Coal ~14.8% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#86efac"
                    strokeWidth="4"
                    strokeDasharray="14.8 85.2"
                    strokeDashoffset="-74"
                  />
                  {/* Renewable ~4.96% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#4ade80"
                    strokeWidth="4"
                    strokeDasharray="4.96 95.04"
                    strokeDashoffset="-88.8"
                  />
                  {/* Power Import ~6.2% */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#15803d"
                    strokeWidth="4"
                    strokeDasharray="6.2 93.8"
                    strokeDashoffset="-93.76"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-heading font-semibold text-xl text-[#1f7347] tabular-nums">4.96%</span>
                  <span className="text-[10px] text-slate-500 font-medium">RE Share</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 text-center">
                Natural gas and imported furnace oil dominate over 74% of daily supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Will We Reach the 40% Clean Energy Target by 2041?" */}
      <section className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-3.5 rounded-xl bg-[#1f7347] text-white text-center shadow-xs">
            <h2 className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
              Will We Reach the 40% Clean Energy Target by 2041?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="h-9 w-9 rounded-lg bg-emerald-50 text-[#1f7347] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900">
                Utility-Scale & Floating Solar
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizing non-agricultural char lands, water reservoirs, and coastal solar parks
                with high-voltage transmission interconnects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="h-9 w-9 rounded-lg bg-emerald-50 text-[#1f7347] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900">
                Industrial Rooftop & Net Metering
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over 5,000 MW of industrial rooftop potential across readymade garment factories,
                economic zones, and warehouses.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="h-9 w-9 rounded-lg bg-emerald-50 text-[#1f7347] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900">
                Grid Modernization & Battery BESS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deploying battery energy storage systems (BESS) and smart substations to handle
                renewable intermittency and peak evening load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Why Do We Need Clean Power?" 2x3 Grid matching screenshot */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-3.5 rounded-xl bg-[#1f7347] text-white text-center shadow-xs">
            <h2 className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
              Why Do We Need Clean Power?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCleanPower.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-slate-200 bg-[#FCFCFA] hover:border-emerald-300 transition-all space-y-2.5"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "RE Policy and Resource Corner" matching screenshot */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-[#0d3b1f] via-[#124d29] to-[#072b15] text-white text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block font-heading">
            DOWNLOADABLE POLICY BRIEFS & CALCULATORS
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            RE Policy and Resource Corner
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto leading-relaxed">
            Access free technical handbooks, rooftop financial models, and policy whitepapers
            authored by our research team.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button
              asChild
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm px-6 py-2.5 rounded-lg shadow-sm"
            >
              <Link href="/publications" className="inline-flex items-center gap-1.5">
                <Download className="h-4 w-4 text-[#1f7347]" /> Download Policy Brief
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-medium text-xs px-5 py-2 rounded-md"
            >
              <Link href="/resources">Rooftop Solar Feasibility Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Policy Questions Accordion matching screenshot */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-3.5 rounded-xl bg-[#1f7347] text-white text-center shadow-xs">
            <h2 className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
              Frequently Asked Policy Questions
            </h2>
          </div>

          <div className="w-full space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-[#FCFCFA] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left font-heading font-bold text-sm text-slate-800 hover:text-[#1f7347] flex items-center justify-between gap-3 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1f7347]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Highlights from Events & Programs matching screenshot */}
      <section className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-3.5 rounded-xl bg-[#1f7347] text-white text-center shadow-xs">
            <h2 className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
              Highlights from Our Events & Programs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Event Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center text-white p-6 text-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                    Summit 2024
                  </span>
                  <p className="font-heading font-bold text-base text-white">
                    RE Power Youth National Summit
                  </p>
                  <p className="text-xs text-slate-200">
                    Over 500 young engineers and policy leaders convened
                  </p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Accelerating Youth Leadership in Renewable Transition
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keynotes from national energy regulators, solar association leaders, and university
                  vice-chancellors highlighting young talent integration.
                </p>
                <Link
                  href="/initiatives/re-power-youth"
                  className="text-xs font-bold text-[#1f7347] inline-flex items-center gap-1 hover:underline"
                >
                  Explore Summit <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-900 flex items-center justify-center text-white p-6 text-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                    Bootcamp 2025
                  </span>
                  <p className="font-heading font-bold text-base text-white">
                    Solar Engineering Technical Training
                  </p>
                  <p className="text-xs text-slate-200">
                    Hands-on PV installation, inverter troubleshooting & design
                  </p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Certified Green Skill Development Program
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Intensive technical workshops connecting electrical engineering graduates to leading
                  renewable energy employers and EPC firms.
                </p>
                <Link
                  href="/initiatives/ref-25"
                  className="text-xs font-bold text-[#1f7347] inline-flex items-center gap-1 hover:underline"
                >
                  Explore Bootcamp <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. "Join the Movement" Registration Form matching screenshot */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-xl px-4 sm:px-6 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1f7347] uppercase tracking-widest block font-heading">
              GET INVOLVED
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Join the Movement
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Sign up to participate in upcoming renewable energy workshops, youth cohorts, and policy
              briefs.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-[#2ea35e] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Thank you for joining!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                We have received your registration. Our clean energy campaign coordinator will be in
                touch with event invitations and resources shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#FCFCFA] border border-slate-200 shadow-xs space-y-4 text-left"
            >
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2ea35e] bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2ea35e] bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  University / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. BUET / Solar EPC"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2ea35e] bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2ea35e] bg-white"
                >
                  <option>Technical PV Engineering & Training</option>
                  <option>Rooftop Solar Net-Metering Advocacy</option>
                  <option>Youth Research & Policy Briefs</option>
                  <option>Volunteer & Community Action</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Brief Message or Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2ea35e] bg-white resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#2ea35e] hover:bg-[#25874d] text-white font-bold text-xs py-2.5 rounded-lg shadow-sm"
              >
                Submit Registration <Send className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* 10. Partner & Collaborator Logos matching screenshot */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-4">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
            Collaborating Organizations & Supporters
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-75">
            <span className="font-heading font-extrabold text-sm text-slate-700">ICCCAD</span>
            <span className="font-heading font-extrabold text-sm text-emerald-800">
              Sonali Bioplastics
            </span>
            <span className="font-heading font-extrabold text-sm text-blue-900">
              Swedish Institute
            </span>
            <span className="font-heading font-extrabold text-sm text-slate-800">BYLC</span>
            <span className="font-heading font-extrabold text-sm text-emerald-700">
              YouthNet Global
            </span>
            <span className="font-heading font-extrabold text-sm text-indigo-900">CIT Lab</span>
          </div>
        </div>
      </section>
    </div>
  );
}
