"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer className="h-[20vh] py-14  bg-white">
      <div className="space-y-5 bg-gradient-to-r from-qovablue to-qovabluelight pt-1">
        <div className="w-full bg-white py-8">
          <div className="flex md:flex-row flex-col md:gap-[15rem] gap-8 justify-between items-start max-w-7xl w-[90%] mx-auto bg-white">
            <div className="flex sm:basis-[40%] w-full sm:gap-10 gap-4 justify-between items-start">
              <Link href="/" className="basis-1/2 inline-flex">
                <img
                  src="https://res.cloudinary.com/karotcloud/image/upload/v1738159105/QOVA_LOGO_1_vjroyx.png"
                  alt="logo"
                  className="w-full"
                />
              </Link>
              <figure className="basis-1/2">
                <img
                  src={
                    "https://res.cloudinary.com/karotcloud/image/upload/v1738083569/image_crg4px.png"
                  }
                  alt="Impact amplifier logo"
                />
              </figure>
            </div>
            <div className="flex justify-between md:basis-[60%] w-full">
              <div className="space-y-3 text-vsblue">
                <h4>
                  <Link className=" font-semibold" href={"/privacy-policy"}>
                    Responsible AI Policy
                  </Link>
                </h4>
                <ul>
                  <li>Purpose</li>
                  <li>Guiding Principles</li>
                  <li>Policy Commitments</li>
                  <li>Governance Structure</li>
                  <li>Review and Updates</li>
                </ul>
              </div>
              <div className="">
                <p className="text-xs text-right md:text-left">Coming soon</p>
                <div className="flex md:flex-row flex-col gap-1 items-center mt-2">
                  <figure>
                    <a href="#">
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
                    <a href="#">
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
      </div>
      <p className="w-full text-center py-6 bg-vsblue text-white">
        Powered by VirtuallySafe.org
      </p>
    </footer>
  );
};

export default Footer;
