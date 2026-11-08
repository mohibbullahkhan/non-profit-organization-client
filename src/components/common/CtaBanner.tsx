import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CtaBanner({
  title = "Ready to Take Climate Action with Us?",
  description = "Join our network of students, grassroots volunteers, and researchers across Bangladesh.",
  primaryCtaText = "Get Involved",
  primaryCtaHref = "/get-involved",
  secondaryCtaText = "Partner with Us",
  secondaryCtaHref = "/get-involved/partner",
}: CtaBannerProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30 border-t border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c3328] via-[#0d3b2e] to-[#08261e] p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
            <Sprout className="h-3.5 w-3.5" />
            Empowering Delta Resilience
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white">
            {title}
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold rounded-xl px-6"
            >
              <Link href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>

            {secondaryCtaText && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-600/50 text-white hover:bg-emerald-900/60 font-semibold rounded-xl px-5"
              >
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

