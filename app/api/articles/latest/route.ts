import { NextResponse } from "next/server";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  console.log(`Getting latest articles for page: ${page}...`);

  const url = process.env.API_URL;
  let articles: ArticlePreview[] = [];

  try {
    console.log("Sending request...");
    const response = await fetch(`${url}/get_article_previews?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    articles = data.map((article: any) => ({
      title: article.unbiased_title,
      hook: article.article_hook,
      slug: article.article_slug,
    }));

    return NextResponse.json({ articles });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch latest articles for page: ${page}` },
      { status: 500 }
    );
  }
}
