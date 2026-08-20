import type { ChangeEvent, ReactNode } from 'react';

import { CloseIcon } from '@/assets/icons';
import { classNames } from '@/shared/helpers';

import './TextField.css';

interface ITextFieldProps {
  value: string;
  id: string;
  placeholder?: string;
  variant?: 'bordered' | 'underline';
  iconLeft?: ReactNode;
  className?: string;
  onChange: (value: string) => void;
}

export const TextField = ({
  value,
  id,
  placeholder = '',
  iconLeft,
  variant = 'bordered',
  className,
  onChange
}: ITextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  const handleClear = () => onChange('');

  return (
    <div
      className={classNames('text-field', `text-field--${variant}`, className, {
        'text-field--has-icon-left': !!iconLeft,
        'text-field--has-value': !!value
      })}
    >
      {iconLeft && (
        <span
          className='text-field__icon-left'
          aria-hidden='true'
        >
          {iconLeft}
        </span>
      )}

      <input
        type='text'
        id={id}
        className='text-field__input'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {value && (
        <button
          type='button'
          className='text-field__close-icon'
          aria-label='Clear input'
          onClick={handleClear}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
