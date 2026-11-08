"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Search, RotateCcw, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  id: string;
  topic: string;
  bannerTitle: string;
  bannerBg: string;
  title: string;
  subtitle: string;
  year: string;
  pdfUrl: string;
}

const publicationsList: Publication[] = [
  {
    id: "pub-1",
    topic: "Travel and tourism",
    bannerTitle: "Travel and tourism",
    bannerBg: "bg-[#1f4e5b]",
    title: "Green Leadership manifesto",
    subtitle: "A call to Lead for People, Planet, and Peace",
    year: "2025",
    pdfUrl: "#",
  },
  {
    id: "pub-2",
    topic: "Economic perspectives",
    bannerTitle: "Economic perspectives",
    bannerBg: "bg-[#8c5a2b]",
    title: "A changing economic landscape",
    subtitle: "Perspectives on growth and the decisions ahead.",
    year: "2024",
    pdfUrl: "#",
  },
  {
    id: "pub-3",
    topic: "Opportunity for everyone",
    bannerTitle: "Opportunity for everyone",
    bannerBg: "bg-[#5c3a68]",
    title: "Building a more equal future",
    subtitle: "A closer look at participation and opportunity.",
    year: "2024",
    pdfUrl: "#",
  },
  {
    id: "pub-4",
    topic: "Ambition into action",
    bannerTitle: "Ambition into action",
    bannerBg: "bg-[#1b5e43]",
    title: "From ambition to action",
    subtitle: "Perspectives on environmental priorities in business.",
    year: "2025",
    pdfUrl: "#",
  },
  {
    id: "pub-5",
    topic: "A connected future",
    bannerTitle: "A connected future",
    bannerBg: "bg-[#244d61]",
    title: "Connecting the digital economy",
    subtitle: "Ideas for a more accessible digital future.",
    year: "2024",
    pdfUrl: "#",
  },
  {
    id: "pub-6",
    topic: "Ideas on the horizon",
    bannerTitle: "Ideas on the horizon",
    bannerBg: "bg-[#564166]",
    title: "Ideas on the horizon",
    subtitle: "Emerging technologies and their potential applications.",
    year: "2025",
    pdfUrl: "#",
  },
];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTopic, setSelectedTopic] = React.useState("All topics");
  const [selectedYear, setSelectedYear] = React.useState("All years");

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTopic("All topics");
    setSelectedYear("All years");
  };

  const filteredPubs = publicationsList.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.bannerTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === "All topics" || pub.topic === selectedTopic;
    const matchesYear = selectedYear === "All years" || pub.year === selectedYear;
    return matchesSearch && matchesTopic && matchesYear;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Section matching screenshot */}
      <section className="pt-14 pb-8 sm:pt-20 sm:pb-12 bg-white text-left">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Publications
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Perspectives, strategic reports, and the insights equipping leaders to drive sustainable
            change
          </p>
        </div>
      </section>

      {/* 2. Featured Publication Card matching screenshot */}
      <section className="pb-14 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/green-leadership"
            className="group block relative rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] bg-[#0c132b] text-white p-6 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-end"
          >
            {/* Geometric Grid / Circuit Artwork */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Concentric Gold Target on Left */}
              <circle cx="260" cy="220" r="100" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="260" cy="220" r="60" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.8" />
              <circle cx="260" cy="220" r="25" fill="#f59e0b" opacity="0.9" />

              {/* Matrix Grid Lines on Right */}
              <path d="M400,60 L750,60 M400,120 L750,120 M400,180 L750,180 M400,240 L750,240 M400,300 L750,300" stroke="#10b981" strokeWidth="1" opacity="0.4" />
              <path d="M480,40 L480,340 M560,40 L560,340 M640,40 L640,340 M720,40 L720,340" stroke="#10b981" strokeWidth="1" opacity="0.4" />

              {/* Colored Rectangles */}
              <rect x="560" y="80" width="80" height="60" fill="#f59e0b" opacity="0.7" />
              <rect x="640" y="140" width="80" height="60" fill="#10b981" opacity="0.5" />
              <rect x="480" y="200" width="80" height="60" fill="#3b82f6" opacity="0.5" />
            </svg>

            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-emerald-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                Featured Publication
              </span>

              <h2 className="font-heading font-black text-2xl sm:text-4xl leading-tight text-white group-hover:text-emerald-200 transition-colors">
                Green Leadership Manifesto
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                A practical framework for ethical and sustainable leadership.
              </p>

              <p className="text-[11px] text-slate-400 font-medium pt-1">
                October 2025
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. "All Publications" Search, Filter & 6 Cards Grid matching screenshot */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-left space-y-1">
            <h3 className="font-heading font-black text-2xl text-slate-900">
              All Publications
            </h3>
          </div>

          {/* Search, Topic, Year, Reset Toolbar matching screenshot */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by title or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#2ea35e]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 focus:outline-none"
              >
                <option>All topics</option>
                <option>Travel and tourism</option>
                <option>Economic perspectives</option>
                <option>Opportunity for everyone</option>
                <option>Ambition into action</option>
                <option>A connected future</option>
                <option>Ideas on the horizon</option>
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 focus:outline-none"
              >
                <option>All years</option>
                <option>2025</option>
                <option>2024</option>
              </select>

              <button
                type="button"
                onClick={resetFilters}
                className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>
          </div>

          <div className="text-left text-xs text-slate-500 font-medium">
            Showing {filteredPubs.length} of {publicationsList.length} publications
          </div>

          {/* Publications Grid or Empty State */}
          {filteredPubs.length === 0 ? (
            <div className="p-10 rounded-lg border border-dashed border-slate-200 text-center space-y-2 bg-slate-50/50">
              <p className="font-heading font-semibold text-sm text-slate-800">
                No publications found
              </p>
              <p className="text-xs text-slate-500">
                No publications match &ldquo;{searchQuery}&rdquo; under the selected topic and year filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-[#1f7347] hover:bg-slate-50"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between text-left group"
                >
                  {/* Top Colored Header Banner */}
                  <div className={`${pub.bannerBg} text-white p-5 h-36 flex flex-col justify-between relative overflow-hidden`}>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80 block">
                      RESEARCH
                    </span>
                    <p className="font-heading font-semibold text-base text-white leading-snug">
                      {pub.bannerTitle}
                    </p>
                    {/* Subtle decorative concentric arc */}
                    <div className="absolute right-0 bottom-0 w-24 h-24 rounded-full border-2 border-white/10 pointer-events-none transform translate-x-6 translate-y-6" />
                  </div>

                  {/* Bottom White Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">
                        TOPIC • REPORT
                      </span>
                      <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#1f7347] transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed pt-1">
                        {pub.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={pub.pdfUrl}
                        className="inline-flex items-center gap-1 text-sm font-bold text-[#1f7347] hover:underline"
                      >
                        ↓ PDF ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="pt-6 text-center">
            <Button
              type="button"
              className="bg-[#1f7347] hover:bg-[#185d39] text-white font-medium text-xs px-5 py-2 rounded-md shadow-xs"
            >
              Load more publications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
