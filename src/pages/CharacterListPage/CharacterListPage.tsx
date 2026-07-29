import { Loader } from '@/shared/components/Loader/Loader';
import rickAndMortyLogo from '@/assets/rick_and_morty.png';
import './CharacterListPage.css';

export const CharacterListPage = () => {
  return (
    <div className='character-list-page'>
      <div className='character-list-page__logo'>
        <img
          src={rickAndMortyLogo}
          alt='Rick and Morty'
          width={600}
          height={200}
        />
      </div>
      <div className='character-list-page__container'>
        <Loader size={475}>Loading characters...</Loader>
      </div>
    </div>
  );
};
