/**
 * MCP Server Card -- SEP-1649 (Model Context Protocol)
 * Reference: https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 *
 * Phase 4 placeholder. The MCP server is scoped for a future phase.
 * Transport stub: https://mcp.cybersecuresme.my (DNS not yet provisioned)
 */
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const serverCard = {
    $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.0.0',
    status: 'planned',
    'x-availability-date': '2027-01-01',
    'x-phase': 'phase-4-planned',
    serverInfo: {
      name: 'cybersecuresme-directory',
      version: '0.1.0-planned',
      description:
        'MCP server for the Cyber Secure SME verified Malaysian cybersecurity provider directory. Exposes provider search, category taxonomy (8 categories), state filters (all 16 Malaysian states), and per-provider profile queries. Requires API key (free tier: 100 req/day).',
      homepage: 'https://cybersecuresme.kgstaging.workers.dev',
      contact: 'cybersecuresme@agentmail.to',
    },
    transport: {
      type: 'http',
      url: 'https://mcp.cybersecuresme.my',
    },
    authentication: {
      type: 'bearer',
      description:
        'Bearer token. Obtain at https://cybersecuresme.kgstaging.workers.dev/dashboard (planned). Free tier token available without payment.',
      'x-registration-url': 'https://cybersecuresme.kgstaging.workers.dev/dashboard',
    },
    capabilities: {
      tools: [],
      resources: [
        {
          uri: 'https://cybersecuresme.kgstaging.workers.dev/llms.txt',
          name: 'Directory Index',
          description:
            'Plain-text index of all providers, categories, states, tools, and API endpoints. Machine-readable summary of the full cybersecurity provider directory. Updated on each deploy.',
          mimeType: 'text/plain',
        },
        {
          uri: 'https://cybersecuresme.kgstaging.workers.dev/llms-full.txt',
          name: 'Full Directory Corpus',
          description:
            'Complete corpus dump: site description, all 8 categories with descriptions, all provider profiles with name, category, state, key facts, and canonical URL. Suitable for RAG ingestion.',
          mimeType: 'text/plain',
        },
      ],
      prompts: [],
    },
    privacy: {
      policy_url: 'https://cybersecuresme.kgstaging.workers.dev/privacy',
      contact: 'cybersecuresme@agentmail.to',
      data_residency: 'Malaysia / Singapore (Hetzner SIN)',
    },
  };

  return new Response(JSON.stringify(serverCard, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
