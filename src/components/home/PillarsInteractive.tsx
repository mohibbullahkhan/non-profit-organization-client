"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    href?: string;
  }[];
}

const pillarsData: Pillar[] = [
  {
    id: "awareness",
    number: "01",
    title: "Awareness",
    subtitle: "Building Awareness through Engagement",
    items: [
      { name: "ENGAGE: Inspiring Climate Action" },
      { name: "Unplastic Bangladesh Campaign", href: "/unplastic-bangladesh" },
      { name: "Educational Content: GreenSights, Climate Bytes", href: "/initiatives/climated" },
      { name: "Green Shift: Building a Sustainable Environment at Community" },
      { name: "Green Shift: Creating a Culture of Sustainability at Company" },
      { name: "Policy Advocacy", href: "/publications" },
    ],
  },
  {
    id: "capacity",
    number: "02",
    title: "Capacity",
    subtitle: "Increasing Capacity through Training",
    items: [
      { name: "Global Community Leadership Program", href: "/initiatives/gcl" },
      { name: "Workshops: Women for Climate (W4C), Becoming a Green Leader (BGL)", href: "/initiatives/w4c" },
      { name: "Course: energizED", href: "/re-energize-bangladesh" },
      { name: "Green Skill Development Program: Training on Renewable Energy & Career Development", href: "/initiatives/re-power-youth" },
    ],
  },
  {
    id: "impact",
    number: "03",
    title: "Impact",
    subtitle: "Amplifying Impact through Resource",
    items: [
      { name: "RE-energize Bangladesh: One Stop Digital Hub for Renewable Energy", href: "/re-energize-bangladesh" },
      { name: "Climate Conversation Podcast", href: "/climate-conversation" },
      { name: "Climate Stream / Green Stream publication", href: "/green-stream" },
      { name: "Green Leadership Handbook / Toolkit", href: "/publications" },
      { name: "Green Leadership Perspective Webinar Series" },
      { name: "Green Job Board" },
    ],
  },
  {
    id: "ecosystem",
    number: "04",
    title: "Ecosystem",
    subtitle: "Strengthening Ecosystem through Convening",
    items: [
      { name: "Unplastic Bangladesh", href: "/unplastic-bangladesh" },
      { name: "EVolution Bangladesh" },
      { name: "Green Innovation Exchange", href: "/cit" },
      { name: "Green Innovation Challenge" },
      { name: "Green Leadership Summit", href: "/initiatives/ref-25" },
    ],
  },
];

export function PillarsInteractive() {
  const [activeTab, setActiveTab] = React.useState<string>("awareness");

  const currentPillar = pillarsData.find((p) => p.id === activeTab) || pillarsData[0];

  return (
    <div className="space-y-6">
      {/* 4 Pillar Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {pillarsData.map((pillar) => {
          const isActive = activeTab === pillar.id;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveTab(pillar.id)}
              className={`p-4 sm:p-5 rounded-xl text-left transition-all border cursor-pointer relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-br from-[#1b6d41] to-[#145331] text-white border-[#1f7347] shadow-md -translate-y-0.5"
                  : "bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/20 hover:shadow-xs"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400" />
              )}
              <span
                className={`text-sm sm:text-base font-bold tabular-nums tracking-wider block font-heading ${
                  isActive ? "text-emerald-200" : "text-[#1f7347]"
                }`}
              >
                {pillar.number}
              </span>
              <p
                className={`text-base sm:text-lg font-bold tracking-tight mt-1 ${
                  isActive ? "text-white" : "text-slate-900"
                }`}
              >
                {pillar.title}
              </p>
              <p
                className={`text-xs sm:text-sm leading-snug line-clamp-2 mt-1.5 ${
                  isActive ? "text-emerald-100/90" : "text-slate-500"
                }`}
              >
                {pillar.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Content Display Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3 mb-6">
          <div>
            <span className="text-xs sm:text-sm font-bold text-[#1f7347] uppercase tracking-wider block">
              Pillar {currentPillar.number} — {currentPillar.title}
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mt-1">
              {currentPillar.subtitle}
            </h3>
          </div>
          <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-[#1f7347] border border-emerald-200 self-start sm:self-auto tabular-nums">
            {currentPillar.items.length} Programs & Actions
          </span>
        </div>

        {/* Action Items List / Grid */}
        <div className="grid sm:grid-cols-2 gap-3.5">
          {currentPillar.items.map((item) => {
            const isClickable = !!item.href;
            const content = (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  isClickable
                    ? "border-emerald-100/90 bg-emerald-50/30 hover:border-[#1f7347]/50 hover:bg-emerald-50/70 hover:shadow-xs group cursor-pointer"
                    : "border-slate-100 bg-slate-50/80"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isClickable
                      ? "bg-[#1f7347] text-white"
                      : "bg-slate-300 text-slate-600"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1">
                  <span
                    className={`text-sm sm:text-base font-semibold leading-relaxed block ${
                      isClickable
                        ? "text-slate-900 group-hover:text-[#1f7347]"
                        : "text-slate-700"
                    }`}
                  >
                    {item.name}
                  </span>
                  {item.href && (
                    <span className="text-xs sm:text-sm font-semibold text-[#1f7347] inline-flex items-center gap-1 mt-1.5 group-hover:underline">
                      Explore initiative <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              </div>
            );

            if (item.href) {
              return (
                <Link key={item.name} href={item.href} className="block">
                  {content}
                </Link>
              );
            }

            return <div key={item.name}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
