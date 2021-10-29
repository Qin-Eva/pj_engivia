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
        className = 'text-white bg-[#0284C7] rounded-md te  xt-center py-3 px-4';
        break;
      case 'secondary':
        className = 'text-blue-500 bg-blue-100 rounded-md text-center py-3 px-4';
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
