import { forwardRef } from 'react'
import { cn } from '@/lib/design-system'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-14 w-full rounded-xl border border-dark-border/50 bg-light-bg dark:bg-dark-panel px-4 py-3 text-lg placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-aurora-cyan/20 focus:border-aurora-cyan disabled:cursor-not-allowed disabled:opacity-50 shadow-soft hover:border-aurora-cyan/50 transition-all',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
