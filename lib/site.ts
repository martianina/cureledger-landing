/** Production origin, no trailing slash. Override on preview with NEXT_PUBLIC_SITE_URL if needed. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cureledger.com").replace(/\/$/, "");
/** For Next.js `metadataBase` and resolving relative OG/URLs. */
export const metadataBase = new URL(`${siteUrl}/`);
