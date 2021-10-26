import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'onAir' | 'afterOnAir' | 'beforeOnAir';
};

export const Tag: FC<Props> = ({ children, type }) => {
  const tagType = () => {
    let className = '';
    switch (type) {
      case 'onAir':
        className = 'bg-green-100 text-green-600 rounded-full px-5 m-2 text-sm';
        break;
      case 'afterOnAir':
        className =
          'bg-gray-200　text-gray-400 rounded-full py-1 px-5 m-2 text-sm';
        break;
      case 'beforeOnAir':
        className =
          'bg-yellow-300 text-yellow-700 rounded-full py-1 px-5 m-2 text-sm';
    }

    return className;
  };

  return (
    <p className={tagType()}>
      {children}
    </p>
  );
};
export default memo(Tag);
