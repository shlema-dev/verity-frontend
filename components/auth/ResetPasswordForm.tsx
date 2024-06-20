"use client";

import { Description, Field, Input, Label } from "@headlessui/react";
import { useFormState, useFormStatus } from "react-dom";
import FormSubmit from "@/components/ui/FormSubmit";
import Link from "next/link";
import { signinAction } from "@/app/(auth)/signin/actions";
import { useEffect } from "react";
import { resetPasswordAction } from "@/app/(auth)/forgotpassword/actions";

const SigninForm: React.FC = () => {
  const status = useFormStatus();
  const [state, formAction] = useFormState(resetPasswordAction, {
    errors: [],
    success: false,
  });

  return (
    <form
      className="w-full max-w-2xl mt-12 p-4 lg:p-8 flex flex-col gap-4 border border-primary-8 bg-gradient-to-b from-primary-2 to-primary-1 rounded-xl self-center"
      action={formAction}
    >
      {state?.errors.includes("server error") && (
        <p className="text-error-11">
          Sorry, something went wrong. Please try again later.
        </p>
      )}
      <Field disabled={status.pending}>
        <Label className="text-sm/6 font-medium text-primary-12">
          Email Address
        </Label>
        <Description className="text-sm text-error-11">
          {state?.errors.includes("email") ? "* Email required" : ""}
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
      {state?.success ? (
        <div className="mt-4 flex flex-col gap-4 justify-center  items-center">
          <p className="text-center text-primary-12 font-sm">
            Email successfully sent! Please follow the instructions to reset
            your password, and then sign in.
          </p>
          <Link
            href={"/signin"}
            className="text-primary-11 hover:text-primary-12"
          >
            Sign in
          </Link>
        </div>
      ) : (
        <FormSubmit title="Send Reset email" />
      )}
    </form>
  );
};

export default SigninForm;
