"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomLink from "./custom-link";

type NavLinkTypes = {
  href: string;
  name: string;
};

const navLinkData: NavLinkTypes[] = [
  { href: "/", name: "Home" },
  { href: "#about", name: "About" },
];

function NavLink({
  href,
  name,
  onCloseNav,
}: Readonly<NavLinkTypes & { onCloseNav: () => void }>) {
  const path = usePathname();
  const active = path === href;

  return (
    <li
      className={`${
        active ? "text-qovapink font-semibold" : "lg:text-white text-vsblack"
      }`}
      onClick={onCloseNav}
    >
      <Link
        role="button"
        href={href}
        className={`relative inline-flex lg:border-b-0 border-b w-full lg:w-auto px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-200 `}
      >
        {name}
      </Link>
    </li>
  );
}

export default function NavBar({
  isOpen,
  closeNav,
}: Readonly<{ isOpen: boolean; closeNav: () => void }>) {
  const path = usePathname();
  const active = path === "/privacy-policy";
  return (
    <>
      {/* Overlay to disable scrolling when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen bg-black/20 lg:hidden z-[1000]"
          onClick={closeNav}
        />
      )}

      {/* Navigation Menu */}
      <ul
        className={`fixed top-0 right-0 h-screen w-[75%] lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:static lg:h-auto lg:flex lg:items-center transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 z-[1001] lg:z-auto gap-6 text-lg py-14 lg:p-0 rounded-l-2xl lg:rounded-none`}
      >
        {navLinkData.map(({ href, name }) => (
          <NavLink onCloseNav={closeNav} href={href} name={name} key={name} />
        ))}
        <Link
          className={`${
            active
              ? "text-qovapink font-semibold"
              : "lg:text-white text-vsblack"
          } relative inline-flex lg:border-b-0 border-b w-full lg:w-auto px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-200 `}
          onClick={closeNav}
          href="/privacy-policy"
        >
          AI Policy
        </Link>
        <div className="block lg:hidden mt-4 w-[80%] ml-4">
          <CustomLink />
        </div>
      </ul>
    </>
  );
}
