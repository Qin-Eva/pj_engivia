import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  id: number
  title: string
}

export const Post: VFC<Props> = (props) => {
  return (
    <div className="p-8 mt-4 w-[700px] h-[300px] bg-white">
      {/* TODO: idをpropsより取得 */}
      <p className="text-2xl font-bold text-center text-blue-600">
        エンジビア{props.id}
      </p>
      {/* TODO: エンジビアをpropsより取得 */}
      <p className="mt-6 text-4xl text-gray-900">{props.title}</p>
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
        <div className="flex items-end py-5 px-9 font-extrabold text-blue-600 bg-[#FEF3C7]">
          {/* TODO: へぇ数をpropsより取得 */}
          <p className="text-[36px]">85</p>
          <p className="text-[24px]">へぇ</p>
        </div>
      </div>
    </div>
  )
}
