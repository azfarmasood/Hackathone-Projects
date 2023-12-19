"use client"
import FavouriteApiServer from "@/components/utilities/FavouriteApiServer";
import FavouritesSvg from "@/components/icons/FavouritesSvg";
import SpinnerSvg from "@/components/icons/SpinnerSvg";
import { SearchResult } from "@/components/widgets/Gallery_Component";
import { CldImage } from "next-cloudinary";
import { FC, useState, useTransition } from "react";


interface PublicIDProps {
  imagedata: SearchResult;
  onUnheart?: (unHeartResources: SearchResult) => void;
}

const GalleryData: FC<PublicIDProps> = ({ imagedata, onUnheart }) => {
  const [setTransitions, setTransition] = useTransition();
  const [isFavourite, setisFavourite] = useState(
    imagedata.tags.includes("favourite")
  );

  return (
      <div className="relative">
        <CldImage
          src={imagedata.public_id}
          alt={"Image"}
          width="500"
          height="400"
          className="py-4"
        />
        {setTransitions && (
          <div className="absolute inset-0 bg-black opacity-50">
            <SpinnerSvg className="w-8 h-8 fill-white animate-spin absolute top-1/2 left-1/2" />
          </div>
        )}
        {isFavourite ? (
          <div>
            <FavouritesSvg
              className="h-6 w-6 absolute top-6 font-extrabold left-2 fill-red-500 text-red-500  duration-500 cursor-pointer"
              onClick={() => {
                onUnheart?.(imagedata)
                setisFavourite(false);
                setTransition(() => {
                  FavouriteApiServer(imagedata.public_id, false);
                });
              }}
            />
          </div>
        ) : (
          <div>
            <FavouritesSvg
              className="h-6 w-6 absolute font-bold top-6 left-2 shadow-sm fill-white opacity-100 text-white duration-500 cursor-pointer"
              onClick={() => {
                onUnheart?.(imagedata);
                setisFavourite(true);
                setTransition(() => {
                  FavouriteApiServer(imagedata.public_id, true);
                });
              }}
            />
          </div>
        )}
      </div>
  );
};

export default GalleryData;
