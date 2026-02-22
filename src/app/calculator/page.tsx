'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator } from 'lucide-react'

export default function CalculatorPage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          KKI Kalkulátor
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Számold ki másodpercek alatt a várható tanulmányi ösztöndíjadat a KKI index alapján.
        </p>
      </motion.div>

      <motion.div variants={fadeUpItem}>
        <Card className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12">
            <div className="flex items-center space-x-4 mb-8 border-b border-dark-border/20 pb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-brand-blue dark:text-blue-400 flex items-center justify-center">
                <Calculator size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Adatok megadása</h2>
            </div>
            
            {/* Később ide jön az űrlap és a React Hook Form */}
            <div className="space-y-6 opacity-60">
              <div className="h-12 w-full bg-gray-200 dark:bg-white/5 rounded-xl animate-pulse" />
              <div className="h-12 w-full bg-gray-200 dark:bg-white/5 rounded-xl animate-pulse" />
              <div className="h-12 w-2/3 bg-gray-200 dark:bg-white/5 rounded-xl animate-pulse" />
            </div>

            <div className="mt-10">
              <button disabled className="px-8 py-4 bg-brand-blue/50 text-white rounded-xl font-bold w-full cursor-not-allowed">
                Kalkulátor betöltése...
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
