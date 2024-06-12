import SigninForm from "@/components/auth/SigninForm";

export default function SigninPage() {
  return (
    <div className="w-full h-[85vh] max-w-7xl mb-12 flex flex-col justify-center">
      <section className="flex flex-col justify-center lg:items-center">
        <h1 className="text-center mt-8 text-5xl text-gray-12 font-semibold">
          Sign in
        </h1>
        <SigninForm />
      </section>
    </div>
  );
}
