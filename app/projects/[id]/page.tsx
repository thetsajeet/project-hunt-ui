"use client";

import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  return <div>{params.id}</div>;
}
