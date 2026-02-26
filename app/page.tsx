import Image from 'next/image';
import { Suspense } from 'react';

import { LeadForm } from '@/components/forms/lead-form';
import { AgentVoices, AgentVoicesFallback } from '@/components/landing/agent-voices';
import { HeroSection } from '@/components/landing/hero-section';
import { SiteHeader } from '@/components/landing/site-header';
import { getLandingContent } from '@/features/landing/content';

export const runtime = 'nodejs';

export default async function Page() {
  const content = await getLandingContent();

  return (
    <main>
      <SiteHeader navigation={content.navigation} />
      <HeroSection hero={content.hero} />

      <section className="section" id="expertise">
        <div className="container spotlight-grid">
          <article className="focus-card reveal">
            <h2>{content.dna.title}</h2>
            <p>{content.dna.body}</p>
          </article>
          <article className="focus-card reveal reveal-delay">
            <h2>{content.problem.title}</h2>
            <p>{content.problem.body}</p>
          </article>
          <article className="focus-card reveal reveal-delay-2">
            <h2>{content.platform.title}</h2>
            <p>{content.platform.body}</p>
          </article>
        </div>
      </section>

      <section className="section" id="banks">
        <div className="container section-split">
          <div>
            <h2 className="section-title">{content.banks.title}</h2>
            <p className="section-subtitle">{content.banks.subtitle}</p>
            <div className="card-grid">
              {content.banks.values.map((value) => (
                <article className="value-card reveal" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="section-media reveal">
            <Image alt={content.banks.media.alt} fill sizes="(max-width: 980px) 100vw, 34vw" src={content.banks.media.src} />
          </aside>
        </div>
      </section>

      <section className="section section-contrast" id="insurers">
        <div className="container">
          <div className="section-headline">
            <div>
              <h2 className="section-title">{content.insurers.title}</h2>
              <p className="section-subtitle">{content.insurers.subtitle}</p>
            </div>
            <div className="headline-image reveal">
              <Image
                alt={content.insurers.media.alt}
                fill
                sizes="(max-width: 980px) 100vw, 28vw"
                src={content.insurers.media.src}
              />
            </div>
          </div>

          <div className="stack-grid">
            <article className="stack-card reveal">
              <h3>Гибкость и контроль над продуктами</h3>
              <ul>
                {content.insurers.productControl.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="stack-card reveal reveal-delay">
              <h3>Управление агентской сетью и продажами</h3>
              <ul>
                {content.insurers.salesControl.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="stack-card reveal reveal-delay-2">
              <h3>Технологии для интеграции</h3>
              <ul>
                {content.insurers.integrations.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="technology">
        <div className="container tech-layout">
          <div>
            <h2 className="section-title">{content.technology.title}</h2>
            <p className="section-subtitle">{content.technology.body}</p>

            <div className="matrix-grid">
              {content.technology.matrix.map((row) => (
                <article className="matrix-row" key={row.audience}>
                  <h3>{row.audience}</h3>
                  <p>{row.capability}</p>
                </article>
              ))}
            </div>

            <div className="component-grid">
              {content.technology.components.map((component) => (
                <article className="component-card" key={component.title}>
                  <h3>{component.title}</h3>
                  <p>{component.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="section-media tech-media reveal">
            <Image
              alt={content.technology.media.alt}
              fill
              sizes="(max-width: 980px) 100vw, 30vw"
              src={content.technology.media.src}
            />
          </aside>
        </div>
      </section>

      <section className="section" id="voices">
        <div className="container">
          <h2 className="section-title">Инструмент, который любят агенты-профессионалы.</h2>
          <Suspense fallback={<AgentVoicesFallback />}>
            <AgentVoices />
          </Suspense>
        </div>
      </section>

      <section className="section cta-band" id="contacts">
        <div className="container contact-shell">
          <div>
            <h2 className="section-title">{content.cta.title}</h2>
            <p className="section-subtitle">{content.cta.body}</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Платформа SRG</p>
          <p>Страховая инфраструктура для банков и страховых компаний</p>
        </div>
      </footer>
    </main>
  );
}
