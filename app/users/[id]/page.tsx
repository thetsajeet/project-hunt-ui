"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, PlusIcon } from "lucide-react";
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
        {[...Array(4)].map((val) => (
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
    <Card className="w-full h-full flex justify-center items-center">
      <CardContent>profile card</CardContent>
    </Card>
  );
}

function BioDataCard() {
  return (
    <Card className="w-full h-full flex justify-center items-center">
      <CardContent>bio data</CardContent>
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
