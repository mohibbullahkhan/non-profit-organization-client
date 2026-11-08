import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, sanitizeString } from "@/lib/security";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(100),
  phone: z.string().max(25).optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous-client";
    const rateCheck = checkRateLimit(`contact:${ip}`, 4, 60000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const sanitizedData = {
      fullName: sanitizeString(result.data.fullName),
      email: sanitizeString(result.data.email).toLowerCase(),
      phone: result.data.phone ? sanitizeString(result.data.phone) : undefined,
      subject: sanitizeString(result.data.subject),
      message: sanitizeString(result.data.message),
    };

    console.log("[CONTACT_INQUIRY_RECEIVED]", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will get back to you shortly.",
    });
  } catch (err) {
    console.error("[CONTACT_ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

