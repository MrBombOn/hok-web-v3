'use client'
import { motion } from 'framer-motion'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 aurora-grad opacity-20 aurora-blur rounded-full"
        animate={{
          x: ['0%', '100%', '0%'],
          y: ['0%', '50%', '0%'],
          rotate: [0, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-96 h-96 aurora-grad opacity-20 aurora-blur rounded-full"
        animate={{
          x: ['-100%', '0%', '-100%'],
          y: ['50%', '0%', '50%'],
          rotate: [360, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
