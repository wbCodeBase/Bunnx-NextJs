export { auth as middleware } from "@/auth"




// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     const { pathname } = req.nextUrl;

//     // Allow access to login, public, or API routes
//     if (pathname.startsWith("/login") || pathname.startsWith("/api")) {
//       return NextResponse.next();
//     }

//     // Ensure only authenticated users can access protected routes
//     if (pathname.startsWith("/bunnx-admin")) {
//       return NextResponse.next(); // User is authenticated
//     }

//     // Default behavior for unprotected routes
//     return NextResponse.next();
//   },
//   {
//     // Options for withAuth
//     callbacks: {
//       authorized: ({ token }) => {
//         // Only allow access if user has a valid token
//         return !!token;
//       },
//     },
//   }
// );
