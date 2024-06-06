import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full h-full max-w-7xl mb-12 flex flex-col">
      <section className="flex flex-col gap-6 lg:gap-12 justify-center lg:items-center">
        <h1 className="text-center mt-8 text-5xl text-gray-12 font-semibold">
          Get in <span className="text-primary-9">Contact</span>
        </h1>
      </section>
      <ContactForm />
    </div>
  );
}
