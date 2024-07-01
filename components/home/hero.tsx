import Image from "next/image";
import GlobePNG from "@/public/globe.png";

const Hero: React.FC = () => {
  return (
    <section className="mt-8 flex flex-col xl:flex-row gap-6 justify-center lg:items-center">
      <div className="w-full">
        <h1 className="mb-8 text-5xl text-gray-12 font-semibold text-center xl:text-start">
          <span className="text-primary-9">Insight Over Influence</span> News as
          it Should Be
        </h1>
        <p className="text-xl text-gray-11 text-center xl:text-start">
          Cut through the noise with straightforward, unbiased news. Sign up now
          to get your free 2024 Election Brief with everything you need to know
          about the upcoming election!
        </p>
      </div>

      <div className="relative mt-8 w-full h-64 md:h-[40vh]">
        <Image
          src={GlobePNG}
          alt="globe"
          priority
          quality={100}
          fill
          objectFit="cover"
        />
        {/* <video
          className="w-full h-full object-cover rounded-xl priority"
          autoPlay
          muted
          loop
          playsInline
          poster="/flag-frame.png"
        >
          <source src="/flag.mp4" type="video/mp4" />
        </video> */}
      </div>
    </section>
  );
};

export default Hero;
