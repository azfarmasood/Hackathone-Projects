import FavouritePage from "@/components/widgets/FavouritePage/FavouritePage";
import GalleryComponent from "@/components/widgets/Gallery/Gallery";

export default function Home({
   searchParams: { search },
 }: {
   searchParams: { search: string }
 }) {
  const params = { search }
  return (
    <main>
      <GalleryComponent searchParams={params} />
      <FavouritePage />
    </main>
  );
}
