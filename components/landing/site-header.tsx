import Link from 'next/link';

import type { NavItem } from '@/features/landing/types';

type SiteHeaderProps = {
  navigation: NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link aria-label="Платформа SRG" className="brand" href="#top">
          <span aria-hidden="true" className="brand-wordmark">
            SRG
          </span>
        </Link>
        <nav aria-label="Навигация по разделам" className="nav-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="#contacts">
          Запросить демо
        </Link>
      </div>
    </header>
  );
}
