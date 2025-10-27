"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams<{ id: string }>();

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* first row */}
      <div className="grid grid-cols-12 gap-1 h-[250px]">
        <div className="col-span-3 h-full">
          <ProfileCard />
        </div>
        <div className="col-span-9 h-full">
          <BioDataCard />
        </div>
      </div>
      {/* second row */}
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12">
          <ProjectsBanner />
        </div>
        {[1, 2, 3, 4, 5].map((val) => (
          <div key={val} className="col-span-3">
            <ProjectCard />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="w-full h-full flex justify-center items-center p-1">
      <CardContent className="h-full w-full p-1">
        <ItemMedia variant="image" className="relative w-full h-full">
          <Image
            src={`https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg`}
            alt={`rabbit`}
            fill
            className="object-cover grayscale"
          />
        </ItemMedia>
      </CardContent>
    </Card>
  );
}

function BioDataCard() {
  return (
    <Card className="w-full h-full flex">
      <CardContent className="flex flex-col">
        <div className="space-x-1">
          <span className="font-semibold">Name:</span>
          <span>Ajeet T S</span>
        </div>
        <Separator className="my-2" />
        <div className="space-x-1">
          <span className="font-semibold">Role:</span>
          <span>Software Developer Engineer 2</span>
        </div>
        <Separator className="my-2" />
        <div className="space-x-1">
          <span className="font-semibold">Location:</span>
          <span>Pune</span>
        </div>
        <Separator className="my-2" />
        <div className="space-x-1">
          <span className="font-semibold">Contact:</span>
          <span>ajeet.tumuluru@gmail.com</span>
        </div>
        <Separator className="my-2" />
        <div className="flex row space-x-2">
          <span className="font-semibold">Links:</span>
          <span>github</span>
          <Separator orientation="vertical" />
          <span>linkedin</span>
          <Separator orientation="vertical" />
          <span>portfolio</span>
        </div>
        <Separator className="my-2" />
      </CardContent>
    </Card>
  );
}

function ProjectsBanner() {
  return (
    <Card className="w-full h-full flex py-2">
      <CardContent className="h-full flex items-center">
        <span className="text-lg flex-1">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer hover:rounded-2xl"
          aria-label="Add project"
        >
          <PlusIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjectCard() {
  return (
    <Card className="w-full h-full">
      <CardContent className="flex justify-center items-center h-32">
        projects card
      </CardContent>
    </Card>
  );
}
