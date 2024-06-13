"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

type FormState = {
  errors: string[];
};

export async function signinAction(prevState: FormState, formData: FormData) {
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
    return { errors: errors };
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
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.log(error);
          errors.push("invalid credentials");
          return { errors: errors };
        default:
          console.log(error);
          errors.push("server error");
          return { errors: errors };
      }
    }
    // Must be used for redirect as next uses error for redirect
    if (isRedirectError(error)) {
      console.error(error);
      throw error;
    }

    console.log(error);
    errors.push("server error");
    return { errors: errors };
  } finally {
    redirect("/");
  }
}
