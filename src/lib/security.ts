/**
 * Security & Sanitization Utilities
 * Global Youth Change Makers
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding window rate limiter
 * @param identifier Client IP or composite fingerprint
 * @param maxRequests Maximum requests allowed within duration
 * @param windowMs Window duration in milliseconds (default: 60s)
 */
export function checkRateLimit(
  identifier: string,
  maxRequests = 5,
  windowMs = 60000
): { success: boolean; remaining: number; resetInMs: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean old expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetTime < now) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: maxRequests - 1, resetInMs: windowMs };
  }

  if (record.count >= maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetInMs: Math.max(0, record.resetTime - now),
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: maxRequests - record.count,
    resetInMs: Math.max(0, record.resetTime - now),
  };
}

/**
 * Basic input string sanitizer to prevent injection / script tags
 */
export function sanitizeString(input: string): string {
  if (!input) return "";
  return input
    .trim()
    .replace(/[<>]/g, "") // Strip raw HTML tag delimiters
    .replace(/javascript:/gi, "") // Neutralize JS protocol
    .slice(0, 5000); // Safe length upper-bound
}

