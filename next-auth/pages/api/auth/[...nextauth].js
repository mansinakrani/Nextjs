import NextAuth from 'next-auth'
// import Provider from "next-auth/providers"; v3 
import GitHubProvider from "next-auth/providers/github"; //v4

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
})