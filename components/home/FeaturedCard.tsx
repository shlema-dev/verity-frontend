interface FeaturedCardProps {
  title: string;
  img: string;
  hook: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  img,
  hook,
}: FeaturedCardProps) => {
  return (
    <div className="w-full mt-8 p-4 lg:py-8 lg:px-4 flex flex-col gap-4 justify-start items-center bg-primary-2 hover:bg-primary-3 rounded-lg border border-primary-6 hover:border-primary-8">
      <h3 className="text-lg text-center text-primary-12 font-semibold">
        {title}
      </h3>
      <div className="w-full h-52 m-4 rounded bg-white"></div>
      <p className="text-center text-primary-11">{hook}</p>
    </div>
  );
};

export default FeaturedCard;
