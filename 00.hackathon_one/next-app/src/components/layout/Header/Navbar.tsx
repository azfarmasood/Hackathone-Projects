import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import Image1 from "@/components/asserts/Avatar/138787481.png"
import Image from "next/image"
import DarkTheme from "@/components/shared/Client/Tools/DarkThemeMode/DarkTheme";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => (
    <header>
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <Wrapper>
                    <div className="flex h-16 items-center uppercase font-bold">
                        <Link href={"/"}>
                        Photos Albums
                        </Link>
                        <div className="ml-auto flex items-center gap-5">
                            <Avatar>
                                <Image src={Image1} alt="myimage" />
                                <AvatarFallback>Az</AvatarFallback>
                            </Avatar>
                            <DarkTheme/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    </header>
)
 
export default Navbar;