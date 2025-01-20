import { Noto_Sans_JP, Noto_Serif_JP, Ballet } from "next/font/google";
import "./globals.css";

import Progressbar from "@/components/Progressbar";
import RogixLogo from "@/components/img/logoSvg";
import { IoMdArrowDropright } from "react-icons/io";

import Transition from "./Transition";
import Link from 'next/link';

// Vercel
import { Analytics } from "@vercel/analytics/react"
// import VercelAnalytics from "@/app/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"


const notoSansJP = Noto_Sans_JP({
  weight: ['200',"400", '700'],
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
                    <Link href="/" title="ROGIX Activity"><RogixLogo style={{ width: "50px", height: "50px" }} color={"#73716E"} /></Link>
                  </div>
                  <div className="relative group">
                    <Link href="/contact" title="Contact-form page"
                      className="contact-btn font-normal relative text-center block bg-gray2 dark:bg-gray4 border border-gray4 dark:border-gray2 cursor-pointer overflow-hidden hover:bg-gray1 hover:border-gray0  hover:shadow-gray0 active:bg-gray0 active:text-gray1"
                    >
                      <span className="relative block  px-5 py-3 whitespace-nowrap no-underline z-20 dark:text-gray2 hover:text-gray0">
                        Contact me
                        <IoMdArrowDropright className="inline-block align-top" />
                      </span>
                      <div className="mask dark:bg-gray0 h-7 w-40 absolute z-10"></div>
                    </Link>
                  </div>

                </nav>
              </div>
            </section>
          </header>
        <Transition>{children}<SpeedInsights /><Analytics /></Transition>

        <footer className="py-10 md:py-16">
            <div className="flex flex-row flex-wrap justify-center items-center font-noto-serif"><p>&copy;&nbsp;2025&nbsp;</p><Link href="/" title="ROGIX Activity"><RogixLogo style={{ width: "32px", height: "32px" }} color={"#73716E"} /></Link></div>
        </footer>

        <Progressbar />
      </body>
    </html>
  );
}