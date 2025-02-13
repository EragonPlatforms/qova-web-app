"use client";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

import Image from "next/image";
import CustomLink from "@/app/_components/custom-link";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="flex lg:min-h-[100dvh] h-[50dvh] w-full items-center justify-center bg-gradient-to-r from-black/20 to-black/20 text-center lg:text-left px-2 pt-20 relative">
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/karotcloud/video/upload/v1739265172/Qova%20ai/hero_sjlhwg.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div
        data-aos="fade-right"
        className="md:space-y-6 space-y-3 md:basis-[70%] basis-[90%] mx-auto text-center"
      >
        <h1 className="lg:text-7xl lg:w-[80%] w-full mx-auto text-white text-3xl font-semibold lg:leading-normal leading-tight">
          Your <span className="text-qovapink">AI</span>-Powered Digital Safety
          Companion{" "}
        </h1>
        <p className="text-[#fff] leading-snug lg:text-xl text-sm font-semibold">
          Always here to learn, listen and talk{" "}
        </p>
        <CustomLink />
      </div>
    </section>
  );
};

export default Hero;
