import { buildLlmsFullTxt } from '@/lib/llms';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/** Everything an AI assistant needs to describe the business, in one file. */
export function GET() {
  return new Response(buildLlmsFullTxt(siteUrl().toString()), {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
}
