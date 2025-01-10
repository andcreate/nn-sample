import { notFound } from "next/navigation";
// import styles from "./page.module.scss";
import { LIMIT } from "@/constants";
import { Cards } from "@/components/Cards";
import { getArticlesList } from "@/libs/microcms";

export default async function Home() {
  // ブログ一覧を取得
  const queries = { limit: LIMIT };
  const articlesListResponse = await getArticlesList(queries).catch(() => notFound());
  const { contents: articles } = articlesListResponse;

  // console.log( articles );

  return (
    <main className="w-80">
      <h1 className="text-xl">記事一覧</h1>
      <ul className="">
        <Cards articles={articles} />
      </ul>
    </main>
  );
}