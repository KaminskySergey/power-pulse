
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { login } from "../actions/login";

interface ICredentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
        },
        async authorize(credentials: ICredentials | any, req) {
          if (!credentials) return null;
          
          const data = await login({
            email: credentials?.email,
            password: credentials?.password,
          });
          
          if (!data) return null;
          return data;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) return { ...token, ...user };
        return token;
      },
      async session({ token, session }) {
        session.user = {
          id: token.user.id as string,
          name: token.user.name as string,
          email: token.user.email as string,
          expiresIn: token.exp as number,
          accessToken: token.accessToken as string,
          avatarPath: token.user.avatarPath,
        };
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    
    pages: {
      signIn: "/auth/login",
    },
  };