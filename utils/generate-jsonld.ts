type jsonldParams = {
  title: string;
  description: string;
  slug: string;
  date: string;
};

export default function generateJSONld({
  title,
  description,
  slug,
  date,
}: jsonldParams) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `http://localhost:3000/news/${slug}`,
    },
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "Verity",
    },
    publisher: {
      "@type": "Organization",
      name: "Verity",
      logo: {
        "@type": "ImageObject",
        url: "/LightVerityLogo.png",
      },
    },
    inLanguage: "en-US",
    isFamilyFriendly: "true",
    datePublished: date,
  };
}
