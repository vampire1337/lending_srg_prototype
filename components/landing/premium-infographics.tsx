const techCircuitMarkup = String.raw`<svg aria-hidden="true" class="tech-circuit" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
  <defs>
    <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00b2e0" />
      <stop offset="100%" stop-color="#0f222f" />
    </linearGradient>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(0, 178, 224, 0.1)" />
      <stop offset="50%" stop-color="rgba(0, 178, 224, 0.8)" />
      <stop offset="100%" stop-color="rgba(0, 178, 224, 0.1)" />
    </linearGradient>
    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur1" />
      <feGaussianBlur stdDeviation="12" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f2a39" flood-opacity="0.15" />
    </filter>
  </defs>

  <ellipse cx="400" cy="225" rx="180" ry="60" fill="none" stroke="#dce7ee" stroke-width="2" stroke-dasharray="6 6" />
  <ellipse cx="400" cy="225" rx="260" ry="90" fill="none" stroke="url(#lineGrad)" stroke-width="1.5" opacity="0.4" />

  <circle class="circuit-wave wave-1" cx="400" cy="225" r="40" stroke-width="2" />
  <circle class="circuit-wave wave-2" cx="400" cy="225" r="40" stroke-width="2" />

  <path class="circuit-line line-1" d="M 80 100 C 200 100, 250 225, 400 225" fill="none" />
  <path class="circuit-line line-2" d="M 60 225 C 180 225, 200 225, 400 225" fill="none" />
  <path class="circuit-line line-3" d="M 80 350 C 200 350, 250 225, 400 225" fill="none" />

  <path class="circuit-line line-4" d="M 400 225 C 550 225, 600 80, 720 80" fill="none" />
  <path class="circuit-line line-5" d="M 400 225 C 580 225, 600 225, 740 225" fill="none" />
  <path class="circuit-line line-1" d="M 400 225 C 550 225, 600 370, 720 370" fill="none" />

  <path class="circuit-line line-2" d="M 400 40 V 225" fill="none" />
  <path class="circuit-line line-3" d="M 400 225 V 410" fill="none" />

  <path d="M 280 150 L 520 150 M 280 300 L 520 300 M 220 225 L 580 225" stroke="#dce7ee" stroke-width="1" opacity="0.6"/>

  <g transform="translate(80, 100)" filter="url(#shadow)">
    <rect x="-45" y="-25" width="90" height="50" rx="12" fill="#ffffff" stroke="#00b2e0" stroke-width="2"/>
    <text x="0" y="4" fill="#0f222f" font-size="14" font-weight="700" text-anchor="middle">Банки ДБО</text>
  </g>

  <g transform="translate(60, 225)" filter="url(#shadow)">
    <rect x="-45" y="-25" width="90" height="50" rx="12" fill="#ffffff" stroke="#00b2e0" stroke-width="2"/>
    <text x="0" y="4" fill="#0f222f" font-size="14" font-weight="700" text-anchor="middle">B2B Агенты</text>
  </g>

  <g transform="translate(80, 350)" filter="url(#shadow)">
    <rect x="-45" y="-25" width="90" height="50" rx="12" fill="#ffffff" stroke="#00b2e0" stroke-width="2"/>
    <text x="0" y="4" fill="#0f222f" font-size="14" font-weight="700" text-anchor="middle">Core СК</text>
  </g>

  <g transform="translate(720, 80)" filter="url(#shadow)">
    <circle cx="0" cy="0" r="30" fill="#0f222f" stroke="#dce7ee" stroke-width="2"/>
    <text x="0" y="5" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">CRM</text>
  </g>

  <g transform="translate(740, 225)" filter="url(#shadow)">
    <circle cx="0" cy="0" r="30" fill="#0f222f" stroke="#dce7ee" stroke-width="2"/>
    <text x="0" y="5" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">ERP / 1C</text>
  </g>

  <g transform="translate(720, 370)" filter="url(#shadow)">
    <circle cx="0" cy="0" r="30" fill="#0f222f" stroke="#dce7ee" stroke-width="2"/>
    <text x="0" y="5" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">Госсуслуги</text>
  </g>

  <g transform="translate(400, 40)" filter="url(#shadow)">
    <rect x="-50" y="-15" width="100" height="30" rx="6" fill="#0f222f" />
    <text x="0" y="4" fill="#00b2e0" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="2">REST API</text>
  </g>

  <g transform="translate(400, 410)" filter="url(#shadow)">
    <rect x="-50" y="-15" width="100" height="30" rx="6" fill="#0f222f" />
    <text x="0" y="4" fill="#00b2e0" font-size="12" font-weight="800" text-anchor="middle" letter-spacing="2">WEBHOOKS</text>
  </g>

  <g transform="translate(400, 225)">
    <path d="M 0 -80 L 70 -40 V 40 L 0 80 L -70 40 V -40 Z" fill="rgba(255,255,255,0.9)" stroke="#00b2e0" stroke-width="3" filter="url(#shadow)"/>
    <path d="M 0 -60 L 52 -30 V 30 L 0 60 L -52 30 V -30 Z" fill="url(#coreGrad)" stroke="#ffffff" stroke-width="2"/>
    <path d="M -52 -30 L 0 0 L 52 -30 M 0 0 V 60" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
    <circle cx="0" cy="0" r="16" fill="#ffffff" filter="url(#neonGlow)"/>
    <circle cx="0" cy="0" r="8" fill="#00b2e0"/>
    <text x="0" y="110" fill="#0f222f" font-size="18" font-weight="800" text-anchor="middle" letter-spacing="1">SRG CORE</text>
  </g>

  <g transform="translate(320, 160)">
    <rect x="-20" y="-10" width="40" height="20" rx="4" fill="#ffffff" stroke="#00b2e0" stroke-width="1.5"/>
    <text x="0" y="3" fill="#0f222f" font-size="8" font-weight="700" text-anchor="middle">Скоринг</text>
  </g>
  <g transform="translate(480, 290)">
    <rect x="-30" y="-10" width="60" height="20" rx="4" fill="#ffffff" stroke="#00b2e0" stroke-width="1.5"/>
    <text x="0" y="3" fill="#0f222f" font-size="7.5" font-weight="700" text-anchor="middle">Документы</text>
  </g>
</svg>`;

const banksIsometricMarkup = String.raw`<svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <linearGradient id="isoBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e8f1f6"/>
    </linearGradient>
    <linearGradient id="isoDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f222f"/>
      <stop offset="100%" stop-color="#242424"/>
    </linearGradient>
    <linearGradient id="isoBrand" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#008eb3"/>
      <stop offset="100%" stop-color="#00b2e0"/>
    </linearGradient>
    <filter id="isoShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#0f222f" flood-opacity="0.12"/>
    </filter>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <g transform="translate(300, 150)">
    <g filter="url(#isoShadow)">
      <path d="M 0 350 L -250 225 L 0 100 L 250 225 Z" fill="url(#isoBase)" stroke="#dce7ee" stroke-width="2"/>
      <path d="M -250 225 L 0 350 V 380 L -250 255 Z" fill="#dce7ee"/>
      <path d="M 250 225 L 0 350 V 380 L 250 255 Z" fill="#cae0ea"/>
    </g>

    <g stroke="#00b2e0" stroke-width="1.5" opacity="0.2">
      <path d="M -200 200 L 50 325 M -150 175 L 100 300 M -100 150 L 150 275 M -50 125 L 200 250"/>
      <path d="M 200 200 L -50 325 M 150 175 L -100 300 M 100 150 L -150 275 M 50 125 L -200 250"/>
    </g>

    <path d="M -150 200 L 0 275 L 150 200" fill="none" stroke="#00b2e0" stroke-width="6" filter="url(#glow)"/>
    <path d="M -150 200 L 0 275 L 150 200" fill="none" stroke="#ffffff" stroke-width="2"/>

    <g transform="translate(0, 180)">
      <path d="M 0 0 L -60 -30 V -120 L 0 -90 Z" fill="url(#isoDark)"/>
      <path d="M 0 0 L 60 -30 V -120 L 0 -90 Z" fill="#242424"/>
      <path d="M 0 -90 L -60 -120 L 0 -150 L 60 -120 Z" fill="url(#isoBrand)"/>
      <path d="M -50 -40 L -10 -20 M -50 -60 L -10 -40 M -50 -80 L -10 -60" stroke="#00b2e0" stroke-width="3" filter="url(#glow)"/>
      <path d="M 10 -20 L 50 -40 M 10 -40 L 50 -60 M 10 -60 L 50 -80" stroke="#00b2e0" stroke-width="3" filter="url(#glow)"/>
      <g transform="translate(0, -170)" filter="url(#glow)">
        <path d="M 0 0 L -20 -10 L 0 -30 L 20 -10 Z" fill="#ffffff" opacity="0.9"/>
        <path d="M 0 0 L -20 -10 L 0 10 L 20 -10 Z" fill="#00b2e0"/>
      </g>
    </g>

    <g transform="translate(-120, 120)">
      <path d="M 0 0 L -50 -25 V -60 L 0 -35 Z" fill="#ffffff" stroke="#dce7ee" stroke-width="1.5"/>
      <path d="M 0 0 L 50 -25 V -60 L 0 -35 Z" fill="#f2f6f9" stroke="#dce7ee" stroke-width="1.5"/>
      <path d="M 0 -35 L -50 -60 L 0 -85 L 50 -60 Z" fill="#ffffff" stroke="#dce7ee" stroke-width="1.5"/>
      <path d="M -30 -60 L -10 -50 L 10 -70 L 30 -55" fill="none" stroke="#00b2e0" stroke-width="4" filter="url(#glow)"/>
      <circle cx="30" cy="-55" r="4" fill="#ffffff" stroke="#00b2e0" stroke-width="2"/>
    </g>

    <g transform="translate(120, 120)">
      <path d="M 0 0 L -40 -20 L 0 -40 L 40 -20 Z" fill="#ffffff" stroke="#0f222f" stroke-width="1.5"/>
      <path d="M -40 -20 V -10 L 0 10 V 0 Z" fill="#e8f1f6" stroke="#0f222f" stroke-width="1.5"/>
      <path d="M 40 -20 V -10 L 0 10 V 0 Z" fill="#dce7ee" stroke="#0f222f" stroke-width="1.5"/>
      <g transform="translate(0, -25)">
        <path d="M 0 0 L -40 -20 L 0 -40 L 40 -20 Z" fill="#ffffff" stroke="#0f222f" stroke-width="1.5"/>
        <path d="M -40 -20 V -10 L 0 10 V 0 Z" fill="#e8f1f6" stroke="#0f222f" stroke-width="1.5"/>
        <path d="M 40 -20 V -10 L 0 10 V 0 Z" fill="#dce7ee" stroke="#0f222f" stroke-width="1.5"/>
      </g>
      <g transform="translate(0, -50)">
        <path d="M 0 0 L -40 -20 L 0 -40 L 40 -20 Z" fill="url(#isoBrand)"/>
        <path d="M -40 -20 V -10 L 0 10 V 0 Z" fill="#008eb3"/>
        <path d="M 40 -20 V -10 L 0 10 V 0 Z" fill="#007a99"/>
      </g>
    </g>

    <path d="M -75 237.5 L -65 242.5 L -55 237.5 L -65 232.5 Z" fill="#ffffff" filter="url(#glow)"/>
    <path d="M 75 237.5 L 85 242.5 L 95 237.5 L 85 232.5 Z" fill="#ffffff" filter="url(#glow)"/>
  </g>
</svg>`;

const insurersDashboardMarkup = String.raw`<svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <linearGradient id="uiBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f222f" />
      <stop offset="100%" stop-color="#1a3242" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00b2e0" />
      <stop offset="100%" stop-color="#008eb3" />
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="15" stdDeviation="15" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <filter id="uiGlow">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect x="20" y="50" width="560" height="600" rx="30" fill="#e8f1f6" />

  <g transform="translate(60, 100)" filter="url(#softShadow)">
    <rect x="0" y="0" width="480" height="420" rx="16" fill="url(#uiBg)" stroke="#2a4555" stroke-width="2"/>

    <rect x="0" y="0" width="480" height="50" rx="16" fill="#152b39" />
    <path d="M 0 50 H 480" stroke="#2a4555" stroke-width="2"/>
    <circle cx="25" cy="25" r="6" fill="#d63a5f" />
    <circle cx="45" cy="25" r="6" fill="#f5a623" />
    <circle cx="65" cy="25" r="6" fill="#0fa075" />
    <text x="240" y="30" fill="#88bfd4" font-size="12" font-family="monospace" text-anchor="middle" letter-spacing="1">SRG / UNDERWRITING ENGINE</text>

    <rect x="30" y="80" width="260" height="180" rx="12" fill="#152b39" stroke="#2a4555" stroke-width="1"/>
    <text x="50" y="110" fill="#ffffff" font-size="16" font-weight="bold">Автоскоринг объекта</text>

    <text x="50" y="145" fill="#88bfd4" font-size="12">Конструктив</text>
    <rect x="150" y="138" width="120" height="6" rx="3" fill="#0f222f"/>
    <rect x="150" y="138" width="90" height="6" rx="3" fill="#0fa075" filter="url(#uiGlow)"/>
    <circle cx="240" cy="141" r="5" fill="#ffffff"/>

    <text x="50" y="180" fill="#88bfd4" font-size="12">Титул</text>
    <rect x="150" y="173" width="120" height="6" rx="3" fill="#0f222f"/>
    <rect x="150" y="173" width="50" height="6" rx="3" fill="#f5a623" filter="url(#uiGlow)"/>
    <circle cx="200" cy="176" r="5" fill="#ffffff"/>

    <text x="50" y="215" fill="#88bfd4" font-size="12">Возраст заемщика</text>
    <rect x="150" y="208" width="120" height="6" rx="3" fill="#0f222f"/>
    <rect x="150" y="208" width="105" height="6" rx="3" fill="#00b2e0" filter="url(#uiGlow)"/>
    <circle cx="255" cy="211" r="5" fill="#ffffff"/>

    <rect x="310" y="80" width="140" height="180" rx="12" fill="#152b39" stroke="#2a4555" stroke-width="1"/>
    <circle cx="380" cy="150" r="40" fill="none" stroke="#0f222f" stroke-width="8"/>
    <circle cx="380" cy="150" r="40" fill="none" stroke="#00b2e0" stroke-width="8" stroke-dasharray="200 251" stroke-linecap="round" filter="url(#uiGlow)"/>
    <text x="380" y="156" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">85</text>
    <text x="380" y="225" fill="#0fa075" font-size="14" font-weight="bold" text-anchor="middle">ОДОБРЕНО</text>

    <rect x="30" y="280" width="420" height="110" rx="12" fill="#0f171e" stroke="#2a4555" stroke-width="1"/>
    <text x="50" y="310" fill="#88bfd4" font-size="12" font-family="monospace">&gt; POST /api/v1/policy/issue</text>
    <text x="50" y="335" fill="#0fa075" font-size="12" font-family="monospace">&gt; Status: 200 OK</text>
    <text x="50" y="360" fill="#667681" font-size="12" font-family="monospace">&gt; { "policy_id": "SRG-8849-001", "pdf": "generated" }</text>
  </g>

  <g transform="translate(320, 440)" filter="url(#softShadow)">
    <rect x="0" y="0" width="240" height="100" rx="16" fill="#ffffff" stroke="#dce7ee" stroke-width="1"/>
    <rect x="20" y="25" width="40" height="40" rx="8" fill="#d9f3fa" />
    <path d="M 30 35 L 50 35 M 30 45 L 45 45 M 30 55 L 50 55" stroke="#00b2e0" stroke-width="2" stroke-linecap="round"/>
    <text x="75" y="45" fill="#0f222f" font-size="14" font-weight="bold">Полис выпущен</text>
    <text x="75" y="65" fill="#667681" font-size="12">Отправлен в 1С и ДБО</text>
  </g>
</svg>`;

type InlineSvgProps = {
  markup: string;
  className?: string;
};

function InlineSvg({ markup, className }: InlineSvgProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
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
