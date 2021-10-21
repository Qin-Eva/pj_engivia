import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'onAir' | 'afterOnAir' | 'beforeOnAir';
  onClick: () => void;
};

export const Button: FC<Props> = (({ children, type, onClick }) => {
  const buttonType = () => {
    let classNme = '';
    switch (type) {
      case 'primary':
        classNme = 'bg-blue-500 rounded-sm py-2 px-5 text-white';
        break;
      case 'secondary':
        classNme = 'bg-blue-200 rounded-sm py-2 px-5 text-blue-700';
        break;
      case 'onAir':
        classNme = 'bg-green-100 text-green-600 rounded-full px-5 m-2 text-sm';
        break;
      case 'afterOnAir':
        classNme =
          'bg-gray-200　text-gray-400 rounded-full py-1 px-5 m-2 text-sm';
        break;
      case 'beforeOnAir':
        classNme =
          'bg-yellow-300 text-yellow-700 rounded-full py-1 px-5 m-2 text-sm';
    }

    return classNme;
  };

  return (
    <button className={buttonType()} onClick={onClick}>
      {children}
    </button>
  );
});
export default memo(Button);
