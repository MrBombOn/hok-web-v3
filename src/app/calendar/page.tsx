'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'

export default function CalendarPage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-5xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          Naptár & Tornaterem
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Foglald le a MIK tornatermét, és maradj naprakész a közelgő kari eseményekkel kapcsolatban.
        </p>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tornaterem Foglalás Kártya (Helykitöltő) */}
        <Card className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tornaterem Foglalás</h2>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-6">
              Válaszd ki a szabad időpontokat a heti beosztásban. (A foglalási rendszer hamarosan indul!)
            </p>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-colors w-full">
              Időpontok megtekintése
            </button>
          </CardContent>
        </Card>

        {/* Eseménynaptár Kártya (Helykitöltő) */}
        <Card className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue dark:text-blue-400 flex items-center justify-center mb-6">
              <CalendarIcon size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Havi Eseménynaptár</h2>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-6">
              Szakestek, bulik és kari gyűlések egyetlen átlátható naptárban.
            </p>
            <button className="px-6 py-3 bg-brand-blue hover:bg-brand-blueLight text-white rounded-xl font-bold transition-colors w-full">
              Naptár megnyitása
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
