import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const statusStyles = {
  online: {
    bg: 'bg-emerald-500', // Kifinomultabb, mélyebb zöld
    text: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    border: 'border-emerald-500/20',
    // Apple-style diffúz glow:
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)] dark:shadow-[0_0_30px_rgba(16,185,129,0.1)]', 
    label: 'Bent az irodában',
  },
  busy: {
    bg: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-500/10 dark:bg-amber-500/15',
    border: 'border-amber-500/20',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)] dark:shadow-[0_0_30px_rgba(245,158,11,0.1)]',
    label: 'Elfoglalt',
  },
  offline: {
    bg: 'bg-slate-400 dark:bg-slate-500',
    text: 'text-slate-600 dark:text-slate-400',
    bgLight: 'bg-slate-400/10 dark:bg-slate-400/15',
    border: 'border-slate-400/20',
    glow: '',
    label: 'Nincs bent',
  },
  error: {
    bg: 'bg-rose-500',
    text: 'text-rose-600 dark:text-rose-400',
    bgLight: 'bg-rose-500/10 dark:bg-rose-500/15',
    border: 'border-rose-500/20',
    glow: 'shadow-[0_0_20px_rgba(244,63,94,0.15)] dark:shadow-[0_0_30px_rgba(244,63,94,0.1)]',
    label: 'Hiba',
  },
} as const

export const eventStatusStyles = {
  approved: statusStyles.online,
  pending: statusStyles.busy,
  rejected: statusStyles.error,
} as const
