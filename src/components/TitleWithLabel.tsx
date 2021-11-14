import { useMemo, VFC } from 'react'

type Props = {
  title: string
  is_streamed: number
}

export const TitleWithLabel: VFC<Props> = (props) => {
  const status = useMemo(() => {
    switch (props.is_streamed) {
      case 1:
        return {
          text: '放送前・エンジビア募集中',
          color: 'bg-[#FFEDD5] text-[#C2410C]'
        }
      case 2:
        return {
          text: '放送中',
          color: 'bg-green-100 text-green-800'
        }
      case 3:
        return {
          text: '放送済み',
          color: 'bg-gray-200 text-gray-900'
        }
    }
  }, [props.is_streamed])

  return (
    <div className="text-center">
      <div className={`inline text-sm rounded-full py-1 px-3 ${status?.color}`}>
        {status?.text}
      </div>
      <h1 className="text-gray-900 font-bold text-3xl mt-4">{props.title}</h1>
    </div>
  )
}
