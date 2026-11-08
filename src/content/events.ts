export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: "Workshop" | "Field Action" | "Hackathon" | "Webinar" | "Youth Summit";
  status: "Upcoming" | "Registration Open" | "Full" | "Completed";
  datePlaceholder: string;
  timePlaceholder: string;
  location: string;
  isOnline: boolean;
  shortDescription: string;
  expectedAttendeesPlaceholder: string;
  registrationUrl: string;
}

export interface EventsPageContent {
  headline: string;
  subheadline: string;
  upcomingEvents: EventItem[];
  pastHighlights: EventItem[];
}

/**
 * Events Content Configuration
 * Distinct original activities across Bangladesh.
 */
export const eventsData: EventsPageContent = {
  headline: "Convene, Learn, and Take Direct Action",
  subheadline:
    "Join our community of youth leaders, environmental thinkers, and grassroots changemakers at our upcoming workshops, cleanups, and symposiums.",
  upcomingEvents: [
    {
      id: "event-1",
      slug: "bangladesh-youth-climate-summit-2027",
      title: "National Youth Climate Resilience Summit",
      category: "Youth Summit",
      status: "Registration Open",
      datePlaceholder: "[Upcoming Date: Month DD, YYYY]",
      timePlaceholder: "10:00 AM – 5:00 PM BST",
      location: "Dhaka, Bangladesh (Venue: [Partner Auditorium Placeholder])",
      isOnline: false,
      shortDescription:
        "A national convention gathering student leaders, policy practitioners, and environmental entrepreneurs to present community-driven adaptation blueprints.",
      expectedAttendeesPlaceholder: "XXX+ Youth Delegates",
      registrationUrl: "/events/national-youth-climate-resilience-summit/register",
    },
    {
      id: "event-2",
      slug: "karnaphuli-riverbank-plastic-interception-drive",
      title: "Karnaphuli River Clean & Brand Audit Drive",
      category: "Field Action",
      status: "Registration Open",
      datePlaceholder: "[Upcoming Date: Month DD, YYYY]",
      timePlaceholder: "7:30 AM – 11:30 AM BST",
      location: "Chattogram Riverfront, Bangladesh",
      isOnline: false,
      shortDescription:
        "Hands-on cleanup and waste brand audit to intercept macroplastics and document single-use packaging origins along the Karnaphuli riverbank.",
      expectedAttendeesPlaceholder: "XX+ Volunteers",
      registrationUrl: "/events/karnaphuli-cleanup/register",
    },
    {
      id: "event-3",
      slug: "climate-tech-hackathon-spring",
      title: "Open Climate Hardware Hackathon",
      category: "Hackathon",
      status: "Upcoming",
      datePlaceholder: "[Upcoming Date: Month DD, YYYY]",
      timePlaceholder: "36-Hour Sprint (Hybrid)",
      location: "Dhaka Innovation Hub & Online",
      isOnline: true,
      shortDescription:
        "A multi-campus hardware and software hackathon challenging student engineers to build low-cost environmental telemetry and warning systems.",
      expectedAttendeesPlaceholder: "XX Multidisciplinary Teams",
      registrationUrl: "/events/open-climate-hardware-hackathon/register",
    },
    {
      id: "event-4",
      slug: "sme-circular-packaging-masterclass",
      title: "Circular Packaging Strategies for Small Businesses",
      category: "Webinar",
      status: "Registration Open",
      datePlaceholder: "[Upcoming Date: Month DD, YYYY]",
      timePlaceholder: "4:00 PM – 5:30 PM BST",
      location: "Virtual (Live Streamed)",
      isOnline: true,
      shortDescription:
        "Practical guidance for young Bangladeshi entrepreneurs on shifting from single-use polythene packaging to jute, cassava, and paper alternatives.",
      expectedAttendeesPlaceholder: "XXX+ Registered SMEs",
      registrationUrl: "/events/sme-circular-packaging-webinar/register",
    },
  ],
  pastHighlights: [
    {
      id: "event-past-1",
      slug: "coastal-mangrove-nursery-camp-cox-bazar",
      title: "Coastal Mangrove Nursery & Community Planting Camp",
      category: "Field Action",
      status: "Completed",
      datePlaceholder: "[Past Date Placeholder]",
      timePlaceholder: "Full Day Drive",
      location: "Cox's Bazar Coastal Fringe, Bangladesh",
      isOnline: false,
      shortDescription:
        "Successfully raised and planted native mangrove saplings along erosion-prone tidal dikes with local fisherfolk communities.",
      expectedAttendeesPlaceholder: "XX+ Youth Participants",
      registrationUrl: "/events/coastal-mangrove-camp",
    },
  ],
};

