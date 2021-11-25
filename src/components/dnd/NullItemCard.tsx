import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { isFeatureState } from 'store/auth'

type NullItemProps = {
  title: string
}

export const NullItem: VFC<NullItemProps> = (props) => {
  const isFeature = useRecoilValue(isFeatureState)

  const titleCall = (): void => {
    // TODO: タイトルコール
    alert('タイトルコール')
  }

  switch (props.title) {
    case 'フィーチャー前':
      return null
    case 'フィーチャー中':
      return (
        <div className="flex justify-center items-center my-2.5">
          {!isFeature ? (
            <div className=" w-full h-24 rounded-md border border-gray-400 border-dashed">
              <p className="text-base text-gray-400">フィーチャーする</p>
            </div>
          ) : (
            <button
              onClick={titleCall}
              className="justify-center items-center p-4 w-48 text-white bg-[#0284C7] rounded-md shadow-md"
            >
              タイトルコールする
            </button>
          )}
        </div>
      )

    case 'フィーチャー後':
      if (isFeature) {
        return (
          <div className="flex justify-center items-center my-2.5 w-full h-24 rounded-md border border-gray-400 border-dashed">
            <p className="text-base text-gray-400">フィーチャーを終える</p>
          </div>
        )
      } else {
        return null
      }

    default:
      return null
  }
}
