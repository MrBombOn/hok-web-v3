'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Clock, Phone, AlertCircle } from 'lucide-react'

export default function OfficePage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          HÖK Iroda
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Gyere be hozzánk személyesen! Az A/114-es irodában minden kérdésedre választ adunk az ügyeleti időben.
        </p>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Élő Státusz Kártya - Nagy hangsúllyal */}
        <Card className="md:col-span-2 border-emerald-500/30 shadow-glow bg-emerald-50/50 dark:bg-emerald-900/10 backdrop-blur-sm relative overflow-hidden">
          <CardContent className="p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between z-10 relative">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="relative flex h-8 w-8 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-emerald-500 border-4 border-white dark:border-dark-bg"></span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-1">Jelenleg Nyitva</h2>
                <p className="text-emerald-600/80 dark:text-emerald-300/80 font-medium flex items-center">
                  <MapPin size={18} className="mr-2" /> A/114-es Iroda
                </p>
              </div>
            </div>
            
            <div className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-lg flex items-center shadow-lg">
              <Clock size={20} className="mr-2" /> Zárás: 14:00
            </div>
          </CardContent>
          {/* Dekoratív zöld háttérfény a kártyán belül */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-[60px]" />
        </Card>

        {/* Általános Nyitvatartás Info */}
        <Card className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="text-brand-blue" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Általános Ügyelet</h3>
            </div>
            <ul className="space-y-4 text-light-text/80 dark:text-dark-text/80 font-medium">
              <li className="flex justify-between border-b border-dark-border/10 pb-2">
                <span>Hétfő - Csütörtök</span> <span className="font-bold text-gray-900 dark:text-white">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between border-b border-dark-border/10 pb-2">
                <span>Péntek</span> <span className="font-bold text-gray-900 dark:text-white">10:00 - 12:00</span>
              </li>
              <li className="flex justify-between text-rose-500 pb-2 pt-1">
                <span>Hétvége</span> <span className="font-bold">Zárva</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Elérhetőségek */}
        <Card className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertCircle className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fontos Tudnivalók</h3>
              </div>
              <p className="text-light-text/70 dark:text-dark-text/70 mb-6 leading-relaxed">
                Védés, zh időszak és egyetemi szünetek (pl. őszi szünet, vizsgaidőszak) alatt az irodai ügyelet rendje megváltozhat. Kérjük, ilyenkor mindig kísérd figyelemmel a közösségi média oldalainkat!
              </p>
            </div>
            
            <button className="flex items-center justify-center w-full py-3 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue rounded-xl font-bold transition-colors">
              <Phone size={18} className="mr-2" /> Hívás Indítása
            </button>
          </CardContent>
        </Card>

      </motion.div>
    </motion.div>
  )
}
