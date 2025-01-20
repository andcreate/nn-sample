import { notFound } from "next/navigation";
import type { Metadata } from "next";
// import Image from "next/image";
// import styles from "./page.module.scss";

// import RogixIllust from "../components/img/rogix_illust.png";
import RogixIllust from "../components/img/char_circle";
import { LIMIT } from "@/constants";
import { Cards } from "@/components/Cards";
import GiChessKnight from "@/components/GiChessKnight"
import FaUnity from "@/components/FaUnity"
import GiBubbles from "@/components/GiBubbles"

// import { GiChessKnight } from "react-icons/gi";
// import { FaUnity } from "react-icons/fa";
// import { GiBubbles } from "react-icons/gi";
import BoothLogo from "../components/img/BoothSvg";
import { RiTwitterXLine } from "react-icons/ri";
import { SiVrchat } from "react-icons/si";
import { RiBlueskyFill } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

import { getArticlesList } from "@/libs/microcms";

import metaimg from "@/app/TwitterCard.png";

import Link from 'next/link';
// import { Link } from 'next-view-transitions'

export const metadata: Metadata = {
  title: 'ROGIX Activity',
  description: "My Portfolio. Please Contact to me",
  openGraph: {
    type: "website",
    title: "ROGIX Activity",
    description: "My Portfolio. Please Contact to me",
    siteName: "ROGIX Activity",
    url: "https://virtual.andcre.com/",
    images: {
      url: metaimg.src,
      type: "image/png",
      width: metaimg.width,
      height: metaimg.height,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ROGIX Activity",
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
    <main className="dark">
      <section className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
            <div className="flex justify-center mb-16">
                {/* <Image
                    src={RogixIllust}
                    alt={"ROGIX ILLUST"}
                    className="h-40 object-contain"
                    width={512}
                    height={512}
                /> */}
                <RogixIllust style={{ width: "200px", height: "200px" }} />
            </div>

            <h6 className=" tracking-widest text-gray1 dark:text-gray1 font-medium text-2xl md:text-3xl uppercase mb-8">
                ROGIX
            </h6>

            <h1 className="flex justify-center items-center">
                <svg height="150" strokeWidth="1" className="text-line dark:animate-filling-dark animate-filling text-4xl md:text-7xl font-noto-serif w-full">
                    <text className="hidden lg:block" x="50%" dominantBaseline="middle" textAnchor="middle" y="50%"><tspan className="">Web Frontend &</tspan> <tspan>Creative Director</tspan></text>
                    <text className="block lg:hidden" x="50%" dominantBaseline="middle" textAnchor="middle" y="30%">
                        <tspan x="50%" className="">Web Frontend &</tspan> <tspan x="50%" dy="1em">Creative Director</tspan>
                    </text>
                </svg>
            </h1>

            <p className="font-normal text-gray4 dark:text-gray1 text-md md:text-2xl mb-16">
              <span className="font-ballet">I like to create something that is a win & win for everyone.</span>
            </p>

            
        </div>
      </section>

      <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray1 px-8 py-10 rounded-md shadow">
                    <div className="w-20 flex justify-center bg-gray2 dark:text-brown1 text-3xl rounded-md mb-4">
                        <GiChessKnight />
                    </div>
                      <h2 className="font-medium text-dark1 dark:text-gray0 text-lg mb-4">
                          About
                      </h2>
                      <p className="text-dark1 dark:text-gray0 text-md">
                          Webエンジニアを生業としながら、VRC内ではワールド制作をしています。たまにBoothにコンテンツも置いています。
                      </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray1 px-8 py-10 rounded-md shadow">
                      <div className="w-20 flex justify-center bg-gray2 dark:text-brown1 text-3xl rounded-md mb-4">
                        <FaUnity />
                      </div>
                      <h2 className="font-medium text-dark1 dark:text-gray0 text-lg mb-4">
                          Create
                      </h2>
                      <p className="text-dark1 dark:text-gray0 text-md">
                          知見を広げること、勉強することを大切に、毎日何かを作っています。Web関連のことを中心に３Ｄ、主にUnityに関することなどを触っています。
                      </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray1 px-8 py-10 rounded-md shadow">
                      <div className="w-20 flex justify-center bg-gray2 dark:text-brown1 text-3xl rounded-md mb-4">
                        <GiBubbles />
                      </div>
                      <h2 className="font-medium text-dark1 dark:text-gray0 text-lg mb-4">
                          Network
                      </h2>
                      <p className="text-dark1 dark:text-gray0 text-md">
                          インターネットだからこそ出来る繋がりだったりコンテンツを大切に、個を尊重しながら関係を日々作っています。
                      </p>
                  </div>
              </div>
          </div>
      </section>

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

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <h1 className="font-medium font-serif text-brown1 dark:text-gray2 text-4xl md:text-5xl mb-5">
                        Activity
                    </h1>
                    <p className="font-normal text-gray1 dark:text-gray1 text-md md:text-lg mb-20">
                        バーチャル活動を中心とした各プラットフォームです。<br />お問い合わせはＤＭもしくはコンタクトフォームよりどうぞ。
                    </p>

                    <div className="flex items-center justify-center space-x-8">
                        <a href="https://x.com/ROGIX_VR" className="text-3xl text-gray1 dark:text-gray1 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500" title="X" target="_blank" rel="noopener">
                            <RiTwitterXLine />
                        </a>

                        <a href="https://bsky.app/profile/rogixv.bsky.social" className="text-3xl text-gray1 dark:text-gray1 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500" title="bluesky" target="_blank" rel="noopener">
                            <RiBlueskyFill />
                        </a>

                        <a href="https://vrchat.com/home/user/usr_7761681a-a516-4782-993b-5ea62b35a428" className="text-3xl text-gray1 dark:text-gray1 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"  title="VRChat account" target="_blank" rel="noopener">
                            <SiVrchat />
                        </a>

                        <a href="https://andcreate.booth.pm/" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500" title="#Studio Louie" target="_blank" rel="noopener">
                            <BoothLogo style={{ width: "32px", height: "32px" }} color={"#73716E"} />
                        </a>

                        <Link href="/contact" className="text-3xl text-gray1 dark:text-gray1 w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500" title="Contact-form page">
                            <RiMailSendFill />
                        </Link>
                    </div>
                </div>
            </div>
      </section>
    </main>
  );
}