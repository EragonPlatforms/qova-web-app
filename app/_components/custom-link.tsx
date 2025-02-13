import Link from "next/link";
import React from "react";

const CustomLink = ({ variant = "default" }) => {
  const baseStyles =
    "font-semibold text-sm lg:text-base w-full lg:w-max rounded-full text-center lg:px-20 px-10 lg:py-4 py-3 inline-block";
  const defaultStyles = "bg-qovapink text-white";
  const outlineStyles = "border border-current text-inherit";

  return (
    <Link
      className={`${baseStyles} ${
        variant === "outline" ? outlineStyles : defaultStyles
      }`}
      href="/login"
    >
      Get Started Now
    </Link>
  );
};

export default CustomLink;
