const techCircuitMarkup = String.raw`<svg aria-hidden="true" class="tech-circuit" viewBox="0 0 920 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
  <defs>
    <linearGradient id="techSurface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="58%" stop-color="#eef7fc" />
      <stop offset="100%" stop-color="#e7f2f8" />
    </linearGradient>
    <linearGradient id="techCenter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#113142" />
      <stop offset="100%" stop-color="#00a9d6" />
    </linearGradient>
    <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#1a394b" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect x="12" y="12" width="896" height="496" rx="30" fill="url(#techSurface)" stroke="#cde2ec" />

  <g opacity="0.34">
    <circle cx="460" cy="260" r="184" fill="none" stroke="#d2e6f0" stroke-width="1.4" />
    <circle cx="460" cy="260" r="134" fill="none" stroke="#dcecf4" stroke-width="1" />
  </g>

  <path class="flow-line" d="M 170 128 C 290 128 334 206 460 260" />
  <path class="flow-line-glow glow-a" d="M 170 128 C 290 128 334 206 460 260" />

  <path class="flow-line" d="M 154 260 C 280 260 334 260 460 260" />
  <path class="flow-line-glow glow-b" d="M 154 260 C 280 260 334 260 460 260" />

  <path class="flow-line" d="M 170 392 C 290 392 334 314 460 260" />
  <path class="flow-line-glow glow-c" d="M 170 392 C 290 392 334 314 460 260" />

  <path class="flow-line" d="M 460 260 C 586 260 630 126 756 126" />
  <path class="flow-line-glow glow-a" d="M 460 260 C 586 260 630 126 756 126" />

  <path class="flow-line" d="M 460 260 C 612 260 654 260 790 260" />
  <path class="flow-line-glow glow-b" d="M 460 260 C 612 260 654 260 790 260" />

  <path class="flow-line" d="M 460 260 C 586 260 630 394 756 394" />
  <path class="flow-line-glow glow-c" d="M 460 260 C 586 260 630 394 756 394" />

  <path class="flow-line" d="M 460 78 V 260" />
  <path class="flow-line-glow glow-b" d="M 460 78 V 260" />

  <g filter="url(#softShadow)" transform="translate(156 128)">
    <rect x="-82" y="-34" width="164" height="68" rx="17" fill="#ffffff" stroke="#9fcadd" />
    <text x="0" y="-5" fill="#1f4d62" font-size="14" font-weight="700" text-anchor="middle">Банковские каналы</text>
    <text x="0" y="16" fill="#5a7f91" font-size="12" text-anchor="middle">ДБО и мобильный банк</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(146 260)">
    <rect x="-92" y="-34" width="184" height="68" rx="17" fill="#ffffff" stroke="#9fcadd" />
    <text x="0" y="-5" fill="#1f4d62" font-size="14" font-weight="700" text-anchor="middle">Агентская сеть</text>
    <text x="0" y="16" fill="#5a7f91" font-size="12" text-anchor="middle">Оформление и продление</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(156 392)">
    <rect x="-82" y="-34" width="164" height="68" rx="17" fill="#ffffff" stroke="#9fcadd" />
    <text x="0" y="-5" fill="#1f4d62" font-size="14" font-weight="700" text-anchor="middle">Страховой контур</text>
    <text x="0" y="16" fill="#5a7f91" font-size="12" text-anchor="middle">Правила и тарифы</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(756 126)">
    <rect x="-74" y="-30" width="148" height="60" rx="15" fill="#102a38" stroke="#2e5970" />
    <text x="0" y="4" fill="#ecf8fd" font-size="13" font-weight="700" text-anchor="middle">CRM банка</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(790 260)">
    <rect x="-96" y="-30" width="192" height="60" rx="15" fill="#102a38" stroke="#2e5970" />
    <text x="0" y="4" fill="#ecf8fd" font-size="13" font-weight="700" text-anchor="middle">Учётные системы</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(756 394)">
    <rect x="-82" y="-30" width="164" height="60" rx="15" fill="#102a38" stroke="#2e5970" />
    <text x="0" y="4" fill="#ecf8fd" font-size="13" font-weight="700" text-anchor="middle">Документы и статус</text>
  </g>

  <g filter="url(#softShadow)" transform="translate(460 78)">
    <rect x="-94" y="-20" width="188" height="40" rx="12" fill="#102a38" stroke="#2e5970" />
    <text x="0" y="5" fill="#00b2e0" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="1.1">API-ШИНА</text>
  </g>

  <g class="tech-core" transform="translate(460 260)">
    <path d="M 0 -98 L 84 -50 V 50 L 0 98 L -84 50 V -50 Z" fill="rgba(255,255,255,0.94)" stroke="#89bfd6" stroke-width="2.2" filter="url(#softShadow)" />
    <path d="M 0 -78 L 66 -39 V 39 L 0 78 L -66 39 V -39 Z" fill="url(#techCenter)" stroke="#ffffff" stroke-width="1.6" />
    <path d="M -66 -39 L 0 0 L 66 -39 M 0 0 V 78" fill="none" stroke="rgba(255,255,255,0.23)" stroke-width="1.8" />
    <circle class="core-pulse" cx="0" cy="0" r="10" />
    <text x="0" y="130" fill="#173f52" font-size="20" font-weight="800" text-anchor="middle">Платформа SRG</text>
  </g>

</svg>`;

const banksIsometricMarkup = String.raw`<svg viewBox="72 88 500 548" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <linearGradient id="bankAura" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7fcff" />
      <stop offset="100%" stop-color="#e9f4fa" />
    </linearGradient>
    <linearGradient id="bankHub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123344" />
      <stop offset="100%" stop-color="#00aedb" />
    </linearGradient>
    <filter id="bankSoft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#173544" flood-opacity="0.12" />
    </filter>
  </defs>

  <ellipse cx="320" cy="350" rx="248" ry="218" fill="url(#bankAura)" stroke="#d8e8f1" />

  <g transform="translate(320 350)">
    <circle cx="0" cy="0" r="90" fill="#ffffff" stroke="#c6dce8" stroke-width="2" />
    <circle cx="0" cy="0" r="64" fill="url(#bankHub)" />
    <text x="0" y="-5" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">Сделка</text>
    <text x="0" y="15" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">SRG</text>
  </g>

  <path class="flow-line" d="M 190 190 C 240 230 260 262 282 300" />
  <path class="flow-line-glow glow-a" d="M 190 190 C 240 230 260 262 282 300" />

  <path class="flow-line" d="M 152 352 H 228" />
  <path class="flow-line-glow glow-b" d="M 152 352 H 228" />

  <path class="flow-line" d="M 190 512 C 242 468 260 438 282 402" />
  <path class="flow-line-glow glow-c" d="M 190 512 C 242 468 260 438 282 402" />

  <path class="flow-line" d="M 358 300 C 386 258 404 230 454 190" />
  <path class="flow-line-glow glow-a" d="M 358 300 C 386 258 404 230 454 190" />

  <path class="flow-line" d="M 412 352 H 488" />
  <path class="flow-line-glow glow-b" d="M 412 352 H 488" />

  <path class="flow-line" d="M 358 402 C 386 444 406 472 454 512" />
  <path class="flow-line-glow glow-c" d="M 358 402 C 386 444 406 472 454 512" />

  <g filter="url(#bankSoft)">
    <rect x="128" y="160" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="190" y="194" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Заявка</text>

    <rect x="96" y="324" width="112" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="152" y="358" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Проверка</text>

    <rect x="128" y="484" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="190" y="518" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Выпуск</text>

    <rect x="392" y="160" width="124" height="56" rx="14" fill="#102a38" stroke="#2f5a71" />
    <text x="454" y="194" fill="#edf8fd" font-size="12" font-weight="700" text-anchor="middle">CRM</text>

    <rect x="432" y="324" width="112" height="56" rx="14" fill="#102a38" stroke="#2f5a71" />
    <text x="488" y="358" fill="#edf8fd" font-size="12" font-weight="700" text-anchor="middle">Статус</text>

    <rect x="392" y="484" width="124" height="56" rx="14" fill="#102a38" stroke="#2f5a71" />
    <text x="454" y="518" fill="#edf8fd" font-size="12" font-weight="700" text-anchor="middle">Продление</text>
  </g>

  <g filter="url(#bankSoft)">
    <rect x="188" y="596" width="264" height="46" rx="12" fill="#102a38" stroke="#2f5a71" />
    <text x="320" y="625" fill="#00b2e0" font-size="12" font-weight="700" text-anchor="middle">Единый контур обмена данными</text>
  </g>
</svg>`;

const insurersDashboardMarkup = String.raw`<svg viewBox="0 0 640 700" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <linearGradient id="insAura" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7fcff" />
      <stop offset="100%" stop-color="#e9f4fa" />
    </linearGradient>
    <linearGradient id="insHub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#113243" />
      <stop offset="100%" stop-color="#00abd7" />
    </linearGradient>
    <filter id="insSoft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#173544" flood-opacity="0.12" />
    </filter>
  </defs>

  <ellipse cx="320" cy="350" rx="248" ry="218" fill="url(#insAura)" stroke="#d8e8f1" />

  <g transform="translate(320 350)">
    <circle cx="0" cy="0" r="96" fill="#ffffff" stroke="#c6dce8" stroke-width="2" />
    <circle cx="0" cy="0" r="68" fill="url(#insHub)" />
    <text x="0" y="-5" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">Платформа</text>
    <text x="0" y="15" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">SRG</text>
  </g>

  <path class="flow-line" d="M 320 212 V 254" />
  <path class="flow-line-glow glow-a" d="M 320 212 V 254" />

  <path class="flow-line" d="M 174 350 H 224" />
  <path class="flow-line-glow glow-b" d="M 174 350 H 224" />

  <path class="flow-line" d="M 416 350 H 466" />
  <path class="flow-line-glow glow-c" d="M 416 350 H 466" />

  <path class="flow-line" d="M 320 446 V 488" />
  <path class="flow-line-glow glow-a" d="M 320 446 V 488" />

  <path class="flow-line" d="M 392 262 C 436 220 460 204 490 188" />
  <path class="flow-line-glow glow-b" d="M 392 262 C 436 220 460 204 490 188" />

  <path class="flow-line" d="M 392 438 C 438 480 462 496 490 512" />
  <path class="flow-line-glow glow-c" d="M 392 438 C 438 480 462 496 490 512" />

  <g filter="url(#insSoft)">
    <rect x="258" y="168" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="320" y="202" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Продукты</text>

    <rect x="112" y="322" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="174" y="356" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Тарифы</text>

    <rect x="404" y="322" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="466" y="356" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Документы</text>

    <rect x="258" y="476" width="124" height="56" rx="14" fill="#ffffff" stroke="#a1cada" />
    <text x="320" y="510" fill="#1f4d62" font-size="12" font-weight="700" text-anchor="middle">Андеррайтинг</text>

    <rect x="446" y="160" width="110" height="52" rx="13" fill="#102a38" stroke="#2f5a71" />
    <text x="501" y="191" fill="#edf8fd" font-size="12" font-weight="700" text-anchor="middle">Агенты</text>

    <rect x="446" y="486" width="110" height="52" rx="13" fill="#102a38" stroke="#2f5a71" />
    <text x="501" y="517" fill="#edf8fd" font-size="12" font-weight="700" text-anchor="middle">Партнёры</text>
  </g>

  <g filter="url(#insSoft)">
    <rect x="176" y="596" width="288" height="46" rx="12" fill="#102a38" stroke="#2f5a71" />
    <text x="320" y="625" fill="#00b2e0" font-size="12" font-weight="700" text-anchor="middle">Единое управление страховым контуром</text>
  </g>
</svg>`;

type InlineSvgProps = {
  markup: string;
  className?: string;
};

function InlineSvg({ markup, className }: InlineSvgProps) {
  return (
    <div className={className}>
      <div className="premium-svg-inner" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}

export function TechCircuitSvg() {
  return <InlineSvg className="premium-svg premium-svg-tech" markup={techCircuitMarkup} />;
}

export function BanksInfrastructureSvg() {
  return <InlineSvg className="premium-svg premium-svg-banks" markup={banksIsometricMarkup} />;
}

export function InsurersDashboardSvg() {
  return <InlineSvg className="premium-svg premium-svg-insurers" markup={insurersDashboardMarkup} />;
}
