import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fullBlogPosts } from "@/content";

export const metadata: Metadata = {
  title: "Insights, Youth Essays & Climate Dispatches",
  description:
    "Read original articles, field dispatches, and circular economy guides from Bangladesh's young climate leaders and environmental researchers.",
  openGraph: {
    title: "Blog & Field Notes | Global Youth Change Makers",
    description:
      "Original insights on delta resilience, river waste brand audits, and circular SME strategies in Bangladesh.",
    url: "https://globalyouthchangemakers.org/blog",
  },
};

export default function BlogListPage() {
  return (
    <>
      <PageHero
        badge="Editorial & Dispatches"
        badgeIcon={<BookOpen className="h-3.5 w-3.5" />}
        title="Field Dispatches & Youth Perspectives"
        subtitle="In-depth analysis, frontline observations, and actionable sustainability playbooks written by youth organizers and environmental researchers across Bangladesh."
        breadcrumbs={[{ title: "Blog" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullBlogPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col justify-between rounded-lg border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-xs transition-all overflow-hidden group text-left"
              >
                <div>
                  <CardHeader className="p-6 pb-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-xs font-semibold bg-secondary text-primary">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-secondary/80 px-2 py-0.5 rounded-md text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-3 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-primary text-xs font-bold">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-semibold text-foreground block leading-tight">
                        {post.author.namePlaceholder}
                      </span>
                      <span className="text-[10px] text-muted-foreground block leading-tight">
                        {post.author.rolePlaceholder}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have an Insight or Field Story to Share?"
        description="We invite university researchers, fellows, and grassroots volunteers to submit guest op-eds and field dispatches."
        primaryCtaText="Pitch an Article"
        primaryCtaHref="/contact"
      />
    </>
  );
}
