import { Metadata, Viewport } from "next"; // Add Viewport import
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

// Add this viewport export
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#1E293B' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Nabin Thapa | Portfolio',
    template: '%s | Nabin Thapa',
  },
  description: 'Personal portfolio showcasing my projects and skills',
  keywords: ['portfolio', 'developer', 'backend', 'react', 'nextjs'],
  authors: [{ name: 'Nabin Thapa' }],
  creator: 'Nabin Thapa',
  // REMOVED themeColor from here
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://my-portfilio-uzjt.vercel.app/',
    siteName: 'Nabin Thapa | Portfolio',
    title: 'Nabin Thapa | Portfolio',
    description: 'Personal portfolio showcasing my projects and skills',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nabin Thapa Portfolio',
      },
    ],
  }
}

// Import components
import AnalyticsWrapper from '@/app/analytics';
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
        
      <body className={`min-h-screen flex flex-col ${inter.className} bg-red-50`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}