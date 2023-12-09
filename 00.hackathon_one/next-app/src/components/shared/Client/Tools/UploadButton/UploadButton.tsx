"use client"
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type Idprop = {
  info: {
    public_id: string;
  };
  event: "success"
};

const UploadButton = () => {
  const [imageId, setImageId] = useState("");
    return (
      <section>
        <Wrapper>
          <div className="flex flex-col items-center justify-center">
            <div>
              <CldUploadButton
                uploadPreset="ykg4xz3z"
                onUpload={(result: Idprop) => {
                  setImageId(result.info?.public_id);
                }}
              />
            </div>
            {imageId && (
              <div>
                <CldImage
                  width="400"
                  height="300"
                  src={imageId}
                  sizes="100vw"
                  alt="Description of my image"
                />
              </div>
            )}
          </div>
        </Wrapper>
      </section>
    );
}
 
export default UploadButton;