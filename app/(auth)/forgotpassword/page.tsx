import { auth } from "@/auth";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { redirect } from "next/navigation";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  const message = searchParams?.message;

  return (
    <div className="w-full h-[85vh] max-w-7xl mb-12 flex flex-col justify-center">
      <section className="flex flex-col justify-center lg:items-center">
        <h1 className="text-center mt-8 text-5xl text-primary-12 font-semibold">
          Reset Password
        </h1>
        {message && <p className="mt-4 text-error-11">{message}</p>}
        <ResetPasswordForm />
      </section>
    </div>
  );
}
