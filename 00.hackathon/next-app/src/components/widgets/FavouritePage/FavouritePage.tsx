import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import cloudinary from "cloudinary";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import FavouriteList from "@/components/shared/Client/Data/FavouriteList/FavouriteList";
import Refresh from "@/components/shared/Client/Tools/Refresh/Refresh";

  const FavouritePage = async () => {
  const searchApi = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] }; 
  return (
    <section>
      <Wrapper>
        <Refresh />
        <div className="flex justify-between items-center px-4 md:mt-4 mt-10 w-full">
          <div>
            <h1 className="md:text-4xl font-bold text-2xl">
              Favourites Images
            </h1>
          </div>
        </div>
        <div>
          <FavouriteList resources={searchApi.resources} />
        </div>
      </Wrapper>
    </section>
  );
    }

    export default FavouritePage