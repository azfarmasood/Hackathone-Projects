import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Albums } from "@/components/widgets/Albums/Albums";
import Link from "next/link";


export function AlbumCards({folder}: {folder:Albums}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>
          This is the folder Where Your Images has saved.{folder.name}.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between font-bold">
        <Button asChild className="font-bold">
          <Link href={`/Albums/${folder.name}`} className="font-bold ">View Albums</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
