"use client"
import CldImageData from "@/components/shared/Client/Data/Cld image Data/CLDImageData";
import GridColsFix from "@/components/shared/Server/Tools/GridColsFix/GridColsFix";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";


 function AlbumsGallery({ Images }: { Images: SearchResult[]}) {
   return (
     <section>
       <GridColsFix
         images={Images}
         getImage={(image: SearchResult) => {
           return <CldImageData key={image.public_id} imagedata={image} />;
         }}
       />
     </section>
   );
 }
 
export default AlbumsGallery;
