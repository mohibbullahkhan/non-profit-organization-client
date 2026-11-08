"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { siteMetadata } from "@/content";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactClient() {
  const [status, setStatus] = React.useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.error || "Failed to send message");
      setStatus({ success: true, message: resData.message });
      reset();
    } catch (err: unknown) {
      setStatus({
        success: false,
        message: err instanceof Error ? err.message : "Error sending inquiry",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
      {/* Contact Form Column */}
      <div className="lg:col-span-7">
        <Card className="rounded-3xl border-border bg-card shadow-md p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5 pb-4 border-b border-border">
            <h2 className="font-heading font-extrabold text-2xl text-foreground">
              Send Us a Message
            </h2>
            <p className="text-xs text-muted-foreground">
              Whether you represent a school, university, media outlet, or grassroots group, our coordination team is here to assist.
            </p>
          </div>

          {status && (
            <div
              className={`p-4 rounded-xl flex items-start gap-3 border ${
                status.success
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:text-red-300"
              }`}
            >
              {status.success ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <p className="text-xs">{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Your Full Name *
                </label>
                <Input
                  {...register("fullName")}
                  placeholder="e.g. Nusrat Jahan"
                  className="h-10 text-xs"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-destructive">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Email Address *
                </label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="nusrat@example.com"
                  className="h-10 text-xs"
                />
                {errors.email && (
                  <p className="text-[11px] text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Phone / WhatsApp (Optional)
                </label>
                <Input
                  {...register("phone")}
                  placeholder="+880 1XXXXXXXXX"
                  className="h-10 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">
                  Subject *
                </label>
                <Input
                  {...register("subject")}
                  placeholder="e.g. Media inquiry / Campus club request"
                  className="h-10 text-xs"
                />
                {errors.subject && (
                  <p className="text-[11px] text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">
                Message *
              </label>
              <Textarea
                {...register("message")}
                placeholder="How can we assist you or collaborate?"
                rows={5}
                className="text-xs"
              />
              {errors.message && (
                <p className="text-[11px] text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 rounded-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending Message...
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Send className="h-4 w-4" /> Send Message
                </span>
              )}
            </Button>
          </form>
        </Card>
      </div>

      {/* Contact Info & Map Placeholder Column */}
      <div className="lg:col-span-5 space-y-6">
        {/* Contact Information Card */}
        <Card className="rounded-3xl border-border bg-secondary/40 p-6 space-y-4">
          <h3 className="font-heading font-bold text-lg text-foreground">
            Headquarters & Coordination
          </h3>

          <div className="space-y-3 text-xs text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{siteMetadata.contact.officeAddress}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span className="font-mono text-foreground font-medium">
                {siteMetadata.contact.email}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span className="font-mono text-foreground font-medium">
                {siteMetadata.contact.phone}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2">
              Regional Chapter Hubs
            </span>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {siteMetadata.contact.regionalPresence.map((reg) => (
                <li key={reg} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{reg}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Interactive Map Placeholder (Bangladesh SVG) */}
        <Card className="rounded-3xl border-border bg-card p-6 shadow-xs overflow-hidden text-center space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="font-heading font-bold text-sm text-foreground flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-primary" />
              Bangladesh Chapter Coordinates
            </span>
            <Badge variant="outline" className="text-[10px] font-mono">
              23.8103° N, 90.4125° E
            </Badge>
          </div>

          {/* Stylized Bangladesh Map SVG Representation */}
          <div className="p-4 bg-secondary/30 rounded-2xl flex items-center justify-center">
            <svg
              viewBox="0 0 240 280"
              className="w-full max-w-[200px] h-auto drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Bangladesh map with chapter coordinates"
            >
              {/* Silhouette of Bangladesh boundary */}
              <path
                d="M80 30L120 20L150 40L160 70L210 90L200 130L170 140L180 180L160 210L140 240L120 260L90 250L70 230L60 180L40 140L50 90L80 70Z"
                fill="currentColor"
                className="text-emerald-800/15 dark:text-emerald-300/15"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* Major Pin Nodes */}
              {/* Dhaka */}
              <circle cx="120" cy="140" r="6" fill="#10b981" />
              <circle cx="120" cy="140" r="12" fill="#10b981" fillOpacity="0.2" />
              <text x="130" y="144" fill="currentColor" className="text-[9px] font-bold fill-foreground">
                Dhaka (HQ)
              </text>

              {/* Chattogram */}
              <circle cx="170" cy="190" r="5" fill="#0d5a44" />
              <text x="140" y="205" fill="currentColor" className="text-[8px] font-semibold fill-foreground">
                Chattogram
              </text>

              {/* Khulna */}
              <circle cx="75" cy="190" r="5" fill="#0d5a44" />
              <text x="35" y="205" fill="currentColor" className="text-[8px] font-semibold fill-foreground">
                Khulna/Delta
              </text>

              {/* Sylhet */}
              <circle cx="170" cy="80" r="5" fill="#0d5a44" />
              <text x="160" y="72" fill="currentColor" className="text-[8px] font-semibold fill-foreground">
                Sylhet
              </text>

              {/* Rajshahi */}
              <circle cx="60" cy="100" r="5" fill="#0d5a44" />
              <text x="25" y="100" fill="currentColor" className="text-[8px] font-semibold fill-foreground">
                Rajshahi
              </text>
            </svg>
          </div>

          <p className="text-[11px] text-muted-foreground">
            Headquarters located in Uttara, Dhaka, with active student volunteer liaisons across all divisions.
          </p>
        </Card>
      </div>
    </div>
  );
}
