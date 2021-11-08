import Head from 'next/head'
import type { NextPage } from 'next'
import { Button } from 'components/Button'
// import { db } from 'utils/firebase'
import { app } from 'utils/firebase'
import {
  query,
  collection,
  where,
  getFirestore,
  getDocs
} from 'firebase/firestore'
import { useEffect } from 'react'

const CreateBroadcast: NextPage = () => {
  useEffect(() => {
    ;(async (): void => {
      const db = getFirestore(app)
      const q = query(collection(db, 'users'), where('id', '==', 1))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      })
    })()
  }, [])

  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="h-screen bg-gray-100">
        <div className="mx-auto mb-5 w-3/5 text-4xl font-medium">
          放送を作成
        </div>
        <div className="mx-auto w-3/5">
          <div>
            <input
              className="py-[9px] px-[13px] mt-5 w-full rounded-[6px] border-[2px] border-solid"
              name="title"
              id="title"
              type="text"
              placeholder="タイトルを入力する"
            />
          </div>
          <div>
            <input
              className="py-[9px] px-[13px] mt-[32px] w-full rounded-[6px] border-[2px] border-solid"
              name="date"
              id="date"
              type="text"
              placeholder="2021/09/03"
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-[32px] w-3/5">
          <div className="mr-[32px]">
            <Button
              type="primary"
              onClick={() => {
                console.log('test')
              }}
            >
              保存する
            </Button>
          </div>
          <div>
            <Button
              type="secondary"
              onClick={() => {
                console.log('test')
              }}
            >
              キャンセル
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateBroadcast
