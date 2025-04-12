
import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NUTM Foundation',
  description: 'NUTM Foundation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}