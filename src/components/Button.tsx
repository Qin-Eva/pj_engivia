import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'primary' | 'secondary';
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, type, onClick }) => {
  const buttonType = () => {
    let className = '';
    switch (type) {
      case 'primary':
        className = 'text-white bg-[#0284C7] rounded-md te  xt-center py-3 px-4';
        break;
      case 'secondary':
        className = 'text-blue-500 bg-blue-100 rounded-md text-center py-3 px-4';
        break;
    }

    return className;
  };

  return (
    <button className={buttonType()} onClick={onClick}>
      {children}
    </button>
  );
};
export default memo(Button);
