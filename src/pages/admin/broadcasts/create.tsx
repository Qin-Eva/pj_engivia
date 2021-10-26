// 放送作成ページ /admin/bradcasts/create
import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'

const createBroadcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="bg-gray-200 h-screen">
        <div className="text-4xl w-3/5 mx-auto mb-5">放送を作成</div>
        <div className="h-40 bg-white w-3/5">
          <div>
            <input
              className="w-72"
              name="name"
              id="name"
              type="text"
              placeholder="タイトルを入力する"
              aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
          <div>
            <input
              className="w-72"
              name="name"
              id="name"
              type="text"
              placeholder="2021/09/03"
              aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
        </div>
        <div className="flex">
          <div className="text-red-300 w-40 mx-24 mt-12">
            {/* ボタン機能に変更？ */}
            <Link href="/">投稿する</Link>
          </div>
          <div className="w-40 mx-24 mt-12">
            <Link href="/">キャンセル</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default createBroadcast
