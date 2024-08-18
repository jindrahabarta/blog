import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "./_components/NavBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "This is my firs blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body className=" flex flex-col gap-2 p-4 bg-gray-100">
        <NavBar></NavBar>

        {children}
      </body>
    </html>
  );
}
