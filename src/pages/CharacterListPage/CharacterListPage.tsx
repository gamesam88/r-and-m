import { useState } from 'react';

import { rickAndMortyLogo } from '@/assets';
import { SearchIcon } from '@/assets/icons';
import { Loader, Select, StatusOption, TextField } from '@/shared/components';
import { RACE_OPTIONS, STATUS_OPTIONS } from '@/shared/constants';

import './CharacterListPage.css';

export const CharacterListPage = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [race, setRace] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [name, setName] = useState<string>('');

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
        <TextField
          value={search}
          onChange={setSearch}
          placeholder='Search'
          iconLeft={<SearchIcon />}
        />
        <TextField
          value={name}
          onChange={setName}
          placeholder='Name'
          variant='underline'
        />
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
