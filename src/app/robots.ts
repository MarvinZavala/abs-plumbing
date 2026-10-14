import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

/**
 * Everyone may crawl: being found and described correctly by search engines and AI assistants is the point.
 * The named agents are listed so the intent stays explicit even if the "*" rule changes later.
 * OAI-SearchBot controls ChatGPT search; GPTBot/ClaudeBot/Google-Extended/Applebot-Extended are training opt-ins.
 */
const SEARCH_AND_AI_AGENTS = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'DuckDuckBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: SEARCH_AND_AI_AGENTS, allow: '/' },
    ],
    sitemap: new URL('/sitemap.xml', siteUrl()).toString(),
  };
}
