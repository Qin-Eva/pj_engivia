import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'onAir' | 'afterOnAir' | 'beforeOnAir';
  onClick: () => void;
};

export const Button: FC<Props> = (({ children, type, onClick }) => {
  const buttonType = () => {
    let className = '';
    switch (type) {
      case 'primary':
        className = 'bg-blue-500 rounded-sm py-2 px-5 text-white';
        break;
      case 'secondary':
        className = 'bg-blue-200 rounded-sm py-2 px-5 text-blue-700';
        break;
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
    <button className={buttonType()} onClick={onClick}>
      {children}
    </button>
  );
});
export default memo(Button);
