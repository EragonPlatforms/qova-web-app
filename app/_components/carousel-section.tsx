"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "@/styles/swiper.css";

import { Pagination, Autoplay } from "swiper/modules";
import CustomLink from "./custom-link";

function Slider({
  bgColor,
  color = "black",
  imgSrc,
  title,
  description,
}: {
  bgColor: string;
  color?: "black" | "white";
  imgSrc: string;
  title: string;
  description: string;
}) {
  return (
    <figure
      className={`${bgColor} w-[80%] lg:h-[50vh] h-[50vh] rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 px-14 py-10`}
    >
      <div className={`text-${color} text-center space-y-4`}>
        <h3 className="font-semibold lg:text-3xl text-xl">{title}</h3>
        <p className="text-sm lg:text-base ">{description}</p>
        <CustomLink variant="outline" />
      </div>
      <div>
        <img src={imgSrc} alt={title} />
      </div>
    </figure>
  );
}

function HowQovaWorks() {
  const pagination = {
    clickable: true,
  };
  return (
    <section className="container mx-auto py-20">
      <h2 className="lg:text-5xl text-3xl font-semibold text-center mb-20">
        How Qova Works
      </h2>
      <Swiper
        pagination={pagination}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            bgColor="bg-qovapink"
            color="white"
            imgSrc="https://res.cloudinary.com/karotcloud/image/upload/v1739366366/slide-1_cjy2tz.png"
            title="Chat Anytime"
            description="Ask questions, share concerns, and get personalized online safety advice. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            bgColor="bg-qovayellow"
            imgSrc="https://res.cloudinary.com/karotcloud/image/upload/v1739366366/slide-2_wfoin0.png"
            title="Visual & Text-Based Learning"
            description="Qova explains risks using text, images, and videos.  "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            bgColor="bg-qovagreen"
            imgSrc="https://res.cloudinary.com/karotcloud/image/upload/v1739366365/slide-3_wjfinm.png"
            title="Smart Risk Detection"
            description="Qova helps you recognize potential dangers and take action. "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            bgColor="bg-qovaskyblue"
            imgSrc="https://res.cloudinary.com/karotcloud/image/upload/v1739366366/slide-4_pl0aea.png"
            title="Confidential Support"
            description="When needed, connect discreetly with professionals and helplines.  "
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HowQovaWorks;
