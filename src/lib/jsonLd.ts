import { siteMetadata } from "@/content";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteMetadata.name,
    alternateName: siteMetadata.shortName,
    url: "https://globalyouthchangemakers.org",
    logo: "https://globalyouthchangemakers.org/icon.png",
    description: siteMetadata.mission,
    email: siteMetadata.contact.email,
    telephone: siteMetadata.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: siteMetadata.socialLinks.map((s) => s.url),
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
  };
}

export function getArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: "https://globalyouthchangemakers.org",
    },
  };
}

export function getEventJsonLd({
  name,
  description,
  startDate,
  locationName,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  locationName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    description: description,
    startDate: startDate,
    url: url,
    location: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressCountry: "BD",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: "https://globalyouthchangemakers.org",
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
}
