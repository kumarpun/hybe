"use client";

import Link from "next/link";
import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant HYBE</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20]">
          <br />
          <div className="slider w-full h-full flex flex-col items-center justify-center">
            {/* Main Title */}
            <h1 className="font-medium text-5xl sm:text-6xl md:text-[90px] lg:text-[160px] leading-none text-center">
              The HYBE
            </h1>
            <h2 className="text-[#FACE8D] font-dancing text-2xl sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none text-center">
              Food & Drinks
            </h2>

            {/* Opening Hours */}
            <div className="bg-white w-[250px] h-auto mt-6 rounded-[10px] text-black py-4 px-6 flex flex-col items-center text-center">
              <h3 className="font-normal tracking-wide">Opening Hours</h3>
              <div className="mt-2 flex flex-col items-center">
                <h2 className="">Everyday</h2>
                <p className="font-normal tracking-wide">7 AM - 10 PM</p>
              </div>
            </div>
          </div>
        </section>

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>

        <NavigationFooter />
      </main>
    </>
  );
}
