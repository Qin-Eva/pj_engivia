import type { NextPage } from 'next'
import Head from 'next/head'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { UserCard } from 'components/UserCard'
import type { TUserCard } from 'components/UserCard'

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
  },
]

const PostStandBy: NextPage = () => {
  return (
    <>
      <Head>
        <title>投稿詳細ページ</title>
      </Head>
      <div className="w-[704px] mx-auto">
        <div className="relative">
          <TitleWithLabel title='第4回エンジビアの泉' is_streamed={2} />
          <div className="mt-8 bg-white rounded-md shadow inline-block w-[700px] h-[100px]">
            <p className="m-8 text-4xl w-[640px] h-[40px]">
              次のエンジビアをお待ちください
            </p>
          </div>
        </div>
        <div className="absolute top-[670px]">へぇー</div>
        <div className='fixed right-4 top-[100px]'>
          {UserCardData.map(i => {
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
