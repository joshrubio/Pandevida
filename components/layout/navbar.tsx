'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/components/images/logo-compact.png';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { i18n, type Locale } from '@/i18n-config';

interface NavbarProps {
  dictionary: {
    navigation: {
      home: string;
      videos: string;
      about: string;
      contact: string;
    };
  };
  lang: Locale;
}

export function Navbar({ dictionary, lang }: NavbarProps) {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const navLinks = [
    { href: `/${lang}`, label: dictionary.navigation.home },
    { href: `/${lang}/#videos`, label: dictionary.navigation.videos },
    { href: `/${lang}/#about`, label: dictionary.navigation.about },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Pan de Vida Logo"
            width={50}
            height={50}
            className="w-12 h-12 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-primary">Pan de Vida</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 px-2 sm:px-3">
                <Globe className="h-4 w-4" />
                <span className="font-medium hidden sm:inline-block">
                  {lang === 'english' ? 'English' : lang === 'spanish' ? 'Español' : 'العربية'}
                </span>
                <span className="font-medium sm:hidden">
                  {lang === 'english' ? 'EN' : lang === 'spanish' ? 'ES' : 'AR'}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {i18n.locales.map((locale) => (
                <DropdownMenuItem key={locale} asChild>
                  <Link href={redirectedPathName(locale)} className="flex items-center gap-2 cursor-pointer w-full">
                    <span className="text-lg">
                      {locale === 'english' ? '🇺🇸' : locale === 'spanish' ? '🇪🇸' : '🇦🇷'}
                    </span>
                    <span>
                      {locale === 'english' ? 'English' : locale === 'spanish' ? 'Español' : 'العربية'}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm">
            <Link href={`/${lang}/#contact`}>{dictionary.navigation.contact}</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col items-center gap-4 mt-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-2 text-center w-full"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full h-px bg-border my-2" />
              <div className="flex flex-col items-center gap-3 mt-2 w-full">
                <span className="text-sm font-medium text-muted-foreground p-2">Language / اللغة / Idioma</span>
                <div className="flex items-center justify-center gap-4 w-full">
                  <Link
                    href={redirectedPathName('english')}
                    className={`text-sm font-bold px-4 py-2 rounded-md transition-colors ${lang === 'english'
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                  >
                    EN
                  </Link>
                  <Link
                    href={redirectedPathName('spanish')}
                    className={`text-sm font-bold px-4 py-2 rounded-md transition-colors ${lang === 'spanish'
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                  >
                    ES
                  </Link>
                  <Link
                    href={redirectedPathName('arabic')}
                    className={`text-sm font-bold px-4 py-2 rounded-md transition-colors ${lang === 'arabic'
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                  >
                    AR
                  </Link>
                </div>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link href={`/${lang}/#contact`}>{dictionary.navigation.contact}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
