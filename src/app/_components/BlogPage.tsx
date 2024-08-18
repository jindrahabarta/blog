"use client";
import React, { useState } from "react";
import Blog from "./Blog";
import useFetchCollection from "../_utils/useFetchCollection";

const BlogPage = ({ blogs }: any) => {
  return (
    <section className="flex flex-col gap-2">
      {blogs.map((blog: any) => (
        <Blog
          key={blog.id}
          blogId={blog.id}
          title={blog.title}
          author={blog.author}
          text={blog.text}
        ></Blog>
      ))}
    </section>
  );
};

export default BlogPage;
