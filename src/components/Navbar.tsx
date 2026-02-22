'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { SITE_ROUTES } from '@/lib/constants'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Ha a főoldalon (/) vagyunk, NE jelenjen meg a Navbar! Ezt kérte a roadmap.
  if (pathname === '/') return null

  return (
    <>
      {/* 1. Asztali & Tablet Üveghatású (Glassmorphism) Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto pointer-events-auto bg-white/70 dark:bg-dark-bg/70 backdrop-blur-xl border border-dark-border/20 shadow-soft rounded-2xl flex items-center justify-between px-6 py-3">
          
          {/* Bal oldal: Vissza a főoldalra Gomb & Logó helye */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="flex items-center text-gray-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-blue transition-colors font-bold group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft size={16} />
              </div>
              <span className="hidden sm:block tracking-tight text-lg">PTE MIK <span className="text-gradient-brand">HÖK</span></span>
            </Link>
          </div>

          {/* Közép: Asztali Linkek (SSOT constants-ból!) */}
          <div className="hidden lg:flex items-center space-x-1">
            {SITE_ROUTES.map((route) => {
              const isActive = pathname === route.href
              return (
                <Link 
                  key={route.href} 
                  href={route.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    isActive 
                      ? 'text-brand-blue dark:text-white' 
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {/* Ha aktív, egy kis SSOT kék háttér ugrik be mögé (Framer Motion layoutId) */}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-brand-blue/10 dark:bg-white/10 rounded-xl -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {route.title}
                </Link>
              )
            })}
          </div>

          {/* Jobb oldal: Téma váltó & Mobil Menü Gomb */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-900 dark:text-white rounded-lg bg-gray-100 dark:bg-white/10"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 2. Mobil Menü (Teljes Képernyős Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 dark:bg-dark-bg/95 backdrop-blur-3xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold tracking-tight">PTE MIK <span className="text-gradient-brand">HÖK</span></span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-900 dark:text-white rounded-full bg-gray-100 dark:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Vissza gomb mobilra is */}
              <Link 
                href="/" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold"
              >
                <ArrowLeft size={20} className="mr-3 text-brand-blue" /> Vissza a Főoldalra
              </Link>
              
              <div className="h-px w-full bg-dark-border/20 my-2" />

              {/* Mobil Linkek legenerálása */}
              {SITE_ROUTES.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center p-4 rounded-2xl text-lg font-bold transition-colors ${
                    pathname === route.href 
                      ? 'bg-brand-blue text-white shadow-glow' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
                >
                  <route.Icon size={24} className="mr-4 opacity-80" />
                  {route.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
