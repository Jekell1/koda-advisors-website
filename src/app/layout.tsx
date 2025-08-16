import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koda Advisors - Fractional CIO & Technology Leadership',
  description: 'Executive-level technology leadership on a part-time or project basis. AI Strategy, Digital Transformation, M&A Due Diligence, Cybersecurity & IT Optimization.',
  keywords: 'Fractional CIO, Technology Leadership, AI Strategy, Digital Transformation, M&A Technology Due Diligence, Cybersecurity, IT Optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
