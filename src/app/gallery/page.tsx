'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUpItem } from '@/lib/animations'
import { Camera } from 'lucide-react'

export default function GalleryPage() {
  return (
    <motion.div 
      className="flex flex-col w-full max-w-6xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUpItem} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gradient-brand">
          Galéria
        </h1>
        <p className="text-lg text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
          Éld át újra a legjobb kari pillanatokat. Gólyatáborok, szakestek és MIK bulik egy helyen.
        </p>
      </motion.div>

      {/* Később ide jönnek az igazi képek az adatbázisból/felhőből */}
      <motion.div 
        variants={fadeUpItem} 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {/* Helykitöltő galéria elemek, szép üveghatással */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div 
            key={item} 
            className="aspect-square rounded-2xl bg-gray-200 dark:bg-white/5 border border-dark-border/20 flex flex-col items-center justify-center text-gray-400 dark:text-white/20 transition-transform hover:scale-105 cursor-pointer"
          >
            <Camera size={32} className="mb-2" />
            <span className="text-sm font-medium">Kép betöltése...</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
