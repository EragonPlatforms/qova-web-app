import Link from "next/link";
import React from "react";

const CustomLink = () => {
  return (
    <Link
      className="bg-vsblue text-sm md:text-base text-white w-full md:w-max rounded-full md:px-20 px-10 md:py-4 py-3 inline-block"
      href="/login"
    >
      Get Started Now
    </Link>
  );
};

export default CustomLink;
