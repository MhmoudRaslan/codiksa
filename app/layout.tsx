import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default: 'Codiksa — Software Development Agency', template: '%s | Codiksa' },
  description: 'We are a team of developers building modern web, mobile, and AI-powered products. Fast, clean, and built to last.',
  keywords: ['software development', 'web development', 'mobile apps', 'Next.js', 'React', 'AI integration'],
  openGraph: {
    title: 'Codiksa — Software Development Agency',
    description: 'Codiksa — Modern web, mobile, and AI-powered products.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
