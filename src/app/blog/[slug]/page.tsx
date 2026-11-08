import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  User,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Button } from "@/components/ui/button";
import { fullBlogPosts } from "@/content";
import { getArticleJsonLd } from "@/lib/jsonLd";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return fullBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = fullBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Climate Dispatch`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Global Youth Change Makers`,
      description: post.excerpt,
      type: "article",
      url: `https://globalyouthchangemakers.org/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = fullBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = getArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `https://globalyouthchangemakers.org/blog/${post.slug}`,
    datePublished: "2026-11-01",
    authorName: post.author.namePlaceholder,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHero
        badge={post.category}
        badgeIcon={<BookOpen className="h-3.5 w-3.5" />}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { title: "Blog", href: "/blog" },
          { title: post.title },
        ]}
      />

      <article className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Post Metadata Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                <User className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="font-bold text-foreground text-sm block">
                  {post.author.namePlaceholder}
                </span>
                <span>{post.author.rolePlaceholder}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                {post.publishDatePlaceholder}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Full Article Content */}
          <div className="space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed text-left">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags & Action Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground mr-1">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground/80 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Button asChild variant="outline" size="sm" className="border-border">
              <Link href="/blog">
                <ArrowLeft className="h-3.5 w-3.5 mr-1.5" />
                Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <CtaBanner
        title="Stay Informed on Delta Climate Trends"
        description="Subscribe to our monthly Climate Dispatch for frontline reports and open fellowship calls."
        primaryCtaText="Subscribe to Newsletter"
        primaryCtaHref="/#newsletter"
      />
    </>
  );
}
