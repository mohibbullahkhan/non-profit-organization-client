"use client";

import * as React from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { eventsData } from "@/content";

export function EventsSection() {
  const upcoming = eventsData.upcomingEvents.slice(0, 3);

  return (
    <section className="py-20 bg-background border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl text-left">
            <Badge
              variant="outline"
              className="border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 text-xs py-1 px-3"
            >
              <CalendarDays className="h-3.5 w-3.5 mr-1 text-emerald-600" />
              Community Gatherings
            </Badge>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Upcoming Events & Youth Summits
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Join interactive hackathons, riverbank cleanups, and policy symposiums across Bangladesh or connect virtually from anywhere.
            </p>
          </div>

          <Button asChild variant="outline" className="border-primary/30 text-primary self-start md:self-auto">
            <Link href="/events">
              View Event Calendar <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcoming.map((evt) => (
            <Card
              key={evt.id}
              className="flex flex-col justify-between rounded-3xl border-border/80 bg-card shadow-xs hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="text-[10px] font-medium bg-secondary text-primary">
                    {evt.category}
                  </Badge>
                  <Badge
                    variant={evt.status === "Registration Open" ? "default" : "outline"}
                    className={`text-[10px] ${
                      evt.status === "Registration Open"
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {evt.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                    {evt.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{evt.datePlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{evt.timePlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Capacity: {evt.expectedAttendeesPlaceholder}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
                    <Link href={evt.registrationUrl}>
                      Register for Event <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
