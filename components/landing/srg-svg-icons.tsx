export function BankRevenueIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srgBankBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
        <linearGradient id="srgBankDarkGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f222f" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
        <filter id="srgBankCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <circle cx="60" cy="60" r="46" fill="#d9f3fa" opacity="0.4" />
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke="#00b2e0"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />

      <g transform="translate(25, 35)">
        <path
          d="M35 0 L0 18 L70 18 Z"
          fill="none"
          stroke="url(#srgBankDarkGrad)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line x1="10" y1="18" x2="10" y2="45" stroke="url(#srgBankDarkGrad)" strokeWidth="3" strokeLinecap="round" />
        <line x1="26.6" y1="18" x2="26.6" y2="45" stroke="url(#srgBankDarkGrad)" strokeWidth="3" strokeLinecap="round" />
        <line x1="43.3" y1="18" x2="43.3" y2="45" stroke="url(#srgBankDarkGrad)" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="18" x2="60" y2="45" stroke="url(#srgBankDarkGrad)" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M5 45 L65 45 L65 52 L5 52 Z"
          fill="none"
          stroke="url(#srgBankDarkGrad)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>

      <path
        d="M 40 65 L 55 50 L 68 58 L 88 35"
        fill="none"
        stroke="url(#srgBankBrandGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#srgBankCyanGlow)"
      />

      <circle cx="40" cy="65" r="3" fill="#ffffff" stroke="#00b2e0" strokeWidth="2" />
      <circle cx="55" cy="50" r="3" fill="#ffffff" stroke="#00b2e0" strokeWidth="2" />
      <circle cx="68" cy="58" r="3" fill="#ffffff" stroke="#00b2e0" strokeWidth="2" />
      <circle cx="88" cy="35" r="4" fill="#00b2e0" filter="url(#srgBankCyanGlow)" />

      <path d="M 88 35 L 100 25" fill="none" stroke="#667681" strokeWidth="2" strokeDasharray="2 3" />
      <rect x="96" y="17" width="12" height="12" rx="3" fill="#ffffff" stroke="url(#srgBankDarkGrad)" strokeWidth="2" />
      <text
        x="102"
        y="25"
        fontFamily="monospace"
        fontSize="6"
        fontWeight="bold"
        fill="#00b2e0"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {'<>'}
      </text>
    </svg>
  );
}

export function InsurerControlIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srgInsurerBrand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
        <linearGradient id="srgInsurerDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f222f" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
        <filter id="srgInsurerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect x="15" y="15" width="90" height="90" rx="28" fill="#d9f3fa" opacity="0.3" />

      <path
        d="M 60 22 L 95 32 V 60 C 95 85 75 102 60 108 C 45 102 25 85 25 60 V 32 Z"
        fill="#ffffff"
        stroke="url(#srgInsurerDark)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      <path
        d="M 60 30 L 85 38 V 60 C 85 78 70 92 60 96 C 50 92 35 78 35 60 V 38 Z"
        fill="none"
        stroke="#dce7ee"
        strokeWidth="2"
      />

      <line x1="42" y1="48" x2="78" y2="48" stroke="#dce7ee" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="48" x2="65" y2="48" stroke="url(#srgInsurerBrand)" strokeWidth="3.5" strokeLinecap="round" filter="url(#srgInsurerGlow)" />
      <circle cx="65" cy="48" r="4.5" fill="#ffffff" stroke="#00b2e0" strokeWidth="2.5" />

      <line x1="42" y1="62" x2="78" y2="62" stroke="#dce7ee" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="62" x2="52" y2="62" stroke="url(#srgInsurerBrand)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="52" cy="62" r="4.5" fill="#ffffff" stroke="#00b2e0" strokeWidth="2.5" />

      <line x1="42" y1="76" x2="78" y2="76" stroke="#dce7ee" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="76" x2="72" y2="76" stroke="url(#srgInsurerDark)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="72" cy="76" r="4.5" fill="#ffffff" stroke="url(#srgInsurerDark)" strokeWidth="2.5" />

      <circle cx="60" cy="108" r="4" fill="#00b2e0" filter="url(#srgInsurerGlow)" />
    </svg>
  );
}

export function PlatformInfrastructureIcon() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srgPlatformCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
        <linearGradient id="srgPlatformCubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#242424" />
          <stop offset="100%" stopColor="#3e4a53" />
        </linearGradient>
        <linearGradient id="srgPlatformCubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f222f" />
          <stop offset="100%" stopColor="#1a2b38" />
        </linearGradient>
        <filter id="srgPlatformCoreGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <ellipse cx="60" cy="65" rx="45" ry="22" fill="none" stroke="#dce7ee" strokeWidth="1.5" strokeDasharray="4 4" />
      <ellipse cx="60" cy="65" rx="30" ry="14" fill="none" stroke="#00b2e0" strokeWidth="1" opacity="0.4" />

      <g transform="translate(60, 48)">
        <path d="M 0 5 L -22 -7 V 18 L 0 30 Z" fill="url(#srgPlatformCubeLeft)" stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round" />
        <path d="M 0 5 L 22 -7 V 18 L 0 30 Z" fill="url(#srgPlatformCubeRight)" stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round" />
        <path d="M 0 5 L -22 -7 L 0 -19 L 22 -7 Z" fill="url(#srgPlatformCubeTop)" stroke="#00b2e0" strokeWidth="1" filter="url(#srgPlatformCoreGlow)" />
        <path d="M 0 0 L -10 -5 L 0 -10 L 10 -5 Z" fill="#ffffff" opacity="0.9" filter="url(#srgPlatformCoreGlow)" />
      </g>

      <path d="M 38 41 Q 25 35 25 25" fill="none" stroke="#00b2e0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="25" cy="25" r="4" fill="#ffffff" stroke="#008eb3" strokeWidth="2" />
      <rect x="15" y="15" width="20" height="20" rx="4" fill="none" stroke="#242424" strokeWidth="1.5" />

      <path d="M 82 41 Q 95 35 95 25" fill="none" stroke="#00b2e0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="95" cy="25" r="4" fill="#ffffff" stroke="#008eb3" strokeWidth="2" />
      <rect x="85" y="15" width="20" height="20" rx="4" fill="none" stroke="#242424" strokeWidth="1.5" />

      <path d="M 60 78 V 92" fill="none" stroke="#00b2e0" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 50 92 L 70 92 L 70 102 L 50 102 Z" fill="#ffffff" stroke="#242424" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="55" y1="96" x2="65" y2="96" stroke="#00b2e0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="99" x2="60" y2="99" stroke="#667681" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
