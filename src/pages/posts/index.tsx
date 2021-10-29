import { Post } from 'components/Post'
import Head from 'next/head'
import type { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>投稿一覧ページ</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex items-center flex-col">
          <TitleWithLabel title="第n回エンジビアの泉" is_streamed={1} />
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

export default Posts
