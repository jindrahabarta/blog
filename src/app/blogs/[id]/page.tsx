"use client";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBd0sOr9svVEcsHxd5fLT1tFRQ06Kfqz5o",
  authDomain: "blog-edefa.firebaseapp.com",
  projectId: "blog-edefa",
  storageBucket: "blog-edefa.appspot.com",
  messagingSenderId: "37894909212",
  appId: "1:37894909212:web:3cf588a9212530ce9e1ed9",
};

// propojeni s firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const BlogDetails = ({ params }: any) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getDoc(doc(db, "blogs", params.id));
      setBlog(data.data());
      setLoading(false);
    })();
  }, []);

  // const blogId = parseInt(params.id, 10) - 1;
  // console.log(params);

  // const timeStamp: any = blogss.length > 0 && Number(blogss[blogId].createdAt);
  // console.log(timestampToDate(timeStamp));

  return (
    <main className="flex flex-col gap-2 items-center pt-10 ">
      {loading ? (
        <p>Loading</p>
      ) : (
        <section className="border border-gray-200 shadow-sm shadow-gray-200 bg-white flex flex-col w-1/2 p-4">
          <h1 className="font-bold">{blog.title}</h1>
          <p className=" text-gray-500 text-xs">Author: {blog.author}</p>
          <p className=" text-gray-700">{blog.text}</p>
        </section>
      )}
    </main>
  );
};

export default BlogDetails;
