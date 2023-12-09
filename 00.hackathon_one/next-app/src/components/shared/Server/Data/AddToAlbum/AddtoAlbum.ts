"use server";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import cloudinary from "cloudinary";


export async function addtoalbum(image: SearchResult, album: string) {

    let parts = image.public_id.split("/");

    if(parts.length > 1) {
      parts = parts.slice(1)
    }

    const publicID = parts.join("/")

  const imageIDs = `${album}/${publicID}`;
  
  await cloudinary.v2.api.create_folder(album)
  .then(async () => await cloudinary.v2.uploader.rename(
    image.public_id,imageIDs
  ))
  .catch((errors) => {
    console.error(`Sorry Can't Create Folder\n The Folder limit has reached ${errors}`)
  });

}