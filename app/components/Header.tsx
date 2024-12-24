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
    <header className="flex justify-between bg-vsblue text-white items-center h-[10vh] px-10">
      <Link href="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
