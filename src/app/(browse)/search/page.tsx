import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import { Results, ResultsSkeleton } from "./_components/Result";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    term?: string;
  }>;
}) {
  const { term } = await searchParams;
  if (term) redirect("/");

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={term} />
      </Suspense>
    </div>
  );
}
