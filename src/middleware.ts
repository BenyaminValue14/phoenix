import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
 
const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};

export default function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}