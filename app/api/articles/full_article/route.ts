import { NextRequest, NextResponse } from "next/server";

type Article = {
  title: string;
  hook: string;
  takeaways: string;
  content: string;
  img: string;
  date: string;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  console.log(`Getting article: ${slug}...`);

  const url = process.env.API_URL;

  try {
    console.log("Sending request...");
    const response = await fetch(`${url}/get_article_by_slug?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const article: Article = {
      title: data.unbiased_title,
      hook: data.article_hook ?? "",
      takeaways: data.formatted_takeaways,
      content: data.formatted_web_content,
      img: data.article_image,
      date: data.date,
    };

    console.log(`Image URL: ${article.img}`);
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch article for: ${slug}` },
      { status: 500 }
    );
  }
}
