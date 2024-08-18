"use client";
import React, { useEffect, useState } from "react";
import BlogPage from "../_components/BlogPage";
import useFetchCollection from "../_utils/useFetchCollection";

const Blogs = () => {
  const { data: blogs, loaded, error }: any = useFetchCollection("blogs");
  const [selectedAuthor, setSelectedAuthor] = useState("all");

  const [newBlogs, setNewBlogs] = useState<any>();

  const [authors, setAuthors] = useState<string[]>([]);

  useEffect(() => {
    const filteredAuthors: string[] = [];
    for (const blog of blogs) {
      if (!filteredAuthors.includes(blog.author))
        filteredAuthors.push(blog.author);
    }

    blogs.forEach((blog: any) => {
      if (!filteredAuthors.includes(blog.author))
        filteredAuthors.push(blog.author);
    });

    // blogs.length > 0 &&
    //   blogs.forEach((blog: any) => {
    //     if (!authors.includes(blog.author)) {
    //       setAuthors([...authors, blog.author]);
    //     }
    //   });

    setNewBlogs(blogs);
    setAuthors(filteredAuthors);
  }, [blogs]);

  const filter = (e: any) => {
    setSelectedAuthor(e.target.value);
    setNewBlogs([]);

    if (e.target.value === "all") {
      setNewBlogs(blogs);
    } else
      setNewBlogs(blogs.filter((blog: any) => blog.author === e.target.value));
  };

  return (
    <main className="flex justify-center flex-col gap-2 items-center pt-10">
      <h1 className="font-bold">Blogs</h1>

      <div className="w-96 flex justify-end gap-1">
        <label htmlFor="filter">Filter by author:</label>
        <select
          name="filter"
          id="filter"
          onChange={filter}
          value={selectedAuthor}
          className="outline-none"
        >
          <option value="all">all</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      {loaded ? (
        blogs.length > 0 ? (
          <BlogPage blogs={newBlogs}></BlogPage>
        ) : (
          <p>There is no blog</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Blogs;
