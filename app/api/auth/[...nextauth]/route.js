import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDB";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.APP_GITHUB_ID,
      clientSecret: process.env.APP_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.APP_GOOGLE_ID,
      clientSecret: process.env.APP_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, email }) {
      if (account.provider === "google" || account.provider === "github") {
        await connectDB();
        const currentUser = await User.findOne({
          email: user.email,
          provider: account.provider,
        });
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
            provider: account.provider,
          });
        }
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
        if (user) {
          token.id = user.id;
        }
      }
      return token;
    },
    async session({  session, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.username = dbUser.username;

      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      session.user.provider = token.provider;

      console.log("Session Username:", token.username);
      console.log("Session Information:", session);
      console.log("Provider Information:", token.provider);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
