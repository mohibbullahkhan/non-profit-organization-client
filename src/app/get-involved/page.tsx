import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { GetInvolvedClient } from "@/components/get-involved/GetInvolvedClient";
import { getInvolvedData } from "@/content";

export const metadata: Metadata = {
  title: "Get Involved — Volunteer, Partner, or Donate",
  description:
    "Join the Global Youth Change Makers movement in Bangladesh. Apply as a volunteer fellow, propose an institutional or SME partnership, or support grassroots climate projects.",
  openGraph: {
    title: "Take Action & Get Involved | Global Youth Change Makers",
    description:
      "Join as a student volunteer, propose a corporate or academic partnership, or fund grassroots climate resilience projects across Bangladesh.",
    url: "https://globalyouthchangemakers.org/get-involved",
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        badge="Take Direct Action"
        badgeIcon={<HeartHandshake className="h-3.5 w-3.5" />}
        title={getInvolvedData.headline}
        subtitle={getInvolvedData.subheadline}
        breadcrumbs={[{ title: "Get Involved" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <GetInvolvedClient />

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-border space-y-6 text-left">
            <h3 className="font-heading font-extrabold text-2xl text-foreground text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {getInvolvedData.frequentlyAskedQuestions.map((faq, i) => (
                <div
                  key={i}
                  className="bg-secondary/40 rounded-2xl p-5 border border-border space-y-1.5"
                >
                  <h4 className="font-heading font-bold text-sm text-foreground">
                    {faq.question}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
