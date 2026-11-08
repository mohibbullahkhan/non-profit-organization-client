import type { Metadata } from "next";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Climate Conversation | Green Lead",
  description:
    "Welcome to 'Climate Conversation' where environmental awareness meets engaging dialogue — conversations with founders, activists, and youth leaders in Bangladesh.",
};

interface Episode {
  id: string;
  name: string;
  role: string;
  bio: string;
  youtubeTitle: string;
  guestName: string;
  youtubeId?: string;
  photoGradient: string;
  reverse: boolean;
}

const episodes: Episode[] = [
  {
    id: "mariam-ispahani",
    name: "Climate Conversation with Mariam Ispahani",
    role: "- Founder and CEO of Sonali Bioplastics.",
    bio: "Mariam Ispahani is a passionate advocate for our planet and accelerating the green transition throughout several climate tech initiatives. She motivates everyone specially youths to get involved in climate action efforts and inspiring them to make a difference in the world. Let's enjoy the conversation and get inspired by her story.",
    youtubeTitle: "Climate Conversation with Mariam Ispahani || Green Lead",
    guestName: "MARIAM ISPAHANI",
    photoGradient: "from-amber-700 to-emerald-950",
    reverse: false,
  },
  {
    id: "al-mamun-rakib",
    name: "Climate Conversation with Md Almamun Rakib",
    role: "- National Climate Action Focal at Lal Sabuj Society (LLS)",
    bio: "Md Almamun Rakib was a Youth Fellow in 2023 at the International Centre for Climate Change & Development (ICCCAD). He was born in the country's most climate-vulnerable communities, Mehendiganj, Barishal. His firsthand experience of its drivers' impact from childhood motivated him to dedicate his journey to climate action. Let's enjoy the conversation to learn more.",
    youtubeTitle: "Climate Conversation With AL-MAMUN RAKIB || Green Lead",
    guestName: "AL-MAMUN RAKIB",
    photoGradient: "from-blue-900 to-slate-950",
    reverse: true,
  },
  {
    id: "joyee-chakma",
    name: "Climate Conversation with Meet Joyee Chakma",
    role: "- Youth Representative at the International Centre for Climate Change & Development (ICCCAD)",
    bio: "Meet Joyee Chakma's unwavering commitment is to create solutions that not only address these challenges but also ensure the inclusion and empowerment of marginalized communities, particularly indigenous groups.",
    youtubeTitle: "Climate Conversation with JOYEE CHAKMA || Green Lead",
    guestName: "JOYEE CHAKMA",
    photoGradient: "from-teal-900 to-emerald-950",
    reverse: false,
  },
  {
    id: "shimi-chak",
    name: "Climate Conversation with Shimi Chak",
    role: "- Environmental Science Graduate from AUW",
    bio: "As the International Centre for Climate Change & Development (ICCCAD) Youth Fellow 2023, Shimi Chak has represented the youth of Bangladesh and her community at the COP 28. Let's enjoy the conversation and get inspired by her climate action.",
    youtubeTitle: "Climate Conversation with Shimi Chak || Green Lead",
    guestName: "SHIMI CHAK",
    photoGradient: "from-indigo-900 to-purple-950",
    reverse: true,
  },
];

export default function ClimateConversationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Hero Header matching screenshot */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0e2a18] via-[#092012] to-[#04120a] text-white overflow-hidden text-center">
        {/* Subtle Foliage / Pattern Texture */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(46,163,94,0.35),transparent_70%)] pointer-events-none" />

        {/* Big Translucent Green "g" Circle outline in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border-[28px] border-[#2ea35e]/25 flex items-center justify-center">
            <div className="w-[180px] h-[180px] rounded-full border-[18px] border-[#2ea35e]/20" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 space-y-3">
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md">
            Climate Conversation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Welcome to &ldquo;Climate Conversation&rdquo; where environmental awareness meets engaging dialogue!
          </p>
        </div>
      </section>

      {/* 2. Alternating Episodes List matching screenshot */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className={`grid md:grid-cols-12 gap-8 lg:gap-12 items-center ${
                ep.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Description Column */}
              <div
                className={`md:col-span-6 space-y-3 text-left ${
                  ep.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2ea35e] leading-snug">
                  {ep.name}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-slate-700 italic">
                  {ep.role}
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
                  {ep.bio}
                </p>
              </div>

              {/* YouTube Card Mockup Column matching screenshot */}
              <div
                className={`md:col-span-6 ${
                  ep.reverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="rounded-2xl bg-[#080d1a] border border-slate-800 text-white p-5 sm:p-6 shadow-xl relative overflow-hidden group">
                  {/* Green glow background accent */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#2ea35e]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Header: Green Lead Channel Branding */}
                  <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
                    <div className="h-6 w-6 rounded-full bg-[#2ea35e] flex items-center justify-center text-white font-bold text-xs">
                      g
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-white line-clamp-1">
                        {ep.youtubeTitle}
                      </p>
                    </div>
                  </div>

                  {/* Visual Center with Play Button & Guest Circle */}
                  <div className="py-4 flex items-center justify-between gap-4">
                    <div className="space-y-1 text-left">
                      <span className="text-[10px] font-bold text-[#2ea35e] uppercase tracking-wider block">
                        CLIMATE CONVERSATION
                      </span>
                      <p className="font-heading font-black text-lg sm:text-xl text-white">
                        {ep.guestName}
                      </p>
                      <div className="pt-2">
                        <div className="h-10 w-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                          <Play className="h-5 w-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Circular Avatar / Photo */}
                    <div className="shrink-0">
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br ${ep.photoGradient} p-1 shadow-md border-2 border-[#2ea35e] flex items-center justify-center text-center`}
                      >
                        <div className="w-full h-full rounded-full bg-slate-900/60 flex items-center justify-center p-2">
                          <span className="font-heading font-bold text-xs text-emerald-200">
                            {ep.guestName.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Watch on YouTube Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-emerald-400 font-semibold">Episode Stream</span>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-[#2ea35e] inline-flex items-center gap-1 transition-colors"
                    >
                      Watch on YouTube <ExternalLink className="h-3 w-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
