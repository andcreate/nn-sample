// import styles from "./index.module.scss";
import { Card } from "@/components/Card";

export const Cards = async ({ articles }) => {
  return (
    <ul className="space-y-24">
      {articles.map((article) => (
        <Card article={article} key={article.id} />
      ))}
    </ul>
  );
};