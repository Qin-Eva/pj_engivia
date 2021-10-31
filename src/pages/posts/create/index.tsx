import { Button } from 'components/Button'
import React, { useCallback, useState } from 'react'
import { TitleWithLabel } from 'components/TitleWithLabel'

const Post = () => {
  const [text, setText] = useState('')
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onClick = useCallback(() => {
    alert('aaa')
  }, [])

  return (
    <div className="w-3/5 mx-auto">
      <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
      <form onSubmit={submitForm} className="mt-[32px]">
        <textarea
          className="textarea font-[24px]"
          placeholder="エンジビアを入力する"
          value={text}
          rows={4}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
        <div className="mt-[32px] flex justify-center">
          <Button type="primary" onClick={onClick}>
            保存する
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Post
