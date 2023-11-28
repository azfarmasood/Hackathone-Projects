import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/app/components/layout/Header";
import DarkMode from "@/app/components/shared/Tools/DarkMode/DarkMode";
import Footer from "@/app/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon Portfolio Website",
  description: "Hackathon Portfolio Website",
  metadataBase: new URL("https://acme.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-zinc-900 dark:text-gray-100 font-bold bg-gray-200 text-black duration-500`}
      >
        <DarkMode>
          <Header />
          {children}
          <Footer/>
        </DarkMode>
      </body>
    </html>
  );
}
