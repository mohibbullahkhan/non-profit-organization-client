import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Award,
  Users,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  Leaf,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Impact — Creating Climate Impact Through Youth & Community | Green Lead",
  description:
    "Creating Climate Impact Through Youth & Community — Measurable grassroots action, community mobilization, and systemic transformation across Bangladesh.",
};

interface ImpactBlock {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  bgClass: string;
  textDark: boolean;
  reverse: boolean;
  tag: string;
  photos: { title: string; subtitle: string; bgGradient: string }[];
}

const impactBlocks: ImpactBlock[] = [
  {
    id: "ref-2025",
    badge: "FORUM 2025",
    badgeColor: "bg-emerald-100 text-[#1f7347] border-emerald-200",
    title: "Renewable Energy Forum 2025",
    description:
      "Convening national stakeholders, youth innovators, and policy leaders on Bangladesh's clean power target and energy sovereignty.",
    metrics: [
      { value: "1,000+", label: "Participants" },
      { value: "50+", label: "Speakers" },
      { value: "15+", label: "Policy Sessions" },
    ],
    bgClass: "bg-white",
    textDark: true,
    reverse: false,
    tag: "National Summit",
    photos: [
      {
        title: "Main Stage Plenary",
        subtitle: "Keynote on 40% Clean Energy 2041",
        bgGradient: "from-slate-900 to-emerald-950",
      },
      {
        title: "Youth Innovators Hall",
        subtitle: "Solar Tech Prototype Demos",
        bgGradient: "from-emerald-900 to-teal-950",
      },
      {
        title: "Policy Roundtable",
        subtitle: "Cross-Sector Net Metering Dialogue",
        bgGradient: "from-slate-800 to-slate-950",
      },
    ],
  },
  {
    id: "ret-2025",
    badge: "TRAINING 2025",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    title: "Renewable Energy Training 2025",
    description:
      "Hands-on professional technical training on PV installation, solar engineering design, and green career pathways for engineering youth.",
    metrics: [
      { value: "500+", label: "Engineers Trained" },
      { value: "5", label: "Intensive Batches" },
      { value: "95%", label: "Certification Rate" },
    ],
    bgClass: "bg-[#EFF6FA]",
    textDark: true,
    reverse: true,
    tag: "Capacity Building",
    photos: [
      {
        title: "Rooftop PV Lab",
        subtitle: "Hands-on Inverter & Wiring Practice",
        bgGradient: "from-sky-950 to-slate-900",
      },
      {
        title: "Classroom Masterclass",
        subtitle: "System Sizing & Grid Compliance",
        bgGradient: "from-teal-900 to-slate-900",
      },
      {
        title: "Graduation Cohort",
        subtitle: "Connecting to Green Job Employers",
        bgGradient: "from-blue-900 to-slate-950",
      },
    ],
  },
  {
    id: "gcl-2024",
    badge: "FELLOWSHIP",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
    title: "Global Community Leader (GCL)",
    description:
      "Accelerating localized village climate adaptation and grassroots leadership fellowships for high-potential community organizers.",
    metrics: [
      { value: "30+", label: "Youth Fellows" },
      { value: "12", label: "Districts Mobilized" },
      { value: "50+", label: "Community Micro-Projects" },
    ],
    bgClass: "bg-[#0B132B]",
    textDark: false,
    reverse: false,
    tag: "Fellowship",
    photos: [
      {
        title: "Global Fellows Assembly",
        subtitle: "Virtual Mentorship & Project Pitches",
        bgGradient: "from-indigo-950 to-slate-900",
      },
      {
        title: "Local Union Interventions",
        subtitle: "Saline-Resilient Household Mapping",
        bgGradient: "from-purple-950 to-slate-950",
      },
      {
        title: "Fellows Network Hub",
        subtitle: "Decentralized Action Coalitions",
        bgGradient: "from-blue-950 to-slate-900",
      },
    ],
  },
  {
    id: "unplastic-2024",
    badge: "CAMPAIGN 2024",
    badgeColor: "bg-emerald-100 text-[#1f7347] border-emerald-300",
    title: "Unplastic Bangladesh 2024",
    description:
      "National campaign tracking plastic waste across all 8 divisions and running public education drives, river pickups, and brand audits.",
    metrics: [
      { value: "8", label: "Divisions Covered" },
      { value: "10,000+", label: "Volunteers Mobilized" },
      { value: "25,000+", label: "KG Plastic Collected" },
    ],
    bgClass: "bg-[#EBF7EE]",
    textDark: true,
    reverse: true,
    tag: "Circular Economy",
    photos: [
      {
        title: "Division-Wide Cleanups",
        subtitle: "Buriganga & Karnafuli River Interception",
        bgGradient: "from-emerald-950 to-teal-900",
      },
      {
        title: "National Brand Audit",
        subtitle: "Holding Top FMCG Polluters Accountable",
        bgGradient: "from-green-900 to-slate-900",
      },
      {
        title: "Unplastic Youth Hubs",
        subtitle: "Recycled Plastic Art & Innovation",
        bgGradient: "from-emerald-800 to-stone-900",
      },
    ],
  },
  {
    id: "w4c-2024",
    badge: "WOMEN LEADERSHIP",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    title: "Women for Climate (W4C)",
    description:
      "Empowering female changemakers in climate-vulnerable coastal belts through disaster management, clean water access, and eco-enterprises.",
    metrics: [
      { value: "5", label: "Coastal Districts" },
      { value: "60+", label: "Female Climate Leaders" },
      { value: "15", label: "Water & Livelihood Collectives" },
    ],
    bgClass: "bg-white",
    textDark: true,
    reverse: false,
    tag: "Gender & Climate",
    photos: [
      {
        title: "Coastal Water Collectives",
        subtitle: "Rainwater Harvesting In Satkhira",
        bgGradient: "from-rose-950 to-slate-900",
      },
      {
        title: "Leadership Bootcamps",
        subtitle: "Community Disaster Preparedness",
        bgGradient: "from-pink-950 to-slate-950",
      },
      {
        title: "Women Eco-Enterprises",
        subtitle: "Saline-Tolerant Vegetable Seed Banks",
        bgGradient: "from-rose-900 to-emerald-950",
      },
    ],
  },
  {
    id: "bandarban-2023",
    badge: "EXPEDITION",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    title: "Climate Case @Bandarban",
    description:
      "Field investigation and indigenous community support in remote hilly zones to document deforestation, flash flood erosion, and water crises.",
    metrics: [
      { value: "500+", label: "Native Trees Planted" },
      { value: "3", label: "Indigenous Villages Visited" },
      { value: "1", label: "Published Field Report" },
    ],
    bgClass: "bg-[#FAF7EE]",
    textDark: true,
    reverse: true,
    tag: "Field Research",
    photos: [
      {
        title: "Hill Tracts Expedition",
        subtitle: "Surveying Flash Floods & Deforestation",
        bgGradient: "from-amber-950 to-stone-900",
      },
      {
        title: "Indigenous Elders Dialogue",
        subtitle: "Traditional Water Conservation Methods",
        bgGradient: "from-stone-900 to-amber-950",
      },
      {
        title: "Afforestation Drive",
        subtitle: "Planting Watershed Stabilizing Species",
        bgGradient: "from-emerald-950 to-stone-900",
      },
    ],
  },
  {
    id: "unplastic-2023",
    badge: "NATIONAL CAMPAIGN",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    title: "Unplastic Bangladesh 2023",
    description:
      "First nationwide plastic pickup and brand audit drive launched with Sonali Bioplastics, mobilizing grassroots chapters across all 64 districts.",
    metrics: [
      { value: "64", label: "Districts Activated" },
      { value: "5,000+", label: "Youth Mobilizers" },
      { value: "12,000+", label: "KG Plastics Intercepted" },
    ],
    bgClass: "bg-white",
    textDark: true,
    reverse: false,
    tag: "Grassroots Action",
    photos: [
      {
        title: "Beach Cleanup Cox's Bazar",
        subtitle: "Macroplastic Marine Trapping",
        bgGradient: "from-teal-950 to-slate-900",
      },
      {
        title: "Sonali Bioplastics Collab",
        subtitle: "Introducing Jute-Based Biopoly Alternatives",
        bgGradient: "from-emerald-950 to-teal-950",
      },
      {
        title: "District Brand Auditing",
        subtitle: "Classifying PET, HDPE & Multi-Layer Pouches",
        bgGradient: "from-slate-900 to-emerald-950",
      },
    ],
  },
  {
    id: "climated",
    badge: "EDUCATION",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    title: "climatED — Climate Education",
    description:
      "Publishing digital flipbooks, interactive climate learning modules, and organizing climate clubs in secondary schools and colleges.",
    metrics: [
      { value: "20,000+", label: "Students Reached" },
      { value: "100+", label: "Schools Engaged" },
      { value: "5", label: "Curriculum Flipbooks" },
    ],
    bgClass: "bg-[#0C1236]",
    textDark: false,
    reverse: true,
    tag: "School Curriculum",
    photos: [
      {
        title: "Today is the Planet so Angry?",
        subtitle: "Interactive Children's Climate Book",
        bgGradient: "from-amber-900 to-indigo-950",
      },
      {
        title: "School Climate Clubs",
        subtitle: "Campus Rainwater & Waste Sorting",
        bgGradient: "from-indigo-950 to-slate-900",
      },
      {
        title: "Teacher Training Modules",
        subtitle: "Integrating Climate Literacy in Classrooms",
        bgGradient: "from-teal-950 to-blue-950",
      },
    ],
  },
  {
    id: "engage",
    badge: "COMMUNITY DIALOGUE",
    badgeColor: "bg-emerald-100 text-[#1f7347] border-emerald-200",
    title: "ENGAGE: Inspiring Climate Action",
    description:
      "Public dialogue and youth engagement forums across university campuses, bridging grassroots youth realities with policy makers.",
    metrics: [
      { value: "1,500+", label: "Campus Attendees" },
      { value: "25", label: "Public Seminars" },
      { value: "10", label: "Universities Partnered" },
    ],
    bgClass: "bg-[#FAF7EE]",
    textDark: true,
    reverse: false,
    tag: "Civic Dialogue",
    photos: [
      {
        title: "Campus Town Halls",
        subtitle: "Youth Perspectives on Just Energy Transition",
        bgGradient: "from-slate-900 to-emerald-950",
      },
      {
        title: "Expert Interrogations",
        subtitle: "Direct Dialogue with Renewable Developers",
        bgGradient: "from-emerald-900 to-stone-900",
      },
      {
        title: "Community Pledge Drives",
        subtitle: "Mobilizing Individual Climate Commits",
        bgGradient: "from-stone-900 to-slate-950",
      },
    ],
  },
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Impact Hero Section matching screenshot */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#090D26] via-[#0C1236] to-[#0D153B] text-white overflow-hidden">
        {/* Subtle radial emerald background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,163,94,0.18),transparent_65%)] pointer-events-none" />

        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest block font-heading">
            OUR IMPACT
          </span>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Creating Climate Impact Through{" "}
            <span className="text-[#2ea35e]">Youth &</span> Community
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Measurable grassroots action, community mobilization, and systemic transformation
            across Bangladesh.
          </p>

          {/* 5-Column Metric Bar matching screenshot */}
          <div className="pt-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xs">
              <div className="text-center p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-black text-3xl sm:text-4xl text-[#2ea35e] tabular-nums tracking-tight">
                  50,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  People Reached
                </div>
              </div>

              <div className="text-center p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-black text-3xl sm:text-4xl text-[#2ea35e] tabular-nums tracking-tight">
                  20,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  Youth Engaged
                </div>
              </div>

              <div className="text-center p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                  17
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  Active Initiatives
                </div>
              </div>

              <div className="text-center p-2 border-r border-white/10 last:border-r-0">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                  200+
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  Community Events
                </div>
              </div>

              <div className="text-center p-2 col-span-2 sm:col-span-1">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                  6
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  Publications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Alternating Timeline Impact Sections matching screenshot */}
      <div className="divide-y divide-slate-100">
        {impactBlocks.map((block) => (
          <section
            key={block.id}
            className={`py-16 sm:py-20 ${block.bgClass} transition-colors`}
          >
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid md:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  block.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Column */}
                <div
                  className={`md:col-span-6 space-y-4 ${
                    block.reverse ? "md:order-2" : "md:order-1"
                  } ${block.textDark ? "text-slate-800" : "text-white"}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${block.badgeColor}`}
                    >
                      {block.badge}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        block.textDark ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      • {block.tag}
                    </span>
                  </div>

                  <h2
                    className={`font-heading font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight ${
                      block.textDark ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {block.title}
                  </h2>

                  <p
                    className={`text-base sm:text-lg leading-relaxed ${
                      block.textDark ? "text-slate-700" : "text-slate-200"
                    }`}
                  >
                    {block.description}
                  </p>

                  {/* 3 Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                    {block.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`p-3 rounded-lg border text-center ${
                          block.textDark
                            ? "bg-white/90 border-slate-200 shadow-2xs"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <div
                          className={`font-heading font-semibold text-lg sm:text-xl tabular-nums tracking-tight ${
                            block.textDark ? "text-[#1f7347]" : "text-emerald-400"
                          }`}
                        >
                          {m.value}
                        </div>
                        <div
                          className={`text-xs sm:text-sm font-medium mt-1 line-clamp-1 ${
                            block.textDark ? "text-slate-600" : "text-slate-200"
                          }`}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Grid Column matching screenshot 3-image collage */}
                <div
                  className={`md:col-span-6 ${
                    block.reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {/* Large Featured Photo */}
                    <div
                      className={`col-span-2 rounded-2xl p-6 h-[170px] sm:h-[190px] bg-gradient-to-br ${block.photos[0].bgGradient} text-white flex flex-col justify-end shadow-md relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                      <div className="relative z-10 space-y-0.5">
                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wide">
                          Field Dispatch
                        </span>
                        <p className="font-heading font-bold text-sm sm:text-base text-white">
                          {block.photos[0].title}
                        </p>
                        <p className="text-[11px] text-slate-200 line-clamp-1">
                          {block.photos[0].subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Sub Photo 1 */}
                    <div
                      className={`rounded-xl p-4 h-[120px] bg-gradient-to-br ${block.photos[1].bgGradient} text-white flex flex-col justify-end shadow-xs relative overflow-hidden`}
                    >
                      <div className="relative z-10 space-y-0.5">
                        <p className="font-heading font-bold text-xs text-white">
                          {block.photos[1].title}
                        </p>
                        <p className="text-[10px] text-slate-300 line-clamp-1">
                          {block.photos[1].subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Sub Photo 2 */}
                    <div
                      className={`rounded-xl p-4 h-[120px] bg-gradient-to-br ${block.photos[2].bgGradient} text-white flex flex-col justify-end shadow-xs relative overflow-hidden`}
                    >
                      <div className="relative z-10 space-y-0.5">
                        <p className="font-heading font-bold text-xs text-white">
                          {block.photos[2].title}
                        </p>
                        <p className="text-[10px] text-slate-300 line-clamp-1">
                          {block.photos[2].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 3. "Impact by the Numbers" Section matching screenshot */}
      <section className="py-20 bg-gradient-to-b from-[#090D26] to-[#0E1538] text-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="space-y-2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Impact <span className="text-[#2ea35e]">by the Numbers</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Transparent, verified environmental outcomes driven across grassroots communities.
            </p>
          </div>

          {/* High-Contrast Glassmorphic Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">01</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                50,000+
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                People Reached Directly
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">02</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#2ea35e] tabular-nums tracking-tight">
                20,000+
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Youth Leaders Engaged
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">03</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                17
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Grassroots Initiatives
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">04</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                150+
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Partner Institutions
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">05</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                12
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Vulnerable Districts
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">06</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                200+
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Training Workshops
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">07</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-emerald-400 tabular-nums tracking-tight">
                130+
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Certified Solar Champions
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-left hover:border-emerald-500/40 transition-colors">
              <span className="text-[11px] font-semibold text-emerald-400 block mb-1">08</span>
              <div className="font-heading font-semibold text-3xl sm:text-4xl text-white tabular-nums tracking-tight">
                6
              </div>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Handbooks & Toolkits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Join Us as an Impact Partner to Build Shared Success" */}
      <section className="py-20 bg-[#090D26] text-white border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block font-heading">
              COLLABORATE WITH US
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl">
              Join Us as an{" "}
              <span className="text-[#2ea35e]">Impact Partner</span> to Build Shared Success
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Co-host clean energy bootcamps, commission community vulnerability research, or
              sponsor grassroots youth chapters.
            </p>
          </div>

          {/* Green Lead Family Banner Photo */}
          <div className="relative rounded-lg overflow-hidden aspect-[16/7] bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/30 flex items-center justify-center p-6 text-center shadow-xs">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#1f7347] text-white font-heading font-semibold text-sm sm:text-base tracking-wide uppercase shadow-xs">
                <Users className="h-4 w-4" />
                GREEN LEAD FAMILY
              </div>
              <p className="text-xs text-emerald-200/90 max-w-md mx-auto">
                Organizers, researchers, advisors, and youth fellows driving systemic change across
                the Bengal delta.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button
              asChild
              className="bg-[#1f7347] hover:bg-[#185d39] text-white font-medium text-xs px-6 py-2.5 rounded-md shadow-xs"
            >
              <Link href="/get-involved">
                Partner with Us <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-xs px-6 py-2.5 rounded-md"
            >
              <Link href="/contact">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
