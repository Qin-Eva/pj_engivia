import { VFC } from 'react'
import Image from 'next/image'

export type TUserCard = {
  username: string;
  img: string;
  hee: number;
}

export const UserCard: VFC<TUserCard> = (props) => {
  const { username, img, hee } = props
  return (
    <div className="flex items-center w-[256px] border-b-2 pb-[16px] mb-4">
      <figure className='w-[32px] h-[32px]'>
        <Image
          src={img}
          alt="ユーザー写真"
          width='32px'
          height='32px'
        />
      </figure>
      <div className="text-gray-900 ml-4 w-[128px] text-[14px]">
        { username }
      </div>
      <p className="inline-block bg-white text-gray-800 ml-4 px-[10px] py-[2px] rounded-full text-sm text-[14px]">
        { hee }へぇ
      </p>
    </div>
  )
}
