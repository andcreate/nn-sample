import Image from "next/image";
import Link from "next/link";

import * as motion from "motion/react-client"


// import styles from "./index.module.scss";

export const Card = async ({ article }) => {
  // console.log( article );
  return (
    <motion.li variants={{
    offscreen: { // 画面外の場合のスタイル
      y: 30,
      opacity: 0,
    },
    onscreen: { // 画面内の場合のスタイル
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }}
  initial="offscreen" // 初期表示はoffscreen
  whileInView="onscreen" // 画面内に入ったらonscreen
  viewport={{ once: false, amount: 0 }} className="space-x-6">
      <Link href={`/articles/${article.id}`} className="flex justify-around space-x-6" scroll={true} >
        <span className="w-28 h-0.5 bg-gray1 dark:bg-gray2 mt-5"></span>
        <div className="w-2/3">
          <div className="relative overflow-hidden card ">
            <div className="relative py-2 z-20">
              <h2 className="font-normal text-gray-700 dark:text-gray0 text-3xl md:text-4xl mb-5 drop-shadow-sm">{article.title}</h2>
              <p className="font-serif text-gray-700 dark:text-gray1 drop-shadow-sm">{article.category.name}</p>
            </div>
            <div className="absolute -inset-y-1/4 right-0 transparent-thumb dark:transparent-thumb-dark transition-all">
              <Image
                className="object-cover z-10 transition-all"
                src={article.thumbnail.url}
                alt={article.title}
                height={article.thumbnail.height}
                width={article.thumbnail.width}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                priority
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};