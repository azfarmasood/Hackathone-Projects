"use server";
import cloudinary from "cloudinary";
export default async function Favourite(
  public_id: string,
  isFavourite: boolean,
) {
  if (isFavourite) {
    await cloudinary.v2.uploader.add_tag("favourite", [public_id]);
  } 
  else {
    await cloudinary.v2.uploader.remove_tag("favourite", [public_id]);
  }
}