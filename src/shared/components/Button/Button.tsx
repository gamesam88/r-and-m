import type { ButtonHTMLAttributes, ReactNode } from 'react';
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
  const classes = ['button', `button_size_${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};
