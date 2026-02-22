'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fadeUpItem, cardHoverScale } from '@/lib/animations'

interface FeatureCardProps {
  href: string
  title: string
  description: string
  Icon: LucideIcon
  iconBgClass: string
  iconTextColorClass: string
  hoverBorderClass: string
  accentColorClass: string
}

export default function FeatureCard({ 
  href, title, description, Icon, iconBgClass, iconTextColorClass, hoverBorderClass, accentColorClass 
}: FeatureCardProps) {
  return (
    <motion.div 
      variants={fadeUpItem}
      // Hozzáadjuk az egyedi Framer Motion hover és tap interakciót a Div-hez!
      whileHover={cardHoverScale}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="block h-full group outline-none">
        {/* A tailwind hover:-translate-y-1-et kivettük a Card alapból, mert most a Framer Motion végzi sokkal szebben! */}
        <Card className={`h-full border-dark-border/20 transition-all duration-500 ${hoverBorderClass} hover:shadow-glow`}>
          <CardContent className="p-8 flex flex-col h-full">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-500 ${iconBgClass} ${iconTextColorClass}`}>
              <Icon size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
            <p className="text-lg opacity-70 mb-8 flex-grow leading-relaxed">{description}</p>
            <div className={`flex items-center font-bold uppercase tracking-wider text-sm mt-auto ${accentColorClass}`}>
              {title} megnyitása <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
