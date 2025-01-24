import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getArticlesList } from "@/libs/microcms";

import metaimg from "@/app/TwitterCard.png";
import metalogo from "@/app/android-chrome-512x512.png";

import { Cards } from "@/components/Cards"

import { LIMIT } from "@/constants";

// import Link from 'next/link';
// import { Link } from 'next-view-transitions'

const jsonLd = {
    "@context":"http://schema.org",
    "@type":"WebSite",
    "name":"ARCHIVE | ROGIX Activity",
    "inLanguage":"jp", //ウェブサイトの言語
    "publisher": {
    "@type": "Organization",
    "name": "andCreate",
    "logo": {
        "@type": "ImageObject",
        "url": metalogo.src
    }},
    "copyrightYear":"2025-01-15T10:00:00+0000",//コピーライトの日付
    "headline":"ROGIX Activity",
    "description":"My Portfolio. Please Contact to me",
    "url":`${process.env.NEXT_PUBLIC_URL}`
}

export const metadata: Metadata = {
  title: 'ARCHIVE | ROGIX Activity',
  description: "My Portfolio. Please Contact to me",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
  },
  openGraph: {
    type: "website",
    title: "ARCHIVE | ROGIX Activity",
    description: "My Portfolio. Please Contact to me",
    siteName: "ROGIX Activity",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    images: {
      url: metaimg.src,
      type: "image/png",
      width: metaimg.width,
      height: metaimg.height,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCHIVE | ROGIX Activity",
    description: "My Portfolio. Please Contact to me",
    images: {
      url: metaimg.src,
      type: "image/png",
      width: metaimg.width,
      height: metaimg.height,
    },
  },
};



export default async function Home() {

  // ブログ一覧を取得
  const queries = { limit: LIMIT };
  const articlesListResponse = await getArticlesList(queries).catch(() => notFound());
  const { contents: articles } = articlesListResponse;

  // console.log( articles );

  return (
    <main className="">
      


      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-center md:text-left font-serif text-brown1 dark:text-gray2 text-3xl md:text-5xl mb-5">
                  Portfolio
              </h1>
              <p className="font-normal text-center md:text-left text-xs md:text-base">
                  私が携わったプロジェクトや日々の備忘録を。
              </p>
            </div>
            <div className="">
              <Cards articles={articles} />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}