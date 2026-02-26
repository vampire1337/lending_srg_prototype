'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { NavItem } from '@/features/landing/types';

type SiteHeaderProps = {
  navigation: NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const onResize = () => {
      if (window.innerWidth > 780) {
        setMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link aria-label="Платформа SRG" className="brand" href="#top">
          <span aria-hidden="true" className="brand-wordmark">
            SRG
          </span>
        </Link>
        <button
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          aria-label="Открыть меню"
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-shell${menuOpen ? ' is-open' : ''}`}>
          <nav aria-label="Навигация по разделам" className="nav-links" id="site-nav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link className="header-cta" href="#contacts">
          Запросить демо
        </Link>
      </div>
    </header>
  );
}
