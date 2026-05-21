'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { companyName, headerNav } from '@/content/site';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-silphium-charcoal/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-silphium-charcoal"
        >
          {companyName}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {headerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'font-medium text-silphium-charcoal'
                      : 'text-silphium-muted hover:text-silphium-charcoal'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-silphium-red px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-silphium-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silphium-red focus-visible:ring-offset-2 md:inline-flex"
        >
          Contact us
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-silphium-muted transition-colors hover:text-silphium-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silphium-charcoal md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-silphium-charcoal/10 bg-white px-6 py-4 md:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {headerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? 'font-medium text-silphium-charcoal'
                        : 'text-silphium-muted hover:text-silphium-charcoal'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-silphium-red px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-silphium-red/90"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
