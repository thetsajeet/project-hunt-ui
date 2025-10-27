"use client";

import { GlobeDemo } from "@/components/ui/GlobeDemo";
import Link from "next/link";

import { motion } from "motion/react";
import { ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="top-4 bg-background text-foreground">
      <main className="h-screen">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Find, build, share projects".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block italic text-primary"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-secondary-foreground"
          >
            Project Hunt is a platform to discover, share, and collaborate on
            projects. Browse curated submissions, showcase your work, find
            contributors, and turn ideas into real products together.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/projects/1">
              <Button
                size="lg"
                className="rounded-lg cursor-pointer bg-primary text-primary-foreground text-xl shadow hover:bg-primary/90"
              >
                Explore projects
                <ArrowRight />
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-lg cursor-pointer bg-card text-primary shadow text-xl hover:bg-card/70"
            >
              Upload a project
              <Upload />
            </Button>
          </motion.div>
        </div>
        <div className="mx-auto max-w-4xl text-center text-sm italic text-muted-foreground">
          Cooking...
        </div>
      </main>
    </div>
  );
}
