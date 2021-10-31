import React from 'react'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Image from 'next/image'
import Button from 'components/Button'

const Post = () => {
  return (
    <div className="w-[700px] mx-auto">
      <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
      <div className="bg-white p-8 mt-[32px]">
        <p className="text-gray-900 text-[36px] leading-[1.111111111]">
          HTMLにはポータルという便利な要素がある
        </p>
        <div className="flex justify-between items-end mt-[24px]">
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
        </div>
      </div>
      <div className="mt-[32px] flex justify-center">
        <div className="mr-[32px]">
          <Button type="primary" onClick={() => console.log('click')}>
            保存する
          </Button>
        </div>
        <div>
          <Button type="secondary" onClick={() => console.log('click')}>
            削除する
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Post
