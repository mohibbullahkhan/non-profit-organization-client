"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  Sprout,
  X,
  Globe2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationConfig } from "@/content";

export function Navbar() {
  const pathname = usePathname();
  const [isInitiativesOpen, setIsInitiativesOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [mobileInitiativesExpanded, setMobileInitiativesExpanded] = React.useState(true);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsInitiativesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsInitiativesOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-xs">
      {/* Mobile Top Header (< lg screens) */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-[#1f7347] flex items-center justify-center text-white shadow-xs">
            <Sprout className="h-4 w-4 text-emerald-200" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm text-slate-900 leading-tight">
              Green Lead
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              Leading for a green world
            </span>
          </div>
        </Link>

        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col bg-white">
            <SheetHeader className="p-4 border-b border-slate-100 text-left">
              <SheetTitle className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-md bg-[#1f7347] flex items-center justify-center text-white">
                  <Sprout className="h-4 w-4 text-emerald-200" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm block text-slate-900">
                    Green Lead
                  </span>
                  <span className="text-[10px] text-slate-500 block font-normal">
                    Leading for a green world
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
              {navigationConfig.mainNav.map((item) => {
                if (item.title === "INITIATIVES" && item.children) {
                  return (
                    <div key={item.title} className="rounded-lg border border-slate-200 overflow-hidden my-1">
                      <button
                        type="button"
                        onClick={() => setMobileInitiativesExpanded((prev) => !prev)}
                        className="w-full flex items-center justify-between p-2.5 text-xs font-bold text-[#1f7347] tracking-wide uppercase bg-emerald-50/50"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileInitiativesExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileInitiativesExpanded && (
                        <div className="p-1 space-y-0.5 bg-white border-t border-slate-100">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={`flex items-center justify-between py-2 px-3 text-xs rounded transition-colors ${
                                pathname === sub.href
                                  ? "bg-emerald-50 text-[#1f7347] font-bold"
                                  : "text-slate-700 hover:text-[#1f7347] hover:bg-slate-50"
                              }`}
                            >
                              <span>{sub.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-[#1f7347] font-bold"
                        : "text-slate-800 hover:bg-slate-50 hover:text-[#1f7347]"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation Bar (Exact single row matching user screenshot) */}
      <div className="hidden lg:block w-full bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <nav
            className="flex items-center justify-between py-3.5"
            aria-label="Main Navigation"
          >
            {navigationConfig.mainNav.map((item) => {
              // INITIATIVES Dropdown Menu
              if (item.title === "INITIATIVES" && item.children) {
                const isInitiativeActive = pathname.startsWith("/initiatives");

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setIsInitiativesOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1 text-xs xl:text-sm 2xl:text-[15px] font-semibold tracking-tight uppercase transition-colors cursor-pointer ${
                        isInitiativeActive || isInitiativesOpen
                          ? "text-[#2ea35e] font-bold"
                          : "text-slate-800 hover:text-[#2ea35e]"
                      }`}
                      aria-expanded={isInitiativesOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isInitiativesOpen ? "rotate-180 text-[#2ea35e]" : "text-slate-500"
                        }`}
                      />
                    </button>

                    {/* Popover Dropdown matching user screenshot */}
                    {isInitiativesOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-[240px] rounded-lg border border-slate-200 bg-white py-2 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in-0 duration-150"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex flex-col">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={`px-4 py-2.5 text-xs xl:text-sm font-medium transition-colors text-left block ${
                                  isSubActive
                                    ? "bg-emerald-50/70 text-[#2ea35e] font-bold"
                                    : "text-slate-700 hover:text-[#2ea35e] hover:bg-slate-50"
                                }`}
                                onClick={() => setIsInitiativesOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Standard Link
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`text-xs xl:text-sm 2xl:text-[15px] font-semibold tracking-tight transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#2ea35e] font-bold"
                      : "text-slate-800 hover:text-[#2ea35e]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
