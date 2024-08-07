"use client";

import { sendEmailAction } from "@/app/contact/actions";
import { Description, Field, Input, Label, Textarea } from "@headlessui/react";
import { useFormState, useFormStatus } from "react-dom";
import { CheckIcon } from "@radix-ui/react-icons";
import FormSubmit from "@/components/ui/FormSubmit";
import Reveal from "../ui/animation/reveal";

const ContactForm: React.FC = () => {
  const status = useFormStatus();
  const [state, formAction] = useFormState(sendEmailAction, {
    emailSent: false,
    errors: [],
  });

  return (
    <Reveal delay={0.25}>
      <div className="flex justify-center">
        <form
          className="w-full max-w-2xl mt-12 p-4 lg:p-8 flex flex-col gap-4 border border-primary-8 bg-gradient-to-b from-primary-2 to-primary-1 rounded-xl self-center"
          action={formAction}
        >
          {state.errors.includes("send email") && (
            <p className="text-error-11">Failed to send email.</p>
          )}
          <Field disabled={status.pending}>
            <Label className="text-sm/6 font-medium text-primary-12">
              First Name
            </Label>
            <Description className="text-sm text-error-11">
              {state.errors.includes("firstname")
                ? "* First name required"
                : ""}
            </Description>
            <Input
              type="text"
              name="firstname"
              aria-label="firstname"
              className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
            />
          </Field>
          <Field disabled={status.pending}>
            <Label className="text-sm/6 font-medium text-primary-12">
              Last Name
            </Label>
            <Description className="text-sm text-error-11">
              {state.errors.includes("lastname") ? "* Last name required" : ""}
            </Description>
            <Input
              type="text"
              name="lastname"
              aria-label="lastname"
              className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
            />
          </Field>
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
              Message
            </Label>
            <Description className="text-sm text-error-11">
              {state.errors.includes("message") ? "* Message required" : ""}
            </Description>
            <Textarea
              name="message"
              aria-label="message"
              rows={5}
              className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
            />
          </Field>

          {state.emailSent ? (
            <div className="lg:mt-2 flex flex-col lg:flex-row justify-center items-center gap-2 text-center">
              <div className="rounded-full p-1 bg-primary-9">
                <CheckIcon color="white" />
              </div>
              <p className="text-primary-9">Email sent!</p>
            </div>
          ) : (
            <FormSubmit title="Submit" />
          )}
        </form>
      </div>
    </Reveal>
  );
};

export default ContactForm;
