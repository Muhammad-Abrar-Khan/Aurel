import { NextResponse } from 'next/server';
import { APP_URL } from '@/lib/constants';

export const dynamic = 'force-static';

const robots = `User-agent: *
Allow: /
Sitemap: ${APP_URL}/sitemap.xml
Host: ${APP_URL}
`;

export function GET() {
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  });
}
