type Locale = 'en' | 'ms';

// Route segment translations for Cyber Secure SME
const SEGMENT_EN_TO_MS: Record<string, string> = {
  about: 'tentang',
  contact: 'hubungi',
  privacy: 'privasi',
  terms: 'terma',
  'list-your-company': 'senaraikan-syarikat',
  providers: 'direktori',
  provider: 'pembekal',
  tools: 'alat',
  blog: 'blog',
  // Wave 2+
  claim: 'tuntut',
  dashboard: 'papan-pemuka',
  login: 'log-masuk',
  admin: 'admin',
};

const SEGMENT_MS_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_EN_TO_MS).map(([en, ms]) => [ms, en])
);

// UI label dictionaries used by header/footer/homepage. Key names are stable
// across the build; only the copy changed for the cybersecurity vertical.
export const tEN = {
  clinics: 'Providers',
  categories: 'Services',
  tools: 'Tools',
  blog: 'Blog',
  about: 'About',
  contact: 'Contact',
  privacy: 'Privacy',
  terms: 'Terms',
  listYourClinic: 'List your company',
  browseByState: 'Browse by state',
  featuredClinics: 'Featured providers',
  browseCategories: 'Browse services',
  searchPlaceholder: 'Search providers, services, or states...',
  heroEyebrow: "MALAYSIA'S CYBERSECURITY DIRECTORY FOR SMEs",
  heroHeadline: 'Find a cybersecurity provider you can trust for your Malaysian business.',
  heroSubcopy:
    'From managed security and penetration testing to PDPA compliance and ransomware recovery. Browse providers by service and by state, alongside the security basics every small business should get right.',
  heroCta: 'Browse providers',
  heroSecondaryCta: 'List your company',
  howWeVerify: 'How we verify',
  toolsTeaser: 'Security tools',
  toolsTeaserSubcopy: 'Free calculators and self-checks to help your SME size and reduce its cyber risk.',
  forClinicOwners: 'Run a cybersecurity firm? Get listed.',
  forClinicOwnersSubcopy:
    'Claim your free listing or upgrade to a sponsored profile to reach Malaysian businesses searching for security help.',
  claimCta: 'Claim your listing',
  disclaimer:
    'Cyber Secure SME is an independent directory and not a regulator. A listing is not an endorsement. Always verify a provider\'s NACSA licence, certifications, and track record before engaging.',
  totalProviders: 'Providers',
  totalCategories: 'Services',
  totalStates: 'States',
  viewClinic: 'View provider',
  viewAllClinics: 'View all providers',
  featured: 'Featured',
  stateChipsLabel: 'Browse by state',
  toolsItems: [
    { label: 'Password Strength Checker', slug: 'password-strength-checker' },
    { label: 'Data Breach Cost Estimator', slug: 'data-breach-cost-estimator' },
    { label: 'Phishing Risk Self-Check', slug: 'phishing-risk-self-check' },
    { label: 'PDPA Readiness Checker', slug: 'pdpa-readiness-checker' },
    { label: 'Security Maturity Assessment', slug: 'security-maturity-assessment' },
    { label: 'Ransomware Exposure Score', slug: 'ransomware-exposure-score' },
    { label: 'IT Downtime Cost Calculator', slug: 'it-downtime-cost-calculator' },
    { label: 'Security Budget Estimator', slug: 'security-budget-estimator' },
  ],
  trustChips: [
    { label: 'NACSA', note: 'National Cyber Security Agency (Act 854)' },
    { label: 'CyberSecurity Malaysia', note: 'National cyber security specialist agency' },
    { label: 'PDPA / JPDP', note: 'Personal Data Protection (Act 709)' },
    { label: 'MCMC', note: 'Communications & Multimedia Commission' },
    { label: 'BNM RMiT', note: 'Bank Negara technology risk policy' },
    { label: 'ISO/IEC 27001', note: 'International ISMS standard' },
  ],
  footerDisclaimer:
    'Cyber Secure SME is an independent directory and not a regulator or a security provider. A listing is not an endorsement. Always verify a provider\'s NACSA licence (Cyber Security Act 2024), certifications (such as ISO 27001 or CREST), and track record with the provider before engaging.',
  copyright: '© 2026 Cyber Secure SME',
};

export const tMS = {
  clinics: 'Direktori',
  categories: 'Perkhidmatan',
  tools: 'Alat',
  blog: 'Blog',
  about: 'Tentang',
  contact: 'Hubungi',
  privacy: 'Privasi',
  terms: 'Terma',
  listYourClinic: 'Senaraikan syarikat anda',
  browseByState: 'Cari mengikut negeri',
  featuredClinics: 'Pembekal pilihan',
  browseCategories: 'Semak imbas perkhidmatan',
  searchPlaceholder: 'Cari pembekal, perkhidmatan, atau negeri...',
  heroEyebrow: 'DIREKTORI KESELAMATAN SIBER MALAYSIA UNTUK PKS',
  heroHeadline: 'Cari pembekal keselamatan siber yang boleh dipercayai untuk perniagaan Malaysia anda.',
  heroSubcopy:
    'Daripada keselamatan terurus dan ujian penembusan hingga pematuhan PDPA dan pemulihan ransomware. Semak imbas pembekal mengikut perkhidmatan dan negeri, bersama asas keselamatan yang setiap perniagaan kecil patut lakukan dengan betul.',
  heroCta: 'Semak imbas pembekal',
  heroSecondaryCta: 'Senaraikan syarikat',
  howWeVerify: 'Cara kami mengesahkan',
  toolsTeaser: 'Alat keselamatan',
  toolsTeaserSubcopy: 'Kalkulator dan semakan kendiri percuma untuk membantu PKS anda menilai dan mengurangkan risiko siber.',
  forClinicOwners: 'Mengendalikan firma keselamatan siber? Daftar sekarang.',
  forClinicOwnersSubcopy:
    'Tuntut penyenaraian percuma anda atau naik taraf ke profil tajaan untuk menjangkau perniagaan Malaysia yang mencari bantuan keselamatan.',
  claimCta: 'Tuntut penyenaraian anda',
  disclaimer:
    'Cyber Secure SME ialah direktori bebas dan bukan pengawal selia. Penyenaraian bukan pengesahan. Sentiasa sahkan lesen NACSA, pensijilan dan rekod prestasi pembekal sebelum melibatkan mereka.',
  totalProviders: 'Pembekal',
  totalCategories: 'Perkhidmatan',
  totalStates: 'Negeri',
  viewClinic: 'Lihat pembekal',
  viewAllClinics: 'Lihat semua pembekal',
  featured: 'Pilihan',
  stateChipsLabel: 'Semak imbas mengikut negeri',
  toolsItems: [
    { label: 'Penyemak Kekuatan Kata Laluan', slug: 'penyemak-kekuatan-kata-laluan' },
    { label: 'Penganggar Kos Pelanggaran Data', slug: 'penganggar-kos-pelanggaran-data' },
    { label: 'Semakan Risiko Pancingan', slug: 'semakan-risiko-pancingan' },
    { label: 'Penyemak Kesediaan PDPA', slug: 'penyemak-kesediaan-pdpa' },
    { label: 'Penilaian Kematangan Siber', slug: 'penilaian-kematangan-siber' },
    { label: 'Skor Pendedahan Ransomware', slug: 'skor-pendedahan-ransomware' },
    { label: 'Kalkulator Kos Gangguan IT', slug: 'kalkulator-kos-gangguan' },
    { label: 'Penganggar Bajet Keselamatan', slug: 'penganggar-bajet-keselamatan' },
  ],
  trustChips: [
    { label: 'NACSA', note: 'Agensi Keselamatan Siber Negara (Akta 854)' },
    { label: 'CyberSecurity Malaysia', note: 'Agensi pakar keselamatan siber negara' },
    { label: 'PDPA / JPDP', note: 'Perlindungan Data Peribadi (Akta 709)' },
    { label: 'MCMC', note: 'Suruhanjaya Komunikasi & Multimedia' },
    { label: 'BNM RMiT', note: 'Dasar risiko teknologi Bank Negara' },
    { label: 'ISO/IEC 27001', note: 'Standard ISMS antarabangsa' },
  ],
  footerDisclaimer:
    'Cyber Secure SME ialah direktori bebas dan bukan pengawal selia atau pembekal keselamatan. Penyenaraian bukan pengesahan. Sentiasa sahkan lesen NACSA (Akta Keselamatan Siber 2024), pensijilan (seperti ISO 27001 atau CREST) dan rekod prestasi pembekal sebelum melibatkan mereka.',
  copyright: '© 2026 Cyber Secure SME',
};

function stripLocalePrefix(path: string): { remainder: string; sourceLocale: Locale } {
  if (path === '/ms' || path === '/ms/') return { remainder: '/', sourceLocale: 'ms' };
  if (path.startsWith('/ms/')) return { remainder: path.slice(3), sourceLocale: 'ms' };
  return { remainder: path || '/', sourceLocale: 'en' };
}

export function translateRoute(
  path: string,
  targetLocale: Locale,
  altLocaleHref?: string
): string {
  if (altLocaleHref) return altLocaleHref;

  const { remainder, sourceLocale } = stripLocalePrefix(path);

  if (remainder === '/' || remainder === '') {
    return targetLocale === 'ms' ? '/ms' : '/';
  }

  const segments = remainder.replace(/^\//, '').replace(/\/$/, '').split('/');
  const [first, ...rest] = segments;

  let translatedFirst: string;
  if (sourceLocale === targetLocale) {
    translatedFirst = first;
  } else if (targetLocale === 'ms') {
    translatedFirst = SEGMENT_EN_TO_MS[first] ?? first;
  } else {
    translatedFirst = SEGMENT_MS_TO_EN[first] ?? first;
  }

  // Remaining segments (slugs) pass through unchanged; provider slugs are language-neutral
  const translatedRest = rest;

  const tail = [translatedFirst, ...translatedRest].join('/');
  return targetLocale === 'ms' ? `/ms/${tail}` : `/${tail}`;
}

export function enHrefFor(path: string, altLocaleHref?: string): string {
  return translateRoute(path, 'en', altLocaleHref);
}

export function msHrefFor(path: string, altLocaleHref?: string): string {
  return translateRoute(path, 'ms', altLocaleHref);
}
