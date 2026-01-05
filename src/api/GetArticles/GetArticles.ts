import type { Article } from "./types.ts";

const BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

interface ArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${BASE_URL}?limit=15`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: ArticlesResponse = await response.json();
  return data.results;
}
