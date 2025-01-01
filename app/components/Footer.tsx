import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[20vh] py-14  bg-white">
      <div className="space-y-5 bg-gradient-to-r from-qovablue to-qovabluelight pt-1">
        <div className="w-full bg-white py-8">
          <div className="flex md:flex-row flex-col gap-4 md:justify-between items-center max-w-7xl w-[90%] mx-auto bg-white">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/karotcloud/image/upload/v1735635970/Qova%20ai/logo_ugstcr.svg"
                alt="logo"
              />
            </Link>
            <div className="">
              <p className="text-xs">Coming soon</p>
              <div className="flex gap-1 items-center mt-2">
                <figure>
                  <a href="">
                    {""}
                    <Image
                      src={
                        "https://res.cloudinary.com/karotcloud/image/upload/v1735656967/Qova%20ai/playstore_bfmw4i.png"
                      }
                      width={120}
                      height={65}
                      alt="Google playstore Badge"
                    />
                  </a>
                </figure>
                <figure>
                  <a href="">
                    {""}
                    <Image
                      src={
                        "https://res.cloudinary.com/karotcloud/image/upload/v1735656967/Qova%20ai/appstore_zzwfbr.png"
                      }
                      width={120}
                      height={60}
                      alt="Apple store Badge"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pb-8">Powered by VirtuallySafe.org</p>
    </footer>
  );
};

export default Footer;
