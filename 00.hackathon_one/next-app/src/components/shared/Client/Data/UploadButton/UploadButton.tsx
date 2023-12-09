"use client"
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes";

const UploadButton = () => {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <section>
      <Button asChild variant={theme === "dark" ? "outline" : undefined} className="dark:fill-white fill-black">
        <div>
          <CldUploadButton
            uploadPreset="ykg4xz3z"
            onUpload={() => {
              setTimeout(() => {
                console.log("refresh");
                router.refresh();
              }, 1000);
            }}
          >
            <div className="flex items-center gap-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5`}
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z" />
              </svg>
              Upload
            </div>
          </CldUploadButton>
        </div>
      </Button>
    </section>
  );
};

export default UploadButton;
