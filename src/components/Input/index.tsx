import { ChangeEvent, VFC } from 'react'

const TITLE = 'title'
const DATE = 'date'
const URL = 'url'
const TEXT = 'text'

type Props = {
  areaType: typeof TITLE | typeof DATE | typeof URL | typeof TEXT
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  style?: string
  value?: string
}

export const Input: VFC<Props> = (props) => {
  switch (props.areaType) {
    case TITLE:
      return inputType(props, 'タイトルを入力する')

    case DATE:
      return inputType(props)

    case URL:
      return inputType(props, 'URLを入力する')

    default:
      return inputTextArea(props, 'エンジビアを入力する')
  }
}

const inputType = (props: Props, placeholder?: string): JSX.Element => {
  return (
    <input
      type={props.areaType}
      id={props.areaType}
      name={props.areaType}
      className={`py-[9px] px-[13px] mx-auto w-[700px] rounded-[6px] border-[2px] border-solid ${
        props.style ?? ''
      }`}
      value={props.value}
      placeholder={placeholder}
      onChange={props.onChange}
      required
    />
  )
}

const inputTextArea = (props: Props, placeholder?: string): JSX.Element => {
  return (
    <textarea
      rows={2}
      className={`text-[36px] placeholder-gray-500 placeholder-opacity-30 textarea ${
        props.style ?? ''
      }`}
      value={props.value}
      placeholder={placeholder}
      onChange={props.onChange}
    />
  )
}
