"use client";
import { FC } from "react";
import { ThemeProvider } from "next-themes";
const DarkThememode: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default DarkThememode;
