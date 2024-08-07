"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-[34px] h-[34px] flex justify-center items-center"></div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        aria-label="theme-switch"
        onClick={() => setTheme("light")}
        className="w-[34px] h-[34px] flex justify-center items-center xl:hover:bg-gray-3 rounded-lg"
      >
        <MoonIcon color="#EEEEF0" width={18} height={18} />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        aria-label="theme-switch"
        onClick={() => setTheme("dark")}
        className="w-[34px] h-[34px] flex justify-center items-center xl:hover:bg-gray-3 rounded-lg"
      >
        <SunIcon color="#121113" width={18} height={18} />
      </button>
    );
  }
}
