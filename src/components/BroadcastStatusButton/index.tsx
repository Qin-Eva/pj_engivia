import { updateStreamStatus } from 'lib/streamImpl'
import Link from 'next/link'
import { VFC } from 'react'

type Props = {
  is_streamed: number
  id: string
}

export const BroadcastStatusButton: VFC<Props> = (props) => {
  const statusChange = (): void => {
    const is_streamed = props.is_streamed + 1
    void updateStreamStatus(is_streamed, props.id)
  }

  switch (props.is_streamed) {
    case 1:
      return (
        <div className="object-right absolute top-0 right-0 z-10">
          <button
            onClick={() => {
              statusChange()
            }}
            className="py-2 px-6 m-4 text-white bg-[#0284C7] rounded-md"
          >
            放送を開始する
          </button>
          <Link href="/">
            <a className="py-3 px-6 m-4 text-[#0369A1] bg-[#E0F2FE] rounded-md">
              編集する
            </a>
          </Link>
        </div>
      )
    case 2:
      return (
        <div className="object-right absolute top-0 right-0 z-10">
          <button
            onClick={() => {
              statusChange()
            }}
            className="py-2 px-6 m-4 text-[#0369A1] bg-[#E0F2FE] rounded-md"
          >
            放送を終了する
          </button>
        </div>
      )
    default:
      return null
  }
}
