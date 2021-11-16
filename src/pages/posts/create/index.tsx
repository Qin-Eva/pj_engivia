import { Button } from 'components/Button'
import React, { useCallback, useState } from 'react'
import { TitleWithLabel } from 'components/TitleWithLabel'
import type { NextPage } from 'next'
import toast, { Toaster } from 'react-hot-toast'
import { createPostData } from 'lib/posts'
import Layout from 'components/Layout'

const Post: NextPage = () => {
  const [text, setText] = useState('')

  const onClick = (): void => {
    if (text === '') {
      toast.error('入力して下さい')
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    toast.promise(createPostData(text, 'user'), {
      loading: '保存中',
      success: '保存できました',
      error: '保存に失敗しました'
    })
  }

  return (
    <div className="mx-auto w-3/5">
      <Toaster />
      <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
      <div className="mt-[32px]">
        <textarea
          className="placeholder-gray-500 placeholder-opacity-30 textarea text-[24px]"
          style={{ fontWeight: 'bold' }}
          placeholder="エンジビアを入力する"
          value={text}
          rows={3}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
        <div className="flex justify-center mt-[32px]">
          <Button type="primary" onClick={onClick}>
            保存する
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Post

Post.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
