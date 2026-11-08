import type { Metadata } from "next";
import { Download, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Green Leadership Manifesto | Green Lead",
  description:
    "Green Leadership Manifesto — A Call to Lead for People, Planet, and Peace by Md. Fahim Hossain. Officially launched at the National Museum of Technology, Sweden.",
};

export default function GreenLeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      {/* 1. Main Hero / Book Showcase Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 5 Cols: Realistic 3D Book Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group perspective-1000">
                {/* Book Card */}
                <div className="relative w-[260px] sm:w-[290px] h-[380px] sm:h-[420px] rounded-r-2xl rounded-l-md bg-[#13093A] text-white p-7 shadow-2xl shadow-indigo-950/30 flex flex-col justify-between border-l-4 border-l-emerald-400 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1">
                  {/* Decorative Geometric Leaf Patterns on Left Edge */}
                  <div className="absolute top-0 left-0 w-16 h-full bg-emerald-500/15 pointer-events-none flex flex-col justify-between py-6 pl-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-tr-2xl rounded-bl-2xl bg-emerald-400/30 border border-emerald-300/40 transform -rotate-12"
                      />
                    ))}
                  </div>

                  {/* Header: Logo */}
                  <div className="relative z-10 flex items-center gap-2 pl-8">
                    <div className="h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center text-[#13093A] font-black text-sm">
                      g
                    </div>
                    <span className="font-heading font-bold text-sm tracking-tight text-white">
                      Green Lead
                    </span>
                  </div>

                  {/* Center: Title & Subtitle */}
                  <div className="relative z-10 pl-8 my-auto space-y-2">
                    <h2 className="font-heading font-black text-2xl sm:text-3xl leading-[1.1] tracking-tight text-white">
                      Green <br />
                      Leadership <br />
                      Manifesto
                    </h2>
                    <p className="text-[11px] sm:text-xs text-emerald-200/90 font-medium leading-relaxed pt-2">
                      A Call to Lead for People, Planet, and Peace
                    </p>
                  </div>

                  {/* Footer: Author Info */}
                  <div className="relative z-10 pl-8 pt-4 border-t border-white/15">
                    <p className="text-xs font-bold text-white tracking-wide">
                      Md. Fahim Hossain
                    </p>
                    <p className="text-[10px] text-emerald-300/80 font-medium">
                      Founder and Chairperson, Green Lead
                    </p>
                  </div>

                  {/* Spine shadow overlay */}
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Book Text & CTAs */}
            <div className="md:col-span-7 space-y-5 text-left">
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#1f7347] tracking-tight">
                Green Leadership Manifesto
              </h1>

              <p className="text-base sm:text-xl font-bold text-slate-800 leading-snug">
                A Call to Lead for People, Planet, and Peace by Md. Fahim Hossain
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                Green Leadership is the practice of responsible leadership that enables ethical
                decisions shaping the future of life on Earth. From individual actions to
                institutional transformations, it embodies the ability to inspire and guide others
                to act responsibly for the well-being of people and the planet.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Button
                  asChild
                  className="bg-[#1f7347] hover:bg-[#185d39] text-white font-bold text-sm px-6 py-2.5 h-10 rounded-lg shadow-sm"
                >
                  <a href="/publications" className="inline-flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Book
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-sm px-6 py-2.5 h-10 rounded-lg"
                >
                  <a href="/publications" className="inline-flex items-center gap-2">
                    View Online
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Launch Event Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#1f7347]">
              Official Launch Event
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold">Green Leadership Manifesto</strong> was
              officially launched at the National Museum of Technology, Sweden, during the{" "}
              <em className="text-slate-800 italic">Impact Pioneers’25</em> by the Swedish Institute
              — a celebration of global sustainability leadership and collaboration.
            </p>
          </div>

          {/* Featured Launch Collage Card */}
          <div className="rounded-xl border border-slate-200 bg-[#FAFAFA] p-6 sm:p-8 shadow-xs">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left 6 Cols: Photo Grid from Event */}
              <div className="md:col-span-6 grid grid-cols-2 gap-3">
                {/* Event Photo 1 */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 border border-slate-300/60 shadow-xs group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="w-full h-full bg-cover bg-center flex items-end p-2.5 z-20 relative">
                    <span className="text-[10px] font-bold text-white drop-shadow-sm">
                      Museum Presentation
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#162744]/90 flex items-center justify-center p-3 text-center text-xs text-white">
                    <div className="space-y-1">
                      <p className="font-bold text-[11px]">Keynote Presentation</p>
                      <p className="text-[10px] text-emerald-200">National Museum of Technology</p>
                    </div>
                  </div>
                </div>

                {/* Event Photo 2 */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 border border-slate-300/60 shadow-xs">
                  <div className="absolute inset-0 bg-[#283845] flex items-center justify-center p-3 text-center text-xs text-white">
                    <div className="space-y-1">
                      <p className="font-bold text-[11px]">Global Fellows</p>
                      <p className="text-[10px] text-emerald-200">Impact Pioneers’25 Sweden</p>
                    </div>
                  </div>
                </div>

                {/* Event Photo 3: Handover */}
                <div className="col-span-2 relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-200 border border-slate-300/60 shadow-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a30] to-[#0f241d] flex items-center justify-center p-4 text-center text-xs text-white">
                    <div className="space-y-1.5 max-w-sm">
                      <Award className="h-6 w-6 mx-auto text-emerald-300" />
                      <p className="font-bold text-sm text-white">Official Book Handover</p>
                      <p className="text-[11px] text-emerald-200/90 leading-snug">
                        Presented to Swedish Institute leadership and global sustainability delegates in Stockholm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: Book Presentation & Text */}
              <div className="md:col-span-6 flex flex-col items-center justify-center text-center p-4 space-y-4">
                {/* Mini Book Mockup */}
                <div className="w-[150px] h-[210px] rounded-r-lg rounded-l-xs bg-[#13093A] text-white p-4 shadow-xl border-l-2 border-emerald-400 flex flex-col justify-between text-left">
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-full bg-emerald-400 flex items-center justify-center text-[#13093A] font-black text-[10px]">
                      g
                    </div>
                    <span className="text-[9px] font-bold">Green Lead</span>
                  </div>
                  <div>
                    <p className="font-heading font-black text-xs leading-tight text-white">
                      Green Leadership Manifesto
                    </p>
                    <p className="text-[8px] text-emerald-200 pt-1">
                      Md. Fahim Hossain
                    </p>
                  </div>
                  <p className="text-[7px] text-white/60">Stockholm, Sweden</p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug max-w-sm mx-auto">
                    <strong className="text-[#1f7347] font-bold">Launched</strong> at the National
                    Museum of Technology, Sweden during the Impact Pioneers’25 by the Swedish
                    Institute
                  </p>
                </div>

                {/* Brand Footnote */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-xs">
                    g
                  </div>
                  <span className="font-heading font-extrabold text-sm text-slate-800">
                    Green Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
