import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'primary' | 'secondary';
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, type, onClick }) => {
  const buttonType = () => {
    let classNme = '';
    switch (type) {
      case 'primary':
        classNme = 'bg-blue-500 rounded-sm py-2 px-5 text-white';
        break;
      case 'secondary':
        classNme = 'bg-blue-200 rounded-sm py-2 px-5 text-blue-700';
        break;
    }

    return classNme;
  };

  return (
    <button className={buttonType()} onClick={onClick}>
      {children}
    </button>
  );
};
export default memo(Button);
