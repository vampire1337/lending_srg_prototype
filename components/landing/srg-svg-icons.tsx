export function BankRevenueIcon() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bank-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
      </defs>

      <rect x="15" y="15" width="90" height="90" rx="20" fill="#f1fbff" stroke="#c9e6f1" />
      <path d="M28 45H92" fill="none" stroke="#0f2a39" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 45V76M47 45V76M60 45V76M73 45V76M86 45V76" fill="none" stroke="#0f2a39" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 79H90" fill="none" stroke="#0f2a39" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 42L60 28L95 42" fill="none" stroke="#0f2a39" strokeWidth="3" strokeLinejoin="round" />

      <path d="M32 90L48 74L62 82L84 58" fill="none" stroke="url(#bank-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="84" cy="58" r="4" fill="#00b2e0" />
      <circle cx="48" cy="74" r="3" fill="#fff" stroke="#00b2e0" strokeWidth="2" />
      <circle cx="62" cy="82" r="3" fill="#fff" stroke="#00b2e0" strokeWidth="2" />
    </svg>
  );
}

export function InsurerControlIcon() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ins-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
      </defs>

      <rect x="15" y="15" width="90" height="90" rx="20" fill="#f1fbff" stroke="#c9e6f1" />
      <path d="M60 24L90 34V57C90 76 77 91 60 98C43 91 30 76 30 57V34Z" fill="#fff" stroke="#0f2a39" strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 31L83 39V57C83 72 73 84 60 90C47 84 37 72 37 57V39Z" fill="none" stroke="#d5e9f1" strokeWidth="2" />

      <path d="M42 49H78" fill="none" stroke="#d7e8ef" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 49H64" fill="none" stroke="url(#ins-grad)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="64" cy="49" r="4" fill="#fff" stroke="#00b2e0" strokeWidth="2" />

      <path d="M42 62H78" fill="none" stroke="#d7e8ef" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 62H54" fill="none" stroke="url(#ins-grad)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="54" cy="62" r="4" fill="#fff" stroke="#00b2e0" strokeWidth="2" />

      <path d="M42 75H78" fill="none" stroke="#d7e8ef" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 75H72" fill="none" stroke="#0f2a39" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="72" cy="75" r="4" fill="#fff" stroke="#0f2a39" strokeWidth="2" />
    </svg>
  );
}

export function PlatformInfrastructureIcon() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="plat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b2e0" />
          <stop offset="100%" stopColor="#008eb3" />
        </linearGradient>
      </defs>

      <rect x="15" y="15" width="90" height="90" rx="20" fill="#f1fbff" stroke="#c9e6f1" />
      <rect x="34" y="28" width="34" height="44" rx="7" fill="#fff" stroke="#0f2a39" strokeWidth="2.5" />
      <path d="M41 39H61M41 47H61M41 55H54" fill="none" stroke="#0f2a39" strokeLinecap="round" strokeWidth="2" />

      <path d="M68 40H86C89.3 40 92 42.7 92 46V84C92 87.3 89.3 90 86 90H48C44.7 90 42 87.3 42 84V72" fill="none" stroke="#00b2e0" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="92" cy="46" r="3.5" fill="#00b2e0" />
      <circle cx="86" cy="90" r="3.5" fill="#00b2e0" />
      <circle cx="48" cy="90" r="3.5" fill="#00b2e0" />

      <path d="M71 58H85" fill="none" stroke="#d0e5ee" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M71 65H85" fill="none" stroke="#d0e5ee" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M71 72H80" fill="none" stroke="#d0e5ee" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M70 82L75 77L79 80L87 70" fill="none" stroke="url(#plat-grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
    </svg>
  );
}
