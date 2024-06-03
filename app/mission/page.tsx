import MissionHero from "@/components/mission/MissionHero";

const MissionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mb-12 flex flex-col">
      <h1
        className="w-full text-center mt-8 mb-8 xl:mb-16 text-5xl text-gray-12
         font-semibold"
      >
        Our Mission
      </h1>
      <MissionHero />
    </div>
  );
};

export default MissionPage;
