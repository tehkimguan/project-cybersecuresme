/**
 * API Catalog -- RFC 9727
 * https://www.rfc-editor.org/rfc/rfc9727
 * Appendix A: linkset+json format
 *
 * Content-Type: application/linkset+json
 * Describes the planned and live API surfaces for Cyber Secure SME.
 */
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const catalog = {
    linkset: [
      {
        anchor: 'https://api.cybersecuresme.my/v1/providers',
        'service-desc': [
          {
            href: 'https://api.cybersecuresme.my/openapi.yaml',
            type: 'application/vnd.oai.openapi+yaml',
          },
        ],
        'service-doc': [
          {
            href: 'https://api.cybersecuresme.my/docs/api',
            type: 'text/html',
          },
        ],
        status: [
          {
            href: 'https://api.cybersecuresme.my/health',
          },
        ],
        description:
          'Phase 4 -- planned. Public REST API for the Cyber Secure SME cybersecurity provider directory. Endpoints: /v1/providers, /v1/categories, /v1/states, /v1/search. Free tier: 100 req/day. Authentication: Bearer token.',
        'x-phase': 'phase-4-planned',
        'x-contact': 'cybersecuresme@agentmail.to',
      },
      {
        anchor: 'https://cybersecuresme.kgstaging.workers.dev/llms.txt',
        'service-doc': [
          {
            href: 'https://cybersecuresme.kgstaging.workers.dev/llms.txt',
            type: 'text/plain',
          },
        ],
        description:
          'Live. Plain-text machine-readable index of all providers, categories, states, and tools. No authentication required. Updated on each deploy.',
        'x-phase': 'live',
        'x-contact': 'cybersecuresme@agentmail.to',
      },
      {
        anchor: 'https://cybersecuresme.kgstaging.workers.dev/llms-full.txt',
        'service-doc': [
          {
            href: 'https://cybersecuresme.kgstaging.workers.dev/llms-full.txt',
            type: 'text/plain',
          },
        ],
        description:
          'Live. Full corpus dump of all provider profiles in plain text. Suitable for RAG ingestion and agent context loading. No authentication required.',
        'x-phase': 'live',
        'x-contact': 'cybersecuresme@agentmail.to',
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
