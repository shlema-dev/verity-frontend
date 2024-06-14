"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { FirebaseError } from "firebase/app";

type FormState = {
  errors: string[];
  success: boolean;
};

export async function signinAction(
  state: FormState | undefined,
  formData: FormData
): Promise<FormState | undefined> {
  const emailAddress = formData.get("email") as string;
  const password = formData.get("password") as string;
  let errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  if (
    !emailAddress ||
    emailAddress.trim().length === 0 ||
    !validateEmail(emailAddress.trim())
  ) {
    errors.push("email");
  }

  if (!password || password.trim().length === 0) {
    errors.push("password");
  }

  if (errors.length > 0) {
    return { errors: errors, success: false };
  }

  try {
    console.log("attempting to sign in...");
    await signIn("credentials", {
      email: emailAddress,
      password,
      redirect: false,
    });
    console.log("Successfully signed in!");
  } catch (error) {
    console.log("An error was received");
    if (error instanceof FirebaseError) {
      console.log("error received: invalid credentials");
      errors.push("invalid credentials");
    } else if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.log(error);
          errors.push("invalid credentials");
          break;
        default:
          console.log(error);
          errors.push("server error");
          break;
      }
    } else {
      console.log(error);
      errors.push("server error");
    }
    return { errors: errors, success: false };
  } finally {
    if (errors.length === 0) {
      return { errors, success: true };
    }
  }
}
