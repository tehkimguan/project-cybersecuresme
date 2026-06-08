/**
 * Full corpus dump at /llms-full.txt
 * isitagentready.com category 2: Content Accessibility
 *
 * Returns all categories + all provider profiles in plain text.
 * Companion to /llms.txt (summary index).
 * Suitable for RAG ingestion and agent context loading.
 */
import type { APIRoute } from 'astro';
import categoriesData from '../data/categories.json';
import providersData from '../data/providers.json';
import { tools } from '../data/tools';

export const prerender = true;

const SITE = 'https://cybersecuresme.kgstaging.workers.dev';

export const GET: APIRoute = () => {
  const categories = categoriesData as any[];
  const providers = providersData as any[];

  const categoryLines = categories
    .map(c => {
      const subs = Array.isArray(c.subcategories) ? `\nSubcategories: ${c.subcategories.join(', ')}` : '';
      return `### ${c.name}\n${c.description}${subs}\nURL: ${SITE}/providers/${c.slug}`;
    })
    .join('\n\n');

  const providerLines = providers
    .map(p => {
      const primaryCat = Array.isArray(p.categories) ? p.categories[0] : (p.categories || '');
      const services = Array.isArray(p.services) && p.services.length
        ? `Services: ${p.services.join(', ')}`
        : '';
      const stateLabel = p.state
        ? p.state.replace(/-/g, ' ').replace(/\b\w/g, (s: string) => s.toUpperCase())
        : '';
      const locationParts = [stateLabel, p.city].filter(Boolean);
      const location = locationParts.join(', ');
      const lines = [
        `### ${p.name}`,
        `Category: ${primaryCat}`,
        location ? `Location: ${location}` : '',
        `Verification: ${p.verification_level || 'listed'}`,
        services,
        p.description ? `Description: ${p.description}` : '',
        `URL: ${SITE}/provider/${p.slug}`,
      ].filter(Boolean);
      return lines.join('\n');
    })
    .join('\n\n');

  const toolLines = tools.length
    ? tools.map(t => `- ${t.name}: ${t.description} ${SITE}/tools/${t.slug}`).join('\n')
    : '(No tools listed.)';

  const body = `# Cyber Secure SME -- Full Directory Corpus
# Source: ${SITE}/llms-full.txt
# Generated: static build (deploy date)
# Total providers: ${providers.length}
# Total categories: ${categories.length}

This file contains the complete corpus of Cyber Secure SME for agent and RAG ingestion.
It is the full-corpus companion to ${SITE}/llms.txt (summary index).

## Site Description

Cyber Secure SME is an independent directory of cybersecurity service providers for
Malaysian SMEs. It lists ${providers.length} providers in ${categories.length} categories
across all Malaysian states and federal territories. Regulators referenced: NACSA
(Cyber Security Act 2024, Act 854), CyberSecurity Malaysia, PDPA 2010 and 2024 amendments
(Act 709 / JPDP), MCMC, BNM RMiT, ISO/IEC 27001, and CREST.

The directory is independently operated and does not provide cybersecurity advice.
Users are directed to verify provider licences directly with the named regulators.

Contact for listings: cybersecuresme@agentmail.to
Sitemap: ${SITE}/sitemap-index.xml

## Categories (${categories.length})

${categoryLines}

## All Providers (${providers.length})

${providerLines}

## Tools and Calculators (${tools.length})

Cyber Secure SME provides ${tools.length} free cybersecurity calculators at ${SITE}/tools/.

${toolLines}

## Regulators

- NACSA (National Cyber Security Agency): https://www.nacsa.gov.my/
- CyberSecurity Malaysia: https://www.cybersecurity.my/
- JPDP (Personal Data Protection Department): https://www.pdp.gov.my/
- MCMC (Communications and Multimedia Commission): https://www.mcmc.gov.my/
- Bank Negara Malaysia RMiT: https://www.bnm.gov.my/
- ISO/IEC 27001 (ISMS standard): https://www.iso.org/isoiec-27001-information-security.html
- CREST (penetration testing accreditation): https://www.crest-approved.org/

## Operator

Cyber Secure SME is operated by Teh Kim Guan, an ACMA/CGMA-credentialed consultant
based in Malaysia (MYT, UTC+8). Contact: cybersecuresme@agentmail.to.

## Licensing

Public directory data is freely citable with attribution to Cyber Secure SME.
Provider listings are compiled from public sources and direct provider submissions.
Verification status is shown on each profile page.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
