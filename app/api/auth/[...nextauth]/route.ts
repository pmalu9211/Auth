import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { Account, Session, TokenSet, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";




export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",

    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "prathamalu" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log("credentials ",credentials)
        const user = { id: "86686", name: "harbajan",email: credentials?.username }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
    // ...add more providers here
  ],callbacks: {
    async jwt({ token , account } : {token : TokenSet, account : Account}) {
      // Persist the OAuth access_token to the token right after signin
      console.log("hi",account)
      if (account) {
        token.accessToken = account.access_token
        token.id = account.providerAccountId
        }
        return token
    },
    async session({ session, token, user } : {session : any, token : TokenSet, user :User}) {
      // Send properties to the client, like an access_token from a provider.
      console.log(session)
      session.pratham = "prathamis the king"
      session.accessToken = token.accessToken
      session.id = token.id
      return session
    },
    
  },pages: {
    signIn: '/auth/signin',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};

const handler = NextAuth(authOptions);
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}

// console.log( process.env.GITHUB_ID)
// export { handler as GET, handler as POST };
