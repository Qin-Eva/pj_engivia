import React from 'react'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Button from 'components/Button'
import { useState } from 'react'

const PostEdit: NextPage = () => {
  const [text, setText] = useState<string>(
    'HTMLにはポータルという便利な要素がある'
  )
  return (
    <div className="w-[700px] mx-auto">
      <TitleWithLabel title="第4回エンジビアの泉" is_streamed={1} />
      <form className="w-full mt-[32px] bg-white block">
        <textarea
          className="textarea block"
          placeholder="エンジビアを入力する"
          value={text}
          rows={4}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
      </form>
      <div className="mt-[32px] flex justify-center">
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
  )
}

export default PostEdit
