"use client"
import Wrapper from "@/components/shared/Tools/Wrapper";
import GalleryGridCols from "@/components/shared/Tools/GalleryGridCols";
import GalleryData from "@/components/Data/GalleryData";
import { FC } from "react";
import { SearchResult } from "../widgets/Gallery_Component";

interface ImageData {
    image:SearchResult[]
}

const GalleryDatas:FC<ImageData> = ({image}) => {
  return (
    <section>
        <Wrapper>
            <GalleryGridCols
              image={image}
              getImage={(imageData: SearchResult) => {
                return (
                  <GalleryData
                    key={imageData.public_id}
                    imagedata={imageData}
                  />
                );
              }}
            />
        </Wrapper>
    </section>
  );
};

export default GalleryDatas;
