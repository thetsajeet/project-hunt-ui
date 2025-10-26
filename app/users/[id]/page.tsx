"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams<{ id: string }>();

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* first row */}
      <div>
        <div>{/* profile card */}</div>
        <div>{/* details */}</div>
      </div>
      {/* second row */}
      <div>
        <div></div>
      </div>
    </div>
  );
}
