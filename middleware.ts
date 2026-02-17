import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // Standard BCP 47 codes for matching
    const standardLocales = ['en', 'es', 'ar'];

    // Use negotiator to get preferred languages from browser
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    try {
        // Match browser languages against standard codes
        const match = matchLocale(languages, standardLocales, 'en');

        // Map browser code to our custom full-name slugs
        const localeMap: Record<string, string> = {
            'en': 'english',
            'es': 'spanish',
            'ar': 'arabic'
        };

        return localeMap[match] || 'english';
    } catch {
        return 'english';
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
