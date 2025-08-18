import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koda Advisors - Fractional CIO & Technology Leadership',
  description: 'Executive-level technology leadership on a part-time or project basis. AI Strategy, Digital Transformation, M&A Due Diligence, Cybersecurity & IT Optimization.',
  keywords: 'Fractional CIO, Technology Leadership, AI Strategy, Digital Transformation, M&A Technology Due Diligence, Cybersecurity, IT Optimization',
  authors: [{ name: 'Koda Advisors' }],
  creator: 'Koda Advisors',
  publisher: 'Koda Advisors',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kodaadvisors.com',
    title: 'Koda Advisors - Fractional CIO & Technology Leadership',
    description: 'Executive-level technology leadership on a part-time or project basis. AI Strategy, Digital Transformation, M&A Due Diligence, Cybersecurity & IT Optimization.',
    siteName: 'Koda Advisors',
    images: [
      {
        url: 'https://kodaadvisors.com/Koda_Advisors_Logo.svg',
        width: 800,
        height: 600,
        alt: 'Koda Advisors Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koda Advisors - Fractional CIO & Technology Leadership',
    description: 'Executive-level technology leadership on a part-time or project basis. AI Strategy, Digital Transformation, M&A Due Diligence, Cybersecurity & IT Optimization.',
    images: ['https://kodaadvisors.com/Koda_Advisors_Logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Koda_Advisors_Logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://kodaadvisors.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Koda Advisors",
              "description": "Executive-level technology leadership on a part-time or project basis. AI Strategy, Digital Transformation, M&A Due Diligence, Cybersecurity & IT Optimization.",
              "url": "https://kodaadvisors.com",
              "logo": "https://kodaadvisors.com/Koda_Advisors_Logo.svg",
              "serviceType": ["Fractional CIO", "Technology Leadership", "AI Strategy", "Digital Transformation", "Cybersecurity"],
              "areaServed": "Worldwide",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "info@kodaadvisors.com"
              }
            })
          }}
        />
        
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
