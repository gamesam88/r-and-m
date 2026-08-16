import { useState } from 'react';

import { rickAndMortyLogo } from '@/assets';
import { Loader, Select, StatusOption } from '@/shared/components';
import { RACE_OPTIONS, STATUS_OPTIONS } from '@/shared/constants';

import './CharacterListPage.css';

export const CharacterListPage = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [race, setRace] = useState<string | null>(null);

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
      <div className='character-list-page__filters'>
        <Select
          options={STATUS_OPTIONS}
          value={status}
          onChange={setStatus}
          placeholder='Status'
          size='sm'
          OptionComponent={({ option }) => <StatusOption option={option} />}
        />
        <Select
          options={RACE_OPTIONS}
          value={race}
          onChange={setRace}
          placeholder='Species'
          size='lg'
        />
      </div>
      <div className='character-list-page__container'>
        <Loader size={475}>Loading characters...</Loader>
      </div>
    </div>
  );
};
