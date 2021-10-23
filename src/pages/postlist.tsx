import { Post } from 'components/Post'
import Head from 'next/head'
import type { NextPage } from 'next'

const PostList: NextPage = () => {
  return (
    <>
      <Head>
        <title>投稿一覧ページ</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex items-center flex-col">
          {/* TODO: 放送済みアイコンのコンポーネント */}
          <div className="text-center mt-10">
            <p className="inline-block bg-gray-200 text-gray-900 text-sm  rounded-full py-1 px-3">
              放送済み
            </p>
          </div>
          {/* TODO: 放送回のコンポーネント */}
          <h1 className="text-gray-900 font-bold text-3xl mt-4">
            第n回エンジビアの泉
          </h1>
          {/* TODO: アーカイブ動画のpropsに変更 */}
          <iframe
            className="mt-8"
            width="700"
            height="400"
            src="https://www.youtube.com"
            title="アーカイブ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* TODO: mapで投稿を表示 */}
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}

export default PostList
