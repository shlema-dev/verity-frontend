import Image from "next/image";
import CongressPhoto from "@/public/congress-hero.png";

const MissionHero: React.FC = () => {
  return (
    <section className="mt-12 flex flex-col gap-6  lg:gap-12 justify-center lg:items-center">
      <div className="relative w-full h-64 lg:h-[45vh] rounded-xl">
        <Image
          src={CongressPhoto}
          alt="Congress photo"
          priority
          quality={100}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="lg:mx-32">
        <h2
          className="mb-8 text-center text-4xl text-gray-12
         font-semibold"
        >
          Real News for <span className="text-primary-9">Real People</span>
        </h2>
        <p className="text-center text-xl text-gray-11">
          In today’s world, finding news that's unbiased has become impossible.
          Between the lines of every story, there seems to be a hidden agenda.
          We're here to change that. Our platform is built on the simple idea
          that news should inform, not influence.
        </p>
      </div>
    </section>
  );
};

export default MissionHero;
