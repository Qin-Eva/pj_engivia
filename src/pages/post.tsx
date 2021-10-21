import { Button } from 'components/Button';
import React, { useCallback, useState } from 'react';

const Post = () => {
  const [text, setText] = useState('');
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onClick = useCallback(() => {
    alert('aaa');
  }, []);

  return (
    <div className="container">
      <h1 className="title">第4回エンジビアの泉</h1>

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
    </div>
  );
};

export default Post;
