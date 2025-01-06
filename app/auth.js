// auth.js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import User from "../models/User"
import connectToDatabase from '../utils/database'
import { compare } from 'bcryptjs'

export const {
  handlers,
  auth,
  signIn,
  signOut 
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Missing credentials')
          }

          await connectToDatabase()

          const user = await User.findOne({ email: credentials.email }).select('+password')
          if (!user) {
            throw new Error('Invalid credentials')
          }

          const isPasswordValid = await compare(credentials.password, user.password)
          if (!isPasswordValid) {
            throw new Error('Invalid credentials')
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role // Include if you have role-based auth
          }


        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      // Handle user updates
      if (trigger === "update" && session) {
        token = { ...token, ...session }
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    }
  },

  pages: {
    signIn: '/login',
    error: '/error', // Custom error page
    signOut: '/logout'
  },

  events: { 
    async signIn({ user }) {
      // Log sign-ins or update last login time
      console.log(`User ${user.email} signed in`)
    }
  }
})


// import NextAuth, { CredentialsSignin } from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import Credentials from "next-auth/providers/credentials"
// import User from "../models/User";
// import connectToDatabase from '../utils/database';
// import { compare } from 'bcryptjs';

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         }),

//         Credentials({
//             credentials: {
//                 email: {
//                     label: "Email",
//                     type: "email"
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password"
//                 },
//             },
//             authorize: async (credentials) => {

//                 console.log("credentials", credentials);

//                 const { email, password } = credentials;

//                 if (!email || !password) {
//                     throw new CredentialsSignin({
//                         cause: "Please provide missing email or password"
//                     });
//                 }

//                 await connectToDatabase();

//                 if (typeof email !== "string") {
//                     throw new CredentialsSignin({
//                         cause: "Email is not valid."
//                     });
//                 }

//                 const user = await User.findOne({ email }).select("+password")
//                 console.log("User found:", user);

//                 if (!user) throw new CredentialsSignin({ cause: "Invalid Email or Password" });

//                 const isMatch = await compare(password, user.password)

//                 if (!isMatch) throw new CredentialsSignin({ cause: "Password does not match" });


//                 else return { name: user.name, email: user.email, id: user._id };

//             },
//         }),
//     ],

//     session: {
//         strategy: "jwt", // Use JSON Web Token for session handling
//     },

//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id;
//                 token.name = user.name || null;
//                 token.email = user.email || null;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             session.user = {
//                 id: token.id,
//                 name: token.name,
//                 email: token.email,
//             };
//             return session;
//         },
//     },


//     pages: {
//         signIn: "/login"
//     }
// })