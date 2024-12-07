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
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
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
                const email = credentials.email
                const password = credentials.password

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

                if(!user) throw new CredentialsSignin("Invalid Email or Password");

                if(!user.password) throw new CredentialsSignin("Invalid Email or Password");
                
                const isMatch = await compare(password, user.password)

                if (isMatch) {
                    throw new CredentialsSignin({
                        cause: "Password does not match"
                    });
                } else return {name: user.name, email: user.email, id: user._id};

            },
        }),
    ],
    pages: {
        signIn: "/login"
    }
})