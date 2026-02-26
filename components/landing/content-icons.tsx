type IconProps = {
  index: number;
};

export function StackItemIcon({ index }: IconProps) {
  const variant = index % 3;

  if (variant === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="none" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7V12L15.5 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 6H19V18H5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10H16M8 14H13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 4L19 8V16L12 20L5 16V8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4V20M5 8L19 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ComponentItemIcon({ index }: IconProps) {
  const variant = index % 5;

  if (variant === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect fill="none" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" width="16" x="4" y="6" />
        <path d="M8 10H16M8 14H13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 12H20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="8" cy="12" fill="none" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="12" fill="none" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 9H18V17H6z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 6H15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="9" cy="13" fill="currentColor" r="1" />
        <circle cx="12" cy="13" fill="currentColor" r="1" />
        <circle cx="15" cy="13" fill="currentColor" r="1" />
      </svg>
    );
  }

  if (variant === 3) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 8H20V18H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 12H11M13 12H17M7 15H13" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 4L19 8L12 12L5 8L12 4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 12L12 16L19 12M5 16L12 20L19 16" fill="none" stroke="currentColor" strokeWidth="1.8" />
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
