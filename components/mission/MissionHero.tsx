import Image from "next/image";
import CongressPhoto from "@/public/congress-hero.png";

const MissionHero: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-12 justify-center lg:items-center">
      <h1 className="text-center mt-8 text-5xl text-gray-12 font-semibold">
        Our Mission
      </h1>

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
    </section>
  );
};

export default MissionHero;
