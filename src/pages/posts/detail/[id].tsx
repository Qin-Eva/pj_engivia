import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Image from 'next/image'
import Button from 'components/Button'
import RecoilProvider from 'components/RecoilProvider'

const PostDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="mx-auto w-[700px]">
        <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
        <div className="p-8 mt-[32px] bg-white">
          <p className="text-[36px] leading-[1.111111111] text-gray-900">
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
        <div className="flex justify-center mt-[32px]">
          <div className="mr-[32px]">
            <Button type="primary" onClick={() => console.log('click')}>
              編集する
            </Button>
          </div>
          <div>
            <Button type="secondary" onClick={() => console.log('click')}>
              削除する
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail

PostDetail.getLayout = (page) => {
  return <RecoilProvider layoutType="normal">{page}</RecoilProvider>
}
