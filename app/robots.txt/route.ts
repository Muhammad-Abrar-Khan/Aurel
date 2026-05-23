import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const robots = `User-agent: *
Allow: /
Sitemap: https://aurel-app-3498d.web.app/sitemap.xml
Host: https://aurel-app-3498d.web.app
`;

export function GET() {
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  });
}
