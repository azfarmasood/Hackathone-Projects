"use client"
import Wrapper from "@/components/shared/Tools/Wrapper";
import GalleryData from "@/components/Data/GalleryData";
import RouterRefresh from "@/components/shared/Tools/RouterRefresh";
import GalleryGridCols from "@/components/shared/Tools/GalleryGridCols";
import SpinnerSvg from "@/components/icons/SpinnerSvg";
import { SearchResult } from "@/components/widgets/Gallery_Component";
import { FC, useEffect, useState, useTransition } from "react";
interface Resources {
    Typeresources: SearchResult[]
}

const FavouritesData: FC<Resources> = ({ Typeresources }) => {
  const [Resources, setResources] = useState(Typeresources);
  useEffect(() => {
    setResources(Typeresources)
  },[Typeresources])
  return (
    <section>
      <RouterRefresh>
      <Wrapper>
        <GalleryGridCols
        image={Resources}
          getImage={(imageData: SearchResult) => {
            return (
              <GalleryData
              key={imageData.public_id}
              imagedata={imageData}
              onUnheart={(unHeartResources) => {
                setResources((resources) =>
                resources.filter(
                  (resources) =>
                  resources.public_id !== unHeartResources.public_id
                  )
                  );
                }}
                />
                );
              }}
              />
      </Wrapper>
      </RouterRefresh>
    </section>
  );
};

export default FavouritesData;
