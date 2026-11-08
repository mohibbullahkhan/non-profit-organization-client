"use client";

import * as React from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { eventsData, type EventItem } from "@/content";

export function EventsClient() {
  const [, setSelectedEvent] = React.useState<EventItem | null>(null);
  const [rsvpRegistered, setRsvpRegistered] = React.useState(false);
  const [attendeeName, setAttendeeName] = React.useState("");
  const [attendeeEmail, setAttendeeEmail] = React.useState("");

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attendeeName && attendeeEmail) {
      setRsvpRegistered(true);
      setTimeout(() => {
        setRsvpRegistered(false);
        setAttendeeName("");
        setAttendeeEmail("");
        setSelectedEvent(null);
      }, 2500);
    }
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <TabsList className="bg-secondary/70 p-1 rounded-2xl border border-border">
            <TabsTrigger
              value="upcoming"
              className="px-5 py-2 text-xs font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary"
            >
              Upcoming Events ({eventsData.upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="px-5 py-2 text-xs font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary"
            >
              Past Field Highlights ({eventsData.pastHighlights.length})
            </TabsTrigger>
          </TabsList>

          <span className="text-xs text-muted-foreground">
            All events feature free youth access with verified attendance badges
          </span>
        </div>

        {/* Upcoming Events List */}
        <TabsContent value="upcoming" className="space-y-6 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.upcomingEvents.map((evt) => (
              <Card
                key={evt.id}
                className="rounded-3xl border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs font-semibold bg-secondary text-primary">
                      {evt.category}
                    </Badge>
                    <Badge
                      variant={evt.status === "Registration Open" ? "default" : "outline"}
                      className={`text-[10px] ${
                        evt.status === "Registration Open"
                          ? "bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {evt.status}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-foreground leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {evt.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border/60 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{evt.datePlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span>{evt.timePlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span>Expected Capacity: {evt.expectedAttendeesPlaceholder}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
                          onClick={() => setSelectedEvent(evt)}
                        >
                          RSVP & Register Online
                          <ArrowRight className="h-4 w-4 ml-1.5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="font-heading font-bold text-lg text-foreground">
                            RSVP: {evt.title}
                          </DialogTitle>
                          <DialogDescription className="text-xs text-muted-foreground">
                            Free registration for student delegates and community organizers.
                          </DialogDescription>
                        </DialogHeader>

                        {rsvpRegistered ? (
                          <div className="py-6 text-center space-y-2">
                            <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                            <h4 className="font-heading font-bold text-base text-foreground">
                              RSVP Confirmed!
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              We have reserved your seat. Check your email for venue credentials and delegate packet.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleRsvpSubmit} className="space-y-4 pt-2">
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-foreground">
                                Full Name
                              </label>
                              <input
                                type="text"
                                required
                                value={attendeeName}
                                onChange={(e) => setAttendeeName(e.target.value)}
                                placeholder="Your full name"
                                className="w-full text-xs h-9 px-3 rounded-lg border border-input bg-background"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-foreground">
                                Email Address
                              </label>
                              <input
                                type="email"
                                required
                                value={attendeeEmail}
                                onChange={(e) => setAttendeeEmail(e.target.value)}
                                placeholder="name@institution.edu"
                                className="w-full text-xs h-9 px-3 rounded-lg border border-input bg-background"
                              />
                            </div>
                            <Button
                              type="submit"
                              className="w-full bg-primary text-primary-foreground font-semibold rounded-xl"
                            >
                              Confirm Free RSVP
                            </Button>
                          </form>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Past Highlights List */}
        <TabsContent value="past" className="space-y-6 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.pastHighlights.map((evt) => (
              <Card
                key={evt.id}
                className="rounded-3xl border-border bg-secondary/30 shadow-xs p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {evt.category}
                  </Badge>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CalendarCheck className="h-3.5 w-3.5" />
                    Successfully Completed
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground">
                  {evt.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {evt.shortDescription}
                </p>

                <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1">
                  <p><strong>Location: </strong>{evt.location}</p>
                  <p><strong>Youth Reached: </strong>{evt.expectedAttendeesPlaceholder}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
