"use client";

import { Button, Field, Input, Label, Textarea } from "@headlessui/react";

const ContactForm: React.FC = () => {
  return (
    <form className="w-full max-w-2xl mt-12 p-4 lg:p-8 flex flex-col gap-4 border border-primary-8 rounded-xl self-center">
      <Field>
        <Label className="text-sm/6 font-medium text-primary-12">
          First Name
        </Label>
        <Input
          type="text"
          id="firstname"
          name="firstname"
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-primary-12">
          Last Name
        </Label>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-primary-12">
          Email Address
        </Label>
        <Input
          type="text"
          id="email"
          name="email"
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>
      <Field>
        <Label className="text-sm/6 font-medium text-primary-12">Message</Label>
        <Textarea
          name="message"
          rows={5}
          className={`mt-3 block w-full rounded-lg border-none bg-primary-3 outline outline-2 -outline-offset-2 outline-primary-6 py-1.5 px-3 text-sm/6 text-primary-12
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary-8`}
        />
      </Field>
      <Button
        className={`rounded-lg bg-primary-10 mt-4 py-2 px-4 text-primary-1 dark:text-primary-12 data-[hover]:bg-primary-9 `}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
