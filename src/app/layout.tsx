import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Provider} from "@/components/Provider";
import NavbarComp from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopBtn from "@/components/BackToTopBtn";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nelion Care - Bringing the best Home Care to your home',
  description: 'Bringing the best Home Care to your home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
      <Provider>
          <NavbarComp/>
          <div className="flex flex-col items-center justify-center">
              {children}
          </div>
          <Footer/>
          <BackToTopBtn/>
      </Provider>
      </body>
    </html>
  )
}
