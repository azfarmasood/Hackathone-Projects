"use client"
import { FC } from "react"
import { ThemeProvider } from "next-themes"
const DarkMode:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <ThemeProvider attribute="class">
        {children}
    </ThemeProvider>
  )
}

export default DarkMode