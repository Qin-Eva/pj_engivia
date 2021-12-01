import type { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { UserCard } from 'components/UserCard'
import type { TUserCard } from 'components/UserCard'
import { HeeButton } from 'components/HeeButton'
import RecoilProvider from 'components/RecoilProvider'

const UserCardData: TUserCard[] = [
  {
    username: 'ファンキー後藤',
    img: '/Avatar.png',
    hee: 18
  },
  {
    username: 'マイケル竹田',
    img: '/Avatar.png',
    hee: 18
  },
  {
    username: '鈴木サンダー',
    img: '/Avatar.png',
    hee: 18
  }
]

const PostStandBy: NextPage = () => {
  return (
    <>
      <div className="mx-auto w-[704px]">
        <div className="relative">
          <TitleWithLabel title="第4回エンジビアの泉" is_streamed={2} />
          <div className="inline-block mt-8 w-[700px] h-[100px] bg-white rounded-md shadow">
            <p className="m-8 w-[640px] h-[40px] text-4xl">
              次のエンジビアをお待ちください
            </p>
          </div>
        </div>
        <div className="absolute top-[670px] left-1/2 -translate-x-1/2">
          <HeeButton />
        </div>
        <div className="fixed top-[100px] right-4">
          {UserCardData.map((i) => {
            return (
              <UserCard
                key={i.username}
                username={i.username}
                img={i.img}
                hee={i.hee}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PostStandBy

PostStandBy.getLayout = (page) => {
  const content = '投稿詳細ページ'
  return <RecoilProvider content={content}>{page}</RecoilProvider>
}
