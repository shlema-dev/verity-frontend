import MissionHero from "@/components/mission/MissionHero";

const MissionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mb-12 flex flex-col w-full h-full">
      <MissionHero />
      <article className="mt-8 lg:mx-32 flex flex-col gap-8">
        <h2
          className="text-center text-4xl text-gray-12
         font-semibold"
        >
          Real News for <span className="text-primary-9">Real People</span>
        </h2>
        <p className="pb-8 text-center text-xl text-gray-11 border-b border-primary-8">
          In today's world, finding news that's unbiased has become impossible.
          Between the lines of every story, there seems to be a hidden agenda.
          We're here to change that. Our platform is built on the simple idea
          that news should inform, not influence.
        </p>

        <h2
          className=" text-center text-4xl text-gray-12
         font-semibold"
        >
          Our <span className="text-primary-9">Purpose</span>
        </h2>
        <p className="pb-8 text-center text-xl text-gray-11 border-b border-primary-8">
          The landscape of the mainstream media often leaves us wondering what
          to believe and who to trust. Our response? A straightforward platform
          where the news is presented clearly and without bias. We believe in
          respect for our audience's intelligence and the fundamental right to
          access unfiltered information.
        </p>

        <h2
          className="text-center text-4xl text-gray-12
         font-semibold"
        >
          Who <span className="text-primary-9">We serve</span>
        </h2>
        <p className="pb-8 text-center text-xl text-gray-11 border-b border-primary-8">
          You. Whether you're feeling overwhelmed by the bias in mainstream
          media or simply seeking a more reliable source of news, our platform
          is designed for those who appreciate truth and straightforwardness.
          We're here for the skeptics, the curious, and everyone in between.
        </p>

        <h2
          className="text-center text-4xl text-gray-12
         font-semibold"
        >
          Our Vision: A New{" "}
          <span className="text-primary-9">Standard for News</span>
        </h2>
        <p className="pb-8 text-center text-xl text-gray-11 border-b border-primary-8">
          We see a future where media platforms empower their audience,
          providing the tools needed to form educated opinions. By joining us,
          you become part of a movement that values truth and transparency over
          sensationalism and division.
        </p>

        <h2
          className="text-center text-4xl text-gray-12
         font-semibold"
        >
          Be Part of the <span className="text-primary-9">Conversation</span>
        </h2>
        <p className="text-center text-xl text-gray-11">
          We're more than news; we're a conversation. Through our articles,
          newsletters, and social media, we invite you to engage, question, and
          contribute. This isn't just about changing how you read the news—it's
          about fostering a space where informed, critical dialogue can
          flourish.
          <br />
          <br />
          This is an invitation to step into a world of news that respects your
          intelligence and values your trust. Let's embrace the complexity of
          the world with open minds and a shared commitment to straightforward,
          honest reporting.
        </p>
      </article>
    </div>
  );
};

export default MissionPage;
