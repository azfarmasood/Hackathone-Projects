import Wrapper from "@/components/shared/Tools/Wrapper";
import Image from "next/image"
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";

const TopHeader = () => {
    return (
      <header>
        <div className="hidden md:flex border-b border-zinc-800">
          <Wrapper>
            <div className="flex h-16 items-center justify-between">
              <h1 className="font-bold md:text-xl text-base">
                <Link href={"/"}>Photo Gallery</Link>
              </h1>
              <div>
                <Avatar>
                  <Image
                    src={"/assets/138787481.png"}
                    alt={"Avatar"}
                    width="500"
                    height="400"
                  />
                  <AvatarFallback>Az</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </Wrapper>
        </div>
      </header>
    );
}
 
export default TopHeader;