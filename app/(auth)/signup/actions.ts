"use server";

import { registerUser } from "@/utils/register-user";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

type FormState = {
  errors: string[];
};

export async function signupAction(prevState: FormState, formData: FormData) {
  const emailAddress = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  let errors: string[] = [];
  let registrationError = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const validatePassword = (password: string): boolean => {
    return passwordRegex.test(password);
  };

  if (
    !emailAddress ||
    emailAddress.trim().length === 0 ||
    !validateEmail(emailAddress.trim())
  ) {
    errors.push("email");
  }

  if (
    !password ||
    password.trim().length === 0 ||
    !validatePassword(password)
  ) {
    errors.push("password");
  }

  if (
    !confirmPassword ||
    confirmPassword.trim().length === 0 ||
    password !== confirmPassword
  ) {
    errors.push("password mismatch");
  }

  if (errors.length > 0) {
    return { errors: errors };
  }

  try {
    console.log("attempting to register user with firebase");
    await registerUser({ email: emailAddress, password });
  } catch (error: any) {
    console.log("An error was recieved");
    if (error.type === "CallbackRouteError" && error.cause?.err) {
      const causeError = error.cause.err;
      if (causeError.code === "auth/email-already-in-use") {
        console.log("Firebase error: invalid credential");
        errors.push("account already exists");
        registrationError = true;
      }
    }
  }

  if (registrationError) {
    // Return errors if registration failed
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
  } catch (error: any) {
    console.log("An error was recieved");
    // Handle CallbackRouteError and check its cause
    if (error.type === "CallbackRouteError" && error.cause?.err) {
      const causeError = error.cause.err;
      if (causeError.code === "auth/email-already-in-use") {
        console.log("Firebase error: invalid credential");
        errors.push("account already exists");
        return { errors: errors };
      } else {
        console.log(causeError);
        errors.push("server error");
        return { errors: errors };
      }
    }

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
    // Must be used for redirect
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
