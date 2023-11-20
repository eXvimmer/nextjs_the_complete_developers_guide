import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error(`missing GitHub OAuth credentials`);
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // NOTE: usually not needed, but there's a bug in next-auth
    // TODO: update packages later
    async session({ session, user }) {
      // NOTE: I added session.user check in the next line;if it causes
      // problems then set the type of parameter (the object) to any and remove
      // the session.user check.
      if (session && user && session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
