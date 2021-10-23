import { Button } from 'components/Button';
import { Header } from 'components/Header';
import React, { useCallback, useState } from 'react';
import { getAllPostIds, getPostData } from 'lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import { PostType } from 'types/type';

interface Params extends ParsedUrlQuery {
  id: string;
}

const Post = ({ post }: { post: PostType }) => {
  const [text, setText] = useState('');
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onClick = useCallback(() => {
    alert('aaa');
  }, []);

  return (
    <Header>
      <h1 className="title">{post.title}</h1>

      <form onSubmit={submitForm} className="center">
        <textarea
          placeholder="エンジビアを入力する"
          value={text}
          rows={4}
          cols={80}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
        <br />
        <Button type="primary" onClick={onClick}>
          保存する
        </Button>
      </form>
    </Header>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PostType, Params> = async ({ params }) => {
  const post = await getPostData(params?.id);
  return {
    props: post
  };
};

export default Post;
