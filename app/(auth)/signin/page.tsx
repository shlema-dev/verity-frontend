import { auth } from "@/auth";
import SigninForm from "@/components/auth/SigninForm";
import Reveal from "@/components/ui/animation/reveal";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SigninPage({
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
        <Reveal delay={0}>
          <h1 className="text-center mt-8 text-5xl text-primary-12 font-semibold">
            Sign in
          </h1>
          {message && <p className="mt-4 text-error-11">{message}</p>}
        </Reveal>

        <SigninForm />
      </section>
    </div>
  );
}
