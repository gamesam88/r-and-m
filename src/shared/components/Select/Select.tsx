import {
  type ComponentType,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { classNames } from '@/shared/helpers';

import './Select.css';

type TSelectSize = 'sm' | 'lg';

export interface IOption<T> {
  label: string;
  value: T;
}

export interface IOptionItemProps<T> {
  option: IOption<T>;
}

interface ISelectProps<T> {
  options: IOption<T>[];
  value: T | null;
  placeholder?: string;
  size?: TSelectSize;
  className?: string;
  OptionComponent?: ComponentType<IOptionItemProps<T>>;
  onChange: (value: T | null) => void;
}

const DefaultOption = <T,>({ option }: IOptionItemProps<T>) => {
  return <span>{option.label}</span>;
};

export const Select = <T,>({
  options,
  value,
  placeholder = '',
  size = 'lg',
  className,
  onChange,
  OptionComponent = DefaultOption
}: ISelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    value === null
      ? undefined
      : options.find((option) => option.value === value);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (v: T) => {
    onChange(v);
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (!selectRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      ref={selectRef}
      className={classNames('select', `select--size-${size}`, className, {
        'select--open': isOpen
      })}
    >
      <button
        type='button'
        className='select__trigger'
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span className='select__value'>
          {selectedOption ? (
            <OptionComponent option={selectedOption} />
          ) : (
            placeholder
          )}
        </span>

        <ArrowDownIcon className='select__icon' />
      </button>

      {isOpen && (
        <ul className='select__options'>
          {options.map((option) => (
            <li
              key={String(option.value)}
              className='select__option'
              onClick={() => handleSelectOption(option.value)}
            >
              <OptionComponent option={option} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
