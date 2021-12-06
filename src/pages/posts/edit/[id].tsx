import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Button from 'components/Button'
import RecoilProvider from 'components/RecoilProvider'
import { db, firebaseUser } from 'utils/firebase'
import { getPost } from 'lib/posts'
import router, { useRouter } from 'next/router'
import { doc, DocumentData, Timestamp, updateDoc } from '@firebase/firestore'
import { getStream } from 'lib/streamImpl'
import { Input } from 'components/Input'

const PostEdit: NextPage = () => {
  const [text, setText] = useState<string>()
  const streamDocId = useRouter().query.id as string
  const [stream, setStream] = useState<DocumentData>()

  const savePost = async (): Promise<void> => {
    const userDocId = firebaseUser()?.uid
    const postData = await getPost(streamDocId, userDocId)
    const postRef = doc(db, 'posts', postData.id)
    await updateDoc(postRef, {
      content: text,
      updated_at: Timestamp.now(),
      updated_by: userDocId
    })
    void router.push('/broadcasts')
  }

  const handleCancel = (): void => {
    void router.push('/posts/detail/' + streamDocId)
  }

  // 放送の一覧取得
  useEffect(() => {
    async function f(): Promise<void> {
      const userDocId = firebaseUser()?.uid
      const postData = await getPost(streamDocId, userDocId)
      if (postData != null) {
        setText(postData.data().content)
      } else {
        void router.push('/posts/create')
      }

      const data = await getStream(streamDocId)
      setStream(data)
    }
    void f()
  }, [streamDocId])

  return (
    <>
      <Head>
        <title>投稿編集ページ</title>
      </Head>
      <div className="mx-auto w-[700px]">
        <TitleWithLabel
          title={stream?.title}
          is_streamed={stream?.is_streamed}
        />
        <form className="block mt-[32px] w-full bg-white">
          <Input
            areaType="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
        <div className="flex justify-center mt-[32px]">
          <div className="mr-[32px]">
            <Button type="primary" onClick={savePost}>
              保存する
            </Button>
          </div>
          <div>
            <Button type="secondary" onClick={handleCancel}>
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
  return <RecoilProvider>{page}</RecoilProvider>
}
