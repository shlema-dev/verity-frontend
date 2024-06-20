import { NextResponse, NextRequest } from "next/server";
import { auth } from "./auth";
import {
  formatDynamicPathname,
  formatPathname,
  isDynamicPathname,
} from "./utils/format-pathnames";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();
  let message = "";

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }
  const unprotectedRoutes = ["/", "/mission", "/contact"];

  if (
    !unprotectedRoutes.includes(pathname) &&
    !session?.user &&
    pathname !== "/signin" &&
    pathname !== "/forgotpassword" &&
    pathname !== "/signup"
  ) {
    const url = new URL("/signin", request.url);
    if (isDynamicPathname(pathname)) {
      message = `Sign In or Sign Up to view ${formatDynamicPathname(pathname)}`;
    } else {
      message = `Sign In or Sign Up to view ${formatPathname(pathname)}`;
    }

    url.searchParams.set("message", `${message}`);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
