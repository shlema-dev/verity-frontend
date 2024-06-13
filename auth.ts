import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "@/app/firebase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
        return await signInWithEmailAndPassword(
          authentication,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            } else {
              return null;
            }
          })
          .catch((error) => console.log(error));
      },
    }),
  ],
});
