"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import NavBar from "./navbar";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomLink from "./custom-link";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleCloseChat() {
    localStorage.clear();
    redirect("/");
  }

  function handleIsOpen() {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when menu is closed
    }
  }

  return (
    <header className="shadow-lg bg-black/40 backdrop-blur-md fixed top-0 w-full z-30 py-2 md:py-0 ">
      <div className="flex max-w-7xl w-[90%] relative mx-auto justify-between items-center md:min-h-[10vh] h-[7vh]">
        <Link href="/" className="inline-flex md:basis-auto w-[7rem]">
          <Image
            src="https://res.cloudinary.com/karotcloud/image/upload/v1739205268/Qova%20ai/logo_o1sr39.svg"
            alt="logo"
            width={80}
            height={80}
            className="w-full h-auto" // Makes it responsive
          />
        </Link>

        {/* Navigation */}
        <NavBar isOpen={isNavOpen} closeNav={handleIsOpen} />

        <div className="md:block hidden">
          <CustomLink />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleIsOpen}
          type="button"
          className="md:hidden flex text-qovablue z-[10001]"
        >
          {""}
          <Icon
            icon={`${
              isNavOpen ? "material-symbols:close-rounded" : "ri:menu-2-line"
            }`}
            className="text-[2rem] text-qovapink"
          />
        </button>

        {/* Overlay (Prevents scrolling and closes menu on click) */}
        {isNavOpen && (
          <input
            type="button"
            value={""}
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1000] md:hidden"
            onClick={handleIsOpen}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
