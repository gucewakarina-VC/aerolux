/** Shared contact details for AeroLux. */

export const PHONE = {
  href: "tel:+79772560473",
  label: "+7 977 256-04-73",
};

/**
 * Personal MAX profile link (Artyom).
 * Leave empty until a public chat/profile URL is confirmed.
 * Do not use unverified links (e.g. web.max.ru/…) — empty MAX_URL hides the buttons.
 */
export const MAX_URL =
  "https://max.ru/u/f9LHodD0cOJ5R1GlgMoSqicyRtDGPufRjrxaTfPCZG8K6G6ZgzFnKu-2AhU";

export const hasMaxLink = Boolean(MAX_URL?.trim());
