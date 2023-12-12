"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const RouterRefresh = () => {
    const router = useRouter();
      useEffect(() => {
        router.refresh();
      }, [router]);
      
    return null;
}
 
export default RouterRefresh;