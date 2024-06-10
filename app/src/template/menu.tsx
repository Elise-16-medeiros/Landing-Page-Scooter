'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./navLink";
import { X } from "lucide-react";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "products", href: "/" },
  { label: "gallery", href: "/" },
  { label: "contacts", href: "/" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-[50%] origin-top-right bg-black/90"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-4 py-4">
                <Link href="/">
                  <Image src="/logo.png" alt="logo" width={40} height={30} />
                </Link>
                <X
                  onClick={toggleMenu}
                  size={25}
                  className="cursor-pointer text-white"
                />
              </div>

              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex h-full flex-col items-center justify-center gap-4"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden text-white">
                    <NavLink label={link.label} to={link.href} />
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-5 w-full px-4">
                 
                  <Button variant={"link"} className="uppercase text-white">
                    log in
                  </Button>
                  <Button size={"sm"} className="uppercase text-white">
                    sign up
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}


