import React, { VFC } from 'react'

export const HeeButton: VFC = () => {
  return (
    <div className="flex">
      <button style={{ opacity: 1 }} className="hee-btn">
        <span className="btn-bottom"></span>
        <span className="cursor-pointer btn-top">
          <span>へぇ</span>
        </span>
      </button>
      <div className="flex items-end ml-[60px] h-[80px] font-extrabold text-blue-600">
        {/* TODO: へぇ数をpropsより取得 */}
        <p className="text-[36px]">0</p>
        <p className="text-[24px]">へぇ</p>
      </div>
    </div>
  )
}
