import { formatArticleContent } from "@/utils/articles/format-content";
import { formatTakeaways } from "@/utils/articles/format-takeaways";
import { Metadata } from "next";
import Image from "next/image";
import SampleImage from "@/public/sample_image.jpg";
import Reveal from "@/components/ui/animation/reveal";

interface PageProps {
  params: {
    slug: string;
  };
}

type Article = {
  title: string;
  takeaways: string;
  content: string;
  img: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;

  const article = await fetch(
    `http://localhost:3000/api/articles/full_article?slug=${slug}`
  ).then((res) => res.json());

  return {
    title: article.title,
  };
}

async function getArticle(slug: string): Promise<Article> {
  const response = await fetch(
    `http://localhost:3000/api/articles/full_article?slug=${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return response.json();
}

const ArticleContent = async ({ slug }: { slug: string }) => {
  const article = await getArticle(slug);
  const takeawaysContent = formatTakeaways(article.takeaways);
  const articleContent = formatArticleContent(article.content);

  return (
    <article className="max-w-7xl mt-12 lg:mt-24 mb-12">
      <Reveal delay={0}>
        <h1 className="mb-8 lg:mx-[5vw] text-4xl lg:text-5xl text-gray-12 font-semibold text-start ">
          {article.title}
        </h1>
      </Reveal>

      {/* Placeholder Image */}
      {article.img.includes("readverity") ? (
        <Reveal delay={0.15}>
          <div className="relative w-full h-96 lg:h-[50lvh] mt-12 lg:mt-24 bg-gray-3 rounded-2xl">
            <Image
              src={SampleImage}
              alt="cover image"
              priority
              quality={100}
              fill
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </Reveal>
      ) : (
        <Reveal delay={0.15}>
          <div className="relative w-full h-96 lg:h-[50lvh] mt-12 lg:mt-24 bg-gray-3 rounded-2xl">
            <Image
              src={article.img}
              alt="cover image"
              priority
              quality={100}
              fill
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={0}>
        <div className="mt-12 lg:mt-24 lg:mx-[5vw] lg:text-lg text-start">
          {takeawaysContent}
        </div>
      </Reveal>

      <Reveal delay={0}>
        <div className="mt-12 lg:mt-24 lg:mx-[5vw] lg:text-lg text-start">
          {articleContent}
        </div>
      </Reveal>
    </article>
  );
};

const ArticlePage: React.FC<PageProps> = ({ params }) => {
  return <ArticleContent slug={params.slug} />;
};

export default ArticlePage;
