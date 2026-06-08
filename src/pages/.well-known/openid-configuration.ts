/**
 * OpenID Connect Discovery Metadata
 * Reference: https://openid.net/specs/openid-connect-discovery-1_0.html
 *
 * Phase 2 placeholder. Auth layer (Supabase magic-link + future SSO) is planned
 * alongside the provider claim/dashboard flow.
 *
 * Non-standard x-* fields communicate planned status to agents that inspect this
 * document. Agents that do not recognise x-* fields will safely ignore them
 * (per OIDC spec section 3).
 *
 * Issuer: https://auth.cybersecuresme.my (DNS not yet provisioned)
 */
import type { APIRoute } from 'astro';

export const prerender = true;

const ISSUER = 'https://auth.cybersecuresme.my';

export const GET: APIRoute = () => {
  const config = {
    issuer: ISSUER,
    authorization_endpoint: `${ISSUER}/oauth/authorize`,
    token_endpoint: `${ISSUER}/oauth/token`,
    userinfo_endpoint: `${ISSUER}/oauth/userinfo`,
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
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256'],
    token_endpoint_auth_methods_supported: [
      'client_secret_basic',
      'client_secret_post',
    ],
    claims_supported: [
      'sub',
      'iss',
      'aud',
      'exp',
      'iat',
      'email',
      'email_verified',
      'name',
      'picture',
    ],
    service_documentation: 'https://cybersecuresme.kgstaging.workers.dev/docs/auth',
    op_policy_uri: 'https://cybersecuresme.kgstaging.workers.dev/privacy',
    op_tos_uri: 'https://cybersecuresme.kgstaging.workers.dev/terms',
    'x-status': 'phase-2-planned',
    'x-phase': 'phase-2-planned',
    'x-note':
      'This endpoint is a forward-declaration. The auth service at auth.cybersecuresme.my is not yet live. DNS, Supabase auth project, and claim flow are scheduled for Phase 2. Contact cybersecuresme@agentmail.to for early access.',
  };

  return new Response(JSON.stringify(config, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
