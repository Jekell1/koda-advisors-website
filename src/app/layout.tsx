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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4V2JG90F78"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4V2JG90F78');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
