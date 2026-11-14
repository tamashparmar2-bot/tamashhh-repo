/**
 * Google Analytics 4 (GA4) Integration for YASHFX
 * Measurement ID: G-TN0ZQGMF62
 */

export const GA_MEASUREMENT_ID = "G-TN0ZQGMF62";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track page views during client-side SPA navigation in Google Analytics 4.
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Track custom user events in Google Analytics 4 (e.g. CTA clicks, WhatsApp inquiries).
 */
export function trackEvent(
  action: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, params);
}
