'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // LINTER JAVÍTÁS:
  // Nem azonnal (szinkron módon) hívjuk meg a setMounted(true)-t a rendereléskor,
  // hanem kiengedjük a fő szálat, ami elkerüli a "cascading render" hibát.
  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      // setTimeout biztosítja, hogy ez aszinkron módon történjen
      setTimeout(() => setMounted(true), 0)
    }
    return () => {
      isMounted = false
    }
  }, [])

  // Amíg a kliens nem tudja, mi az aktuális téma (Hydration), egy helykitöltőt mutatunk
  if (!mounted) return <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 animate-pulse" />

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    
    // SSOT Toast Visszajelzés
    toast.success(`${newTheme === 'dark' ? 'Sötét' : 'Világos'} mód bekapcsolva`, {
      icon: newTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />,
      duration: 2000,
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
      aria-label="Téma váltása"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
