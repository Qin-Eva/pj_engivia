import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from 'components/Button'
import { addStream } from 'lib/streamImpl'
import type { TStream } from 'lib/streamImpl'
import { ChangeEvent, useCallback, useState } from 'react'

const CreateBroadcast: NextPage = () => {
  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const clickHandler = useCallback(async (): void => {
    if (title === '' || date === '') {
      return
    }
    const data: TStream = {
      hee_count: 0,
      is_streamed: 1,
      title: title,
      created_at: date,
      updated_at: date
    }
    addStream(data)
  }, [title, date])

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
              required={title ?? true}
              name="title"
              id="title"
              type="text"
              placeholder="タイトルを入力する"
              onChange={(e: ChangeEvent) => {
                setTitle(() => e.target.value as string)
              }}
            />
          </div>
          <div>
            <input
              className="py-[9px] px-[13px] mt-[32px] w-full rounded-[6px] border-[2px] border-solid"
              required
              name="date"
              id="date"
              type="date"
              onChange={(e: ChangeEvent) => {
                setDate(() => e.target.value as string)
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-[32px] w-3/5">
          <div className="mr-[32px]">
            <Button
              type="primary"
              onClick={() => {
                clickHandler()
              }}
            >
              保存する
            </Button>
          </div>
          <div>
            <Link href="/broadcasts">
              <a>キャンセル</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateBroadcast
