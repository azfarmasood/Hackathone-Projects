"use client"
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import { CldUploadButton, CldImage, CldUploadWidgetResults } from "next-cloudinary";
import { useState } from "react";

const UploadButton = () => {
  const [imageId, setImageId] = useState("");
    return (
      <section>
        <Wrapper>
          <div className="flex flex-col items-center justify-center">
            <div>
              <CldUploadButton
                uploadPreset="ykg4xz3z"
                onUpload={(result: CldUploadWidgetResults) => {
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