import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { EventsClient } from "@/components/events/EventsClient";
import { eventsData } from "@/content";

export const metadata: Metadata = {
  title: "Events, Summits & Field Cleanups",
  description:
    "Explore upcoming Bangladesh youth climate summits, Karnaphuli river plastic interception drives, open climate hardware hackathons, and SME masterclasses.",
  openGraph: {
    title: "Events & Youth Summits | Global Youth Change Makers",
    description:
      "Join upcoming youth climate summits, coastal cleanups, and green innovation hackathons in Bangladesh.",
    url: "https://globalyouthchangemakers.org/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Community Gatherings"
        badgeIcon={<CalendarDays className="h-3.5 w-3.5" />}
        title={eventsData.headline}
        subtitle={eventsData.subheadline}
        breadcrumbs={[{ title: "Events" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsClient />
        </div>
      </section>

      <CtaBanner
        title="Host a Climate Summit at Your University or College"
        description="We co-host youth climate conferences, technical hackathons, and river cleanups with student councils."
        primaryCtaText="Propose an Event"
        primaryCtaHref="/contact"
      />
    </>
  );
}
