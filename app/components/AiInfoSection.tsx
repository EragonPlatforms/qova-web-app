import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";

const AiInfoSection = () => {
  return (
    <section className="max-w-5xl w-[90%] mx-auto text-center flex flex-col md:pb-14 pb-7 justify-center items-center md:min-h-[70vh] h-[40vh]">
      <div className="aspect-video relative md:w-[80%] w-full">
        <Image
          className="object-contain"
          src={
            "https://res.cloudinary.com/karotcloud/image/upload/v1735649256/Qova%20ai/aihuman_vqvizx.png"
          }
          fill
          alt="AI human thinking out loud"
        />
      </div>
      <CustomLink />
    </section>
  );
};

export default AiInfoSection;
