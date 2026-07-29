import type { CSSProperties, ReactNode } from 'react';
import { PortalIcon } from '@/assets';
import './Loader.css';

interface ILoaderProps {
  size?: number;
  children?: ReactNode;
}

export const Loader = ({ size = 48, children }: ILoaderProps) => {
  const iconStyle = {
    '--loader-size': `${size}px`
  } as CSSProperties;

  return (
    <div className='loader'>
      <div
        className='loader__icon'
        style={iconStyle}
      >
        <PortalIcon />
      </div>
      {children ? <h3 className='loader__text'>{children}</h3> : null}
    </div>
  );
};
