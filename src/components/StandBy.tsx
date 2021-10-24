import React, { VFC } from 'react'
import Image from 'next/image'

export const StandBy: VFC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="ml-[384px] relative">
        {/* TODO: /h1までを#27で作成するコンポーネントに置き換え */}
        <div className="text-center">
          <p className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            放送中
          </p>
        </div>
        <h1 className="text-gray-900 font-bold text-3xl mt-4 text-center">
          第n回エンジビアの泉
        </h1>
        <div className="mt-8 bg-white rounded-md shadow inline-block w-[700px] h-[100px]">
          <p className="m-8 text-4xl w-[640px] h-[40px]">
            次のエンジビアをお待ちください
          </p>
        </div>
        {/* TODO: へぇボタンを表示 */}
        <div className="absolute top-[670px] left-[350px]">へぇー</div>
      </div>
      {/* TODO: ここから下、ユーザデータ取得しmapで表示 */}
      <div>
        <div className="flex items-center w-72 ml-24 border-b-2 pb-4 mb-4">
          <div>
            <Image
              src="/Avatar.png"
              alt="ユーザー写真"
              width="32"
              height="32px"
            />
          </div>
          <div className="text-gray-900 ml-4 h-[20px] w-[128px]">
            ファンキー後藤
          </div>
          <p className="inline-block bg-white text-gray-800 ml-4 px-3 py-1 rounded-full text-sm">
            18へぇ
          </p>
        </div>
        <div className="flex items-center w-72 ml-24 border-b-2 pb-4 mb-4">
          <div>
            <Image
              src="/Avatar.png"
              alt="ユーザー写真"
              width="32"
              height="32px"
            />
          </div>
          <div className="text-gray-900 ml-4 h-[20px] w-[128px]">
            マイケル竹田
          </div>
          <p className="inline-block bg-white text-gray-800 ml-4 px-3 py-1 rounded-full text-sm">
            13へぇ
          </p>
        </div>
        <div className="flex items-center w-72 ml-24 border-b-2 pb-4 mb-4">
          <div>
            <Image
              src="/Avatar.png"
              alt="ユーザー写真"
              width="32"
              height="32px"
            />
          </div>
          <div className="text-gray-900 ml-4 h-[20px] w-[128px]">
            鈴木サンダー
          </div>
          <p className="inline-block bg-white text-gray-800 ml-4 px-3 py-1 rounded-full text-sm">
            15へぇ
          </p>
        </div>
        <div className="flex items-center w-72 ml-24 border-b-2 pb-4 mb-4">
          <div>
            <Image
              src="/Avatar.png"
              alt="ユーザー写真"
              width="32"
              height="32px"
            />
          </div>
          <div className="text-gray-900 ml-4 h-[20px] w-[128px]">山田花子</div>
          <p className="inline-block bg-white text-gray-800 ml-4 px-3 py-1 rounded-full text-sm">
            9へぇ
          </p>
        </div>
      </div>
    </div>
  )
}
