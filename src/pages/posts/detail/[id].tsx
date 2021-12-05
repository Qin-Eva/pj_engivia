import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { TitleWithLabel } from 'components/TitleWithLabel'
import Image from 'next/image'
import Button from 'components/Button'
import RecoilProvider from 'components/RecoilProvider'
import router, { useRouter } from 'next/router'
import { deleteDoc, doc, DocumentData } from '@firebase/firestore'
import { db, firebaseUser } from 'utils/firebase'
import { getPost } from 'lib/posts'
import { getStream } from 'lib/streamImpl'
import { getLoginUser } from 'lib/users'

const PostDetail: NextPage = () => {
  const streamDocId = useRouter().query.id as string
  const [stream, setStream] = useState<DocumentData>()
  const [post, setPost] = useState<DocumentData>()
  const [user, setUser] = useState<DocumentData>()

  const editPost = (): void => {
    void router.push('/posts/edit/' + streamDocId)
  }

  const delPost = async (): Promise<void> => {
    if (confirm('このエンジビアを削除しますか？')) {
      const userDocId = firebaseUser()?.uid
      const postData = await getPost(streamDocId, userDocId)
      await deleteDoc(doc(db, 'posts', postData.id))
      void router.push('/broadcasts')
    }
  }

  // 放送の一覧取得
  useEffect(() => {
    async function f(): Promise<void> {
      const userDocId = firebaseUser()?.uid
      const postData = await getPost(streamDocId, userDocId)
      if (postData != null) {
        setPost(postData.data())
      } else {
        void router.push('/posts/create')
      }

      const data = await getStream(streamDocId)
      setStream(data)

      const userData = await getLoginUser()
      setUser(userData)
    }
    void f()
  }, [streamDocId])

  return (
    <>
      <Head>
        <title>投稿詳細ページ</title>
      </Head>
      <div className="mx-auto w-[700px]">
        <TitleWithLabel
          title={stream?.title}
          is_streamed={stream?.is_streamed}
        />
        <div className="p-8 mt-[32px] bg-white">
          <p className="text-[36px] leading-[1.111111111] text-gray-900">
            {post?.content}
          </p>
          <div className="flex justify-between items-end mt-[24px]">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src={user?.photo ?? '/'}
                alt="ユーザー写真"
                width="36"
                height="36"
              />
              <p className="ml-3 text-gray-700">{user?.name ?? ''}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[32px]">
          <div className="mr-[32px]">
            <Button type="primary" onClick={editPost}>
              編集する
            </Button>
          </div>
          <div>
            <Button type="secondary" onClick={delPost}>
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
  return <RecoilProvider>{page}</RecoilProvider>
}
