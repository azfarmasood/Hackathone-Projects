import { AlbumCards } from "@/components/shared/Client/Tools/ShadeCnCards/ShadeCnCards";
import cloudinary from "cloudinary";

export type Albums = {
  name: string;
  path: string;
};

async function AlbumsPage (){
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
      folders: Albums[];
    };
    return (
      <section>
        <div className="flex justify-between items-center px-4 md:mt-4 mt-10 w-full">
          <div>
            <h1 className="md:text-4xl font-bold text-2xl">Albums</h1>
          </div>
        </div>
        <div className="mt-6 md:gap-40 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1">
          {folders.map((folder) => (
              <AlbumCards key={folder.path} folder={folder} />
          ))}
        </div>
      </section>
    );
}
 
export default AlbumsPage;