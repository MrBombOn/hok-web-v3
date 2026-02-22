import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// v3 classNames közvetlen
export const buttonVariants = {
  default: 'bg-aurora-grad text-white shadow-glow hover:shadow-glow rounded-xl px-6 py-3 font-medium transition-all',
  ghost: 'border border-dark-border/50 bg-transparent hover:bg-light-panel dark:hover:bg-dark-panel rounded-xl px-6 py-3 font-medium transition-all',
  destructive: 'bg-red-500 hover:bg-red-600 text-white shadow-glow rounded-xl px-6 py-3 font-medium transition-all',
  outline: 'border-2 border-aurora-cyan text-aurora-cyan bg-transparent hover:bg-aurora-grad hover:text-white shadow-glow rounded-xl px-6 py-3 font-medium transition-all',
} as const
