import Link from 'next/link';

import type { NavItem } from '@/features/landing/types';

type SiteHeaderProps = {
  navigation: NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <strong>SRG Platform</strong>
            <small>Insurance Infrastructure</small>
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
