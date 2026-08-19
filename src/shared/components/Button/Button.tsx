import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/helpers';

import './Button.css';

type TButtonSize = 's' | 'm' | 'l';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TButtonSize;
  children?: ReactNode;
}

export const Button = ({
  size = 'm',
  children,
  className,
  type = 'button',
  ...rest
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={classNames('button', `button_size_${size}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
