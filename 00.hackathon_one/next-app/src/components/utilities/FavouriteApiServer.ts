"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export default async function FavouriteApiServer(public_id: string, isFavourited:boolean, path:string) {
    if(isFavourited){
        await cloudinary.v2.uploader.add_tag("favourite", [public_id]);
    }
    else{
        await cloudinary.v2.uploader.remove_tag("favourite", [public_id]);
    }
    await TakeTime(1000);
    revalidatePath(path)
}

async function TakeTime(takeTime:number) {
    return await new Promise ((resolve) => setTimeout(resolve,takeTime))
}