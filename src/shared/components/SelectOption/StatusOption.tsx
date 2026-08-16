import type { IOptionItemProps } from '../Select/Select';

import './StatusOption.css';

export const StatusOption = ({ option }: IOptionItemProps<string>) => {
  return (
    <div className='status-option'>
      <span className='status-option__label'>{option.label}</span>
      <span
        className={`status-option__status status-option__status--${option.value}`}
      ></span>
    </div>
  );
};
