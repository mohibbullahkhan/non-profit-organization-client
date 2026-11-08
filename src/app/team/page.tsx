import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Mail,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
  Award,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OUR TEAM | Green Lead",
  description:
    "Meet the people leading Green Lead — core members, community leaders, youth advisors, mission, purpose, core values, and open volunteer roles.",
};

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photoGradient: string;
}

const coreMembers: TeamMember[] = [
  {
    name: "Fahim Hossain",
    role: "Founder & Chairperson",
    bio: "Environmental policy strategist and youth leadership fellow leading systemic climate action initiatives across Bangladesh and representing youth at international forums.",
    initials: "FH",
    photoGradient: "from-emerald-800 to-slate-900",
  },
  {
    name: "Ratnajit Dhar",
    role: "Chief Technology Officer",
    bio: "Leading digital solutions, IoT sensor networks, and data architectures for environmental resilience, community mapping, and climate intelligence.",
    initials: "RD",
    photoGradient: "from-blue-900 to-slate-950",
  },
  {
    name: "Arpita Mallik",
    role: "Head of Communication & Outreach",
    bio: "Strategizing community engagement campaigns, multimedia storytelling, and multi-channel climate communication across grassroots student hubs.",
    initials: "AM",
    photoGradient: "from-amber-800 to-emerald-950",
  },
  {
    name: "Shimi Chak",
    role: "Project Coordinator",
    bio: "Managing youth climate fellowships, community adaptation projects, and indigenous youth inclusion in climate decision-making.",
    initials: "SC",
    photoGradient: "from-teal-900 to-slate-900",
  },
  {
    name: "Pulak Bhowmik",
    role: "Operations Lead",
    bio: "Overseeing field logistics, university campus partnerships, and volunteer mobilization for nationwide river cleanups and solar bootcamps.",
    initials: "PB",
    photoGradient: "from-slate-800 to-emerald-950",
  },
];

const communityLeaders = [
  {
    name: "Tanvir Hasan",
    division: "Dhaka Division",
    role: "Community Leader",
    initials: "TH",
    bgGradient: "from-blue-950 to-slate-900",
  },
  {
    name: "Joyee Chakma",
    division: "Chittagong Division",
    role: "Community Leader",
    initials: "JC",
    bgGradient: "from-indigo-950 to-slate-900",
  },
  {
    name: "Al-Mamun Rakib",
    division: "Barishal Division",
    role: "Community Leader",
    initials: "AR",
    bgGradient: "from-teal-950 to-slate-900",
  },
  {
    name: "Nusrat Jahan",
    division: "Khulna Division",
    role: "Community Leader",
    initials: "NJ",
    bgGradient: "from-emerald-950 to-slate-900",
  },
];

const youthAdvisors = [
  {
    name: "Sohanur Rahman",
    role: "Executive Coordinator, YouthNet Global",
    initials: "SR",
    photoGradient: "from-green-900 to-slate-900",
  },
  {
    name: "Mariam Ispahani",
    role: "Founder & CEO, Sonali Bioplastics",
    initials: "MI",
    photoGradient: "from-amber-900 to-slate-900",
  },
  {
    name: "Fariha S Aumi",
    role: "Co-Founder & CSO, BrighTech71",
    initials: "FA",
    photoGradient: "from-teal-900 to-slate-900",
  },
  {
    name: "Prof. Dr. Saleemul Huq",
    role: "Mentor & Senior Climate Advisor (In Memoriam)",
    initials: "SH",
    photoGradient: "from-slate-900 to-stone-900",
  },
];

const volunteerRoles = [
  "PROJECT COORDINATOR",
  "COMMUNITY COORDINATOR",
  "FIELD CAMPAIGN MOBILIZER",
  "OPERATIONS COORDINATOR",
  "RESEARCH COORDINATOR",
  "MEDIA & PR OUTREACH",
];

const perksList = [
  "Mentorship from national climate researchers, COP youth delegates, and sustainability leaders.",
  "Hands-on field experience in plastic brand audits, tree planting drives, and solar technical pilots.",
  "Official certificates of recognition, personalized recommendation letters, and global fellowship nominations.",
  "Direct access to Green Lead internal handbooks, policy research toolkits, and exclusive webinars.",
  "Collaborative networking with like-minded youth changemakers across all 8 divisions of Bangladesh.",
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Hero Banner matching screenshot: Green Lead Family */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 flex items-center justify-center overflow-hidden">
          {/* Subtle lighting overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,163,94,0.25),transparent_70%)]" />

          {/* Large Text Overlay: GREEN LEAD FAMILY matching screenshot */}
          <div className="relative z-10 text-center px-4 space-y-1">
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-[#2ea35e] tracking-tight leading-none uppercase drop-shadow-lg">
              GREEN LEAD
            </h1>
            <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-widest leading-none uppercase drop-shadow-xl opacity-95">
              FAMILY
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 pt-3 max-w-xl mx-auto font-medium">
              The organizers, researchers, advisors, and youth changemakers driving systemic change
              across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* 2. "CORE MEMBERS" Section matching screenshot */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="space-y-1">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
              CORE MEMBERS
            </h2>
            <div className="h-1 w-12 bg-[#2ea35e] mx-auto rounded-full mt-2" />
          </div>

          {/* Row 1: 3 Members */}
          <div className="grid sm:grid-cols-3 gap-6">
            {coreMembers.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md transition-shadow text-center flex flex-col justify-between space-y-4 group"
              >
                {/* Circular Avatar with green accent lines behind it matching screenshot */}
                <div className="relative flex items-center justify-center my-2">
                  <div className="absolute w-full h-[2px] bg-[#2ea35e]/30 pointer-events-none" />
                  <div
                    className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-br ${member.photoGradient} p-1 shadow-md border-2 border-[#2ea35e] flex items-center justify-center text-white`}
                  >
                    <div className="w-full h-full rounded-full bg-slate-900/60 flex items-center justify-center">
                      <span className="font-heading font-black text-xl text-emerald-300">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1.5 flex-1">
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

                {/* Social icons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-400">
                  <span className="p-1.5 rounded-full hover:bg-slate-100 hover:text-[#2ea35e] transition-colors cursor-pointer">
                    <Globe className="h-3.5 w-3.5" />
                  </span>
                  <span className="p-1.5 rounded-full hover:bg-slate-100 hover:text-[#2ea35e] transition-colors cursor-pointer">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Members Centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {coreMembers.slice(3, 5).map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md transition-shadow text-center flex flex-col justify-between space-y-4 group"
              >
                {/* Circular Avatar with green accent lines behind it matching screenshot */}
                <div className="relative flex items-center justify-center my-2">
                  <div className="absolute w-full h-[2px] bg-[#2ea35e]/30 pointer-events-none" />
                  <div
                    className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-br ${member.photoGradient} p-1 shadow-md border-2 border-[#2ea35e] flex items-center justify-center text-white`}
                  >
                    <div className="w-full h-full rounded-full bg-slate-900/60 flex items-center justify-center">
                      <span className="font-heading font-black text-xl text-emerald-300">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1.5 flex-1">
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

                {/* Social icons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-400">
                  <span className="p-1.5 rounded-full hover:bg-slate-100 hover:text-[#2ea35e] transition-colors cursor-pointer">
                    <Globe className="h-3.5 w-3.5" />
                  </span>
                  <span className="p-1.5 rounded-full hover:bg-slate-100 hover:text-[#2ea35e] transition-colors cursor-pointer">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "Community leaders" Section matching screenshot */}
      <section className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80 text-center">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-1">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Community leaders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Grassroots coordinators leading climate campaigns across regional divisions
            </p>
          </div>

          {/* Dark Navy Square Cards Grid matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {communityLeaders.map((lead) => (
              <div
                key={lead.name}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0c1633] via-[#091126] to-[#050b1a] text-white p-5 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-emerald-500/50 transition-all aspect-[4/5]"
              >
                <div className="space-y-1 text-center">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block font-heading">
                    COMMUNITY LEADER
                  </span>
                </div>

                {/* Avatar */}
                <div className="my-auto flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-emerald-400/40 flex items-center justify-center text-center">
                    <span className="font-heading font-black text-sm text-emerald-300">
                      {lead.initials}
                    </span>
                  </div>
                </div>

                <div className="space-y-0.5 text-center pt-2 border-t border-white/10">
                  <p className="font-heading font-bold text-xs sm:text-sm text-white">
                    {lead.name}
                  </p>
                  <p className="text-[11px] text-emerald-300/80 font-medium">
                    {lead.division}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "YOUTH ADVISORS" Section matching screenshot */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-1">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
              YOUTH ADVISORS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Senior advisors, institutional partners, and technical mentors guiding our strategy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {youthAdvisors.map((adv) => (
              <div
                key={adv.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:shadow-md transition-shadow text-center flex flex-col justify-between space-y-3 group"
              >
                {/* Circular Avatar with green accent lines behind it matching screenshot */}
                <div className="relative flex items-center justify-center my-1">
                  <div className="absolute w-full h-[2px] bg-[#2ea35e]/30 pointer-events-none" />
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${adv.photoGradient} p-1 shadow-xs border-2 border-[#2ea35e] flex items-center justify-center text-white`}
                  >
                    <div className="w-full h-full rounded-full bg-slate-900/60 flex items-center justify-center">
                      <span className="font-heading font-black text-sm text-emerald-300">
                        {adv.initials}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    {adv.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {adv.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400">
                  <Globe className="h-3 w-3 hover:text-[#2ea35e] cursor-pointer" />
                  <Mail className="h-3 w-3 hover:text-[#2ea35e] cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Our Mission", "Our Purpose" & "Our Core Values" matching screenshot */}
      <section className="py-16 sm:py-20 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Left 7 Cols: Mission & Purpose */}
            <div className="md:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  To accelerate green transition through youth leadership, sustainable business, and
                  green lifestyle across communities and institutions.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200/80">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  Our Purpose
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  To mobilize green leaders for a peaceful world by aligning people&apos;s purposes in
                  life toward building a regenerative, sustainable future.
                </p>
              </div>
            </div>

            {/* Right 5 Cols: Core Values matching screenshot */}
            <div className="md:col-span-5 p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-left">
              <h3 className="font-heading font-black text-2xl text-slate-900">
                Our Core Values
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                The ethical anchors guiding every campaign, research brief, and youth intervention:
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>Integrity, scientific rigor & environmental stewardship</span>
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>Youth leadership empowerment & grassroots agency</span>
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#2ea35e] shrink-0 mt-0.5" />
                  <span>Systemic, scalable & locally rooted solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Open roles (volunteer)" & "Perks of being part of Green Lead" matching screenshot */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Left 6 Cols: Open Roles Volunteer Tracks */}
            <div className="md:col-span-6 space-y-5 text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#1f7347] border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
                  JOIN OUR VOLUNTEER NETWORK
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  Open roles (volunteer)
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Choose a volunteer track to join our upcoming cohort:
                </p>
              </div>

              {/* 6 Green Anti-Slop Buttons matching specification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {volunteerRoles.map((role) => (
                  <Button
                    key={role}
                    asChild
                    className="bg-[#1f7347] hover:bg-[#185d39] text-white font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-lg shadow-xs text-center justify-center whitespace-normal h-auto"
                  >
                    <Link href="/get-involved">
                      {role}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Right 6 Cols: Perks of being part of Green Lead matching screenshot */}
            <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#FCFCFA] border border-slate-200 space-y-4 text-left shadow-xs">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                Perks of being part of Green Lead
              </h3>

              <div className="space-y-3 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed">
                {perksList.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#1f7347] shrink-0 mt-2" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <Button
                  asChild
                  className="bg-[#1f7347] hover:bg-[#185d39] text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-sm w-full sm:w-auto"
                >
                  <Link href="/get-involved" className="inline-flex items-center gap-1.5">
                    Apply to Volunteer <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
