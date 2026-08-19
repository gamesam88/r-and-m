import type { ChangeEvent, ReactNode } from 'react';

import { CloseIcon } from '@/assets/icons';
import { classNames } from '@/shared/helpers';

import './TextField.css';

interface ITextFieldProps {
  value: string;
  placeholder?: string;
  variant?: 'bordered' | 'underline';
  iconLeft?: ReactNode;
  className?: string;
  onChange: (value: string) => void;
}

export const TextField = ({
  value,
  placeholder = '',
  iconLeft,
  variant = 'bordered',
  className,
  onChange
}: ITextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <div
      className={classNames(
        'text-field',
        `text-field--${variant}`,
        !!iconLeft && 'text-field--has-icon-left',
        value && 'text-field--has-value',
        className
      )}
    >
      <input
        type='text'
        className='text-field__input'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {iconLeft && (
        <span
          className='text-field__icon-left'
          aria-hidden='true'
        >
          {iconLeft}
        </span>
      )}

      {value && (
        <button
          type='button'
          className='text-field__close-icon'
          aria-label='Clear input'
          onClick={() => onChange('')}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
