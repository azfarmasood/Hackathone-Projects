import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Header/Navbar'
import SideNavBar from '@/components/layout/SideNavigation/SideNavbar'
import DarkThememode from '@/components/shared/Client/Tools/DarkThemeMode/DarkThememode'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo Album',
  description: 'Photo Album app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col w-full dark:bg-black dark:text-white bg-white text-black duration-500`}
      >
        <DarkThememode>
          <Navbar />
          <div className="flex md:flex-row flex-col">
            <SideNavBar />
            {children}
          </div>
        </DarkThememode>
      </body>
    </html>
  );
}
