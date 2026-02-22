import type { Metadata } from 'next'
import './globals.css'
import AuroraBackground from '@/components/AuroraBackground'

export const metadata: Metadata = {
  title: 'PTE MIK HÖK',
  description: 'Pécsi Tudományegyetem Műszaki és Informatikai Kar Hallgatói Önkormányzat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text antialiased">
        <AuroraBackground />
        {children}
      </body>
    </html>
  )
}
