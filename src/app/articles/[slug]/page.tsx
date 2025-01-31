import Image from "next/image";
import parse from "html-react-parser";
// import styles from "./page.module.scss";
import { Metadata } from "next";
import { getArticlesList, getArticlesDetail } from "@/libs/microcms";

export async function generateStaticParams() {
  // ブログ一覧をAPI経由で取得します
  // 取得件数には最大値である`100`を設定（初期値：10）
  // データ取得量の削減のため、コンテンツ内の'id'のみ取得
  const queries = { limit: 100, fields: "id" };
  const articlesListResponse = await getArticlesList(queries);

  // `articlesListResponse`の`contents`を`articles`に代入しています。
  const { contents: articles } = articlesListResponse;
  // 各ブログポストのIDを用いて、必要なパラメータオブジェクトを作成
  // 'articleId'キーに対応する値として'article.id'を設定
  // これにより、各生成されるページに対して、どのブログポストのデータを
  // 取得して表示するかを指定するための情報を提供します
  const paths = articles.map((article) => {
    return {
      slug: article.id,
    };
  });
  return [...paths];
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
　// ブログの詳細データを取得する関数
  const blogData =  await getArticlesDetail(params.slug);

  return {
    title: `${blogData.title} | ROGIX Activity`,
    description: blogData.title
  };
}

export default async function Page({ params }) {
  // URLパラメータのIDを参照して、ブログの詳細を取得
  const article = await getArticlesDetail(params.slug);
  return (
    <main className="relative">
      <div className=" dark:transparent-img-dark absolute w-full">
          <Image
            className="z-0 w-full"
            src={article.thumbnail.url}
            alt={article.title}
            height={article.thumbnail.height}
            width={article.thumbnail.width}
            priority
          />
      </div>
      <article className="container max-w-screen-xl mx-auto px-4 py-10 relative z-10">
        <div className="bg-gray0 dark:bg-gray4 !bg-opacity-80 py-20 px-5 lg:px-0 outline outline-1 outline-gray0 dark:outline-gray4 border-t border-gray0 dark:border-gray1 shadow-outline">
          <div className="prose prose-xl dark:prose-invert mx-auto ">
            <h1 className="{styles.title}">{article.title}</h1>
            <p  className="font-noto-serif"><span className="text-sm inline-block mr-2">CATEGORY:</span>{article.category.name}</p>
            <div className="{styles.body}">{parse(article.body)}</div>
          </div>
        </div>
      </article>
    </main>
  );
}

