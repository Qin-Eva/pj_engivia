import { Post } from 'components/Post'
import Head from 'next/head'
import type { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { FirestoreCollection } from 'utils/firebase'
import Layout from 'components/Layout'

const Posts: NextPage = () => {
  const { value, loading, error } = FirestoreCollection('tests')

  return (
    <>
      <Head>
        <title>投稿一覧ページ</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
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
          {value?.docs.map((doc) => {
            return (
              <ul key={doc.id}>
                <Post id={doc.data().id} title={doc.data().title} />
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Posts

Posts.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
