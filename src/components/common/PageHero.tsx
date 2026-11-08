import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  badgeIcon,
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-border/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-r from-emerald-500/10 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6"
          >
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.title}>
                <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.title}
                  </Link>
                ) : (
                  <span
                    className={`font-medium ${
                      index === breadcrumbs.length - 1
                        ? "text-foreground font-semibold"
                        : ""
                    }`}
                  >
                    {crumb.title}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-4 text-left">
          {badge && (
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary text-xs py-1 px-3 inline-flex items-center gap-1.5"
            >
              {badgeIcon}
              <span>{badge}</span>
            </Badge>
          )}

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>

          {actions && <div className="pt-2 flex flex-wrap gap-3">{actions}</div>}

          {children}
        </div>
      </div>
    </section>
  );
}

