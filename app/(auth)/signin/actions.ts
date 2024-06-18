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
  } catch (error: any) {
    // Use 'any' to capture all types of errors
    console.log("An error was received");

    // Handle CallbackRouteError and check its cause
    if (error.type === "CallbackRouteError" && error.cause?.err) {
      const causeError = error.cause.err;
      if (causeError.code === "auth/invalid-credential") {
        console.log("Firebase error: invalid credential");
        errors.push("invalid credentials");
      } else {
        console.log(causeError);
        errors.push("server error");
      }
    }
    // Handle FirebaseError directly
    else if (error.code === "auth/invalid-credential") {
      console.log("Firebase error: invalid credential");
      errors.push("invalid credentials");
    }
    // Handle AuthError with specific error type
    else if (error.type === "CredentialsSignin") {
      console.log("Auth.js error: invalid credentials");
      errors.push("invalid credentials");
    }
    // Handle generic AuthError with unknown type
    else if (error.name === "AuthError") {
      console.log("Auth.js error: server error");
      errors.push("server error");
    }
    // Handle all other errors as server errors
    else {
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
