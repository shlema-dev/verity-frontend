interface FeaturedCardProps {
  title: string;
  hook: string;
  slug: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  hook,
  slug,
}: FeaturedCardProps) => {
  return (
    <div
      className="w-full mt-8 mx-0 py-4 px-2 lg:py-8 lg:px-4 flex flex-col gap-4 justify-start items-center bg-primary-2 hover:bg-primary-3 rounded-lg border border-primary-6 hover:border-primary-8"
      onClick={() => {}}
    >
      <h3 className="text-md lg:text-xl text-center text-primary-12 font-semibold">
        {title}
      </h3>
      <div className="w-full h-52 lg:h-72 m-4 rounded bg-white"></div>
      <p className="text-sm lg:text-lg text-center text-primary-11">{hook}</p>
    </div>
  );
};

export default FeaturedCard;
