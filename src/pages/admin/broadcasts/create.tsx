import Head from 'next/head'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Button } from 'components/Button'

const createBroadcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="bg-gray-100 h-screen">
        <div className="text-4xl w-3/5 mx-auto mb-5 font-medium">
          放送を作成
        </div>
        <div className="w-3/5 mx-auto">
          <div>
            <input
              className="px-[13px] py-[9px] mt-5 w-full rounded-[6px] border-solid border-[2px]"
              name="title"
              id="title"
              type="text"
              placeholder="タイトルを入力する"
              // aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
          <div>
            <input
              className="px-[13px] py-[9px] w-full mt-[32px] rounded-[6px] border-solid border-[2px]"
              name="date"
              id="date"
              type="text"
              placeholder="2021/09/03"
              // aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
        </div>
        <div className="mt-[32px] flex justify-center w-3/5 mx-auto">
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
export default createBroadcast
