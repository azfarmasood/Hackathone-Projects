import { SearchResult } from "@/components/widgets/Gallery_Component";
import { FC } from "react";

interface Props {
    image: SearchResult[];
    getImage: (imageData:SearchResult) => React.ReactNode;
}

 const GalleryGridCols:FC<Props> = ({ image,getImage }) => {
    function GridColFix(colIndex: number) {
      const MaxCols: number = 4;

      return image.filter((resource, index) => {
        return index % MaxCols === colIndex;
      });
    }


  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {[GridColFix(0), GridColFix(1), GridColFix(2), GridColFix(3)].map(
        (column, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}

export default GalleryGridCols