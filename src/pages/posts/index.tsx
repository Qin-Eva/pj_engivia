import { Post } from 'components/Post'
import type { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { FirestoreCollection } from 'utils/firebase'
// import { useRecoilValue } from 'recoil'
// import { loginUserState } from 'store/auth'
import RecoilProvider from 'components/RecoilProvider'
// import LayoutScroll from 'components/LayoutScroll'

const Posts: NextPage = () => {
  const { value, loading, error } = FirestoreCollection('tests')
  // const loginUser = useRecoilValue(loginUserState)

  return (
    <>
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

Posts.getLayoutScroll = (page) => {
  const content = '投稿一覧ページ'
  return <RecoilProvider layoutType="scroll" content={content}>{page}</RecoilProvider>
}
