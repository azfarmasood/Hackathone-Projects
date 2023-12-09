import GalleryComponent from "@/components/widgets/Gallery/Gallery";

const Gallery = ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const searchparams = { search };
  return (
    <main>
      <GalleryComponent searchParams={searchparams} />
    </main>
  );
};
 
export default Gallery;