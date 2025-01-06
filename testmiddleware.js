// export { auth as middleware } from "@/auth"


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/signup');


  const isAdminPage = request.nextUrl.pathname.startsWith('/bunnx-admin');

  console.log("token from middleware", token);

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check admin role for admin pages
  if (isAdminPage && token?.role !== 'admin' && token?.role !== 'superadmin') {
    return NextResponse.redirect(new URL('/', request.url));
  }


  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/bunnx-admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/bunnx-admin/:path*',
    '/login',
    '/signup'
  ]
};



