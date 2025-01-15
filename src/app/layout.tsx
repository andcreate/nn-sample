import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Ballet } from "next/font/google";
import "./globals.css";

import RogixLogo from "../components/img/logoSvg";

import Transition from "./Transition";
import Link from 'next/link';



const notoSansJP = Noto_Sans_JP({
  weight: ['400',"500", '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

// Google Fontsの日本語フォント
const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-japanese-serif',
  weight: ['400', '700']
})

const ballet = Ballet({
  variable: "--font-ballet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ROGIX Activity',
  description: "My Portfolio. Please Contact to me",
};


export default function RootLayout({ children }) {
  return (
    
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable } ${ballet.variable } antialiased`}
      >

          <header>
            <section className="py-10 md:py-16">
              <div className="container max-w-screen-xl mx-auto px-4">
                <nav className="flex items-center justify-between mb-20">
                  {/* ListIcon */}
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Link href="/"><RogixLogo style={{ width: "50px", height: "50px" }} color={"#73716E"} /></Link>
                  </div>
                  <div className="relative group">
                    <Link href="/contact" title="ROGIX Portfolio"
                      className="relative inline-block p-px font-semibold leading-6 text-white bg-gray2 shadow-xl cursor-pointer rounded-xl shadow-zinc-400 dark:shadow-zinc-800 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray0 via-brown1 to-gray4 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      ></span>

                      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray1">
                        <div className="relative z-10 flex items-center space-x-2">
                          <span className="transition-all duration-500 group-hover:translate-x-1">Contact me</span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </Link>
                  </div>

                </nav>
              </div>
            </section>
          </header>
        <Transition>{children}</Transition>

        <footer className="py-10 md:py-16">
            <div className="flex flex-row flex-wrap justify-center items-center font-noto-serif"><p>&copy;&nbsp;2025&nbsp;</p><Link href="/"><RogixLogo style={{ width: "32px", height: "32px" }} color={"#73716E"} /></Link></div>
        </footer>

      </body>
    </html>
  );
}