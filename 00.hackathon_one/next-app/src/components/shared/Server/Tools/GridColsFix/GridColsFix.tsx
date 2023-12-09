"use client"
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import { ReactNode } from "react";

type Imageprops = {
images:SearchResult[],
getImage: (image:SearchResult) => ReactNode
}

const GridColsFix:React.FC<Imageprops> = ({images,getImage}) => {
        const MaxColumns = 4;

        const GridColumnFix = (colnumbers: number) => {
          return images.filter(
            (resource, idx) => idx % MaxColumns === colnumbers
          );
        };
    return (
      <Wrapper>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10 h-full">
          {[
            GridColumnFix(0),
            GridColumnFix(1),
            GridColumnFix(2),
            GridColumnFix(3),
          ].map((resourcess, id) => (
            <div key={id} className="flex flex-col gap-4">
              {resourcess.map(getImage)}
            </div>
          ))}
        </div>
      </Wrapper>
    );
}

export default GridColsFix