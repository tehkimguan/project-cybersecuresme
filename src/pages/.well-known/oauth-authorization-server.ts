/**
 * OAuth 2.0 Authorization Server Metadata -- RFC 8414
 * Reference: https://www.rfc-editor.org/rfc/rfc8414
 *
 * Phase 2 placeholder. The auth layer (Supabase magic-link + claim flow) is planned
 * for a future phase alongside the provider claim/dashboard flow.
 * Issuer: https://auth.cybersecuresme.my (DNS not yet provisioned)
 */
import type { APIRoute } from 'astro';

export const prerender = true;

const ISSUER = 'https://auth.cybersecuresme.my';

export const GET: APIRoute = () => {
  const metadata = {
    issuer: ISSUER,
    authorization_endpoint: `${ISSUER}/oauth/authorize`,
    token_endpoint: `${ISSUER}/oauth/token`,
    jwks_uri: `${ISSUER}/.well-known/jwks.json`,
    registration_endpoint: `${ISSUER}/oauth/register`,
    scopes_supported: [
      'openid',
      'email',
      'profile',
      'provider:claim',
      'provider:edit',
    ],
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code', 'refresh_token'],
    token_endpoint_auth_methods_supported: [
      'client_secret_basic',
      'client_secret_post',
    ],
    revocation_endpoint: `${ISSUER}/oauth/revoke`,
    introspection_endpoint: `${ISSUER}/oauth/introspect`,
    service_documentation: 'https://cybersecuresme.kgstaging.workers.dev/docs/auth',
    'x-status': 'phase-2-planned',
    'x-phase': 'phase-2-planned',
    'x-note':
      'This endpoint is a forward-declaration. The OAuth authorization server at auth.cybersecuresme.my is not yet live. Contact cybersecuresme@agentmail.to for early access.',
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
