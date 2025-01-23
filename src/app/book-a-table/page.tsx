"use client";

import BookATableSection from "@/sections/book-a-table";
import Head from "next/head";

export default function BookATable() {
  return (
    <>
      <Head>
        <title>Restaurant HYBE</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <BookATableSection />
      </main>
    </>
  );
}
