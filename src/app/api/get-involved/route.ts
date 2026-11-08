import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, sanitizeString } from "@/lib/security";

const volunteerSchema = z.object({
  type: z.literal("volunteer"),
  fullName: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email").max(100),
  phone: z.string().min(6, "Valid phone number required").max(25),
  cityOrDistrict: z.string().min(2, "District / City required").max(100),
  track: z.string().min(2, "Select a track"),
  motivation: z.string().min(10, "Please share a brief motivation").max(2000),
});

const partnerSchema = z.object({
  type: z.literal("partner"),
  organizationName: z.string().min(2, "Organization name required").max(150),
  contactPerson: z.string().min(2, "Contact person required").max(100),
  email: z.string().email("Invalid email").max(100),
  phone: z.string().max(25).optional(),
  partnerType: z.string().min(2, "Organization type required"),
  collaborationScope: z.string().min(10, "Brief description required").max(3000),
});

const donateSchema = z.object({
  type: z.literal("donate"),
  fullName: z.string().min(2, "Name required").max(100),
  email: z.string().email("Invalid email").max(100),
  tier: z.string().min(2, "Target tier / purpose required"),
  pledgeAmount: z.string().min(1, "Amount placeholder required"),
  frequency: z.enum(["one-time", "monthly"]),
  notes: z.string().max(1000).optional(),
});

const submissionSchema = z.discriminatedUnion("type", [
  volunteerSchema,
  partnerSchema,
  donateSchema,
]);

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous-client";
    const rateCheck = checkRateLimit(`get-involved:${ip}`, 5, 60000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = submissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const cleanData = JSON.parse(
      JSON.stringify(result.data, (_, val) =>
        typeof val === "string" ? sanitizeString(val) : val
      )
    );

    console.log(`[ACTION_INTAKE:${cleanData.type.toUpperCase()}]`, {
      ...cleanData,
      submittedAt: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: `Your ${cleanData.type} registration has been recorded successfully. Our team will follow up via email.`,
    });
  } catch (err) {
    console.error("[GET_INVOLVED_ERROR]", err);
    return NextResponse.json(
      { error: "Unable to process submission. Please try again." },
      { status: 500 }
    );
  }
}

