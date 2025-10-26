"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NavbarWrapper() {
  return (
    <div className="border-b border-b-[#d4c8aa] sticky inset-x-0 mx-auto z-50 border border-transparent dark:bg-black dark:border-white/20 bg-background shadow-input space-x-4 px-8 py-2">
      <div className="max-w-[1440px] mx-auto flex items-center">
        <div className="text-2xl flex-1">
          <Link href="/">Project Hunt</Link>
        </div>
        <div>
          <Button className="rounded-lg cursor-pointer bg-primary text-primary-foreground shadow hover:bg-primary/90">
            Get started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
