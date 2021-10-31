const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

type PostType = {
  uid: number;
  id: number;
  title: string;
  body: string;
  created_at: number;
};

// 一覧取得データ
// ソートは日付の降順（すなわち新しい日付の放送が上）
export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  const filteredPosts = posts.sort(
    (a: PostType, b: PostType) =>
      b.created_at - a.created_at
  );
  return filteredPosts;
};

// データのIDを一覧取得
export const getAllPostIds = async () => {
  const res = await fetch(apiUrl);
  const posts = await res.json();

  return posts.map((post: PostType) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

// IDから特定のデータを取得
export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}/`);
  const post = await res.json();
  return post;
};
