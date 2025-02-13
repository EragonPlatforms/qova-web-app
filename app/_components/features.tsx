import Image from "next/image";
import React from "react";

function Figure({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={1200}
      className={`w-full h-auto ${className} rounded-lg`}
    />
  );
}

function Features() {
  return (
    <section className="bg-vsblack text-white pt-20">
      <h2 className="text-center font-semibold md:text-5xl text-3xl">
        Why Qova?
      </h2>
      <div className="overflow-x-scroll no-scrollbar">
        <div className="lg:max-w-6xl lg:mx-auto w-[200%] px-10 lg:pl-0 flex gap-10 justify-center items-center mt-24">
          <Figure
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739295333/Qova%20ai/frame-1_c7tgec.png"
            alt="Frame one"
          />
          <Figure
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739295332/Qova%20ai/frame-2_jidhjf.png"
            alt="Frame two"
          />
        </div>
      </div>
      <div className="overflow-x-scroll .no-scrollbar">
        <div className=" lg:max-w-6xl lg:mx-auto w-[200%] px-10 lg:pl-0 flex gap-10 justify-center items-center mt-14 pb-20">
          <Figure
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739303129/Qova%20ai/frame-3_gamqvz.png"
            alt="Frame three"
          />
          <Figure
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739303129/Qova%20ai/frame-4_jeobk7.png"
            alt="Frame four"
            className="translate-y-10"
          />
          <Figure
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739303129/Qova%20ai/frame-5_ba2hnb.png"
            alt="Frame three"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
