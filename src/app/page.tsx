"use client";

import BlogPage from "./_components/BlogPage";
import useFetchCollection from "./_utils/useFetchCollection";

export default function Home() {
  const { data: blogs, loaded, error } = useFetchCollection("blogs");

  return (
    <main className="flex flex-col gap-2 items-center pt-10">
      <h1 className="font-bold">Main page</h1>

      {loaded ? (
        blogs.length > 0 ? (
          <BlogPage blogs={blogs}></BlogPage>
        ) : (
          <p>There is no blog</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
