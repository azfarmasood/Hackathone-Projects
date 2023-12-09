"use client"
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { ThemeProvider,useTheme } from "next-themes";
import { useState } from "react";
const Editpage =  ({searchParams:{publicId}}: { searchParams: {publicId:string} }) => {
  const [transform, setTranform] = useState<
    | undefined
    | "Add Gerative AI Fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "removeBackground"
    | "zoompan"
  >();
  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");
  const { theme } = useTheme();
  const Blur = "800"
  return (
    <Wrapper>
      <ThemeProvider>
        <div className="flex justify-between items-center px-4 md:mt-4 mt-10 w-full">
          <div>
            <h1 className="md:text-4xl font-bold text-2xl max-w-md">
              Edit Your Image Using
            </h1>
            <h1 className="md:text-4xl font-bold text-2xl max-w-md mt-2">
              Genrative AI Tools
            </h1>
          </div>
        </div>
        <div className="mt-6 flex md:flex-row flex-col gap-6 ">
          <div className=" flex flex-col gap-4">
            <Button
              variant={theme === "dark" ? "outline" : "default"}
              className="uppercase font-bold md:text-xl text-base"
              onClick={() => {
                setTranform("Add Gerative AI Fill");
                setPrompt(pendingPrompt);
              }}
            >
              Add Gerative AI Fill
            </Button>
            <Label className="md:text-2xl text-lg underline">
              Genrative AI Fill Prompt
            </Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => {
                setPendingPrompt(e.currentTarget.value);
              }}
              className="rounded-xl"
            />
          </div>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("blur")}
          >
            Add Blur
          </Button>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("grayscale")}
          >
            Add GrayScale
          </Button>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("pixelate")}
          >
            Add pixelate
          </Button>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("removeBackground")}
          >
            Add remove Background
          </Button>
        </div>
        <div className="flex md:flex-row flex-col md:mt-6 mt-4 md:gap-6">
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("zoompan")}
          >
            Add Zoom Pan
          </Button>
          <Button
            variant={"destructive"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform(undefined)}
          >
            Clear All
          </Button>
        </div>
        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-6">
          <CldImage src={publicId} width="500" height="400" alt="image" />
          {transform === "Add Gerative AI Fill" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}
          {transform === "blur" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              blur="800"
            />
          )}
          {transform === "grayscale" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              grayscale={true}
            />
          )}
          {transform === "pixelate" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              pixelate={true}
            />
          )}
          {transform === "removeBackground" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              removeBackground
            />
          )}
          {transform === "zoompan" && (
            <CldImage
              src={publicId}
              width="500"
              height="400"
              alt="image"
              zoompan
            />
          )}
        </div>
      </ThemeProvider>
    </Wrapper>
  );
};
export default Editpage;
