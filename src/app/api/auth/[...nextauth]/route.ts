import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

// export default NextAuth(authOptions)