/** Prefix a public-folder path with Vite's base URL (needed for GitHub Pages). */
export function asset(path) {
  const normalized = String(path).replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export const homePath = import.meta.env.BASE_URL;
