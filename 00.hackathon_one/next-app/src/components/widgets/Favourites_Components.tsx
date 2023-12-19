import Wrapper from "@/components/shared/Tools/Wrapper";
import cloudinary from "cloudinary";
import RouterRefresh from "@/components/shared/Tools/RouterRefresh";
import FavouritesData from "@/components/Data/FavouriteData";
import { SearchResult } from "@/components/widgets/Gallery_Component";

const Favourites_Components = async () => {
  const SearchApi = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
    const Heading = SearchApi.resources.length > 0 ? "Your Favourites Items" : " You don't have any\nfavourites items yet."
  return (
    <section>
        <RouterRefresh>
        <Wrapper>
          <div className="py-4 flex md:flex-row justify-between items-center">
            <h1 className="md:text-4xl font-bold text-2xl whitespace-pre-line md:leading-45 uppercase">
              {Heading}
            </h1>
          </div>
          <div>
            <FavouritesData Typeresources={SearchApi.resources}/>
          </div>
        </Wrapper>
        </RouterRefresh>
      </section>
  );
};

export default Favourites_Components;
