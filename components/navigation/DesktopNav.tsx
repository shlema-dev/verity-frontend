"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav: React.FC = () => {
  const path = usePathname();

  return (
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
  );
};

export default DesktopNav;
