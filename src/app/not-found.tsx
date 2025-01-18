import type { Metadata } from 'next'
import Link from 'next/link';
import { IoMdArrowDropleft } from "react-icons/io";
export const metadata: Metadata = {
    title: '404 not found | ROGIX Activity'
  }

export default async function Notfound() {
    return (
    <>
        <main className="text-center min-h-max">
            <p className="font-serif text-4xl hero glitch layers overflow-hidden" data-text="404 | Not found"><span>404 | Not found</span></p>
        </main>
         <div className=" mt-40">
            <Link href="/" title="Top page"
              className="back-btn font-normal relative text-center block bg-gray2 dark:bg-gray4 border-t border-b border-gray4 dark:border-gray2 cursor-pointer overflow-hidden hover:bg-gray1 hover:border-gray0  hover:shadow-gray0 active:bg-gray0 active:text-gray1"
          >
              <span className="relative block  px-5 py-3 whitespace-nowrap no-underline z-20 dark:text-gray2 hover:text-gray0">
              <IoMdArrowDropleft className="inline-block align-top" />
              Back to top
              
              </span>
              <div className="mask dark:bg-gray0 h-7 w-40 absolute z-10"></div>
          </Link>
        </div>
        </>
    );
};