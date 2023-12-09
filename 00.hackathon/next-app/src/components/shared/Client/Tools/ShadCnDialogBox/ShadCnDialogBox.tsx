import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SearchResult } from "@/components/widgets/Gallery/Gallery";
import { addtoalbum } from "@/components/shared/Server/Data/AddToAlbum/AddtoAlbum";
import GallerySvg from "@/components/shared/Client/Data/Icons/GallerySvg/GallerySvg";

export function ShadCnDialogBox({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) {
  const [inAlbum, setAlbum] = useState("");
  const [open, setOpenState] = useState(false);

  const Close = () => {
    onClose();
    setOpenState(false)
  }

  return (
    <Dialog open={open} onOpenChange={(newopenState) => {
      setOpenState(newopenState);
      if(!newopenState){
        onClose();
      }
    }}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <GallerySvg className="w-5 h-5 mr-2 dark:fill-white" />
          <span>Add To Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To Album</DialogTitle>
          <DialogDescription>
            Type in Album You want to add images
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbum(e.target.value)}
              id="album-name"
              defaultValue={inAlbum}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async () => {
              Close()
              await addtoalbum(image, inAlbum);
              setOpenState(false);
            }}
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
