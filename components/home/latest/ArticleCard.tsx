"use client";

interface ArticleCardProps {
  title: string;
  hook: string;
  slug: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  hook,
  slug,
}: ArticleCardProps) => {
  return (
    <div
      className="w-full h-[515px] flex flex-col rounded-xl border border-2 border-gray-6 hover:border-primary-7 overflow-hidden"
      onClick={() => {}}
    >
      <div className="h-[32rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-gray-4">
          {/* Image placeholder */}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-10 dark:from-gray-2 to-transparent">
          <div className="absolute inset-x-0 bottom-5 lg:bottom-10 p-4 flex flex-col items-start">
            <h2
              className="mb-4 text-lg md:text-xl text-center xl:text-start lg:leading-relaxed text-gray-1 dark:text-gray-12 font-bold
              "
            >
              <span className="lg:transition-all lg:ease-in-out lg:duration-500 lg:pb-1 lg:bg-gradient-to-r lg:from-primary-11 lg:to-primary-9 lg:bg-[length:0%_2px] lg:hover:bg-[length:100%_2px] lg:bg-no-repeat lg:bg-left-bottom">
                {title}
              </span>
            </h2>
            <p className="hidden lg:block text-sm lg:text-base text-center xl:text-start text-gray-2 dark:text-gray-12">
              {hook}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
