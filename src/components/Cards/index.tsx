// import styles from "./index.module.scss";
import { Card } from "@/components/Card";

export const Cards = async ({ articles }) => {
  return (
    <ul className="">
      {articles.map((article) => (
        <Card article={article} key={article.id} />
      ))}
    </ul>
  );
};