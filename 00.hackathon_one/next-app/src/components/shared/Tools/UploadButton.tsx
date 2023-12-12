"use client"
import UploadButtonSVG from "@/components/icons/UploadButtonSVG";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";


const UploadButton = () => {
    const userouter = useRouter();
  return (
    <Button asChild className="px-4 font-bold md:text-lg text-base gap-2">
        <CldUploadButton
          uploadPreset="oxhrni3b"
          onUpload={() => {
            setTimeout(() => {
              userouter.refresh();
            }, 100);
          }}
        >
          <UploadButtonSVG className="w-5 h-5" />
          Upload
        </CldUploadButton>
    </Button>
  );
};

export default UploadButton;
