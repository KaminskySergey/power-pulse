import { handlers } from "../../../../auth";

export const { GET, POST } = handlers


// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       id: "credentials",
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "jsmith@" },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         if (!credentials) return;
//         const data = await login({
//           email: credentials?.email,
//           password: credentials?.password,
//         });
//         if (!data) return null;
//         return data;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if(user) return {...token, ...user}

//       return token;
//     },
//     async session({ token, session }) {
//       session.user = {
//         id: token.user.id as string,
//         name: token.user.name as string,
//         email: token.user.email as string,
//         expiresIn: token.exp as string,
//         accessToken: token.accessToken as string,
//       };
//       return session;
//     },
//   },
//   session: {
//     strategy: "jwt"
//   },
//   secret: process.env.JWT_SECRET as string,
//   pages: {
//     signIn: "/auth/login",
//   },
// };
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
