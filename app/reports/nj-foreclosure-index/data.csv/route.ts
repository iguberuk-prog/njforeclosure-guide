import { csv } from '../../../../lib/foreclosure-index';

// Static CSV of the NJ Sheriff Sale Index, generated at build time.
export const dynamic = 'force-static';

export function GET() {
  return new Response(csv(), {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
