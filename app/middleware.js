// export { auth as middleware } from "@/auth"

// middleware.ts
// import { NextResponse } from 'next/server'
// export { auth } from "@/auth"

// export default async function middleware(req) {
//     const session = await auth();

//     // Protected Routes Logic

//     if (req.nextUrl.pathname.startsWith('/bunnx-admin') && !session) {
//         return NextResponse.redirect(new URL('/login', req.url));
//     }

//     if (session && ['/login', '/signup'].includes(req.nextUrl.pathname)) {
//         return NextResponse.redirect(new URL('/', req.url));
//     }

//     // API Routes Protection
//     //   if (request.nextUrl.pathname.startsWith('/api')) {
//     //     if (!session) {
//     //       return new NextResponse(
//     //         JSON.stringify({ error: 'Authentication required' }),
//     //         { 
//     //           status: 401,
//     //           headers: { 'content-type': 'application/json' }
//     //         }
//     //       )
//     //     }
//     //   }

//     return NextResponse.next()
// }

// // Configure which routes to run middleware on
// export const config = {
//     matcher: [
//         '/bunnx-admin/:path*',
//         '/api/:path*',
//         '/login',
//         '/signup'
//     ]
// }

