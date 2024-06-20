import { authentication } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface RegisterUserProps {
  email: string;
  password: string;
}

export async function registerUser({ email, password }: RegisterUserProps) {
  const auth = authentication;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log("throwing error up from registerUser");
      throw error;
    });
}
