'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, fadeUpItem, cardHoverScale } from '@/lib/animations'
import { MapPin, ArrowRight } from 'lucide-react'
import FeatureCard from '@/components/FeatureCard'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_ROUTES } from '@/lib/constants'

export default function HomePage() {
  return (
    // Csak egy belső wrapper maradt, ami középre húzza a tartalmat
    <motion.div 
      className="flex flex-col justify-center h-full w-full"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      
      {/* Hős (Hero) Szekció */}
      <motion.div variants={fadeUpItem} className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          PTE MIK <span className="text-gradient-brand">Hallgatói Önkormányzat</span>
        </h1>
        <p className="text-lg sm:text-xl text-light-text/70 dark:text-dark-text/70 max-w-3xl mx-auto font-medium">
          Minden információ, Kalkulátor stb stb stb teszt oldal.
        </p>
      </motion.div>

      {/* --- KÁRTYÁK GRID SZEKCIÓJA --- */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        {/* Az első 5 kártya dinamikus legenerálása az SSOT constants-ból */}
        {SITE_ROUTES.map((route) => (
          <FeatureCard 
            key={route.href}
            href={route.href}
            title={route.title}
            description={route.description}
            Icon={route.Icon}
            iconBgClass={route.iconBgClass}
            iconTextColorClass={route.iconTextColorClass}
            hoverBorderClass={route.hoverBorderClass}
            accentColorClass={route.accentColorClass}
          />
        ))}

        {/* 6. HÖK Iroda Státusz (Speciális integrált kártya az élő pulzáló indikátorral) */}
        <motion.div 
          variants={fadeUpItem}
          whileHover={cardHoverScale}
          whileTap={{ scale: 0.98 }}
          className="h-full"
        >
          <Link href="/office" className="block h-full group outline-none">
            <Card className="h-full border-dark-border/20 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500" />
              
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin size={32} />
                  </div>
                  
                  {/* ÉLŐ PULZÁLÓ INDIKÁTOR */}
                  <div className="flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Nyitva</span>
                  </div>
                </div>
                
                <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold mb-4 tracking-tight">HÖK Iroda Státusz</h2>
                <p className="text-base sm:text-lg opacity-70 mb-8 flex-grow leading-relaxed">
                  Nézd meg, nyitva van-e az A/114-es iroda, és mikor van ma ügyeleti idő.
                </p>
                
                <div className="flex items-center font-bold uppercase tracking-wider text-sm mt-auto text-emerald-600 dark:text-emerald-400">
                  Státusz megtekintése <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
