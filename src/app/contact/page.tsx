import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Regional Chapter Coordinates",
  description:
    "Get in touch with Global Youth Change Makers. Connect with our central coordination desk in Dhaka or regional liaisons across Bangladesh.",
  openGraph: {
    title: "Contact Us | Global Youth Change Makers",
    description:
      "Reach out to our leadership, propose an event, or locate regional climate action hubs across Bangladesh.",
    url: "https://globalyouthchangemakers.org/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Direct Inquiry"
        badgeIcon={<Mail className="h-3.5 w-3.5" />}
        title="Connect with Our Movement"
        subtitle="We welcome student inquiries, media requests, university collaboration proposals, and grassroots partnership proposals."
        breadcrumbs={[{ title: "Contact" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactClient />
        </div>
      </section>
    </>
  );
}
