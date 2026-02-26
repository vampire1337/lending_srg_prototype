import Image from 'next/image';
import Link from 'next/link';

import { BankRevenueIcon, InsurerControlIcon, PlatformInfrastructureIcon } from '@/components/landing/srg-svg-icons';
import type { LandingContent } from '@/features/landing/types';

type HeroSectionProps = {
  hero: LandingContent['hero'];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const visuals = [BankRevenueIcon, InsurerControlIcon, PlatformInfrastructureIcon];

  return (
    <section className="hero section" id="top">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Страховая инфраструктура SRG</p>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <Link className="primary-button" href="#contacts">
              {hero.cta}
            </Link>
            <Link className="ghost-button" href="#technology">
              Смотреть API-возможности
            </Link>
          </div>
          <div className="pillars-grid">
            {hero.pillars.map((pillar, index) => {
              const Visual = visuals[index] ?? PlatformInfrastructureIcon;

              return (
                <article key={pillar.title} className="pillar-card">
                  <div className="pillar-visual" aria-hidden="true">
                    <Visual />
                  </div>
                  <h2>{pillar.title}</h2>
                  <p>{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="hero-media reveal">
          <Image
            alt={hero.media.alt}
            className="hero-photo"
            height={900}
            loading="eager"
            src={hero.media.src}
            width={1200}
          />
          <div className="hero-badge hero-badge-top">
            <span>API-подход</span>
            <strong>Интеграция за недели, не за кварталы</strong>
          </div>
          <div className="hero-badge hero-badge-bottom">
            <span>Поток андеррайтинга</span>
            <strong>Агент и андеррайтер в едином контуре</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
