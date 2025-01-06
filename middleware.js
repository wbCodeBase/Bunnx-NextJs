// export { auth as middleware } from "@/auth"


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  try {
    const isProduction = true

  console.log(request.url, "Request url");

  const isAuthPage = request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/signup');
  const isAdminPage = request.nextUrl.pathname.startsWith('/bunnx-admin');

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: isProduction,
    cookieName: isProduction ? '__Secure-next-auth.session-token' : 'next-auth.session-token'
  });

  console.log("Token Debug:", {
    hasToken: !!token,
    hasSecret: !!process.env.NEXTAUTH_SECRET,
    cookies: request.cookies.getAll()
  });
  
  // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  // console.log("Token exists:", !!token, process.env.NEXTAUTH_SECRET);

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

} catch (error) {
  console.error("Middleware error:", error);
  return NextResponse.redirect(new URL('/login', request.url));
}
}

export const config = {
  matcher: [
    '/bunnx-admin/:path*',
    '/login',
    '/signup'
  ]
};



