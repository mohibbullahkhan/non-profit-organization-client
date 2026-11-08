"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("[APPLICATION_ERROR_BOUNDARY]", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="h-16 w-16 mx-auto rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 shadow-sm">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-widest">
            System Notice
          </span>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-foreground">
            Something went unexpectedly
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We encountered a temporary interface rendering issue. Your session data remains safe.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            className="bg-primary text-primary-foreground font-semibold rounded-xl"
          >
            <RotateCcw className="h-4 w-4 mr-1.5" />
            Try Again
          </Button>

          <Button asChild variant="outline" className="border-border rounded-xl">
            <Link href="/">
              <Home className="h-4 w-4 mr-1.5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

