interface CardProps {
  heading: string;
  text: string;
}

const MissionCard: React.FC<CardProps> = ({ heading, text }) => {
  return (
    <div className="w-full py-6 lg:py-12 px-6 lg:px-12 flex flex-col gap-4 lg:gap-8 bg-gray-2 rounded-xl border border-primary-8">
      <h2
        className="text-center text-2xl lg:text-4xl text-gray-12
         font-semibold"
      >
        {heading}
      </h2>
      <p className="text-center lg:text-xl text-gray-11">{text}</p>
    </div>
  );
};

export default MissionCard;
