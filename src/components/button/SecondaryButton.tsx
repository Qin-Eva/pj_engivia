import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const SecondaryButton: FC<Props> = ({ children = '保存する' }) => {
  return (
    <button className="bg-blue-200 rounded-sm py-2 px-5 text-blue-700">
      {children}
    </button>
  );
};
