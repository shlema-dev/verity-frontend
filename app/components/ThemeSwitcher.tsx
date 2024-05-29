"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (resolvedTheme === "dark") {
    return (
      <button
        disabled={!mounted}
        onClick={() => setTheme("light")}
        className="p-2 hover:bg-gray-4 rounded"
      >
        <MoonIcon color="#EEEEF0" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        disabled={!mounted}
        onClick={() => setTheme("dark")}
        className="p-2 hover:bg-gray-4 rounded"
      >
        <SunIcon color="#121113" />
      </button>
    );
  }
}
