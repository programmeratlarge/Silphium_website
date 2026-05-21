import Link from 'next/link';
import { companyName, footerNav, disclaimers } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-silphium-charcoal/10 bg-silphium-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-lg font-semibold text-silphium-charcoal">
              {companyName}
            </span>
            <p className="mt-2 text-xs leading-5 text-silphium-muted">
              {disclaimers.footer}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-silphium-muted transition-colors hover:text-silphium-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-silphium-charcoal/10 pt-8">
          <p className="text-xs text-silphium-muted">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
