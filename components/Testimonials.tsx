"use client";

import React from "react";
import InfiniteMovingCards from "@/components/ui/Infinite-Moving-Testimonials";
import { companies, testimonials } from "@/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center xs:gap-4 md:gap-16 max-w-[90%] mt-[20px]">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <Image
              width={400}
              height={300}
              src={img}
              alt={name}
              className="md:w-10 w-5"
            />
            <Image
              width={400}
              height={300}
              src={nameImg}
              alt={name}
              className="md:w-24 w-20"
            />
          </div>
        ))}
      </div>

      <div className="select-none pointer-events-none overflow-clip z-20 absolute xs:bottom-3 sm:bottom-[10px] md:bottom-[6px] lg:bottom-1  xs:w-[250%] md:w-full">
        <Image
          width={400}
          height={300}
          src="/footer-grid.svg"
          alt="Grid"
          className="w-full h-full opacity-50"
          draggable="false"
        />
      </div>
    </>
  );
}
