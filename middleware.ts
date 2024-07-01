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
  let message = "";

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }
  const unprotectedRoutes = [
    "/",
    "/mission",
    "/contact",
    "/signin",
    "/forgotpassword",
    "/signup",
  ];
  if (unprotectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = await auth();

  if (!session?.user) {
    const url = new URL("/signin", request.url);
    const message = isDynamicPathname(pathname)
      ? `Sign In or Sign Up to view ${formatDynamicPathname(pathname)}`
      : `Sign In or Sign Up to view ${formatPathname(pathname)}`;

    url.searchParams.set("message", message);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
