"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ThemeProvider, useTheme } from "next-themes";

const SearchButton = ({initial}: {initial:string}) => {
  const [setstate, setSearchState] = useState(initial ?? "");
  const router = useRouter()
  useEffect(() => {
    setSearchState(initial)
  }, [initial])
   const { theme } = useTheme();
  return (
    <ThemeProvider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/Gallery?search=${encodeURIComponent(setstate)}`);
          router.refresh();
        }}
      >
        <div className="flex md:flex-row flex-col items-center relative  w-full gap-4">
          <Label htmlFor="name" className="pl-4">
            <Search className="absolute w-7 h-7 top-[22px] md:top-1.5 md:left-10 left-2 z-10" />
          </Label>
          <Input
            onChange={(e) => setSearchState(e.target.value)}
            id="album-name"
            defaultValue={setstate}
            className="col-span-3 rounded-2xl md:pl-14 pl-12"
          />
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="md:mt-0 mt-4"
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};

export default SearchButton;
