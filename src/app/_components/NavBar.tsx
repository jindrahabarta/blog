"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", text: "Home" },
  { href: "/blogs", text: "Blogs" },
  { href: "/addBlog", text: "Add Blog" },
  { href: "/admin", text: "Admin" },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className="rounded-2xl bg-red-100/70 backdrop-blur-sm px-4 py-1 flex justify-between fixed w-9/12 self-center">
      <Link rel="stylesheet" href="/">
        <p className=" font-bold">Blog</p>{" "}
      </Link>
      <div>
        <ul className="flex justify-between w-80">
          {links.map((link: any, index: number) => (
            <li className=" w-full flex justify-center" key={index}>
              <Link
                href={link.href}
                className={`${
                  link.href == path
                    ? " text-decoration-line: underline"
                    : "text-decoration-line: none"
                } `}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
