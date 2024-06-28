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
            className={`pb-2 transition-all ease-in-out duration-300 pb-2 bg-gradient-to-r from-primary-11 to-primary-8 bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom ${
              path === "/" ? "text-primary-11" : "text-gray-12"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/mission"
            className={`pb-2 transition-all ease-in-out duration-300 pb-2 bg-gradient-to-r from-primary-11 to-primary-8 bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom ${
              path === "/mission" ? "text-primary-11" : "text-gray-12"
            }`}
          >
            Mission
          </Link>
        </li>
        <li>
          <Link
            href="/electionbrief"
            className={`pb-2 transition-all ease-in-out duration-300 pb-2 bg-gradient-to-r from-primary-11 to-primary-8 bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom ${
              path === "/electionbrief" ? "text-primary-11" : "text-gray-12"
            }`}
          >
            Election Brief
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`pb-2 transition-all ease-in-out duration-300 pb-2 bg-gradient-to-r from-primary-11 to-primary-8 bg-[length:0%_1px] hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom ${
              path === "/contact" ? "text-primary-11" : "text-gray-12"
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
