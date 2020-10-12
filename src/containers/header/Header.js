import React from 'react';

import useThemeMode from '../../custom-hooks/useThemeMode';
import useFetchQuery from '../../custom-hooks/useFetchQuery';

import Logotype from '../../components/logotype';
import SearchInput from '../../components/search-input';
import ThemeSwitcher from '../../components/theme-swithcher';

import './header.css';

export default () => {
  const { changeThemeMode, themeMode } = useThemeMode();
  const { getInputValue, fetchQuery, searchQuery } = useFetchQuery();

  return (
    <header className='header'>
      <Logotype />
      <div className='header-options'>
        <SearchInput
          getInputValue={getInputValue}
          fetchQuery={fetchQuery}
          searchQuery={searchQuery}
        />
        <ThemeSwitcher
          changeThemeMode={changeThemeMode}
          themeMode={themeMode}
        />
      </div>
    </header>
  );
};
