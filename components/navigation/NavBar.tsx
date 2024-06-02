"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import LightVerityLogo from "@/public/LightVerityLogo.png";
import DarkVerityLogo from "@/public/DarkVerityLogo.png";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, color, easeInOut, motion } from "framer-motion";

const NavBar: React.FC = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-2 xl:bg-gray-1">
      <nav className="w-full lg:max-w-7xl mx-auto px-6 lg:px-12 py-6 md:py-8 flex justify-between items-center">
        <div className="flex gap-8">
          {/* Logo */}
          <div className="w-[100px]">
            <Link
              href={"/"}
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                }
              }}
              className="block dark:hidden"
            >
              <Image src={LightVerityLogo} alt="Verity logo" />
            </Link>

            <Link
              href={"/"}
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                }
              }}
              className="hidden dark:block"
            >
              <Image src={DarkVerityLogo} alt="Verity logo" />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden xl:block">
            <ul className="ml-6 flex gap-6 justify-center pt-1">
              <li>
                <Link
                  href="/"
                  className={`text-gray-12 pb-2 ${
                    path === "/"
                      ? "border-b-2 border-primary-9"
                      : "hover:border-b-2 border-gray-12"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/mission"
                  className={`text-gray-12 pb-2 ${
                    path === "/mission"
                      ? "border-b-2 border-primary-9"
                      : "hover:border-b-2 border-gray-12"
                  }`}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/electionbrief"
                  className={`text-gray-12 pb-2 ${
                    path === "/electionbrief"
                      ? "border-b-2 border-primary-9"
                      : "hover:border-b-2 border-gray-12"
                  }`}
                >
                  Election Brief
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-12 pb-2 ${
                    path === "/contact"
                      ? "border-b-2 border-primary-9"
                      : "hover:border-b-2 border-gray-12"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <ThemeSwitcher />
          <button
            data-testid="nav-button"
            aria-label="Nav menu button"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="p-2 rounded-full border border-gray-12 xl:hidden"
          >
            {!isOpen ? (
              <>
                <div className="hidden dark:block">
                  <HamburgerMenuIcon color="#EEEEF0" />
                </div>
                <div className="block dark:hidden">
                  <HamburgerMenuIcon color="#121113" />
                </div>
              </>
            ) : (
              <>
                <div className="hidden dark:block">
                  <Cross1Icon color="#EEEEF0" />
                </div>
                <div className="block dark:hidden">
                  <Cross1Icon color="#121113" />
                </div>
              </>
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: "0vh", opacity: 0 }}
            animate={{ height: "85vh", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ height: "0vh", opacity: 0 }}
          >
            <div className="w-full h-[85vh] flex flex-col justify-start gap-2 bg-gray-2 ">
              <ul className="flex flex-col justify-start gap-2 pb-6 mx-6 border-t border-gray-6">
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  className="mt-6 py-2 flex justify-center"
                >
                  <Link
                    href="/"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`pb-2 text-gray-12 text-lg ${
                      path === "/" ? "border-b border-gray-12" : ""
                    }`}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.25,
                    ease: "easeInOut",
                  }}
                  className="py-2 flex justify-center"
                >
                  <Link
                    href="/mission"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`pb-2 text-gray-12 text-lg ${
                      path === "/mission" ? "border-b border-gray-12" : ""
                    }`}
                  >
                    Mission
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    ease: "easeInOut",
                  }}
                  className="py-2 flex justify-center"
                >
                  <Link
                    href="/electionbrief"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`pb-2 text-gray-12 text-lg ${
                      path === "/electionbrief" ? "border-b border-gray-12" : ""
                    }`}
                  >
                    Election Brief
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.35,
                    ease: "easeInOut",
                  }}
                  className="py-2 flex justify-center"
                >
                  <Link
                    href="/contact"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`pb-2 text-gray-12 text-lg ${
                      path === "/contact" ? "border-b border-gray-12" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
