'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Mail } from 'lucide-react'

export default function AboutUsPage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-6xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          Rólunk & Képviselők
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Ismerd meg a MIK Hallgatói Önkormányzatának csapatát. Kérdésed van? Fordulj hozzánk bizalommal!
        </p>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Képviselő Kártyák Példa */}
        {[
          { name: "Minta János", role: "Elnök", dept: "Elnökség", color: "border-brand-blue" },
          { name: "Kovács Anna", role: "Tanulmányi Referens", dept: "Oktatás", color: "border-emerald-500" },
          { name: "Tóth Bence", role: "Rendezvényfelelős", dept: "Programok", color: "border-purple-500" }
        ].map((person, idx) => (
          <Card key={idx} className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            {/* Finom színes vonal a kártya tetején */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50`} />
            
            <CardContent className="p-8 flex flex-col items-center text-center">
              {/* Profilkép Helykitöltő */}
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-white/10 mb-4 flex items-center justify-center border-4 border-white dark:border-dark-bg shadow-lg">
                <Users size={32} className="text-gray-400 dark:text-gray-500" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{person.name}</h2>
              <div className="text-brand-blue font-semibold text-sm uppercase tracking-wider mt-1 mb-3">
                {person.role}
              </div>
              <p className="text-light-text/70 dark:text-dark-text/70 text-sm mb-6 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                {person.dept}
              </p>
              
              <button className="flex items-center justify-center w-full py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
                <Mail size={16} className="mr-2" /> Kapcsolat
              </button>
            </CardContent>
          </Card>
        ))}

      </motion.div>
    </motion.div>
  )
}
