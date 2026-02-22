'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, FileText, Download } from 'lucide-react'

export default function GuidesPage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-5xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          Tudástár & Segédletek
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Minden hivatalos nyomtatvány, szabályzat és hasznos útmutató az egyetemi életed megkönnyítéséhez.
        </p>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 gap-6">
        {/* Dokumentum Kártya Példa */}
        {[
          { title: "Tantervi Háló (BSc)", desc: "Minden szak aktuális ajánlott tanterve.", icon: BookOpen, color: "text-yellow-500" },
          { title: "Kollégiumi Jelentkezés", desc: "Hivatalos űrlap és pontszámítási útmutató a kollégiumi felvételihez.", icon: FileText, color: "text-brand-blue" },
          { title: "Szakmai Gyakorlat Minta", desc: "Formanyomtatvány a kötelező szakmai gyakorlat leigazolásához.", icon: FileText, color: "text-emerald-500" }
        ].map((doc, idx) => (
          <Card key={idx} className="border-dark-border/20 shadow-soft bg-white/50 dark:bg-white/5 backdrop-blur-sm group hover:border-brand-blue/30 transition-colors">
            <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center ${doc.color}`}>
                  <doc.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{doc.title}</h2>
                  <p className="text-sm text-light-text/70 dark:text-dark-text/70 mt-1">{doc.desc}</p>
                </div>
              </div>

              <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors w-full sm:w-auto justify-center">
                <Download size={18} className="mr-2" /> Letöltés
              </button>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  )
}
