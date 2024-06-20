"use server";

import { authentication } from "@/app/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

type FormState = {
  errors: string[];
  success: boolean;
};

export async function resetPasswordAction(
  state: FormState | undefined,
  formData: FormData
): Promise<FormState | undefined> {
  const emailAddress = formData.get("email") as string;
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

  if (errors.length > 0) {
    return { errors: errors, success: false };
  }

  try {
    console.log("attempting to send password reset email...");
    await sendPasswordResetEmail(authentication, emailAddress);
    console.log("Successfully signed in!");
  } catch (error: any) {
    console.log(error);
    errors.push("server error");
    return { errors: errors, success: false };
  } finally {
    if (errors.length === 0) {
      return { errors, success: true };
    }
  }
}
