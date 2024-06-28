//this is my route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/app/models/user";
import connectDB from "@/app/db/connectDB";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, email }) {
      if (account.provider === "github" || account.provider === "google") {
        await connectDB();
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0]
          });
        }
        return true;
      }
    },
    async session({ session, user }) {
      const dbUser = await User.findOne({ email: session.user.email });
        session.user.username = dbUser.username;
        
      
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
