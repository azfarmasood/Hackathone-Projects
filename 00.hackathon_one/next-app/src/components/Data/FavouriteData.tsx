"use client"
import Wrapper from "@/components/shared/Tools/Wrapper";
import GalleryData from "@/components/Data/GalleryData";
import RouterRefresh from "@/components/shared/Tools/RouterRefresh";
import { SearchResult } from "@/components/widgets/Gallery_Component";
import { FC, useEffect, useState } from "react";

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
        <RouterRefresh />
        <Wrapper>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {Resources.map((result) => (
              <div key={result.public_id}>
                <GalleryData
                  imagedata={result}
                  onUnheart={(unHeartResources) => {
                    setResources((resources) =>
                      resources.filter(
                        (resources) =>
                          resources.public_id !== unHeartResources.public_id
                      )
                    );
                  }}
                  path={"/favourites"}
                />
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
  );
};

export default FavouritesData;
