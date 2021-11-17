import { addDoc, collection, doc, setDoc } from '@firebase/firestore'
import { db } from 'utils/firebase'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

type PostType = {
  uid: number
  id: number
  title: string
  body: string
  created_at: number
}

// 一覧取得データ
// ソートは日付の降順（すなわち新しい日付の放送が上）
export const getAllPostsData = async () => {
  const res = await fetch(apiUrl)
  const posts = await res.json()
  const filteredPosts = posts.sort(
    (a: PostType, b: PostType) => b.created_at - a.created_at
  )
  return filteredPosts
}

// データのIDを一覧取得
export const getAllPostIds = async () => {
  const res = await fetch(apiUrl)
  const posts = await res.json()

  return posts.map((post: PostType) => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

// IDから特定のデータを取得
export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}/`)
  const post = await res.json()
  return post
}

export const createPostData = async (
  content: string,
  user: string
): Promise<void> => {
  await addDoc(collection(db, 'posts'), {
    id: 1,
    user_id: 1,
    stream_id: 1,
    content: content,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: user,
    updated_by: user
  })
}

export const postUrl = async (url: string, docId: string): Promise<void> => {
  await setDoc(
    doc(db, 'streams', 'yauxifvy2GdHQt7pALPu'),
    {
      is_streamed: 3,
      url: url,
      updated_at: new Date()
    },
    { merge: true }
  )
}
