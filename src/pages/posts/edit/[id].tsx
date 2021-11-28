import Head from 'next/head'
import React, { useState } from 'react'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Button from 'components/Button'
import RecoilProvider from 'components/RecoilProvider'

const PostEdit: NextPage = () => {
  const [text, setText] = useState<string>(
    'HTMLにはポータルという便利な要素がある'
  )
  return (
    <>
      <Head>
        <title>投稿編集ページ</title>
      </Head>
      <div className="mx-auto w-[700px]">
        <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
        <form className="block mt-[32px] w-full bg-white">
          <textarea
            className="block textarea"
            placeholder="エンジビアを入力する"
            value={text}
            rows={4}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          />
        </form>
        <div className="flex justify-center mt-[32px]">
          <div className="mr-[32px]">
            <Button type="primary" onClick={() => console.log('click')}>
              保存する
            </Button>
          </div>
          <div>
            <Button type="secondary" onClick={() => console.log('click')}>
              キャンセル
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostEdit

PostEdit.getLayout = (page) => {
  return <RecoilProvider layoutType="normal">{page}</RecoilProvider>
}
