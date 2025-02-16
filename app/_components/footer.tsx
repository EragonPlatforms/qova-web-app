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
          <div className="flex lg:flex-row flex-col lg:gap-[15rem] gap-8 justify-between items-start max-w-7xl w-[90%] mx-auto bg-white">
            <div className="flex sm:basis-[40%] w-full sm:gap-10 gap-4 justify-between items-center">
              <Link href="/" className="basis-1/3 inline-flex">
                <img
                  src="https://res.cloudinary.com/karotcloud/image/upload/v1739205463/Qova%20ai/logo2_gacrcg.svg"
                  alt="logo"
                  className="w-full"
                />
              </Link>
              <figure className="basis-1/3">
                <img
                  src={
                    "https://res.cloudinary.com/debwwq9et/image/upload/v1738245026/uk09mpgz63yphq6c3fi4.svg"
                  }
                  width={"100%"}
                  alt="Impact amplifier logo"
                />
              </figure>
              <figure className="basis-1/3">
                <img
                  src={
                    "https://res.cloudinary.com/karotcloud/image/upload/v1738083569/image_crg4px.png"
                  }
                  width={"100%"}
                  alt="Impact amplifier logo"
                />
              </figure>
            </div>
            <div className="flex justify-between lg:basis-[60%] px-2 lg:px-0 w-full">
              <div className="space-y-3 text-vsblue">
                <h4>
                  <Link className=" font-semibold" href={"/privacy-policy"}>
                    Responsible AI Policy
                  </Link>
                </h4>
                <ul className="">
                  <li className=" cursor-pointer">
                    <Link href={"/privacy-policy"}>Purpose</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link href={"/privacy-policy"}>Guiding Principles</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link href={"/privacy-policy"}>Policy Commitments</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link href={"/privacy-policy"}>Governance Structure</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link href={"/privacy-policy"}>Review and Updates</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-xs text-right lg:text-left">Coming soon</p>
                <div className="flex lg:flex-row flex-col gap-1 items-center mt-2">
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
      {/* <p className="w-full text-center py-6 bg-qovapink text-white">
        Powered by VirtuallySafe.org
      </p> */}
    </footer>
  );
};

export default Footer;
