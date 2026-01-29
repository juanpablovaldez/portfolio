const STRAPI_API_URL =
  process.env.STRAPI_API_URL || "http://localhost:1337/api";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  revalidate?: number;
  populate?: string;
}

/**
 * Fetches data from the Strapi API with Next.js ISR caching support
 */
export async function getStrapiData<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { revalidate = 60, populate } = options;

  // Build URL with populate query param if needed
  let url = `${STRAPI_API_URL}/${endpoint}`;
  if (populate && !endpoint.includes("populate")) {
    const separator = endpoint.includes("?") ? "&" : "?";
    url = `${url}${separator}populate=${populate}`;
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from Strapi: ${response.status} ${response.statusText}`,
    );
  }

  const json = await response.json();

  // Return the data directly (flattened Strapi v5 response)
  return json.data as T;
}

/**
 * Extract text strings from TextItem array
 */
export function flattenTextItems(items: TextItem[] | undefined): string[] {
  if (!items) return [];
  return items.map((item) => item.text);
}

/**
 * Extract names from Technology array
 */
export function flattenTechnologies(items: Technology[] | undefined): string[] {
  if (!items) return [];
  return items.map((item) => item.name);
}

/**
 * Extract names from SkillItem array
 */
export function flattenSkillItems(items: SkillItem[] | undefined): string[] {
  if (!items) return [];
  return items.map((item) => item.name);
}

/**
 * Build full URL for Strapi media
 */
export function getStrapiMediaUrl(
  media: StrapiMedia | null | undefined,
): string | null {
  if (!media?.url) return null;

  // If URL is already absolute, return as is
  if (media.url.startsWith("http")) {
    return media.url;
  }

  // Build full URL from Strapi base
  const baseUrl =
    process.env.STRAPI_API_URL?.replace("/api", "") || "http://localhost:1337";
  return `${baseUrl}${media.url}`;
}
