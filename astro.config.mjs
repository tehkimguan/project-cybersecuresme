import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Cyber Secure SME — pure static -> Cloudflare Workers Static Assets.
export default defineConfig({
  // Canonical host. Interim: live Workers subdomain (kgstaging account).
  // When the cybersecuresme.com custom domain is connected, change this to 'https://cybersecuresme.com'.
  site: 'https://cybersecuresme.kgstaging.workers.dev',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-MY', ms: 'ms-MY' } },
      serialize(item) {
        const url = new URL(item.url);
        // Normalise: strip /ms/ prefix so MS routes share the EN priority map.
        const path = url.pathname.replace(/^\/ms\//, '/').replace(/^\/ms$/, '/');

        if (path === '/') return { ...item, priority: 1.0, changefreq: 'weekly' };
        if (path === '/providers' || path === '/direktori') return { ...item, priority: 0.9, changefreq: 'weekly' };
        if (path.match(/^\/provider\//) || path.match(/^\/pembekal\//)) return { ...item, priority: 0.9, changefreq: 'monthly' };
        if (path.match(/^\/providers\/[^/]+$/) || path.match(/^\/direktori\/[^/]+$/)) return { ...item, priority: 0.8, changefreq: 'weekly' };
        if (path.match(/^\/tools\//) || path.match(/^\/alat\//)) return { ...item, priority: 0.75, changefreq: 'monthly' };
        if (path.match(/^\/blog\//)) return { ...item, priority: 0.7, changefreq: 'weekly' };
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
