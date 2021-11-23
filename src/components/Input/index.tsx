import { ChangeEvent, VFC } from 'react'

type Props = {
  areaType: 'title' | 'date' | 'url' | 'text'
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  value?: string
}

export const Input: VFC<Props> = ({ areaType, onChange, value }) => {
  if (areaType === 'title') return inputTitle(onChange, value)
  if (areaType === 'date') return inputDate(onChange, value)
  if (areaType === 'url') return inputUrl(onChange, value)
  return inputTextArea(onChange, value)
}

const inputTitle = (
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value?: string
): JSX.Element => {
  return (
    <input
      type="text"
      id="title"
      name="title"
      className="py-[9px] px-[13px] w-full rounded-[6px] border-[2px] border-solid"
      value={value}
      placeholder="タイトルを入力する"
      onChange={onChange}
      required
    />
  )
}

const inputDate = (
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value?: string
): JSX.Element => {
  return (
    <input
      type="date"
      id="date"
      name="date"
      className="py-[9px] px-[13px] w-full rounded-[6px] border-[2px] border-solid"
      value={value}
      onChange={onChange}
      required
    />
  )
}

const inputUrl = (
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value?: string
): JSX.Element => {
  return (
    <input
      type="text"
      id="url"
      name="url"
      className="py-[9px] px-[13px] w-[700px] rounded-[6px] border-[2px] border-solid"
      value={value}
      placeholder="URLを入力する"
      onChange={onChange}
      required
    />
  )
}

const inputTextArea = (
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  value?: string
): JSX.Element => {
  return (
    <textarea
      rows={3}
      className="text-[24px] font-bold placeholder-gray-500 placeholder-opacity-30 textarea"
      value={value}
      placeholder="エンジビアを入力する"
      onChange={onChange}
    />
  )
}
