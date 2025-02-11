import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

// Define authentication options
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token as string;
      return session;
    },
  },
  pages: {
    signIn: "/Home",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export API route handlers for Next.js App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
