import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import DevAdminToggle from '@/components/DevAdminToggle'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PTE MIK HÖK',
  description: 'A PTE Műszaki és Informatikai Kar Hallgatói Önkormányzatának hivatalos weboldala.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-brand-blue/30 transition-colors duration-300`}>
        
        {/* LINTER ÉS DESIGN JAVÍTÁS: 
            Kikényszerített világos mód (light) alapértelmezettként az SSOT szerint!
            Az enableSystem={false} kikapcsolja a gép saját (pl. Windows) sötét módjának figyelését. */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          
          {/* Globális Stúdiófények (SSOT) */}
          <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-brand-blue/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-50" />
          <div className="fixed bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-brand-blue/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-50" />

          {/* Navigáció */}
          <Navbar />

          {/* Tartalom Wrapper */}
          <main className="flex-grow w-full max-w-[1400px] mx-auto pt-28 pb-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col">
            {children}
          </main>

          {/* Értesítések */}
          <Toaster 
            position="top-center" 
            toastOptions={{
              className: 'dark:bg-dark-panel dark:text-white dark:border-dark-border/50 bg-white text-gray-900 border-gray-200 shadow-xl rounded-xl font-medium',
            }}
          />

          {/* Teszt Admin Gomb */}
          <DevAdminToggle />

        </ThemeProvider>
      </body>
    </html>
  )
}
