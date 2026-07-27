import { Link } from 'react-router';
import { ArrowBackIcon } from '@/assets';
import { Loader } from '@/shared/components/Loader/Loader';
import './CharacterInfoPage.css';

export const CharacterInfoPage = () => {
  return (
    <div className='character-info-page'>
      <Link
        to='/'
        className='character-info-page__back'
      >
        <div className='character-info-page__back-content'>
          <ArrowBackIcon
            width={24}
            height={24}
          />
          <span>GO BACK</span>
        </div>
      </Link>
      <div className='character-info-page__content'>
        <Loader size={475}>Loading character card...</Loader>
      </div>
    </div>
  );
};
