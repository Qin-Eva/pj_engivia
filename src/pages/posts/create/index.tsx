import { Button } from 'components/Button'
import React, { useCallback, useState } from 'react'
import { TitleWithLabel } from 'components/TitleWithLabel'
import type { NextPage } from 'next'
import RecoilProvider from 'components/RecoilProvider'

const Post: NextPage = () => {
  const [text, setText] = useState('')
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onClick = useCallback(() => {
    alert('aaa')
  }, [])

  return (
    <div className="mx-auto w-3/5">
      <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
      <form onSubmit={submitForm} className="mt-[32px]">
        <textarea
          className="placeholder-gray-500 placeholder-opacity-30 textarea font-[24px]"
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
      </form>
    </div>
  )
}

export default Post

Post.getLayout = (page) => {
  return <RecoilProvider>{page}</RecoilProvider>
}
