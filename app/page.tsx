import Link from "next/link";

export default function Home() {
  return (
    <div className="top-4 bg-background text-foreground">
      <main className="">
        <div className="flex flex-col gap-2 mt-4">
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/projects/1"}>Project</Link>
          <Link href={"/users/1"}>UserPage</Link>
        </div>
      </main>
    </div>
  );
}
