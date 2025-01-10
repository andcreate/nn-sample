import { createClient } from "microcms-js-sdk";
import { notFound } from "next/navigation";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN が設定されていません。");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY が設定されていません。");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});




// 記事一覧を取得
export const getArticlesList = async (queries: Record<string, unknown>) => {
  try {
    const response = await client.getList({
      endpoint: "articles",
      queries,
    });
    return response;
  } catch (error) {
    console.error("getArticlesListでエラーが発生しました => ", error);
    notFound();
  }
};

interface Article {
  id: string;
  title: string;
  body: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
  };
}

// 記事詳細を取得
export const getArticlesDetail = async (
  contentId: string,
  queries?: Record<string, unknown>
): Promise<Article> => {
  try {
    const response = await client.getListDetail({
      endpoint: "articles",
      contentId,
      queries,
    });
    return response;
  } catch (error) {
    console.error("getArticlesDetailでエラーが発生しました => ", error);
    notFound();
  }
};
