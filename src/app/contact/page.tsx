"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import bookATableImg from "../../assets/book-a-table.jpg";
import Head from "next/head";
import Image from "next/image";
import addessImg from "../../assets/map.jpg";

export default function BookATable() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  setInterval(() => {
    setCurrentTime(moment().format("HH:mm"));
  }, 1000);

  return (
    <>
      <Head>
        <title>Restaurant Hukka Bukka</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
      <NavigationFooter />

          <div className="contact-bg">
        <div
          className="max-w-screen-xl py-14 px-6 sm:px-8 lg:px-16 mx-auto"
          id="contact-us"
        >

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-8 py-12 my-12 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-lg">
  <div className="space-y-6 text-gray-700">
    <p className="text-lg sm:text-xl font-serif leading-relaxed">
      Step into the warmth of our café or reach out to us—we’re just a call or email away. Our friendly team is eager to help make your experience delightful!
    </p>
    <p className="text-lg font-medium">
      <strong className="text-indigo-500">E:</strong>{" "}
      <a
        href="mailto:hybe.inn@gmail.com"
        className="hover:text-indigo-600 underline"
      >
        hybe.inn@gmail.com
      </a>
    </p>
    <p className="text-lg font-medium">
      <strong className="text-indigo-500">P:</strong> 
      <span className="ml-1">9766639164</span>
    </p>
    <p className="text-lg font-medium">
      <strong className="text-indigo-500">Location:</strong>{" "}
      <span className="ml-1">Kalikanagar, Butwal</span>
    </p>
  </div>

  <div className="relative w-full h-full">
    <div className="overflow-hidden rounded-lg shadow-md">
      <Image
        src={addessImg}
        alt="map"
        className="w-full h-auto transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>


        </div>
      </div>
      </main>
    </>
  );
}
