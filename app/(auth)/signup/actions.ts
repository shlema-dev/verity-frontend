"use server";

import { redirect } from "next/navigation";

type FormState = {
  errors: string[];
};

export async function signupAction(prevState: FormState, formData: FormData) {
  const emailAddress = formData.get("email") as string;
  const password = formData.get("password") as string;
  let errors: string[] = [];

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

  if (errors.length > 0) {
    return { errors: errors };
  }

  redirect("/");
}
