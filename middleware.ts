import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.href);
  const re = ["one", "two"];
  let me = false;

  if (re) {
    re.forEach((elem) => {
      if ("one".includes(elem)) {
        console.log("found");
        me = true;
      }
    });
  }
  req.nextUrl.pathname = "/400";
  return NextResponse.rewrite(req.nextUrl);

  //   return NextResponse.rewrite(req.nextUrl, { status: 404 });
}
