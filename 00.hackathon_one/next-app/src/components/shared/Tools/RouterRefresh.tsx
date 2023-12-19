"use client"
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

interface React {
  children:React.ReactNode
}

const RouterRefresh:FC<React> = ({children}) => {
    const router = useRouter();
      useEffect(() => {
        router.refresh();
      }, [router]);
      
    return (
      <main>
        {children}
      </main>
    );
}
 
export default RouterRefresh;