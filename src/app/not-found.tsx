import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="h-16 w-16 mx-auto rounded-3xl bg-secondary flex items-center justify-center text-primary shadow-sm">
          <Compass className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-foreground">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The page or publication you are searching for might have been relocated, renamed, or is currently undergoing verified archival.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild className="bg-primary text-primary-foreground font-semibold rounded-xl">
            <Link href="/">
              <Home className="h-4 w-4 mr-1.5" />
              Return to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-border rounded-xl">
            <Link href="/programs">Explore Programs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
