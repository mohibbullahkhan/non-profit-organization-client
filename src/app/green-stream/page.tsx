"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Calendar, Tag } from "lucide-react";

interface Article {
  id: string;
  type: string;
  date: string;
  year: string;
  title: string;
  excerpt?: string;
  slug: string;
}

const articlesData: Article[] = [
  {
    id: "recycling-day-2025",
    type: "BLOG",
    date: "March 17, 2025",
    year: "2025",
    title: "Turning Waste into Opportunity: Revolutionizing Plastic Recycling in Bangladesh",
    excerpt: "Insights from circular economy innovators on turning discarded polyolefins and multi-layer sachets into high-value construction aggregates and consumer goods.",
    slug: "practical-circular-economy-playbook-for-bangladeshi-smes",
  },
  {
    id: "w4c-changemakers-2024",
    type: "BLOG",
    date: "February 7, 2024",
    year: "2024",
    title: "Women for Climate: Empowering Future Changemakers in Climate Action",
    excerpt: "How grassroots female leaders in coastal Satkhira and Khulna are overcoming salinity intrusion and establishing community-managed rainwater systems.",
    slug: "why-delta-youth-must-lead-climate-adaptation",
  },
];

export default function GreenStreamPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("All types");
  const [selectedYear, setSelectedYear] = React.useState("All years");

  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === "All types" || article.type === selectedType;
    const matchesYear = selectedYear === "All years" || article.year === selectedYear;
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      {/* 1. Header Section matching screenshot */}
      <section className="pt-14 pb-8 sm:pt-20 sm:pb-12 bg-white text-left">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Green Stream
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Stories, insights, and ideas from the leaders building the green future
          </p>
        </div>
      </section>

      {/* 2. Featured Article Card matching screenshot */}
      <section className="pb-14 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/brand-audits-revealing-the-true-cost-of-plastic-in-dhaka"
            className="group block relative rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] bg-gradient-to-r from-[#0d1c3a] via-[#091b2c] to-[#04121a] text-white p-6 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-end"
          >
            {/* Tech / Circuit / Foliage illustration overlay */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(46,163,94,0.35),transparent_70%)] pointer-events-none" />

            {/* Glowing nodes & circuits SVG illustration */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
            >
              <circle cx="400" cy="200" r="120" stroke="#2ea35e" strokeWidth="1.5" fill="none" />
              <circle cx="400" cy="200" r="70" stroke="#10b981" strokeWidth="1" strokeDasharray="6 4" fill="none" />
              <circle cx="480" cy="140" r="18" fill="#f59e0b" opacity="0.8" />
              <path d="M400,80 L400,20 L600,20 L600,100" stroke="#2ea35e" strokeWidth="2" fill="none" />
              <path d="M480,140 L560,140 L560,240" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
              <rect x="580" y="160" width="16" height="120" fill="#2ea35e" rx="3" />
              <rect x="610" y="140" width="16" height="140" fill="#10b981" rx="3" />
              <rect x="640" y="180" width="16" height="100" fill="#34d399" rx="3" />
              {/* Circuit Tree on left */}
              <path d="M120,350 L120,200 L80,150 L60,150" stroke="#10b981" strokeWidth="2" fill="none" />
              <path d="M120,240 L160,180 L200,180" stroke="#2ea35e" strokeWidth="2" fill="none" />
              <circle cx="60" cy="150" r="5" fill="#34d399" />
              <circle cx="200" cy="180" r="5" fill="#34d399" />
            </svg>

            <div className="relative z-10 space-y-3 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-emerald-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                Featured Article
              </span>

              <h2 className="font-heading font-black text-xl sm:text-3xl lg:text-4xl leading-tight text-white group-hover:text-emerald-200 transition-colors">
                Turning Waste into Opportunity: Hameed Hasan Alvee on Revolutionizing Plastic
                Recycling in Bangladesh | Global Recycling Day 2025
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                March 17, 2025
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. "All Articles" Search, Filters & Grid matching screenshot */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-left space-y-1">
            <h3 className="font-heading font-black text-2xl text-slate-900">
              All Articles
            </h3>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles and blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#2ea35e]"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 focus:outline-none"
              >
                <option>All types</option>
                <option>BLOG</option>
                <option>NEWS</option>
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
            </div>
          </div>

          <div className="text-left text-xs text-slate-500 font-medium">
            Showing {filteredArticles.length} of {articlesData.length} posts
          </div>

          {/* Articles Grid or Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="p-10 rounded-lg border border-dashed border-slate-200 text-center space-y-2 bg-slate-50/50">
              <p className="font-heading font-semibold text-sm text-slate-800">
                No articles match your filter criteria
              </p>
              <p className="text-xs text-slate-500">
                Try searching for a different keyword or resetting the category and year filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All types");
                  setSelectedYear("All years");
                }}
                className="mt-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-[#1f7347] hover:bg-slate-50"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-6 rounded-lg border border-slate-200 bg-white hover:border-[#1f7347]/50 transition-colors shadow-2xs flex flex-col justify-between text-left space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-emerald-50 text-[#1f7347] border border-emerald-200">
                        {article.type}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{article.date}</span>
                    </div>

                    <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                      {article.title}
                    </h4>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-[#1f7347] transition-colors"
                    >
                      Read Article <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
