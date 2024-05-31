"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import LightVerityLogo from "@/public/LightVerityLogo.png";
import DarkVerityLogo from "@/public/DarkVerityLogo.png";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar: React.FC = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-1">
      <nav className="w-full lg:max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center border-b border-gray-6">
        <div className="w-[100px]">
          <Image
            src={LightVerityLogo}
            alt="Verity logo"
            className="block dark:hidden"
          />
          <Image
            src={DarkVerityLogo}
            alt="Verity logo"
            className="hidden dark:block"
          />
        </div>

        <div className="flex gap-4">
          <ThemeSwitcher />
          <button
            aria-label="Nav menu button"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="p-2 rounded-full border border-gray-12 xl:hidden"
          >
            <div className="hidden dark:block">
              <HamburgerMenuIcon color="#EEEEF0" />
            </div>
            <div className="block dark:hidden">
              <HamburgerMenuIcon color="#121113" />
            </div>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            exit={{ x: "-100%", opacity: 0 }}
          >
            <ul className="w-full h-[100vh] flex flex-col justify-start gap-6 pb-6 px-4 font-medium bg-gradient-to-br from-primary-9 to-blue-600">
              <li className="mt-6 py-2 flex justify-center">
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`pb-2 text-gray-1 dark:text-gray-12 font-medium text-xl ${
                    path === "/" ? "border-b-2" : ""
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li className="py-2 flex justify-center rounded-lg">
                <Link
                  href="/mission"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`pb-2 text-gray-1 dark:text-gray-12 font-medium text-xl ${
                    path === "/mission" ? "border-b-2" : ""
                  }`}
                >
                  MISSION
                </Link>
              </li>
              <li className="py-2 flex justify-center rounded-lg">
                <Link
                  href="/electionbrief"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`pb-2 text-gray-1 dark:text-gray-12 font-medium text-xl ${
                    path === "/electionbrief" ? "border-b-2" : ""
                  }`}
                >
                  ELECTION BRIEF
                </Link>
              </li>
              <li className="py-2 flex justify-center rounded-lg">
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`pb-2 text-gray-1 dark:text-gray-12 font-medium text-xl ${
                    path === "/contact" ? "border-b-2" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
