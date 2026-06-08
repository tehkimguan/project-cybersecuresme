export type ToolMeta = {
  slug: string;
  slug_ms: string;
  name: string;
  name_ms: string;
  description: string;
  description_ms: string;
  category: string;
  related_categories: string[];
  component: string;
};

export const tools: ToolMeta[] = [
  {
    slug: 'password-strength-checker',
    slug_ms: 'penyemak-kekuatan-kata-laluan',
    name: 'Password Strength & Crack-Time Checker',
    name_ms: 'Penyemak Kekuatan & Masa Pecah Kata Laluan',
    description: 'Estimate how long a password would take to crack and get plain-language tips to make it stronger. Runs entirely in your browser; nothing is sent anywhere.',
    description_ms: 'Anggarkan berapa lama kata laluan diambil untuk dipecahkan dan dapatkan petua mudah untuk menguatkannya. Berjalan sepenuhnya dalam pelayar anda; tiada apa-apa dihantar ke mana-mana.',
    category: 'security-awareness',
    related_categories: ['security-awareness', 'endpoint-network', 'managed-security'],
    component: 'PasswordStrengthCalc.astro',
  },
  {
    slug: 'data-breach-cost-estimator',
    slug_ms: 'penganggar-kos-pelanggaran-data',
    name: 'SME Data Breach Cost Estimator',
    name_ms: 'Penganggar Kos Pelanggaran Data PKS',
    description: 'Estimate the indicative ringgit cost of a data breach for your business based on records held, downtime, and response. An indicative figure to support budgeting, not a quote.',
    description_ms: 'Anggarkan kos ringgit indikatif sesuatu pelanggaran data untuk perniagaan anda berdasarkan rekod yang disimpan, gangguan dan tindak balas. Angka indikatif untuk membantu belanjawan, bukan sebut harga.',
    category: 'grc-compliance',
    related_categories: ['grc-compliance', 'soc-incident', 'data-backup'],
    component: 'DataBreachCostCalc.astro',
  },
  {
    slug: 'phishing-risk-self-check',
    slug_ms: 'semakan-risiko-pancingan',
    name: 'Phishing Risk Self-Check',
    name_ms: 'Semakan Risiko Pancingan Data',
    description: 'A short self-assessment that scores how exposed your team is to phishing and business email scams, with the next steps that cut risk fastest.',
    description_ms: 'Penilaian kendiri ringkas yang menilai sejauh mana pasukan anda terdedah kepada pancingan data dan penipuan e-mel perniagaan, dengan langkah seterusnya yang mengurangkan risiko paling cepat.',
    category: 'security-awareness',
    related_categories: ['security-awareness', 'cloud-security', 'managed-security'],
    component: 'PhishingRiskCalc.astro',
  },
  {
    slug: 'pdpa-readiness-checker',
    slug_ms: 'penyemak-kesediaan-pdpa',
    name: 'PDPA Compliance Readiness Checker',
    name_ms: 'Penyemak Kesediaan Pematuhan PDPA',
    description: 'Check how ready your business is for the Personal Data Protection Act 2010 and its 2024 amendments, including breach notification and the data protection officer requirement.',
    description_ms: 'Semak sejauh mana perniagaan anda bersedia untuk Akta Perlindungan Data Peribadi 2010 dan pindaan 2024, termasuk pemberitahuan pelanggaran dan keperluan pegawai perlindungan data.',
    category: 'grc-compliance',
    related_categories: ['grc-compliance', 'managed-security'],
    component: 'PdpaReadinessCalc.astro',
  },
  {
    slug: 'security-maturity-assessment',
    slug_ms: 'penilaian-kematangan-siber',
    name: 'Cybersecurity Maturity Self-Assessment',
    name_ms: 'Penilaian Kendiri Kematangan Keselamatan Siber',
    description: 'Score your SME against the cybersecurity basics every business should have in place, and see where to focus first. Based on widely used baseline controls.',
    description_ms: 'Nilai PKS anda berdasarkan asas keselamatan siber yang perlu ada pada setiap perniagaan, dan lihat di mana perlu fokus dahulu. Berdasarkan kawalan asas yang digunakan secara meluas.',
    category: 'managed-security',
    related_categories: ['managed-security', 'grc-compliance', 'endpoint-network'],
    component: 'SecurityMaturityCalc.astro',
  },
  {
    slug: 'ransomware-exposure-score',
    slug_ms: 'skor-pendedahan-ransomware',
    name: 'Ransomware Exposure Score',
    name_ms: 'Skor Pendedahan Ransomware',
    description: 'Answer a few questions about your backups, patching, and access controls to see how exposed your business is to ransomware, and what to fix first.',
    description_ms: 'Jawab beberapa soalan tentang sandaran, tampalan dan kawalan akses anda untuk melihat sejauh mana perniagaan anda terdedah kepada ransomware, dan apa yang perlu dibaiki dahulu.',
    category: 'soc-incident',
    related_categories: ['soc-incident', 'data-backup', 'endpoint-network'],
    component: 'RansomwareExposureCalc.astro',
  },
  {
    slug: 'it-downtime-cost-calculator',
    slug_ms: 'kalkulator-kos-gangguan',
    name: 'IT Downtime Cost Calculator',
    name_ms: 'Kalkulator Kos Gangguan IT',
    description: 'Work out what one hour of IT downtime costs your business in lost revenue and idle staff time, so you can size your backup and recovery budget.',
    description_ms: 'Kira kos satu jam gangguan IT kepada perniagaan anda dari segi hasil hilang dan masa kakitangan terbiar, supaya anda boleh menetapkan belanjawan sandaran dan pemulihan.',
    category: 'data-backup',
    related_categories: ['data-backup', 'soc-incident', 'managed-security'],
    component: 'DowntimeCostCalc.astro',
  },
  {
    slug: 'security-budget-estimator',
    slug_ms: 'penganggar-bajet-keselamatan',
    name: 'SME Cybersecurity Budget Estimator',
    name_ms: 'Penganggar Bajet Keselamatan Siber PKS',
    description: 'Get an indicative annual cybersecurity budget range for your business based on size, sector, and risk, as a percentage of IT spend. A planning aid, not a quote.',
    description_ms: 'Dapatkan julat belanjawan keselamatan siber tahunan indikatif untuk perniagaan anda berdasarkan saiz, sektor dan risiko, sebagai peratusan perbelanjaan IT. Alat perancangan, bukan sebut harga.',
    category: 'managed-security',
    related_categories: ['managed-security', 'grc-compliance'],
    component: 'SecurityBudgetCalc.astro',
  },
];
