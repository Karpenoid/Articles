import ArticleCard from "../../components/ArcticleCard/ArticleCard.tsx";
import { useEffect, useState } from "react";
import type { Article } from "../../api/GetArticles/types.ts";
import { getArticles } from "../../api/GetArticles/GetArticles.ts";
import styles from "./Homepage.module.scss";

export default function Homepage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then(setArticles)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          img={article.image_url}
          date={new Date(article.published_at).toLocaleDateString()}
          title={article.title}
          text={article.summary}
        />
      ))}
    </div>
  );
}
