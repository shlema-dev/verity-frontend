import { NextRequest, NextResponse } from "next/server";

interface ArticlePreview {
  title: string;
  hook: string;
  slug: string;
}

export async function GET() {
  console.log("Getting featured articles...");
  const url = process.env.API_URL;
  let articles: ArticlePreview[] = [];

  try {
    console.log("Sending request...");
    const response = await fetch(`${url}/get_featured_articles`);
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
      { error: "Failed to fetch featured articles" },
      { status: 500 }
    );
  }
}
