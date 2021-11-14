import { VFC } from 'react'
import Image from 'next/image'

export type TUserCard = {
  username: string
  img: string
  hee: number
}

export const UserCard: VFC<TUserCard> = (props) => {
  const { username, img, hee } = props
  return (
    <div className="flex items-center pb-[16px] mb-4 w-[256px] border-b-2">
      <figure className="w-[32px] h-[32px]">
        <Image src={img} alt="ユーザー写真" width="32px" height="32px" />
      </figure>
      <div className="ml-4 w-[128px] text-[14px] text-gray-900">{username}</div>
      <p className="inline-block py-[2px] px-[10px] ml-4 text-sm text-[14px] text-gray-800 bg-white rounded-full">
        {hee}へぇ
      </p>
    </div>
  )
}
