"use client";

import { Description, Field, Input, Label } from "@headlessui/react";
import { useFormState, useFormStatus } from "react-dom";
import FormSubmit from "@/components/ui/FormSubmit";
import Link from "next/link";
import { signupAction } from "@/app/(auth)/signup/actions";

const SigninForm: React.FC = () => {
  const status = useFormStatus();
  const [state, formAction] = useFormState(signupAction, {
    errors: [],
  });

  return (
    <form
      className="w-full max-w-2xl mt-12 p-4 lg:p-8 flex flex-col gap-4 border border-primary-8 bg-gradient-to-b from-primary-2 to-primary-1 rounded-xl self-center"
      action={formAction}
    >
      {state.errors.includes("server error") && (
        <p className="text-error-11">
          Sorry, something went wrong. Please try again later.
        </p>
      )}
      {state.errors.includes("account already exists") && (
        <p className="text-error-11">
          An account with that email address already exists.
        </p>
      )}
      <Field disabled={status.pending}>
        <Label className="text-sm/6 font-medium text-primary-12">
          Email Address
        </Label>
        <Description className="text-sm text-error-11">
          {state.errors.includes("email") ? "* Email required" : ""}
        </Description>
        <Input
          type="text"
          name="email"
          aria-label="email"
          autoComplete="email"
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>
      <Field disabled={status.pending}>
        <Label className="text-sm/6 font-medium text-primary-12">
          Password
        </Label>
        <Description className="text-sm text-error-11">
          {state.errors.includes("password")
            ? "* Password must be at least 8 characters with Upper/Lowercase, special, and number"
            : ""}
        </Description>
        <Input
          type="text"
          name="password"
          aria-label="password"
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>

      <FormSubmit title="Sign up" />

      <div className="mt-4 pt-4 flex flex-col justify-center items-center gap-2 border-t border-primary-8">
        <p className="text-primary-12">Already have an account?</p>

        <Link
          href="/signin"
          className={`w-full rounded-lg border border-primary-6 bg-primary-3 hover:bg-primary-4 mt-2 py-2 px-4 text-primary-12 dark:text-primary-12 text-center`}
        >
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
