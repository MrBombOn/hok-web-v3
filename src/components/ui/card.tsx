import { cn } from '@/lib/design-system'

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'rounded-2xl border border-black/5 dark:border-white/10 bg-light-panel/80 dark:bg-dark-panel/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] drop-shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:drop-shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:drop-shadow-[0_8px_40px_rgba(2,51,141,0.15)] hover:-translate-y-1 transition-all duration-500 ease-out',
      className
    )}
    {...props}
  />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 p-8 pb-4', className)} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('font-bold leading-tight tracking-tight text-2xl', className)} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-8 pt-0', className)} {...props} />
)

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-8 pt-0', className)} {...props} />
)

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
