/**
 * OAuth 2.0 Protected Resource Metadata -- RFC 9728
 * Reference: https://www.rfc-editor.org/rfc/rfc9728
 *
 * Declares the resource server at api.cybersecuresme.my and its associated
 * authorization server. Phase 4 placeholder.
 *
 * resource: https://api.cybersecuresme.my
 * auth server: https://auth.cybersecuresme.my (Phase 2, planned)
 * API live date: Phase 4, planned
 */
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const metadata = {
    resource: 'https://api.cybersecuresme.my',
    authorization_servers: ['https://auth.cybersecuresme.my'],
    scopes_supported: [
      'openid',
      'email',
      'profile',
      'provider:claim',
      'provider:edit',
    ],
    bearer_methods_supported: ['header'],
    resource_documentation: 'https://api.cybersecuresme.my/docs/api',
    resource_policy_uri: 'https://cybersecuresme.kgstaging.workers.dev/privacy',
    'x-status': 'phase-4-planned',
    'x-phase': 'phase-4-planned',
    'x-note':
      'The resource server at api.cybersecuresme.my is not yet live. The authorization server at auth.cybersecuresme.my is a Phase 2 item. Contact cybersecuresme@agentmail.to for early-access registration.',
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
