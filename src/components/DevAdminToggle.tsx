'use client'

import { motion } from 'framer-motion'
import { Settings2, ShieldCheck, ShieldOff } from 'lucide-react'
import { toast } from 'sonner'
import { useAppStore } from '@/lib/store'

export default function DevAdminToggle() {
  const { isAdmin, toggleAdmin } = useAppStore()

  const handleToggle = () => {
    toggleAdmin()
    // Azonnali SSOT vizuális visszajelzés a Sonner Toast-tal!
    if (!isAdmin) {
      toast.success('Admin mód BEKAPCSOLVA', {
        description: 'Mostantól látod a rejtett szerkesztő és jóváhagyó gombokat.',
      })
    } else {
      toast.info('Admin mód KIKAPCSOLVA', {
        description: 'Visszatértél a normál hallgatói nézethez.',
      })
    }
  }

  // Megjegyzés: Élesítéskor (Production) ezt a komponenst egyszerűen nem rendereljük ki.
  if (process.env.NODE_ENV === 'production') return null

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <button
        onClick={handleToggle}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-glow transition-all duration-300 ${
          isAdmin 
            ? 'bg-rose-500 hover:bg-rose-600 text-white' 
            : 'bg-brand-blue hover:bg-brand-blueLight text-white'
        }`}
      >
        {isAdmin ? <ShieldCheck size={24} /> : <Settings2 size={24} />}
        
        {/* Hover Tooltip (Kicsi SSOT infóbuborék) */}
        <span className="absolute -top-12 right-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          {isAdmin ? 'Admin mód kikapcsolása' : 'Dev Admin bekapcsolása'}
        </span>
      </button>
    </motion.div>
  )
}
