"use client"
import { CldImage } from "next-cloudinary";
import { FC, useState, useTransition } from "react";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import HeartSvg from "@/components/shared/Client/Data/Icons/HeartSvg/HeartSvg";
import Favourite from "@/components/shared/Server/Data/Favourite/Favourite";
import DropdownMenuButton from "@/components/shared/Client/Tools/ShadcnDropDownMenu/DropDownMenu";

interface ImageProps {
  imagedata: SearchResult;
  onToggleFavourite?: (onUnhearted: SearchResult) => void;
} 

const CldImageData:FC <ImageProps> = ({imagedata,onToggleFavourite}) => {
  
  const [isTransition, setTransition] = useTransition();
  const [isFavourite, setIsFavourite] = useState(
    imagedata.tags.includes("favourite")
  );
  return (
    <div>
      <div className="relative">
        <CldImage
          src={imagedata.public_id}
          alt="imageprops"
          width="500"
          height="400"
        />
        {isFavourite ? (
          <div>
            <HeartSvg
              className="h-6 w-6 absolute top-2 font-extrabold left-2 fill-red-500 text-red-500  duration-500 cursor-pointer"
              fill="none"
              onClick={() => {
                onToggleFavourite?.(imagedata);
                setIsFavourite(false);
                setTransition(() => {
                  Favourite(imagedata.public_id, false);
                });
              }}
            />
          </div>
        ) : (
          <div>
            <HeartSvg
              className="h-6 w-6 absolute font-bold top-2 left-2 shadow-sm dark:fill-black fill-white opacity-100 dark:text-black text-white duration-500 cursor-pointer"
              fill="none"
              onClick={() => {
                onToggleFavourite?.(imagedata);
                setIsFavourite(true);
                setTransition(() => {
                  Favourite(imagedata.public_id, true);
                });
              }}
            />
          </div>
        )}
      <DropdownMenuButton 
      image={imagedata}
      />
      </div>
    </div>
  );
};

export default CldImageData;
