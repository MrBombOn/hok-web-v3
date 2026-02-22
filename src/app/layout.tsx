import AuroraBackground from '@/components/AuroraBackground'
// ... többi import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <AuroraBackground />
        {children}
      </body>
    </html>
  )
}
