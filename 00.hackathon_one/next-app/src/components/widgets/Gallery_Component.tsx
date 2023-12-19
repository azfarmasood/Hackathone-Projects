import Wrapper from "@/components/shared/Tools/Wrapper";
import UploadButton from "@/components/shared/Tools/UploadButton";
import cloudinary from "cloudinary"
import RouterRefresh from "@/components/shared/Tools/RouterRefresh";
import GalleryDatas from "@/components/Data/GalleryGridData";

export type SearchResult= {
  public_id: string;
  tags: string[];
}

const Gallery_Component = async () => {
  const SearchApi = (await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute()) as { resources: SearchResult[] }
  return (
    <section>
      <RouterRefresh>
      <Wrapper>
        <div className="py-4 flex md:flex-row justify-between items-center">
          <h1 className="md:text-4xl font-bold text-2xl">Gallery</h1>
          <UploadButton />
        </div>
        <div>
        <GalleryDatas image={SearchApi.resources}/>
        </div>
      </Wrapper>
      </RouterRefresh>
    </section>
  );
}

export default Gallery_Component