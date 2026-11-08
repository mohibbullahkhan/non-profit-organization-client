import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, sanitizeString } from "@/lib/security";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address").max(100),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous-client";
    const rateCheck = checkRateLimit(`newsletter:${ip}`, 5, 60000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many subscription requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const cleanEmail = sanitizeString(result.data.email).toLowerCase();

    // Structured logging for demonstration / ready for DB or CRM connection
    console.log("[NEWSLETTER_SUBSCRIPTION]", {
      email: cleanEmail,
      timestamp: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to The Climate Dispatch!",
    });
  } catch (err) {
    console.error("[NEWSLETTER_ERROR]", err);
    return NextResponse.json(
      { error: "Failed to process subscription. Please try again." },
      { status: 500 }
    );
  }
}

