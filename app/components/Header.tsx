"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import { Icon } from "@iconify/react";

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
    <header className="shadow-lg bg-white py-2 md:py-0  overflow-x-hidden">
      <div className="flex max-w-7xl w-[90%] relative mx-auto justify-between items-center md:min-h-[10vh] h-[7vh]">
        <Link href="/" className="inline-flex md:basis-auto ">
          <Image
            src="https://res.cloudinary.com/karotcloud/image/upload/v1738159105/QOVA_LOGO_1_vjroyx.png"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-auto" // Makes it responsive
          />
        </Link>

        {/* Navigation */}
        <NavBar isOpen={isNavOpen} closeNav={handleIsOpen} />

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
            className="text-[2rem]"
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
