import Image from "next/image";
import Link from "next/link";
// import styles from "./index.module.scss";

export const Card = async ({ article }) => {
  // console.log( article );
  return (
    <li className="">
      <Link href={`/articles/${article.id}`} className="">
        <p className="">
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            height={article.thumbnail.height}
            width={article.thumbnail.width}
            priority
          />
        </p>
        <div>
          <h2 className="">{article.title}</h2>
          <p className="">{article.category.name}</p>
        </div>
      </Link>
    </li>
  );
};