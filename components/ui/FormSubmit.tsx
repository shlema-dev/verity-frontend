"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import Loading from "@/components/ui/Loading";
import { Button } from "@headlessui/react";

interface FormSubmitProps {
  title: string;
}

const FormSubmit: React.FC<FormSubmitProps> = ({ title }) => {
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
      data-testid="submit"
      className={`rounded-lg bg-primary-10 mt-4 py-2 px-4 text-primary-1 dark:text-primary-12 data-[hover]:bg-primary-9 `}
    >
      {title}
    </Button>
  );
};

export default FormSubmit;
