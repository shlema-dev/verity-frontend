import { auth } from "@/auth";
import SignupForm from "@/components/auth/SignupForm";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="w-full h-[85vh] max-w-7xl mb-12 flex flex-col justify-center">
      <section className="flex flex-col justify-center lg:items-center">
        <h1 className="text-center mt-8 text-5xl text-primary-12 font-semibold">
          Sign Up
        </h1>
        <SignupForm />
      </section>
    </div>
  );
}
