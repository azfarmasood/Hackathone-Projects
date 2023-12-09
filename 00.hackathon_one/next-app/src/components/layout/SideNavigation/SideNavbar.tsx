import GallerySvg from "@/components/shared/Client/Data/Icons/GallerySvg/GallerySvg";
import HeartSvg from "@/components/shared/Client/Data/Icons/HeartSvg/HeartSvg";
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import Link from "next/link";
import SingleImageSvg from "@/components/shared/Client/Data/Icons/SingleImageSvg/SingleImageSvg";
import cloudinary from "cloudinary";
import Image from "next/image"
import Image1 from "@/components/asserts/Avatar/138787481.png";
import { Button } from "@/components/ui/button";
import { Albums } from "@/components/widgets/Albums/Albums";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DarkTheme from "@/components/shared/Client/Tools/DarkThemeMode/DarkTheme";


const SideNavBar = async () => {
      const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: Albums[];
      };
  return (
    <header className="md:w-1/5">
      <Wrapper>
        <div className={`pb-10`}>
          <div className="space-y-2 py-2">
            <div className="py-2">
              <div className="md:hidden ml-7 flex items-center py-2">
                <Avatar>
                  <Image src={Image1} alt="myimage" />
                  <AvatarFallback>Az</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Manage
              </h2>
              <div className="md:space-y-1 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={"/Gallery"}>
                    <SingleImageSvg className="w-5 h-5 mr-2 dark:fill-white fill-black" />
                    Gallery
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={"/Albums"}>
                    <GallerySvg className="w-5 h-5 mr-2 dark:fill-white fill-black" />
                    Albums
                  </Link>
                </Button>

                {folders.map((albums) => {
                  return (
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                      key={albums.path}
                    >
                      <Link href={`/Albums/${albums.path}`}>
                        <GallerySvg className="w-5 h-5 mr-2 dark:fill-white fill-black" />
                        {albums.name}
                      </Link>
                    </Button>
                  );
                })}

                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={"/Favourites"}>
                    <HeartSvg className="w-5 h-5 mr-2" />
                    Favourites
                  </Link>
                </Button>
                <div className="md:hidden">
                  <DarkTheme />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default SideNavBar;