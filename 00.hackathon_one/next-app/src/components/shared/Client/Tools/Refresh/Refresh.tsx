"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Refresh = () => {
  const router = useRouter();

  useEffect(() => {
    const refreshPage = async () => {
      await router.refresh();
    };

    refreshPage();
  }, [router]);

  return null;
};

export default Refresh;
