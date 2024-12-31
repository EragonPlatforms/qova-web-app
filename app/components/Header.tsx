"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

function Header() {
  function handleCloseChat() {
    localStorage.clear();
    redirect("/");
  }
  // Show a button to close the chat window when clicked.
  return (
    <header className=" shadow-lg  bg-white  ">
      <div className="flex max-w-7xl w-[90%] mx-auto justify-between items-center h-[10vh]">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/karotcloud/image/upload/v1735635970/Qova%20ai/logo_ugstcr.svg"
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
