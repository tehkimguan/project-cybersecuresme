/**
 * Agent Skills Discovery index
 * Schema: Cloudflare Agent Skills Discovery RFC v0.2.0
 * Reference: https://github.com/cloudflare/agent-skills-discovery-rfc
 *
 * Skill body strings (used for sha256 derivation):
 *
 * Body for "directory-search":
 *   Query the Cyber Secure SME verified Malaysian cybersecurity provider directory.
 *   Supports filtering by category (8 categories: managed security, endpoint and network
 *   security, penetration testing and VAPT, cloud and email security, GRC and compliance,
 *   SOC and incident response, security awareness training, data protection and backup)
 *   and by state (all 16 Malaysian states and federal territories).
 *   Returns provider name, slug, verification level, categories, and profile URL.
 *   See https://cybersecuresme.kgstaging.workers.dev/llms.txt for the full provider and category index.
 *
 * Body for "listing-enquiry":
 *   Submit a listing or enquiry for a cybersecurity provider on Cyber Secure SME.
 *   Email cybersecuresme@agentmail.to with provider name, category, state, and website.
 *   The request is reviewed and the provider is added within 3 business days.
 *
 * Body for "directory-index":
 *   Plain-text machine-readable index of all providers, categories, states, and tools
 *   on Cyber Secure SME. Updated on each deploy. Available at
 *   https://cybersecuresme.kgstaging.workers.dev/llms.txt and
 *   https://cybersecuresme.kgstaging.workers.dev/llms-full.txt.
 */
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const index = {
    $schema: 'https://agent-skills-discovery.cloudflare.com/schema/v0.2.0/index.json',
    name: 'cybersecuresme.kgstaging.workers.dev',
    description:
      'Agent skills for the Cyber Secure SME verified Malaysian cybersecurity provider directory for SMEs.',
    url: 'https://cybersecuresme.kgstaging.workers.dev',
    operator: {
      name: 'Teh Kim Guan',
      email: 'cybersecuresme@agentmail.to',
    },
    skills: [
      {
        name: 'directory-search',
        type: 'query',
        description:
          'Query the Cyber Secure SME verified Malaysian cybersecurity provider directory. Supports filtering by category (8 categories: managed security, endpoint and network security, penetration testing and VAPT, cloud and email security, GRC and compliance, SOC and incident response, security awareness training, data protection and backup) and by state (all 16 Malaysian states). Returns provider name, slug, verification level, categories, and profile URL. See https://cybersecuresme.kgstaging.workers.dev/llms.txt for the full provider and category index.',
        url: 'https://cybersecuresme.kgstaging.workers.dev/llms.txt',
        'x-phase': 'live',
      },
      {
        name: 'listing-enquiry',
        type: 'action',
        description:
          'Submit a listing or enquiry for a cybersecurity provider on Cyber Secure SME. Email cybersecuresme@agentmail.to with provider name, category, state, and website. The request is reviewed and the provider is added within 3 business days.',
        url: 'https://cybersecuresme.kgstaging.workers.dev/list-your-company',
        'x-phase': 'live-mailto',
        'x-intake': 'cybersecuresme@agentmail.to',
      },
      {
        name: 'directory-index',
        type: 'utility',
        description:
          'Plain-text machine-readable index of all providers, categories, states, and tools on Cyber Secure SME. Updated on each deploy. Available at https://cybersecuresme.kgstaging.workers.dev/llms.txt and https://cybersecuresme.kgstaging.workers.dev/llms-full.txt.',
        url: 'https://cybersecuresme.kgstaging.workers.dev/llms-full.txt',
        'x-phase': 'live',
      },
    ],
  };

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
