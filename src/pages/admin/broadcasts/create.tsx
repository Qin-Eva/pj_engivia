import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'

const createBroadcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="bg-gray-100 h-screen">
        <div className="text-4xl w-3/5 mx-auto mb-5">放送を作成</div>
        <div className="h-24 w-3/5 mx-auto">
          <div>
            <input
              className="h-10 w-5/6 my-5 rounded"
              name="title"
              id="title"
              type="text"
              placeholder="タイトルを入力する"
              // aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
          <div>
            <input
              className="h-10 w-5/6 my-5 rounded"
              name="date"
              id="date"
              type="text"
              placeholder="2021/09/03"
              // aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
        </div>
        <div className="flex mt-20 w-3/5 mx-auto">
          <div className="text-white ml-48 mt-6 bg-blue-500 rounded-md h-12 w-32 text-center py-3">
            {/* ボタン機能に変更が必要？ */}
            <Link href="/">投稿する</Link>
          </div>
          <div className="text-blue-500 ml-10 mr-24 mt-6 bg-blue-100 rounded-md h-12 w-32 text-center py-3">
            <Link href="/">キャンセル</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default createBroadcast
