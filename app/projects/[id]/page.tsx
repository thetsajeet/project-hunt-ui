"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ItemMedia } from "@/components/ui/item";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  return (
    <div className="mt-4 flex flex-col gap-4">
      <Card>
        <CardContent>
          <div className="flex">
            <div className="flex-1 flex flex-col">
              <p>Project title</p>
              <p className="w-90">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus ab accusamus, minus placeat officiis expedita earum
                esse saepe neque dolore sit distinctio! Numquam nesciunt
                mollitia culpa eos labore vitae quam.
              </p>
            </div>
            <div className="flex justify-self-center items-center gap-1">
              <div>url1</div>
              <span>|</span>
              <div>url2</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="h-[250px]">
          <Carousel className="h-full">
            <CarouselContent className="h-full">
              {[1, 2, 3].map((item) => {
                return (
                  <CarouselItem key={item} className="basis-1/2 h-full">
                    <ItemMedia
                      variant="image"
                      className="relative h-full w-full"
                    >
                      <Image
                        src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                        alt="title"
                        fill
                        className="object-cover"
                      />
                    </ItemMedia>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}
