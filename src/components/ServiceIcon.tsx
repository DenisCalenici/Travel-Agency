type ServiceIconProps = {
  name: 'weather' | 'plane' | 'event' | 'settings'
}

export function ServiceIcon({ name }: ServiceIconProps) {
  switch (name) {
    case 'weather':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
          <path
            d="M12 26a6 6 0 1 1 0-12 7 7 0 0 1 13.2 2.4A5 5 0 1 1 28 28H12z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )
    case 'plane':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
          <path
            d="M8 22l18-6-6 6 8 10-4 2-4-8-8 4 2-4-4 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'event':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="8" y="10" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8 16h24M14 8v4M26 8v4" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'settings':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 6v4M20 30v4M6 20h4M30 20h4M10.9 10.9l2.8 2.8M26.3 26.3l2.8 2.8M10.9 29.1l2.8-2.8M26.3 13.7l2.8-2.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
  }
}
