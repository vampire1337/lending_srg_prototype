export type StackIconKind =
  | 'products'
  | 'scoring'
  | 'tariff'
  | 'documents'
  | 'agents'
  | 'sales'
  | 'chat'
  | 'motivation'
  | 'api'
  | 'data'
  | 'security';

export type ComponentIconKind =
  | 'product-management'
  | 'sale-flow'
  | 'communications'
  | 'document-flow'
  | 'integrations';

export function StackItemIcon({ kind }: { kind: StackIconKind }) {
  if (kind === 'products') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4L19 8L12 12L5 8L12 4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 12L12 16L19 12M5 16L12 20L19 16" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'scoring') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 7H20M4 12H20M4 17H20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="10" cy="7" fill="#fff" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="15" cy="12" fill="#fff" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8" cy="17" fill="#fff" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === 'tariff') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 17L10 12L13 14L19 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M18 8H19V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="7" cy="7" fill="none" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 5.4V8.6M5.8 7H8.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    );
  }

  if (kind === 'documents') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect fill="none" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" width="11" x="6" y="5" />
        <path d="M9 9H14M9 12H14M9 15H12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M17 9H19V20H9V18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (kind === 'agents') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="8" fill="none" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="5.8" cy="10" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18.2" cy="10" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 18C7.9 15.9 9.5 14.8 12 14.8C14.5 14.8 16.1 15.9 17 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'sales') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 18H19" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M6 15L10 11L13 13L18 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M16 8H18V10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'chat') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6.8C4 5.8 4.8 5 5.8 5H14.2C15.2 5 16 5.8 16 6.8V11.2C16 12.2 15.2 13 14.2 13H9L6.3 15.4V13H5.8C4.8 13 4 12.2 4 11.2z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8 8.9H12M8 10.9H11" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        <path d="M13.6 10H18.3C19.2 10 20 10.8 20 11.7V15.3C20 16.2 19.2 17 18.3 17H16.4V19L14.1 17H13.6" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (kind === 'motivation') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4L14 8L18.5 8.6L15.2 11.7L16 16L12 13.9L8 16L8.8 11.7L5.5 8.6L10 8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9 17.2V20L12 18.4L15 20V17.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === 'api') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="6" x="3" y="10" />
        <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="6" x="15" y="5" />
        <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="6" x="15" y="15" />
        <path d="M9 12H12C13.7 12 15 10.7 15 9M12 12H15C16.7 12 18 13.3 18 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'data') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <ellipse cx="12" cy="6.8" fill="none" rx="6.8" ry="2.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.2 6.8V12.4C5.2 14 8.2 15.2 12 15.2C15.8 15.2 18.8 14 18.8 12.4V6.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.2 12.4V17.2C5.2 18.8 8.2 20 12 20C15.8 20 18.8 18.8 18.8 17.2V12.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 4L18 7V11.4C18 15.4 15.5 18.5 12 20C8.5 18.5 6 15.4 6 11.4V7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <rect fill="none" height="4.6" rx="1.1" stroke="currentColor" strokeWidth="1.7" width="4.6" x="9.7" y="10.3" />
      <path d="M10.8 10.3V9.2C10.8 8.5 11.3 8 12 8C12.7 8 13.2 8.5 13.2 9.2V10.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

export function ComponentItemIcon({ kind }: { kind: ComponentIconKind }) {
  if (kind === 'product-management') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 7.5H20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <rect fill="none" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.8" width="16" x="4" y="7.5" />
        <path d="M8 12H16M8 15H13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (kind === 'sale-flow') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="6.5" cy="12" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="7.2" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="12" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="16.8" fill="none" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.6 11L9.9 8.7M14.1 8.7L15.4 11M15.4 13L14.1 15.3M9.9 15.3L8.6 13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === 'communications') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6.7C4 5.8 4.8 5 5.7 5H14.3C15.2 5 16 5.8 16 6.7V12.3C16 13.2 15.2 14 14.3 14H10L6.6 17V14H5.7C4.8 14 4 13.2 4 12.3z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8 8.5H12M8 10.8H13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        <circle cx="18" cy="16.5" fill="none" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (kind === 'document-flow') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect fill="none" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" width="9" x="4" y="6" />
        <path d="M7 10H10M7 13H10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
        <rect fill="none" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" width="7" x="13" y="8" />
        <path d="M13 12H11.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="5" x="3" y="10" />
      <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="5" x="16" y="5" />
      <rect fill="none" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" width="5" x="16" y="15" />
      <path d="M8 12H11.5C14 12 16 10 16 7M11.5 12C14 12 16 14 16 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function InputFieldIcon({ kind }: { kind: 'name' | 'company' | 'email' | 'phone' }) {
  if (kind === 'name') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="8" fill="none" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 19C6.8 15.6 9.1 14 12 14C14.9 14 17.2 15.6 19 19" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'company') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 19H19M7 19V7H17V19" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 10H10.01M14 10H14.01M10 14H10.01M14 14H14.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (kind === 'email') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect fill="none" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" width="18" x="3" y="5" />
        <path d="M5 8L12 13L19 8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.5 4.5L10.7 6.7L9.4 9.3C10.2 10.8 11.2 11.8 12.7 12.6L15.3 11.3L17.5 13.5L15.7 17.1C14.9 17.5 14 17.7 13 17.7C8.8 17.7 6.3 15.2 6.3 11C6.3 10 6.5 9.1 6.9 8.3L8.5 4.5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
