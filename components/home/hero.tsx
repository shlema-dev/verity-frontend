const Hero: React.FC = () => {
  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-6 justify-center lg:items-center">
      <div className="lg:mr-6">
        <h1 className="mb-8 text-5xl text-gray-12 font-semibold">
          <span className="text-primary-9">Insight Over Influence</span> News as
          it Should Be
        </h1>
        <p className="text-xl text-gray-11">
          Cut through the noise with straightforward, unbiased news. Sign up now
          to get your free 2024 Election Brief with everything you need to know
          about the upcoming election!
        </p>
      </div>

      <div className="mt-8 rounded-2xl dark:shadow-[rgba(77,_60,_47,_0.95)_0px_9px_20px]">
        <video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/flag.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
