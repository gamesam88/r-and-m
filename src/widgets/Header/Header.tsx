import { LogoIcon, SunIcon } from '@/assets';
import { Button } from '@/shared/components/Button/Button';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <LogoIcon />
      <div className='header__actions'>
        <Button
          size='s'
          aria-label='Переключить тему'
        >
          <SunIcon
            width={24}
            height={24}
          />
        </Button>
        <Button
          size='s'
          className='header__lang'
        >
          РУ
        </Button>
      </div>
    </div>
  );
};
