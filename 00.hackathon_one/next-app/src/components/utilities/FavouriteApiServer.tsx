"use server"
import cloudinary from "cloudinary";

export default async function FavouriteApiServer(public_id: string, isFavourited:boolean) {
    if(isFavourited){
        await cloudinary.v2.uploader.add_tag("favourite", [public_id]);
    }
    else{
        await cloudinary.v2.uploader.remove_tag("favourite", [public_id]);
    }
}
