import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import User from "../models/User";
import connectToDatabase from '../utils/database';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            authorize: async (credentials) => {

                console.log("credentials", credentials);

                const { email, password } = credentials;

                if (!email || !password) {
                    throw new CredentialsSignin({
                        cause: "Please provide missing email or password"
                    });
                }

                await connectToDatabase();

                if (typeof email !== "string") {
                    throw new CredentialsSignin({
                        cause: "Email is not valid."
                    });
                }

                const user = await User.findOne({ email }).select("+password")
                console.log("User found:", user);

                if (!user) throw new CredentialsSignin({ cause: "Invalid Email or Password" });

                const isMatch = await compare(password, user.password)

                if (!isMatch) throw new CredentialsSignin({ cause: "Password does not match" });


                else return { name: user.name, email: user.email, id: user._id, role: user.role, isVerified: user.isVerified };

            },
        }),
    ],

    session: {
        strategy: "jwt", // Use JSON Web Token for session handling
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name || null;
                token.email = user.email || null;
                token.role = user.role || null;
                token.isVerified = user.isVerified || null;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id,
                name: token.name,
                email: token.email,
                role: token.role,
                isVerified: token.isVerified,
            };
            return session;
        },
    },


    pages: {
        signIn: "/login"
    }
})