import Image from "next/image";
import React from "react";

function Download() {
  return (
    <section className="bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1739368923/blur-bg_zkhxdg.svg')] md:h-[80dvh] h-dvh bg-cover">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-col lg:flex-row lg:text-left text-center py-10 px-2">
        <div className="space-y-3">
          <h2 className="lg:text-5xl text-3xl font-semibold max-w-2xl">
            Join 20,000+ Young People Already Using Qova!
          </h2>
          <p className="text-[#4F4F4F]">Download the App</p>
          <p className="text-[#4F4F4F]">Available on iOS and Android</p>
          <div className="flex justify-center gap-4 items-center mt-2">
            <figure>
              <a href="#">
                {""}
                <Image
                  src={
                    "https://res.cloudinary.com/karotcloud/image/upload/v1735656967/Qova%20ai/playstore_bfmw4i.png"
                  }
                  width={120}
                  height={65}
                  className="w-full h-auto"
                  alt="Google playstore Badge"
                />
              </a>
            </figure>
            <figure>
              <a href="#">
                {""}
                <Image
                  src={
                    "https://res.cloudinary.com/karotcloud/image/upload/v1735656967/Qova%20ai/appstore_zzwfbr.png"
                  }
                  width={120}
                  height={60}
                  className="w-full h-auto"
                  alt="Apple store Badge"
                />
              </a>
            </figure>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/karotcloud/image/upload/v1735649256/Qova%20ai/hero_hhnzyo.png"
            }
            alt="Qova ai app"
            width={800}
            height={800}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default Download;
