import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|evolok|site.webmanifest|icons|pushly|hfm/_next/static|hfm/icons).*)",
  ],
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
    url.pathname = "/404";
    return NextResponse.rewrite(url, { headers: req.headers });
  }

  return NextResponse.next();
}
