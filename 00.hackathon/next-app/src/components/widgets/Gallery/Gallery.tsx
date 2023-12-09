import GalleryGrid from "@/components/shared/Client/Data/GridGallery/GridGallery";
import UploadButton from "@/components/shared/Client/Data/UploadButton/UploadButton";
import Refresh from "@/components/shared/Client/Tools/Refresh/Refresh";
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import cloudinary from "cloudinary"
import SearchFrom from "@/components/shared/Server/Data/Search/Search"

export type SearchResult = {
  public_id: string,
  tags:string[],
}

 async function GalleryComponent({
   searchParams: { search },
 }: {
   searchParams: { search: string };
 }) {
  const searchparams = {search}
   const searchApi = (await cloudinary.v2.search
     .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
     .sort_by("created_at", "desc")
     .with_field("tags")
     .max_results(30)
     .execute()) as { resources: SearchResult[] };
   return (
     <section>
       <Refresh />
       <Wrapper>
         <div className="flex justify-between items-center px-4 md:mt-4 mt-10 w-full">
           <div>
             <h1 className="md:text-4xl font-bold text-2xl">Gallery</h1>
           </div>
           <div className="mt-1">
             <UploadButton />
           </div>
         </div>
         <div className="mt-4">
         <SearchFrom searchParams={searchparams}/>
         </div>
         <GalleryGrid Images={searchApi.resources} />
       </Wrapper>
     </section>
   );
 };

export default GalleryComponent;
