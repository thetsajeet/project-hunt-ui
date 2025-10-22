import Link from "next/link";

export default function Home() {
  return (
    <div className="top-4 bg-background text-foreground">
      <main className="">
        <div>Welcome to project hunt</div>
        <div className="flex flex-col gap-2 mt-4">
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/projects/1"}>Project</Link>
        </div>
      </main>
    </div>
  );
}
