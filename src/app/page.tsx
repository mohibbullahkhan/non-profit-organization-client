import type { Metadata } from "next";
import Link from "next/link";
import {
  Quote,
  Users,
  Compass,
  Award,
  Globe,
  Sprout,
  ArrowRight,
  Sparkles,
  TreePine,
  Waves,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PillarsInteractive } from "@/components/home/PillarsInteractive";

export const metadata: Metadata = {
  title: "Green Lead — Leading for a green world",
  description:
    "Mobilizing Green Leaders for a Peaceful World. Aligning people's purposes in life toward building a green and sustainable future.",
};

export default function HomePage() {
  const impactCounters = [
    { value: "300,000+", label: "People reached" },
    { value: "10,000+", label: "People engaged" },
    { value: "30+", label: "Initiatives" },
    { value: "5+", label: "Years of Journey" },
  ];

  const initiatives = [
    { title: "RE Power Youth", href: "/initiatives/re-power-youth" },
    { title: "W4C", href: "/initiatives/w4c" },
    { title: "CLAN", href: "/initiatives/clan" },
    { title: "REF'25", href: "/initiatives/ref-25" },
    { title: "GCL", href: "/initiatives/gcl" },
    { title: "CLIMATED", href: "/initiatives/climated" },
    { title: "Stories of climate action", href: "/initiatives/stories-of-climate-action" },
    { title: "GL at COP", href: "/initiatives/gl-at-cop" },
    { title: "h-map", href: "/initiatives/h-map" },
  ];

  const partners = [
    { name: "BYLC", subtitle: "Leadership Partner", color: "border-emerald-200/90 text-emerald-900 bg-emerald-50/20" },
    { name: "Sonali Bioplastics", subtitle: "Circular Tech", color: "border-teal-200/90 text-teal-900 bg-teal-50/20" },
    { name: "ICCCAD", subtitle: "Climate Research", color: "border-cyan-200/90 text-cyan-950 bg-cyan-50/20" },
    { name: "IUB", subtitle: "University Partner", color: "border-blue-200/90 text-blue-900 bg-blue-50/20" },
    { name: "Swedish Institute", subtitle: "Impact Pioneers", color: "border-amber-200/90 text-amber-900 bg-amber-50/20" },
    { name: "YouthNet Global", subtitle: "Youth Movement", color: "border-green-200/90 text-green-900 bg-green-50/20" },
    { name: "The Business Standard", subtitle: "Media Partner", color: "border-slate-300 text-slate-900 bg-slate-50/50" },
    { name: "CIT", subtitle: "Technology Partner", color: "border-indigo-200/90 text-indigo-950 bg-indigo-50/20" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFB] text-slate-800">
      {/* 1. Top Hero Group Photo Banner */}
      <section className="relative w-full overflow-hidden bg-slate-950">
        <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] bg-gradient-to-br from-[#072418] via-[#091f16] to-[#04120d] flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4">
          {/* Subtle Decorative Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-[radial-gradient(ellipse_at_center,rgba(46,163,94,0.22),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Users className="h-4 w-4" />
              <span>Youth Climate Leaders Assembly</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Mobilizing Green Leaders for a Peaceful World
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
              A united youth movement tackling the triple planetary crisis across Bangladesh and beyond.
            </p>
          </div>

          {/* Bottom subtle edge divider */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FDFDFB] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* 2. "Our Current Reality" & "Where are we?" */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left 7 Cols */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full inline-block">
                Our Current Reality
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                Where are we?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                The world faces a triple planetary crisis—climate change, pollution, and
                biodiversity loss. Countries are affected disproportionately by these issues and
                their interconnected social impacts, creating existential challenges for people to
                live and thrive on Earth.
              </p>
            </div>

            {/* Right 5 Cols: Visual Card (Parched Earth) */}
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#3b2318] via-[#221711] to-[#140e0b] shadow-xl border border-amber-900/40 flex items-center justify-center p-8 text-center text-white group hover:shadow-2xl transition-all duration-300">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_70%)] pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner group-hover:scale-105 transition-transform">
                    <Globe className="h-7 w-7" />
                  </div>
                  <p className="font-heading font-bold text-lg text-amber-100 tracking-tight">
                    Climate Vulnerability Frontline
                  </p>
                  <p className="text-sm text-amber-200/80 max-w-xs leading-relaxed mx-auto font-normal">
                    Drought, salinity, and displacement threatening communities across the Bengal delta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Our Vision" & "Where do we want to go?" */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left 7 Cols */}
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full inline-block">
                Our Vision
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                Where do we want to go?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                We envision a green world where people genuinely care about the environment to live a
                peaceful life.
              </p>
            </div>

            {/* Right 5 Cols: Visual Card (Holding green plant) */}
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#0e422f] via-[#092a1e] to-[#04160f] shadow-xl border border-emerald-800/40 flex items-center justify-center p-8 text-center text-white group hover:shadow-2xl transition-all duration-300">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(46,163,94,0.25),transparent_70%)] pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner group-hover:scale-105 transition-transform">
                    <Sprout className="h-7 w-7" />
                  </div>
                  <p className="font-heading font-bold text-lg text-emerald-100 tracking-tight">
                    Nurturing a Green World
                  </p>
                  <p className="text-sm text-emerald-200/80 max-w-xs leading-relaxed mx-auto font-normal">
                    Generations caring for natural ecosystems, regenerative soil, and living in peace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Two Pill Cards */}
      <section className="py-10 bg-[#FDFDFB]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-emerald-200/90 shadow-sm flex items-center gap-4 hover:border-[#1f7347] transition-all">
              <div className="h-12 w-12 rounded-xl bg-[#1f7347] text-white flex items-center justify-center shrink-0 shadow-md">
                <Users className="h-6 w-6 text-emerald-200" />
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Mobilizing Green Leaders for a Peaceful World
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-emerald-200/90 shadow-sm flex items-center gap-4 hover:border-[#1f7347] transition-all">
              <div className="h-12 w-12 rounded-xl bg-[#1f7347] text-white flex items-center justify-center shrink-0 shadow-md">
                <Compass className="h-6 w-6 text-emerald-200" />
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Aligning People&apos;s (Your) purposes in life toward building a green and peaceful world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "The Journey Forward" & "How can we reach there?" with Quote */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full inline-block">
              The Journey Forward
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              How can we reach there?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl pt-1">
              We have lived on Earth for thousands of years, evolving to build modern civilization
              and thriving like no other species. Now, facing one of humanity&apos;s greatest
              existential crises, we must rethink how we use resources and live on this planet.
            </p>
          </div>

          {/* Quote Block */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-50/90 via-teal-50/60 to-white border-l-4 border-l-[#2ea35e] border border-emerald-100 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-2 right-4 text-emerald-600/10 pointer-events-none select-none">
              <Quote className="h-28 w-28 -scale-x-100" />
            </div>
            <Quote className="h-8 w-8 text-[#2ea35e] mb-3" />
            <blockquote className="text-lg sm:text-2xl font-semibold text-emerald-950 italic leading-relaxed relative z-10">
              &ldquo;No problem can be solved from the same level of consciousness that created it.&rdquo;
            </blockquote>
            <p className="text-sm sm:text-base font-bold text-[#1f7347] mt-4 tracking-wide relative z-10">
              — Albert Einstein
            </p>
          </div>
        </div>
      </section>

      {/* 6. "Theory of Change" & "What is our Theory of Change?" */}
      <section className="py-16 sm:py-24 bg-[#FDFDFB]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full inline-block">
              Theory of Change
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              What is our Theory of Change?
            </h2>
          </div>

          {/* 3 Alternating Story Rows */}
          <div className="space-y-12 sm:space-y-16">
            {/* Row 1: Text Left, Photo Right */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-7 space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We believe the triple planetary crisis is, at its core, a{" "}
                  <strong className="text-slate-900 font-extrabold">leadership crisis</strong>.
                  Traditional leadership has failed by prioritizing profit over people and the
                  planet. We need a new model —{" "}
                  <strong className="text-[#1f7347] font-extrabold">Green Leadership</strong> — that
                  puts the planet and people first, driving systemic change in our economy and
                  consumption.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-800 to-teal-950 shadow-lg border border-emerald-700/30 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-emerald-300">
                      <Sprout className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-base sm:text-lg">Regenerative Leadership</p>
                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">Systemic change prioritizing people & planet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Photo Left, Text Right */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 shadow-lg border border-indigo-800/30 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-emerald-300">
                      <Users className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-base sm:text-lg">Youth Cohort Empowerment</p>
                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">Building green jobs & economic resilience</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  If we empower youth in the most affected areas to lead, they will pursue green jobs
                  and entrepreneurship, boosting their economic resilience and ability to address
                  climate and environmental challenges.
                </p>
              </div>
            </div>

            {/* Row 3: Text Left, Photo Right */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-7 space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We believe the most vulnerable group, especially the youth, should be most
                  prepared as they are the most potential group to build a sustainable future for
                  them.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-teal-900 to-emerald-950 shadow-lg border border-teal-700/30 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto text-emerald-300">
                      <Award className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-base sm:text-lg">Grassroots Preparedness</p>
                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">Community stewards at the frontlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "The Green Circle of Change" Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left 6 Cols: Text */}
            <div className="md:col-span-6 space-y-5 text-left">
              <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full inline-block">
                Systems Transformation
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                The Green Circle of Change
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Transforming our world through green leadership, sustainable business practices, and
                lifestyle choices for a green tomorrow. We believe in creating a sustainable future
                through collective action and innovative solutions.
              </p>
            </div>

            {/* Right 6 Cols: The Green Circle Diagram */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] flex items-center justify-center">
                {/* SVG Connecting Tracks & Halo Circles */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 380">
                  <circle cx="190" cy="190" r="130" fill="none" stroke="#2ea35e" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                  <circle cx="190" cy="190" r="90" fill="none" stroke="#2ea35e" strokeWidth="1.5" opacity="0.2" />
                  <line x1="190" y1="40" x2="190" y2="340" stroke="#1f7347" strokeWidth="2" opacity="0.3" />
                  <line x1="40" y1="190" x2="340" y2="190" stroke="#1f7347" strokeWidth="2" opacity="0.3" />
                </svg>

                {/* Central Circle */}
                <div className="relative z-20 w-[160px] sm:w-[170px] h-[160px] sm:h-[170px] rounded-full bg-gradient-to-br from-[#1b6d41] to-[#124d2e] text-white p-4 flex items-center justify-center text-center shadow-2xl border-4 border-white">
                  <p className="font-heading font-extrabold text-sm sm:text-base leading-snug">
                    A Green World with Green Leadership
                  </p>
                </div>

                {/* Top Node: Awareness */}
                <div className="absolute top-0 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#208351] to-[#1a6840] text-white flex items-center justify-center text-center p-2 shadow-lg border-2 border-white z-10 hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-bold">Awareness</span>
                </div>

                {/* Right Node: Resource */}
                <div className="absolute right-0 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#208351] to-[#1a6840] text-white flex items-center justify-center text-center p-2 shadow-lg border-2 border-white z-10 hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-bold">Resource</span>
                </div>

                {/* Bottom Node: Ecosystem */}
                <div className="absolute bottom-0 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#208351] to-[#1a6840] text-white flex items-center justify-center text-center p-2 shadow-lg border-2 border-white z-10 hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-bold">Ecosystem</span>
                </div>

                {/* Left Node: Capacity */}
                <div className="absolute left-0 w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#208351] to-[#1a6840] text-white flex items-center justify-center text-center p-2 shadow-lg border-2 border-white z-10 hover:scale-105 transition-transform">
                  <span className="text-xs sm:text-sm font-bold">Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "How do we promote and help practice 'Green Leadership' as a tool for systemic change?" */}
      <section className="py-16 sm:py-24 bg-[#FDFDFB] border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              How do we promote and help practice{" "}
              <span className="text-[#1f7347]">&ldquo;Green Leadership&rdquo;</span> as a tool for
              systemic change?
            </h2>
          </div>

          {/* Interactive 4 Pillars with all sub-programs & actions */}
          <PillarsInteractive />

          {/* Initiatives Tag Cloud */}
          <div className="pt-6 border-t border-slate-200/80">
            <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">
              Explore Our Core Initiatives:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {initiatives.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:border-[#2ea35e] hover:text-[#1f7347] hover:shadow-xs transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. "Our Journey of Impact" with 4 Green Cards */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Our Journey of Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {impactCounters.map((item) => (
              <div
                key={item.label}
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#19633c] via-[#1f7347] to-[#145331] text-white text-center shadow-md border border-emerald-600/30 flex flex-col justify-center hover:-translate-y-1 transition-transform"
              >
                <div className="font-heading font-black text-4xl sm:text-5xl text-white tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-emerald-100/95 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. "How Are We Leading a Green World?" Section */}
      <section className="py-16 sm:py-24 bg-[#FDFDFB] border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              How Are We Leading a Green World?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Frontline moments from youth climate hackathons, river cleanups, and policy summits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#16432f] via-[#0d2a1d] to-[#081c15] text-white flex flex-col justify-end p-6 text-left border border-emerald-950/20 shadow-md relative hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                <TreePine className="h-5 w-5" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Community Tree Planting
              </span>
            </div>

            <div className="group rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#235841] via-[#1b4332] to-[#122e22] text-white flex flex-col justify-end p-6 text-left border border-emerald-950/20 shadow-md relative hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                <Waves className="h-5 w-5" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                River Plastic Interception
              </span>
            </div>

            <div className="group rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#132847] via-[#0f1d33] to-[#0a1424] text-white flex flex-col justify-end p-6 text-left border border-slate-900/20 shadow-md relative hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Youth Policy Advocacy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. "Who has been with us as Partners of Impact?" Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Who has been with us as{" "}
              <span className="text-[#1f7347]">Partners of Impact?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className={`p-5 rounded-2xl border bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center ${p.color}`}
              >
                <span className="font-heading font-extrabold text-base sm:text-lg">{p.name}</span>
                <span className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{p.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. "Want to join us in building a green world?" Section */}
      <section className="py-20 sm:py-28 bg-[#FDFDFB] border-t border-slate-200/80 text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1f7347] tracking-tight">
            Want to join us in building a green world?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-[#1f7347] hover:bg-[#185d39] text-white font-bold text-sm sm:text-base px-8 py-3.5 h-auto rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/get-involved">Join as a Member</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-sm sm:text-base px-8 py-3.5 h-auto rounded-xl"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
