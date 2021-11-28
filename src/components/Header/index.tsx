import React, { VFC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { Logout } from 'utils/firebase'
import { useRecoilValue } from 'recoil'
import { loginUserState } from 'store/auth'

type option = {
  readonly id: string
  readonly value: string
  readonly url: string
}

const HeaderMenuOption: option[] = [
  { id: '1', value: 'ログイン', url: '/login' },
  { id: '2', value: '放送一覧', url: '/broadcasts' },
  { id: '3', value: '投稿一覧', url: '/posts' },
  { id: '4', value: '投稿編集', url: '/posts/detail/1' },
  { id: '5', value: '投稿詳細', url: '/posts/show/1' },
  { id: '6', value: '管理: 放送一覧(まだ画面ができてない)', url: '' },
  { id: '7', value: '管理: 放送作成', url: '/admin/broadcasts/create' },
  {
    id: '8',
    value: '管理: 放送編集(まだ画面ができてない)',
    url: ''
  },
  { id: '9', value: '管理: 投稿ステータス変更', url: '/admin/posts/status/1' }
]

export const Header: React.FC = () => {
  const userState = useRecoilValue(loginUserState)
  const photoURL = userState.photoURL

  return (
    <header className="flex justify-between items-center px-8 h-16 bg-white shadow-sm">
      <Link href="/" passHref>
        <div className="flex cursor-pointer">
          <span className="inline-block pr-2">
            <Image src="/Logo.png" alt="アイコン" width="29px" height="30px" />
          </span>
          <span className="inline-block my-auto">
            <Image
              src="/Title.png"
              alt="エンジビアの泉"
              width="126px"
              height="22px"
            />
          </span>
        </div>
      </Link>
      <Menu as="div" className="inline-block relative text-left">
        <Menu.Button className="hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:outline-none">
          <div className="w-8 h-8">
            <Image
              src={photoURL}
              alt="ユーザー写真"
              width="32"
              height="32px"
              className="rounded-full"
            />
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
          <div className="p-1">
            {HeaderMenuOption.map((option) => {
              return (
                <Menu.Item key={option.id}>
                  {({ active }) => (
                    <MyLink label={option.value} url={option.url} />
                  )}
                </Menu.Item>
              )
            })}
            <button onClick={Logout}>ログアウト</button>
          </div>
        </Menu.Items>
      </Menu>
    </header>
  )
}

type TMyLink = { url: string; label: string }

const MyLink: VFC<TMyLink> = ({ url, label }) => {
  return (
    <Link href={url}>
      <a
        className={`group flex rounded-md items-center w-full px-2 py-2 text-sm`}
      >
        {label}
      </a>
    </Link>
  )
}
