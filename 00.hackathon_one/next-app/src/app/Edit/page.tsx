"use client";
import Wrapper from "@/components/shared/Normal Tools/Wrapper/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react";
const Editpage = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  const [transform, setTranform] = useState<
    | undefined
    | "Add Gerative AI Fill"
    | "effects"
    | "Overlay"
    | "restore"
    | "removeBackground"
    | "zoompan"
  >();
  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");
  const { theme } = useTheme();
  const Blur = "800";
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
            onClick={() => setTranform("effects")}
          >
            Add effects
          </Button>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("Overlay")}
          >
            Add Overlay
          </Button>
          <Button
            variant={theme === "dark" ? "outline" : "default"}
            className="uppercase font-bold md:text-xl text-base"
            onClick={() => setTranform("restore")}
          >
            Add restore
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
          {transform === "effects" && (
            <CldImage
              width="500"
              height="400"
              src={publicId}
              effects={[
                {
                  background: "green",
                },
                {
                  gradientFade: true,
                },
                {
                  gradientFade: "symetric,x_0.5",
                },
              ]}
              alt="Image"
            />
          )}
          {transform === "Overlay" && (
            <CldImage
              width="500"
              height="400"
              crop="fill"
              src={publicId}
              overlays={[
                {
                  publicId: { publicId },
                  effects: [
                    {
                      crop: "fill",
                      gravity: "auto",
                      width: "500",
                      height: "400",
                    },
                  ],
                  appliedEffects: [
                    {
                      multiply: true,
                    },
                  ],
                },
              ]}
              alt="Image"
            />
          )}
          {transform === "restore" && (
            <CldImage
              src={publicId}
              width="960"
              height="600"
              crop="fill"
              restore
              sizes="100vw"
              alt="Image"
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
