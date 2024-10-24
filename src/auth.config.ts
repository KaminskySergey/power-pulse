import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "../actions/login";
// import { cookies } from "next/headers";

interface ICredentials {
  email: string;
  password: string;
}

export default {
  trustHost: true,
  
  // trustHostedDomain: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: ICredentials | any, req) {
        // async authorize(credentials: ICredentials | any, _) {
        if (!credentials) return;
        const data = await login({
          email: credentials?.email,
          password: credentials?.password,
        });
        if(!data) return 
        // cookies().set('token', data.accessToken, { secure: true })
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
        emailVerified: null,
        avatarPath: token.user.avatarPath,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;
