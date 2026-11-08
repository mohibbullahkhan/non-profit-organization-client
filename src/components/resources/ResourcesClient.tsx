"use client";

import * as React from "react";
import {
  FileText,
  Download,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { resourcesData } from "@/content";

export function ResourcesClient() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = [
    "All",
    "Toolkit",
    "Policy Brief",
    "Curriculum Guide",
  ];

  const filteredResources = resourcesData.resources.filter((res) => {
    const matchesCategory =
      selectedCategory === "All" || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Search and Filters Bar */}
      <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guides, toolkits, briefs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background h-10 text-xs"
            />
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                type="button"
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs rounded-xl h-8 px-3 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
          <span>Showing {filteredResources.length} available publications</span>
          <span>Open-Access (Creative Commons Attribution)</span>
        </div>
      </div>

      {/* Grid of Resource Cards */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-secondary/30 rounded-3xl border border-dashed border-border space-y-3">
          <FileText className="h-10 w-10 text-muted-foreground mx-auto" />
          <h3 className="font-heading font-bold text-lg text-foreground">
            No publications found
          </h3>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search terms or selecting another category filter.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((res) => (
            <Card
              key={res.id}
              className="flex flex-col justify-between rounded-3xl border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all text-left"
            >
              <div>
                <CardHeader className="p-6 pb-3 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs font-semibold bg-secondary text-primary">
                      {res.category}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground font-medium">
                      Published {res.publishYear}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-foreground leading-snug">
                    {res.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {res.description}
                  </p>

                  <div className="bg-secondary/50 rounded-xl p-3 border border-border/60 text-[11px] text-muted-foreground">
                    <strong className="text-foreground">Intended Audience: </strong>
                    {res.targetAudience}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="p-6 pt-2 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <span className="font-bold text-foreground">{res.fileFormat}</span>
                  <span>•</span>
                  <span>{res.fileSizePlaceholder}</span>
                </div>

                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
                  onClick={() => {
                    alert(
                      `[DEMO DOWNLOAD]: Downloading "${res.title}" (${res.fileFormat} - ${res.fileSizePlaceholder}). In production, this delivers the finalized verified PDF toolkit.`
                    );
                  }}
                >
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Download Toolkit
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
