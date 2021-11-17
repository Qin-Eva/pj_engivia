import Head from 'next/head'
import { Post } from 'components/Post'
import { TitleWithLabel } from 'components/TitleWithLabel'
import { NextPage } from 'next'
import { FirestoreCollection } from 'utils/firebase'
import React, { useState } from 'react'
import { Button } from 'components/Button'
import { postUrl } from 'lib/posts'
import toast, { Toaster } from 'react-hot-toast'

const AdminPostPage: NextPage = () => {
  const { value, loading, error } = FirestoreCollection('tests')
  const [url, setUrl] = useState<string>('')
  const handleClick = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    toast.promise(postUrl(url, ''), {
      loading: '保存中',
      success: '保存できました',
      error: '保存に失敗しました'
    })
  }
  return (
    <>
      <Head>
        <title>投稿一覧ページ</title>
      </Head>
      <div className="min-h-screen">
        <Toaster />
        <div className="flex flex-col items-center">
          <TitleWithLabel title="第n回エンジビアの泉" is_streamed={1} />
          {/* TODO: アーカイブ動画のpropsに変更 */}
          <iframe
            className="mt-8"
            width="700"
            height="400"
            src="https://www.youtube.com"
            title="アーカイブ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <input
            className="py-[9px] px-[13px] mt-5 w-[700px] rounded-[6px] border-[2px] border-solid"
            name="title"
            id="title"
            type="text"
            value={url}
            placeholder="URLを入力する"
            onChange={(e) => {
              setUrl(e.target.value)
            }}
          />
          <div className="flex justify-center mt-[32px]">
            <Button type="primary" onClick={handleClick}>
              保存する
            </Button>
          </div>
          {value === undefined ? (
            <>loading</>
          ) : (
            value.docs.map((doc) => {
              return (
                <ul key={doc.id}>
                  <Post id={doc.data().id} title={doc.data().title} />
                </ul>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default AdminPostPage
