import { forwardRef } from 'react'
import { cn } from '@/lib/design-system'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-14 w-full rounded-xl border border-[var(--color-dark-border)]/50 bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-panel)] px-4 py-3 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-[var(--color-aurora-cyan)]/20 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 shadow-soft transition-all',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
InputComponent.displayName = 'Input'

export const Input = InputComponent
