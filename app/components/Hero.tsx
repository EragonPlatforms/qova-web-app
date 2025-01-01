"use client";
import React from "react";

import Image from "next/image";
import CustomLink from "@/app/components/CustomLink";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-[50vh] max-w-7xl w-[90%] bg-cover items-center justify-between text-center lg:text-left min-w-7xl mx-auto py-10">
      <aside className="space-y-6 basis-1/2">
        <h1 className="lg:text-5xl text-3xl font-semibold leading-normal">
          The AI Companion who cares about your digital wellbeing
        </h1>
        <p className="text-[#555555] leading-snug">
          Shaping the future of internet safety and digital wellbeing
        </p>
        <CustomLink />
      </aside>
      <aside className="aspect-square relative w-full basis-1/2">
        <Image
          className="object-cover "
          src={
            "https://res.cloudinary.com/karotcloud/image/upload/v1735649256/Qova%20ai/hero_hhnzyo.png"
          }
          alt={"Hero Image"}
          fill
        />
      </aside>
    </section>
  );
};

export default Hero;
