"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blog = ({ title, author, text, blogId }: any) => {
  const router = useRouter();

  return (
    <div className=" group border border-gray-200 shadow-sm shadow-gray-200 bg-white flex justify-start w-96">
      <div className="h-34 w-4">
        <div className=" bg-red-200 w-0 h-full group-hover:w-full duration-200"></div>
      </div>

      <div className="px-4 py-2 w-96 flex flex-col gap-2 hover:cursor-pointer">
        <h1 className="border-b-2 border-dotted border-red-200 w-fit  font-bold">
          {title}
        </h1>
        <p className=" text-gray-500 text-xs">Author: {author}</p>
        {text.length > 100 ? (
          <p className=" text-gray-700 text-sm">{text.slice(0, 100)}...</p>
        ) : (
          <p className=" text-gray-700 text-sm">{text}</p>
        )}

        <Link
          href={`/blogs/${blogId}`}
          prefetch
          className="self-end border border-gray-200 shadow-md shadow-gray-200 px-2 hover:shadow-inner duration-200 hover:pr-3"
        >
          Číst dále
        </Link>
      </div>
    </div>
  );
};

export default Blog;
