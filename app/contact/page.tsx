import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/animation/reveal";

export default function ContactPage() {
  return (
    <div className="w-full h-full max-w-7xl mb-12 flex flex-col">
      <Reveal delay={0}>
        <section className="lg:mb-12 flex flex-col gap-6 lg:gap-12 justify-center lg:items-center">
          <h1 className="text-center mt-8 text-5xl text-gray-12 font-semibold">
            Get in <span className="text-primary-9">Contact</span>
          </h1>
          <p className="text-xl text-center text-gray-11">
            Feel free to reach out with any questions, comments, or concerns. We
            love feedback, including how we are doing, where we can improve, and
            any features you would like to see in the future!
          </p>
        </section>
      </Reveal>

      <ContactForm />
    </div>
  );
}
