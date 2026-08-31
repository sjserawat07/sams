import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Authentication bypass: this internal deployment opens directly without
  // requiring the /login or /admin-login flow. Keep the existing auth code
  // in the repository so authentication can be restored later if needed.
  const res = NextResponse.next();
  return res;
}

export const config = { matcher: ["/((?!.*\\..*).*)"] };
