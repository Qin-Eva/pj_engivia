import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const PrimaryButton: FC<Props> = ({ children = '保存する' }) => {
  return (
    <button className="bg-blue-500 rounded-sm py-2 px-5 text-white">
      {children}
    </button>
  );
};
