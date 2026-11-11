/** Shared contact details for AeroLux. */

export const PHONES = [
  {
    id: "artem",
    name: "Артём",
    href: "tel:+79772560473",
    label: "+7 977 256-04-73",
  },
  {
    id: "andrey",
    name: "Андрей",
    href: "tel:+79999246042",
    label: "+7 999 924-60-42",
  },
];

export const PHONE = PHONES[0];

/**
 * Personal MAX profile link (Artyom).
 * Leave empty until a public chat/profile URL is confirmed.
 * Do not use unverified links (e.g. web.max.ru/…) — empty MAX_URL hides the buttons.
 */
export const MAX_URL =
  "https://max.ru/u/f9LHodD0cOJ5R1GlgMoSqicyRtDGPufRjrxaTfPCZG8K6G6ZgzFnKu-2AhU";

export const hasMaxLink = Boolean(MAX_URL?.trim());

/** Public AeroLux Telegram blog. */
export const TELEGRAM_BLOG_URL = "https://t.me/PotolkiAeroLux";

export const hasTelegramBlog = Boolean(TELEGRAM_BLOG_URL?.trim());

