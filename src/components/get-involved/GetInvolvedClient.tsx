"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Users,
  Handshake,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInvolvedData } from "@/content";

// Volunteer Form Schema
const volunteerFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(6, "Valid phone number required"),
  cityOrDistrict: z.string().min(2, "District/City is required"),
  track: z.string().min(1, "Please select an action track"),
  motivation: z.string().min(10, "Please share a brief motivation (min 10 characters)"),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

// Partner Form Schema
const partnerFormSchema = z.object({
  organizationName: z.string().min(2, "Organization name required"),
  contactPerson: z.string().min(2, "Contact person name required"),
  email: z.string().email("Valid institutional email required"),
  phone: z.string().optional(),
  partnerType: z.string().min(1, "Please select an organization type"),
  collaborationScope: z.string().min(10, "Please describe the collaboration scope"),
});

type PartnerFormValues = z.infer<typeof partnerFormSchema>;

// Donate Form Schema
const donateFormSchema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  tier: z.string().min(1, "Please select a funding purpose"),
  pledgeAmount: z.string().min(1, "Please specify an intended pledge amount"),
  frequency: z.enum(["one-time", "monthly"]),
  notes: z.string().optional(),
});

type DonateFormValues = z.infer<typeof donateFormSchema>;

export function GetInvolvedClient() {
  const [activeTab, setActiveTab] = React.useState<"volunteer" | "partner" | "donate">("volunteer");
  const [submissionStatus, setSubmissionStatus] = React.useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Volunteer form
  const volunteerForm = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      cityOrDistrict: "",
      track: "Field Action & Community Volunteer",
      motivation: "",
    },
  });

  // Partner form
  const partnerForm = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnerType: "Academic Institutions",
      collaborationScope: "",
    },
  });

  // Donate form
  const donateForm = useForm<DonateFormValues>({
    resolver: zodResolver(donateFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      tier: "Sponsor a Community River Trap",
      pledgeAmount: "BDT [AMOUNT_PLACEHOLDER]",
      frequency: "one-time",
      notes: "",
    },
  });

  const onVolunteerSubmit = async (data: VolunteerFormValues) => {
    setSubmissionStatus(null);
    try {
      const res = await fetch("/api/get-involved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "volunteer", ...data }),
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error || "Submission failed");
      setSubmissionStatus({ success: true, message: resData.message });
      volunteerForm.reset();
    } catch (err: unknown) {
      setSubmissionStatus({
        success: false,
        message: err instanceof Error ? err.message : "Submission error",
      });
    }
  };

  const onPartnerSubmit = async (data: PartnerFormValues) => {
    setSubmissionStatus(null);
    try {
      const res = await fetch("/api/get-involved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "partner", ...data }),
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error || "Submission failed");
      setSubmissionStatus({ success: true, message: resData.message });
      partnerForm.reset();
    } catch (err: unknown) {
      setSubmissionStatus({
        success: false,
        message: err instanceof Error ? err.message : "Submission error",
      });
    }
  };

  const onDonateSubmit = async (data: DonateFormValues) => {
    setSubmissionStatus(null);
    try {
      const res = await fetch("/api/get-involved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "donate", ...data }),
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error || "Submission failed");
      setSubmissionStatus({ success: true, message: resData.message });
      donateForm.reset();
    } catch (err: unknown) {
      setSubmissionStatus({
        success: false,
        message: err instanceof Error ? err.message : "Submission error",
      });
    }
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Status banner */}
      {submissionStatus && (
        <div
          className={`p-4 rounded-2xl flex items-start gap-3 border ${
            submissionStatus.success
              ? "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300"
              : "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:text-red-300"
          }`}
        >
          {submissionStatus.success ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <div className="text-xs space-y-1 text-left">
            <span className="font-bold block">
              {submissionStatus.success ? "Submission Received!" : "Error Processing Request"}
            </span>
            <p>{submissionStatus.message}</p>
          </div>
        </div>
      )}

      {/* Main Tabs Navigation */}
      <Tabs
        defaultValue="volunteer"
        value={activeTab}
        onValueChange={(val) => {
          setActiveTab(val as "volunteer" | "partner" | "donate");
          setSubmissionStatus(null);
        }}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 w-full h-auto p-1.5 bg-secondary/80 rounded-2xl border border-border">
          <TabsTrigger
            value="volunteer"
            className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-xs flex items-center justify-center gap-2"
          >
            <Users className="h-4 w-4" />
            <span>1. Volunteer</span>
          </TabsTrigger>
          <TabsTrigger
            value="partner"
            className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-xs flex items-center justify-center gap-2"
          >
            <Handshake className="h-4 w-4" />
            <span>2. Partner</span>
          </TabsTrigger>
          <TabsTrigger
            value="donate"
            className="py-3 text-xs sm:text-sm font-semibold rounded-xl data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-xs flex items-center justify-center gap-2"
          >
            <HeartHandshake className="h-4 w-4" />
            <span>3. Support</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Volunteer Application */}
        <TabsContent value="volunteer" className="mt-8 focus-visible:outline-none">
          <Card className="rounded-3xl border-border bg-card shadow-md p-6 sm:p-8 text-left">
            <CardHeader className="p-0 pb-6 border-b border-border space-y-1">
              <Badge variant="outline" className="w-fit text-xs text-primary border-primary/30">
                Grassroots Chapter Network
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl text-foreground">
                Join as a Volunteer or Fellow
              </h2>
              <p className="text-xs text-muted-foreground">
                Connect with district chapters across all 64 districts in Bangladesh. No prior experience required.
              </p>
            </CardHeader>

            <form onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)} className="space-y-5 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Full Name *
                  </label>
                  <Input
                    {...volunteerForm.register("fullName")}
                    placeholder="e.g. Tanvir Ahmed"
                    className="h-10 text-xs"
                  />
                  {volunteerForm.formState.errors.fullName && (
                    <p className="text-[11px] text-destructive">
                      {volunteerForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    {...volunteerForm.register("email")}
                    placeholder="tanvir@university.edu"
                    className="h-10 text-xs"
                  />
                  {volunteerForm.formState.errors.email && (
                    <p className="text-[11px] text-destructive">
                      {volunteerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    {...volunteerForm.register("phone")}
                    placeholder="+880 17XXXXXXXX"
                    className="h-10 text-xs"
                  />
                  {volunteerForm.formState.errors.phone && (
                    <p className="text-[11px] text-destructive">
                      {volunteerForm.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    District / City in Bangladesh *
                  </label>
                  <Input
                    {...volunteerForm.register("cityOrDistrict")}
                    placeholder="e.g. Chattogram / Satkhira / Dhaka"
                    className="h-10 text-xs"
                  />
                  {volunteerForm.formState.errors.cityOrDistrict && (
                    <p className="text-[11px] text-destructive">
                      {volunteerForm.formState.errors.cityOrDistrict.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Preferred Action Track *
                </label>
                <select
                  {...volunteerForm.register("track")}
                  className="w-full h-10 px-3 rounded-lg border border-input bg-background text-xs"
                >
                  <option value="Field Action & Community Volunteer">
                    Field Action: Beach/River Cleanups & Mangrove Planting
                  </option>
                  <option value="Youth Climate Storyteller & Media Fellow">
                    Media & Creative: Science Journalism, Photography & Video
                  </option>
                  <option value="Climate Tech Tinkerer & Data Analyst">
                    Tech & Prototyping: Arduino Flood Sensors & GIS Data
                  </option>
                  <option value="School Eco-Club Coordinator">
                    Education: Facilitating Secondary School Eco-Clubs
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Why do you want to join? *
                </label>
                <Textarea
                  {...volunteerForm.register("motivation")}
                  placeholder="Share a short note on what drives your environmental passion..."
                  rows={3}
                  className="text-xs"
                />
                {volunteerForm.formState.errors.motivation && (
                  <p className="text-[11px] text-destructive">
                    {volunteerForm.formState.errors.motivation.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={volunteerForm.formState.isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 rounded-xl"
              >
                {volunteerForm.formState.isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting Application...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Send className="h-4 w-4" /> Submit Volunteer Application
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </TabsContent>

        {/* Tab 2: Partner Inquiry */}
        <TabsContent value="partner" className="mt-8 focus-visible:outline-none">
          <Card className="rounded-3xl border-border bg-card shadow-md p-6 sm:p-8 text-left">
            <CardHeader className="p-0 pb-6 border-b border-border space-y-1">
              <Badge variant="outline" className="w-fit text-xs text-primary border-primary/30">
                Bilateral Collaboration
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl text-foreground">
                Institutional & SME Partnership Inquiry
              </h2>
              <p className="text-xs text-muted-foreground">
                We partner with universities, municipal departments, corporate sustainability teams, and small enterprises.
              </p>
            </CardHeader>

            <form onSubmit={partnerForm.handleSubmit(onPartnerSubmit)} className="space-y-5 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Organization / Company Name *
                  </label>
                  <Input
                    {...partnerForm.register("organizationName")}
                    placeholder="e.g. Green Innovations Ltd. / Dept of Botany"
                    className="h-10 text-xs"
                  />
                  {partnerForm.formState.errors.organizationName && (
                    <p className="text-[11px] text-destructive">
                      {partnerForm.formState.errors.organizationName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Contact Person Name & Title *
                  </label>
                  <Input
                    {...partnerForm.register("contactPerson")}
                    placeholder="e.g. Dr. Sabrina Khan, Sustainability Director"
                    className="h-10 text-xs"
                  />
                  {partnerForm.formState.errors.contactPerson && (
                    <p className="text-[11px] text-destructive">
                      {partnerForm.formState.errors.contactPerson.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Official Work Email *
                  </label>
                  <Input
                    type="email"
                    {...partnerForm.register("email")}
                    placeholder="contact@enterprise.com"
                    className="h-10 text-xs"
                  />
                  {partnerForm.formState.errors.email && (
                    <p className="text-[11px] text-destructive">
                      {partnerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Organization Type *
                  </label>
                  <select
                    {...partnerForm.register("partnerType")}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-xs"
                  >
                    <option value="Academic Institutions">Academic Institution / University</option>
                    <option value="Corporates & SMEs">Responsible SME or Corporate Entity</option>
                    <option value="International Non-Profits">International Climate NGO / Foundation</option>
                    <option value="Municipal & Local Government">Municipal or Public Body</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Collaboration Scope & Goals *
                </label>
                <Textarea
                  {...partnerForm.register("collaborationScope")}
                  placeholder="Outline your proposed partnership, e.g. sponsoring an eco-fellowship cohort, zero-waste packaging audit, or campus lab..."
                  rows={4}
                  className="text-xs"
                />
                {partnerForm.formState.errors.collaborationScope && (
                  <p className="text-[11px] text-destructive">
                    {partnerForm.formState.errors.collaborationScope.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={partnerForm.formState.isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 rounded-xl"
              >
                {partnerForm.formState.isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting Partnership Proposal...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Send className="h-4 w-4" /> Send Partnership Inquiry
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </TabsContent>

        {/* Tab 3: Donate / Support Pledge */}
        <TabsContent value="donate" className="mt-8 focus-visible:outline-none">
          <Card className="rounded-3xl border-border bg-card shadow-md p-6 sm:p-8 text-left">
            <CardHeader className="p-0 pb-6 border-b border-border space-y-1">
              <Badge variant="outline" className="w-fit text-xs text-primary border-primary/30">
                Direct Program Funding
              </Badge>
              <h2 className="font-heading font-extrabold text-2xl text-foreground">
                Support Youth Climate Interventions
              </h2>
              <p className="text-xs text-muted-foreground">
                100% of contributions fund physical student lab equipment, river interceptor dikes, and community tree nurseries.
              </p>
            </CardHeader>

            <form onSubmit={donateForm.handleSubmit(onDonateSubmit)} className="space-y-5 pt-6">
              {/* Tiers overview cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {getInvolvedData.donationTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="p-3.5 rounded-xl border border-border bg-secondary/50 space-y-1 text-xs"
                  >
                    <span className="font-bold text-foreground block">{tier.title}</span>
                    <span className="font-mono text-primary font-bold block">
                      {tier.amountPlaceholder}
                    </span>
                    <p className="text-[10px] text-muted-foreground">{tier.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Supporter Full Name *
                  </label>
                  <Input
                    {...donateForm.register("fullName")}
                    placeholder="Your name or organization"
                    className="h-10 text-xs"
                  />
                  {donateForm.formState.errors.fullName && (
                    <p className="text-[11px] text-destructive">
                      {donateForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    {...donateForm.register("email")}
                    placeholder="name@domain.com"
                    className="h-10 text-xs"
                  />
                  {donateForm.formState.errors.email && (
                    <p className="text-[11px] text-destructive">
                      {donateForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Target Funding Tier *
                  </label>
                  <select
                    {...donateForm.register("tier")}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-xs"
                  >
                    <option value="Sponsor a Community River Trap">
                      Tier 1: Sponsor a Community River Trap
                    </option>
                    <option value="Seed a School Eco-Club">
                      Tier 2: Seed a School Eco-Club
                    </option>
                    <option value="Sustain a Youth Climate Fellow">
                      Tier 3: Sustain a Youth Climate Fellow
                    </option>
                    <option value="General Ecosystem Fund">
                      General Operational & Research Fund
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Contribution Frequency *
                  </label>
                  <select
                    {...donateForm.register("frequency")}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-xs"
                  >
                    <option value="one-time">One-Time Contribution</option>
                    <option value="monthly">Monthly Sustainer</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Pledge Amount Placeholder *
                </label>
                <Input
                  {...donateForm.register("pledgeAmount")}
                  placeholder="e.g. BDT [XX,000] / USD [$XX]"
                  className="h-10 text-xs font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Optional Notes or Dedication
                </label>
                <Textarea
                  {...donateForm.register("notes")}
                  placeholder="Leave a note or specify a particular district chapter you wish to support..."
                  rows={2}
                  className="text-xs"
                />
              </div>

              <Button
                type="submit"
                disabled={donateForm.formState.isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 rounded-xl"
              >
                {donateForm.formState.isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Recording Pledge...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="h-4 w-4" /> Record Donation Pledge
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
