/**
 * Markdown twin endpoints at /provider/[slug].md
 * isitagentready.com category 2: Content Accessibility
 *
 * Generates a static markdown page for every provider profile.
 * These .md URL paths are the static-stack equivalent of true Accept: text/markdown
 * content negotiation.
 *
 * NOTE on true content negotiation:
 *   Serving the same canonical URL (/provider/some-slug) with different content based on
 *   the Accept header (text/html vs text/markdown) requires a hybrid Worker that
 *   inspects the request before returning the pre-rendered asset. Cloudflare Workers
 *   Static Assets does not do header-based routing at deploy time. This .md URL approach
 *   (parallel URL per profile) is the correct static-stack equivalent: agents and
 *   crawlers that want markdown append ".md" to the canonical URL.
 *
 * Canonical URL pattern: https://cybersecuresme.my/provider/[slug]
 * Markdown twin pattern: https://cybersecuresme.my/provider/[slug].md
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import clinicsData from '../../data/providers.json';
import categoriesData from '../../data/categories.json';

export const prerender = true;

const SITE = 'https://cybersecuresme.my';

export const getStaticPaths: GetStaticPaths = () => {
  const clinics = clinicsData as any[];
  return clinics.map(clinic => ({
    params: { slug: clinic.slug },
    props: { clinic },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const clinic = props.clinic as any;
  const categories = categoriesData as any[];

  const catMap: Record<string, { name: string; description: string }> = Object.fromEntries(
    categories.map(c => [c.slug, { name: c.name, description: c.description }])
  );

  const primaryCat = Array.isArray(clinic.categories)
    ? clinic.categories[0]
    : (clinic.categories || '');

  const catName = catMap[primaryCat]?.name || primaryCat;

  const stateLabel = clinic.state
    ? clinic.state.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())
    : '';

  const locationParts = [stateLabel, clinic.city].filter(Boolean);
  const locationStr = locationParts.join(', ');

  const servicesLine = Array.isArray(clinic.services) && clinic.services.length
    ? `**Services:** ${clinic.services.join(', ')}`
    : '';

  const websiteLine = clinic.website
    ? `**Website:** ${clinic.website}`
    : '';

  const verificationLine = `**Verification level:** ${clinic.verification_level || 'listed'}`;

  const allCatsLine = Array.isArray(clinic.categories) && clinic.categories.length > 1
    ? `**All categories:** ${clinic.categories.join(', ')}`
    : '';

  const lines = [
    `# ${clinic.name}`,
    '',
    `**Category:** ${catName}`,
    locationStr ? `**Location:** ${locationStr}, Malaysia` : '',
    verificationLine,
    websiteLine,
    servicesLine,
    allCatsLine,
    '',
    clinic.description || '',
    '',
    '---',
    '',
    `**Directory:** [${clinic.name} on Cyber Secure SME](${SITE}/provider/${clinic.slug})`,
    `**Browse ${catName}:** ${SITE}/providers/${primaryCat}`,
    `**All providers:** ${SITE}/providers`,
    '',
    `*This markdown page is a machine-readable twin of the canonical HTML profile.*`,
    `*Canonical URL: ${SITE}/provider/${clinic.slug}*`,
    `*Source: ${SITE}/llms-full.txt*`,
    `*Disclaimer: Cyber Secure SME is an independent directory and not a regulator. A listing is not an endorsement. Always verify a provider's NACSA licence, certifications, and track record before engaging.*`,
  ].filter(ln => ln !== null && ln !== undefined);

  const body = lines.join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
