import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/random",
};

export async function middleware(req: NextRequest) {
  const re = ["random", "two"];
  let me = false;

  if (re) {
    re.forEach((elem) => {
      if (req.nextUrl.pathname.includes(elem)) {
        me = true;
      }
    });
  }

  if (me) {
    req.nextUrl.pathname = "/400";
    return NextResponse.rewrite(req.nextUrl);
  }

  return NextResponse.next();
}
