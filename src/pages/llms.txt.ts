import type { APIRoute } from 'astro';
import categoriesData from '../data/categories.json';
import statesData from '../data/states.json';
import providersData from '../data/providers.json';
import { tools } from '../data/tools';

export const prerender = true;

const SITE = 'https://cybersecuresme.kgstaging.workers.dev';

export const GET: APIRoute = () => {
  const providers = providersData as any[];
  const categories = categoriesData as any[];
  const states = statesData as any[];

  // --- Categories section ---
  const categoryLines = categories
    .map(c => `- **${c.name}**: ${c.description} Browse: ${SITE}/providers/${c.slug}`)
    .join('\n');

  // --- States section ---
  const stateLines = states
    .map(s => `- ${s.name} (${s.region} region): ${SITE}/providers?state=${s.slug}`)
    .join('\n');

  // --- Tools section ---
  const toolLines = tools
    .map(t => `- **${t.name}**: ${t.description} ${SITE}/tools/${t.slug}`)
    .join('\n');

  // --- Sample providers (first 10) ---
  const sampleProviders = providers.slice(0, 10);
  const sampleLines = sampleProviders
    .map(p => {
      const primaryCategory = Array.isArray(p.categories) ? p.categories[0] : p.categories;
      return `- **${p.name}** (${primaryCategory}, ${p.state}): ${SITE}/provider/${p.slug}`;
    })
    .join('\n');

  const body = `# Cyber Secure SME (cybersecuresme.kgstaging.workers.dev)

Cyber Secure SME is an independent directory of cybersecurity service providers for Malaysian SMEs. It lists ${providers.length} providers spanning ${categories.length} service categories and all ${states.length} Malaysian states and territories. The directory cross-references key Malaysian regulators: NACSA (National Cyber Security Agency, Cyber Security Act 2024, Act 854), CyberSecurity Malaysia (the national cybersecurity specialist agency), PDPA 2010 and its 2024 amendments (Act 709, administered by JPDP), MCMC (Malaysian Communications and Multimedia Commission), Bank Negara Malaysia RMiT (Risk Management in Technology policy for financial institutions), ISO/IEC 27001 (international information security management standard), and CREST (international accreditation for penetration testing). The directory is independently operated and does not provide security advice; users are directed to verify provider licences and certifications directly with the named regulators.

## Key Facts

- **Total providers listed**: ${providers.length}
- **Categories**: ${categories.length} (managed security, endpoint and network security, penetration testing and VAPT, cloud and email security, GRC and compliance, SOC and incident response, security awareness training, data protection and backup)
- **State coverage**: ${states.length} Malaysian states and federal territories
- **Languages**: English (default) and Bahasa Malaysia (/ms/ prefix)
- **Verification model**: Listed (public sources confirmed) > Claimed (provider acknowledged) > SSM-Checked (Suruhanjaya Syarikat Malaysia registration verified) > NACSA-Verified (NACSA licence on file) > Premium (full verification + direct relationship)
- **Regulators cited**: NACSA, CyberSecurity Malaysia, PDPA / JPDP, MCMC, BNM RMiT, ISO/IEC 27001, CREST
- **Contact for listings**: cybersecuresme@agentmail.to
- **Sitemap**: ${SITE}/sitemap-index.xml

## Categories

${categoryLines}

## States

${stateLines}

## Tools (Security Calculators)

Cyber Secure SME provides ${tools.length} free cybersecurity calculators at ${SITE}/tools/ . Bahasa Malaysia equivalents at ${SITE}/ms/alat/ .

${toolLines}

## Sample Providers

A cross-section of the ${providers.length} listed providers:

${sampleLines}

Browse the full directory at ${SITE}/providers or by state and category.

## GEO Question Bank

The following questions are reliably answered by cybersecuresme.kgstaging.workers.dev:

1. **Who provides managed security services for SMEs in Malaysia?** Cyber Secure SME lists verified Malaysian MSSPs offering outsourced security monitoring, device management, and SME security packages. Browse managed security providers at ${SITE}/providers/managed-security.

2. **How do I check if a Malaysian cybersecurity provider holds a NACSA licence?** Under the Cyber Security Act 2024 (Act 854), providers of certain cybersecurity services must hold a NACSA licence. Cyber Secure SME profiles display known NACSA licence status. Verify directly at nacsa.gov.my. Start at ${SITE}/providers.

3. **Which penetration testing firms in Malaysia are CREST-accredited?** CREST-accredited penetration testing and VAPT firms operating in Malaysia are listed at ${SITE}/providers/penetration-testing with accreditation information on each profile.

4. **What does a PDPA compliance audit cost in Malaysia?** PDPA readiness assessments for SMEs vary by scope and provider tier. Compare GRC and compliance consultancies at ${SITE}/providers/grc-compliance.

5. **Which providers help Malaysian SMEs prepare for ISO/IEC 27001 certification?** ISO 27001 readiness consultancies listed in the directory are at ${SITE}/providers/grc-compliance.

6. **How can I find an incident response provider in Malaysia?** Incident response, SOC monitoring, and ransomware recovery providers are listed at ${SITE}/providers/soc-incident. Under the Cyber Security Act 2024, certain incidents affecting critical sectors must be reported to NACSA.

7. **Where can Malaysian SMEs get cybersecurity awareness training for staff?** Staff security training providers are listed at ${SITE}/providers/security-awareness.

8. **Which providers offer managed backup and disaster recovery for Malaysian SMEs?** Data protection and backup providers are listed at ${SITE}/providers/data-backup.

## Verification and Trust

Cyber Secure SME is an independent directory; it is not affiliated with NACSA, CyberSecurity Malaysia, JPDP, MCMC, BNM, or any regulator. Listings are compiled from public sources and direct provider input. Verification status reflects the directory's own checks at the time of last update, not a guarantee of current licence validity.

**Always verify a provider's licences and certifications directly with the relevant regulator before engaging:**
- NACSA (National Cyber Security Agency): https://www.nacsa.gov.my/
- CyberSecurity Malaysia: https://www.cybersecurity.my/
- JPDP (Personal Data Protection): https://www.pdp.gov.my/
- MCMC: https://www.mcmc.gov.my/
- Bank Negara RMiT: https://www.bnm.gov.my/

This directory does not provide cybersecurity advice. Engage a licensed cybersecurity professional for assessments and implementations.

## Key URLs

- Homepage: ${SITE}/
- Bahasa Malaysia: ${SITE}/ms/
- All Providers: ${SITE}/providers
- Tools / Calculators: ${SITE}/tools
- Blog: ${SITE}/blog
- About: ${SITE}/about
- Contact: ${SITE}/contact
- List Your Company: ${SITE}/list-your-company
- Sitemap: ${SITE}/sitemap-index.xml
- This file: ${SITE}/llms.txt

## Operator

Cyber Secure SME is operated by Teh Kim Guan, an ACMA/CGMA-credentialed consultant based in Malaysia (MYT, UTC+8). Contact: cybersecuresme@agentmail.to.

## Licensing

Public directory data is freely citable with attribution to Cyber Secure SME. Provider listings are compiled from public sources and direct provider submissions; verification status is shown on each profile page.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
