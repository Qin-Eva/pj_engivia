import Head from 'next/head'
import type { NextPage } from 'next'
import { Button } from 'components/Button'
import React from 'react'
import { db } from '../lib/db'

class createBroadcast extends React.Component {
  title: string | number | readonly string[] | undefined
  body: string | number | readonly string[] | undefined
  constructor(props: any) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }
  registerPost = async (evt: any) => {
    evt.preventDefault()
    db.collection('posts')
      .add({
        title: this.title,
        state: this.body,
      })
      .then(function () {
        console.log('Document successfully written!')
      })
      .catch(function (error: any) {
        console.error('Error writing document: ', error)
      })
  }
  onChangeTitle = (evt: any) => {
    this.setState({ title: evt.target.value })
  }
  onChangeBody = (evt: any) => {
    this.setState({ body: evt.target.value })
  }
  render() {
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
                value={this.title}
                onChange={this.onChangeTitle}
                placeholder="タイトルを入力する"
              />
            </div>
            <div>
              <input
                className="px-[13px] py-[9px] w-full mt-[32px] rounded-[6px] border-solid border-[2px]"
                name="date"
                id="date"
                type="text"
                value={this.body}
                onChange={this.onChangeBody}
                placeholder="2021/09/03"
              />
            </div>
          </div>
          <div className="mt-[32px] flex justify-center w-3/5 mx-auto">
            <div className="mr-[32px]">
              <Button type="primary">保存する</Button>
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
}
export default createBroadcast
