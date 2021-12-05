import React, { VFC, useMemo } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarWeek,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export type TCard = {
  id: string
  title: string
  stream_date: string
  is_streamed: number
  hee_count: number
}

export const BroadcastCard: VFC<TCard> = ({
  id,
  title,
  is_streamed,
  stream_date,
  hee_count
}) => {
  const router = useRouter()
  const statusText = useMemo(() => {
    switch (is_streamed) {
      case 1:
        return '放送前・エンジビア募集中'
      case 2:
        return '放送中'
      case 3:
        return '放送済み'
    }
  }, [is_streamed])

  const moveLink = (): void => {
    // void router.replace(`/admin/posts/status/${id}`)
    void router.push({
      pathname: '/admin/posts/status/[id]',
      query: { id }
    })
  }

  return (
    <Link href={`/admin/posts/status/${id}`} passHref>
      <a
        onClick={moveLink}
        className="flex justify-between p-5 bg-white hover:opacity-50 transition duration-300"
      >
        <div className="">
          <h3 className="text-[14px] text-blue-400">{title}</h3>
          <div className="flex items-center mt-[8px]">
            <figure className="w-[16px]">
              <FontAwesomeIcon
                className="text-gray-500"
                icon={faCalendarWeek}
              />
            </figure>
            <span className="ml-[8px] text-gray-400">{stream_date}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span
            className={`text-[12px] rounded-full px-2 py-1 float-righ
          ${is_streamed === 1 ? 'bg-[#FFEDD5] text-[#C2410C]' : ''}
          ${is_streamed === 2 ? 'bg-[#E5E7EB] text-[#111827]' : ''}
          ${is_streamed === 3 ? 'bg-[#D1FAE5] text-[#047857]' : ''}`}
          >
            {statusText}
          </span>
          <div className="flex items-center mt-[10px]">
            <figure className="w-[16px] text-gray-400">
              <FontAwesomeIcon icon={faGraduationCap} />
            </figure>
            <span className="text-[14px] text-gray-400">
              エンジビア数 {hee_count}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
