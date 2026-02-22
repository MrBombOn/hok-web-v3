// Clean Aurora v2 - Tailwind v4 CSS vars
export const colors = {
  light: { background: 'var(--color-light-bg)', panel: 'var(--color-light-panel)', text: 'var(--color-light-text)' },
  dark: { background: 'var(--color-dark-bg)', panel: 'var(--color-dark-panel)', border: 'var(--color-dark-border)', text: 'var(--color-dark-text)' },
  aurora: { cyan: 'var(--color-aurora-cyan)', blue: 'var(--color-aurora-blue)', gradient: 'var(--background-aurora-grad)' },
} as const;

export const shadows = { soft: 'var(--shadow-soft)', glow: 'var(--shadow-glow)' } as const;
export const radii = { main: 'var(--radius-main)', xl: 'var(--radius-xl)' } as const;

export const cn = (...inputs: (string | null | undefined)[]) => inputs.filter(Boolean).join(' ');

export const buttonVariants = {
  default: 'aurora-grad text-white shadow-glow hover:shadow-glow rounded-xl px-6 py-3 font-medium transition-all',
};
