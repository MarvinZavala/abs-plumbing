import { buildLlmsTxt } from '@/lib/llms';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/** https://llmstxt.org — a plain-language map of the site for AI assistants. */
export function GET() {
  return new Response(buildLlmsTxt(siteUrl().toString()), {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
}
