import type { Metadata } from 'next'
import Link from 'next/link';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export const metadata: Metadata = {
    title: 'Contact | ROGIX Activity'
  }

export default async function Page() {
    return (
        <>
        <main className="">
            <div className="container max-w-screen-xl mx-auto px-4 py-10">
                <div className="prose mx-auto">
                <p className="text-brown1 dark:text-gray2 text-xl">お気軽にお問い合わせください。</p>
                <p className="text-brown1 dark:text-gray2 text-md">このフォームはGoogleフォームを使用しているため、送信ボタンを押下後に画面が遷移します。</p>
                <form className="mx-auto" action="https://docs.google.com/forms/d/e/1FAIpQLSeqhE1ivq8O0wgUkqSStY96nJUXu5CWQy9HNm7hOjI2eJXaEg/formResponse" method="POST">
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray1" htmlFor="field-name"
                            >お名前&nbsp;<span className="text-sm">(必須)</span></label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray2 dark:border-gray-600 dark:placeholder-gray1 dark:text-gray4  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="field-name"
                            name="entry.1744006876"
                            placeholder="Yamada Tarou"
                            type="text"
                        />
                    </div>
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray1" htmlFor="field-mail"
                            >メールアドレス&nbsp;<span className="text-sm">(必須)</span></label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray2 dark:border-gray-600 dark:placeholder-gray1 dark:text-gray4  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="field-mail"
                            name="entry.698953077"
                            placeholder="sample@gmail.com"
                            type="email"
                        />
                    </div>
                    <div className="mb-10">
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray1" htmlFor="field-message">メッセージ内容</label>
                        <textarea
                            className="block p-2.5 w-full text-sm text-gray4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray2 dark:border-gray-600 dark:placeholder-gray1 dark:text-gray4 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="field-message"
                            name="entry.124615433"
                            placeholder="お問い合わせ内容"
                        ></textarea>
                    </div>
                    <div className="c-form__submit">
                        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-gray1 text-lg shadow" type="submit">
                            <div className="absolute inset-0 w-3 bg-gray0 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-gray1 font-normal">Submit</span>
                        </button>
                    </div>
                </form>
                </div>
                
            </div>
        </main>
        <div className=" mt-40">
            <Link href="/" title="Top page"
              className="back-btn font-normal relative text-center block bg-gray2 dark:bg-gray4 border-t border-b border-gray4 dark:border-gray2 cursor-pointer overflow-hidden hover:bg-gray1 hover:border-gray0  hover:shadow-gray0 active:bg-gray0 active:text-gray1"
          >
              <span className="relative block px-6 py-3 whitespace-nowrap no-underline z-20 dark:text-gray2 hover:text-gray0">
              <ArrowLeftIcon className="inline-block align-middle" />
              Back to top
              </span>

              <div className="mask dark:bg-gray0 h-7 w-40 absolute z-10"></div>
          </Link>
        </div>
        </>
    );
};