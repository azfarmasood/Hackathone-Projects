"use client"
import CldImageData from "@/components/shared/Client/Data/Cld image Data/CLDImageData";
import GridColsFix from "@/components/shared/Server/Tools/GridColsFix/GridColsFix";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import { useEffect, useState } from "react";

interface Repeatprops {
  resources: SearchResult[];
}

const FavouriteList:React.FC<Repeatprops> = ({resources}) => {
    const [resourses, setResources] = useState(resources);
    useEffect(() => {
      setResources(resources);
    }, [resources]);
    
  return (
    <section>
        <GridColsFix
          images={resourses}
          getImage={(images: SearchResult) => {
            return (
              <div key={images.public_id}>
                <CldImageData
                  key={images.public_id}
                  imagedata={images}
                  onToggleFavourite={(onUnhearted) => {
                    setResources((currentResourses) =>
                      currentResourses.filter(
                        (reousrce) =>
                          reousrce.public_id !== onUnhearted.public_id
                      )
                    );
                  }}
                />
              </div>
            );
          }}
        />
    </section>
  );
};

export default FavouriteList;
