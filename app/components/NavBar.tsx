import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkTypes = {
  href: string;
  name: string;
};

const navLinkData: NavLinkTypes[] = [
  { href: "/", name: "Home" },
  { href: "/resources", name: "Resources" },
  { href: "/games", name: "Games" },
  { href: "/news", name: "News" },
  { href: "/forum", name: "Forum" },
];

function NavLink({
  href,
  name,
  onCloseNav,
}: Readonly<NavLinkTypes & { onCloseNav: () => void }>) {
  const path = usePathname();
  const active = path === href; // Exact match for active state

  return (
    <li role="button" onClick={onCloseNav}>
      <Link
        href={href}
        className={`relative inline-flex md:border-b-0 border-b w-full md:w-auto px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 ${
          active ? "text-qovablue font-semibold" : "text-gray-700"
        }`}
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
  return (
    <>
      {/* Overlay to disable scrolling when menu is open */}
      {isOpen && (
        <input
          type="button"
          value={""}
          className="fixed inset-0 bg-black/40 md:hidden z-[1000]"
          onClick={closeNav}
        />
      )}

      {/* Navigation Menu */}
      <ul
        className={`fixed top-0 right-0 h-screen w-[75%] md:w-auto bg-white shadow-lg md:shadow-none md:static md:h-auto md:flex md:items-center transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 z-[1001] md:z-auto gap-6 text-lg py-14 md:p-0 rounded-l-2xl md:rounded-none`}
      >
        {navLinkData.map(({ href, name }) => (
          <NavLink onCloseNav={closeNav} href={href} name={name} key={name} />
        ))}
      </ul>
    </>
  );
}
