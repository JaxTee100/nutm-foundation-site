import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NUTM Foundation',
  description: 'NUTM Foundation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add the link to Google Fonts here, but it's handled by the `Inter` import */}
      </head>
      <body className={`${inter.className} font-sans text-gray-900 bg-white`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
