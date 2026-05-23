export function assetUrl(path: string): string {
  const base = "/portfolio-2026";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}