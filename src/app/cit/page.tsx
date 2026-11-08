import type { Metadata } from "next";
import Link from "next/link";
import {
  Database,
  Leaf,
  GraduationCap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Send,
  Globe,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CIT — Climate Intelligent Technologies | Green Lead",
  description:
    "Building intelligent solutions for a green world — A climate tech company enabling data-driven, scalable, and locally-rooted environmental solutions.",
};

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photoGradient: string;
}

// User requested to change team member names from screenshot
const citTeam: TeamMember[] = [
  {
    name: "Samira Chowdhury",
    role: "Tech Solutions Architect",
    bio: "A CSE graduate who is passionate, driven by curiosity, and a belief in technology for positive climate impact and systemic change.",
    photoGradient: "from-amber-800 to-emerald-950",
  },
  {
    name: "Nabil Ahsan",
    role: "Tech Solutions Architect",
    bio: "A software engineer with a curious mind and a passion for scalable architectures. Dedicated to building intelligent tools for our environment.",
    photoGradient: "from-blue-900 to-slate-950",
  },
  {
    name: "Tahsin Jahan",
    role: "Tech Solutions Architect",
    bio: "Pioneering green technology solutions with focus on scalable impact, geospatial analytics, and climate adaptation modeling.",
    photoGradient: "from-emerald-900 to-teal-950",
  },
  {
    name: "Farhan Karim",
    role: "Tech Solutions Architect",
    bio: "Exploring high-impact technical architectures, IoT sensor integration, and continuous skill growth for sustainable delta futures.",
    photoGradient: "from-teal-900 to-slate-900",
  },
  {
    name: "Shafiul Alam",
    role: "Tech Solutions Architect",
    bio: "A technology enthusiast dedicated to creating meaningful, innovative applications that connect field realities to digital dashboards.",
    photoGradient: "from-indigo-950 to-emerald-950",
  },
];

const services = [
  {
    icon: <Database className="h-5 w-5 text-white" />,
    title: "Climate Data Solutions",
    subtitle: "AI and IoT tools for monitoring climate impact.",
    bullets: ["Real-time monitoring", "Data analytics", "Smart sensors"],
  },
  {
    icon: <Leaf className="h-5 w-5 text-white" />,
    title: "Green Tech Advisory",
    subtitle: "Guiding organizations and businesses in sustainable tech.",
    bullets: ["Sustainability consulting", "Tech implementation", "Strategy planning"],
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-white" />,
    title: "Digital Climate Education",
    subtitle: "Creating platforms for climate tools and skills.",
    bullets: ["Interactive learning", "Custom courses", "Skills development"],
  },
  {
    icon: <Wrench className="h-5 w-5 text-white" />,
    title: "Customized Climate Tools",
    subtitle: "Building dashboards and analytics for partners.",
    bullets: ["Custom dashboards", "Mobile applications", "Predictive solutions"],
  },
];

export default function CITPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Hero Banner matching screenshot */}
      <section className="relative py-20 sm:py-28 bg-[#04140b] text-white overflow-hidden text-center">
        {/* Subtle Network / Nodes illustration */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,rgba(46,163,94,0.4),transparent_65%)] pointer-events-none" />

        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="cit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2ea35e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cit-grid)" />
        </svg>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 space-y-4">
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Building Intelligent Solutions for a Green World
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto font-normal">
            A climate tech company enabling data-driven, scalable, and locally-rooted environmental
            solutions.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="bg-[#1f7347] hover:bg-[#185d39] text-white font-medium text-xs px-5 py-2 rounded-md shadow-xs"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-xs px-5 py-2 rounded-md"
            >
              <a href="#offerings">Explore Our Work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. "Our Mission" Section matching screenshot */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Cols: Text */}
            <div className="md:col-span-7 space-y-3 text-left">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                Climate Intelligent Technologies (CIT) is committed to accelerating systemic
                solutions through technology, data, and innovation. Our mission is to empower
                communities and institutions with intelligent tools for climate adaptation,
                mitigation, and sustainable development.
              </p>
            </div>

            {/* Right 5 Cols: Green Visual Card */}
            <div className="md:col-span-5">
              <div className="rounded-2xl aspect-[4/3] bg-gradient-to-br from-[#1a5d38] via-[#237d4b] to-[#124227] p-6 shadow-md border border-emerald-400/20 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border-4 border-white/10 pointer-events-none" />
                <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest">
                  CIT LAB
                </span>
                <p className="font-heading font-extrabold text-base text-white">
                  Data-Driven Impact Engine
                </p>
                <div className="text-[11px] text-emerald-100/80">
                  Bridging ground sensors, satellite GIS, and community crowdsourced data.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "What We Offer" Section matching screenshot */}
      <section id="offerings" className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80 text-center">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-[#2ea35e] transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-[#2ea35e] flex items-center justify-center shadow-xs">
                    {svc.icon}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {svc.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {svc.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2ea35e] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Meet the Team" Section matching screenshot (Names changed as requested) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            Meet the Team
          </h2>

          {/* Row 1: 3 Members */}
          <div className="grid sm:grid-cols-3 gap-6">
            {citTeam.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs text-left group hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${member.photoGradient} p-4 flex flex-col justify-end text-white relative`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <span className="relative z-10 text-[10px] font-bold text-emerald-200 uppercase tracking-widest">
                    CIT Core
                  </span>
                </div>

                {/* Info & Bio */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1f7347]">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-400">
                    <span className="text-[10px] text-slate-400 font-medium">Connect:</span>
                    <Globe className="h-3.5 w-3.5 hover:text-[#2ea35e] cursor-pointer" />
                    <Mail className="h-3.5 w-3.5 hover:text-[#2ea35e] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Members Centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {citTeam.slice(3, 5).map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs text-left group hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${member.photoGradient} p-4 flex flex-col justify-end text-white relative`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <span className="relative z-10 text-[10px] font-bold text-emerald-200 uppercase tracking-widest">
                    CIT Core
                  </span>
                </div>

                {/* Info & Bio */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1f7347]">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pt-2">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-400">
                    <span className="text-[10px] text-slate-400 font-medium">Connect:</span>
                    <Globe className="h-3.5 w-3.5 hover:text-[#2ea35e] cursor-pointer" />
                    <Mail className="h-3.5 w-3.5 hover:text-[#2ea35e] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
