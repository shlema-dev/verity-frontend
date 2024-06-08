"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import Loading from "@/components/ui/Loading";
import { Button } from "@headlessui/react";

const FormSubmit: React.FC = () => {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <div className="w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <Button
      type="submit"
      className={`rounded-lg bg-primary-10 mt-4 py-2 px-4 text-primary-1 dark:text-primary-12 data-[hover]:bg-primary-9 `}
    >
      Submit
    </Button>
  );
};

export default FormSubmit;
