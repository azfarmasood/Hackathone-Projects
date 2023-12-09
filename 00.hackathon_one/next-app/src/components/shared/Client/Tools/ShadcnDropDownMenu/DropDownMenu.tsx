"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { ShadCnDialogBox } from "@/components/shared/Client/Tools/ShadCnDialogBox/ShadCnDialogBox";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link"
import HamburgerSvg from "@/components/shared/Client/Data/Icons/HamburgerSvg/HamburgerSvg";

export default function DropdownMenuButton({ image }: { image: SearchResult }) {
  const [open,setOpen] = useState(false)
  const { theme } = useTheme()
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant={theme === "dark" ? "secondary" : "default"} className="h-8 w-8 p-0">
            <HamburgerSvg className="w-5 h-5 font-bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <ShadCnDialogBox image={image} onClose={() => setOpen(false)} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button asChild variant="ghost" className="pl-4 cursor-pointer flex justify-start">
                <Link
                  href={`/Edit?publicId=${encodeURIComponent(image.public_id)}`}
                >
                  <Pencil className="w-5 h-5 mr-2" />
                  Edit
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
