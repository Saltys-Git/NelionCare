import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Provider} from "@/components/Provider";
import NavbarComp from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopBtn from "@/components/BackToTopBtn";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nelion Care - Bringing the best Home Care to your home',
  description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className+"w-full"}>
      <Provider>
          <NavbarComp/>
          <div className="flex flex-col items-center justify-center h-full">
              {children}
          </div>
          <Footer/>
          <BackToTopBtn/>
          <Toaster />
      </Provider>
      </body>
    </html>
  )
}
