'use client'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/design-system'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[var(--color-aurora-cyan)]/20 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[var(--background-aurora-grad)] text-white shadow-glow hover:shadow-glow',
        ghost: 'border border-[var(--color-dark-border)]/50 bg-transparent hover:bg-[var(--color-light-bg)] dark:hover:bg-[var(--color-dark-panel)]',
        destructive: 'bg-red-500 hover:bg-red-600 text-white shadow-glow',
        outline: 'border-2 border-[var(--background-aurora-grad)] text-[var(--color-aurora-cyan)] bg-transparent hover:bg-[var(--background-aurora-grad)] hover:text-white shadow-glow',
      },
      size: {
        default: 'h-12 px-6 py-3 rounded-xl',
        sm: 'h-10 px-4 rounded-lg',
        lg: 'h-14 px-8 py-6 rounded-xl text-xl',
        xl: 'h-20 px-12 py-8 rounded-3xl text-2xl font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'ref'>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <motion.button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
