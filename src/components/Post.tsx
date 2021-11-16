import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  id: number
  title: string
}

export const Post: VFC<Props> = (props) => {
  return (
    <div className="w-[700px] h-[300px] bg-white p-8 mt-4">
      {/* TODO: idをpropsより取得 */}
      <p className="text-blue-600 text-2xl font-bold text-center">
        エンジビア{props.id}
      </p>
      {/* TODO: エンジビアをpropsより取得 */}
      <p className="text-gray-900 text-4xl mt-6">{props.title}</p>
      <div className="flex justify-between items-end">
        {/* TODO: ユーザーデータをpropsより取得 */}
        <div className="flex items-center">
          <Image
            className="rounded-full"
            src="/Avatar.png"
            alt="ユーザー写真"
            width="36"
            height="36"
          />
          <p className="ml-3 text-gray-700">松平 ケン</p>
        </div>
        <div className="flex items-end py-5 px-9 bg-[#FEF3C7] text-blue-600 font-extrabold">
          {/* TODO: へぇ数をpropsより取得 */}
          <p className="text-[36px]">85</p>
          <p className="text-[24px]">へぇ</p>
        </div>
      </div>
    </div>
  )
}
