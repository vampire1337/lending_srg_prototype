import Link from 'next/link';
import Image from 'next/image';

import type { NavItem } from '@/features/landing/types';

type SiteHeaderProps = {
  navigation: NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="#top">
          <Image alt="Платформа SRG" className="brand-logo" height={40} src="/srg-logo.svg" width={168} />
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
