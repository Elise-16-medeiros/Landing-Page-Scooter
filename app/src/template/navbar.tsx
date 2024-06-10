"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navLink";

type MenuProps = {
  toggleMenu: () => void;
};

const navLinks = [
  { label: "products", href: "/" },
  { label: "gallery", href: "/" },
  { label: "contact", href: "/" },
];

export default function Navbar({ toggleMenu }: MenuProps) {
  return (
    <header className="flex items-center justify-between border border-b-zinc-200 px-8 py-4">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={30} />
        </Link>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        {navLinks.map((link, index) => (
          <div key={index} className="overflow-hidden">
            <NavLink label={link.label} to={link.href} />
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:items-center">
        <Button variant={"link"} className="uppercase">
          log in
        </Button>
        <Button size={"sm"} className="uppercase text-white">
          sign up
        </Button>
      </div>

      <MenuIcon onClick={toggleMenu} className="cursor-pointer lg:hidden" />
    </header>
  );
}

{
  /**
   *
   */
}
