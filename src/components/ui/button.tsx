'use client'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/design-system'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // ELEGÁNS DEFAULT: Áttetsző Brand Blue háttér, vékony szegéllyel, finom kék fénnyel hoverkor
        default: 'bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-300 border border-brand-blue/20 hover:bg-brand-blue hover:text-white hover:shadow-glow hover:border-brand-blue',
        
        // GHOST: Láthatatlan, amíg rá nem mész
        ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-light-text dark:text-dark-text',
        
        // DESTRUCTIVE: Finomított piros (nem bántja a szemet)
        destructive: 'bg-rose-500/10 text-rose-600 border border-rose-500/20 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,72,0.3)]',
        
        // OUTLINE: Vékony, letisztult szegély
        outline: 'border border-dark-border/20 dark:border-white/10 text-light-text dark:text-dark-text bg-transparent hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5',
      },
      size: {
        default: 'h-12 px-6 py-3 rounded-xl',
        sm: 'h-10 px-4 rounded-lg text-sm',
        lg: 'h-14 px-8 py-4 rounded-xl text-lg',
        xl: 'h-16 px-10 py-5 rounded-2xl text-xl',
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
      // Klasszikus, gyors kattintás visszajelzés
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.button>
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
