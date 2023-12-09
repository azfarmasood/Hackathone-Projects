import Refresh from "@/components/shared/Client/Tools/Refresh/Refresh";
import SearchButton from "@/components/shared/Client/Tools/SearchButton/Search";
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import cloudinary from "cloudinary";


export type SearchResult = {
  public_id: string;
  tags: string[];
};

async function SearchFrom({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
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
          <SearchButton initial={search} />
      </Wrapper>
    </section>
  );
}

export default SearchFrom;
