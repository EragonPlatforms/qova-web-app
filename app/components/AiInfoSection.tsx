import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";

const AiInfoSection = () => {
  return (
    <section className="max-w-5xl w-[80%] mx-auto text-center flex flex-col pb-14  justify-center items-center min-h-[70vh]">
      <div className="aspect-video relative h-[90%] w-[80%]">
        <Image
          className="object-contain "
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
