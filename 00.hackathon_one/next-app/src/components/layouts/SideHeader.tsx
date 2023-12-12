import Wrapper from "@/components/shared/Tools/Wrapper";
import GallerySvg from "@/components/icons/GallerySvg";
import AlbumsSvg from "@/components/icons/AlbumsSvg";
import FavouritesSvg from "@/components/icons/FavouritesSvg";
import Link from "next/link"
import { Button } from "@/components/ui/button";

const Sidebar = () => {
    return (
      <header>
        <div className="py-4">
          <div className="md:py-2 py-10">
            <Wrapper>
              <h2 className="md:text-2xl text-xl font-semibold md:text-start text-center tracking-tight">
                <Link href={"/"}>Library</Link>
              </h2>
              <div className="md:space-y-2 space-y-6 md:py-4 py-8">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full md:justify-start"
                >
                  <Link href={"/gallery"} className="flex">
                    <GallerySvg className="mr-2 w-6 h-6 fill-white" />
                    Gallery
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full md:justify-start"
                >
                  <Link href={"albums"} className="flex">
                    <AlbumsSvg className="mr-2 w-6 h-6 fill-white" />
                    Albums
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full md:justify-start"
                >
                  <Link href={"/favourites"} className="flex md:ml-0 ml-3">
                    <FavouritesSvg className="mr-2 w-6 h-6" />
                    Favourites
                  </Link>
                </Button>
              </div>
            </Wrapper>
          </div>
        </div>
      </header>
    );
}
 
export default Sidebar;