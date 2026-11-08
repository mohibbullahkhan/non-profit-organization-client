"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { blogData } from "@/content";

export function FeaturedStoriesSection() {
  const featuredPosts = blogData.posts.slice(0, 3);

  return (
    <section className="py-20 bg-secondary/30 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl text-left">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary text-xs py-1 px-3"
            >
              <BookOpen className="h-3.5 w-3.5 mr-1 text-primary" />
              Youth Perspectives & Field Notes
            </Badge>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Dispatches from the Climate Frontline
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Real stories, practical circular playbooks, and honest field observations written by young Bangladeshi organizers and environmental researchers.
            </p>
          </div>

          <Button asChild variant="outline" className="border-primary/30 text-primary self-start md:self-auto">
            <Link href="/blog">
              Browse All Articles <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </Button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col justify-between rounded-3xl border-border/80 bg-card shadow-xs hover:border-primary/40 hover:shadow-lg transition-all overflow-hidden group"
            >
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="secondary" className="text-[10px] font-medium bg-secondary text-primary">
                    {post.category}
                  </Badge>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardHeader>

              <CardContent className="p-6 pt-0 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-muted px-2 py-0.5 rounded-md text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-3 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-primary text-[10px] font-bold">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-semibold text-foreground block leading-tight">
                      {post.author.namePlaceholder}
                    </span>
                    <span className="text-[10px] text-muted-foreground block leading-tight">
                      {post.author.rolePlaceholder}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Read
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
