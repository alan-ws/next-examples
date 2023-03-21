import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/random",
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname, host, protocol } = url;

  const re = ["random", "two"];
  let me = false;

  if (re) {
    re.forEach((elem) => {
      if (pathname.includes(elem)) {
        me = true;
      }
    });
  }

  if (me) {
    url.pathname = "/400";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
