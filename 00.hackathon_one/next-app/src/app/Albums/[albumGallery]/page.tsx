import AlbumsGallery from "./albumGallery/albumsGallery";
import Refresh from "@/components/shared/Client/Tools/Refresh/Refresh";
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import cloudinary from "cloudinary";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";

async function AlbumGallery({
  params: { albumGallery },
}: {
  params: { albumGallery: string };
}) {
  const searchApi = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumGallery}`)
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
            <h1 className="md:text-4xl font-bold text-2xl">{albumGallery}</h1>
          </div>
        </div>
        <AlbumsGallery Images={searchApi.resources} />
      </Wrapper>
    </section>
  );
}

export default AlbumGallery;
