import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Győződj meg róla, hogy ez a te globals.css fájlod helyes útvonala

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
    // A lang="hu" fontos a keresőoptimalizálás (SEO) és a képernyőolvasók miatt.
    // Nincs benne 'dark' class, így az oldal alapértelmezetten a gyönyörű, tiszta világos témát kapja.
    <html lang="hu">
      <body className={`${inter.className} relative min-h-screen flex flex-col bg-light-bg text-light-text selection:bg-brand-blue/30`}>
        
        {/* --- SSOT GLOBÁLIS STÚDIÓFÉNYEK --- */}
        {/* Felső, hatalmas elmosódott kék fény a háttérben */}
        <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-brand-blue/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-50" />
        
        {/* Alsó, hatalmas elmosódott kék fény a háttérben */}
        <div className="fixed bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-brand-blue/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-50" />

        {/* --- FEJLÉC (Navbar) HELYE --- */}
        {/* Ide fogjuk behúzni a Navbar komponenst később, pl: <Navbar /> */}

        {/* --- SSOT OLDAL TARTALOM (Wrapper) --- */}
        {/* Ez az a doboz, ami garantálja, hogy minden aloldal (page.tsx) tökéletesen középre legyen 
            zárva, és megkapja a szükséges margókat (padding) mobilon és asztali gépen is. */}
        <main className="flex-grow w-full max-w-[1400px] mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8 z-10 flex flex-col">
          {children}
        </main>

        {/* --- LÁBLÉC (Footer) HELYE --- */}
        {/* Ide fogjuk behúzni a Footer komponenst később, pl: <Footer /> */}

      </body>
    </html>
  )
}
