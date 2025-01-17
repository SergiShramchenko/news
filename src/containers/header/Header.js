import React from 'react';

import useThemeMode from '../../custom-hooks/useThemeMode';
import useFetchQuery from '../../custom-hooks/useFetchQuery';

import Logotype from '../../components/logotype';
import SearchInput from '../../components/search-input';
import ThemeSwitcher from '../../components/theme-swithcher';

import './header.scss';

export default () => {
  const { changeThemeMode, themeMode } = useThemeMode();
  const {
    getInputValue,
    fetchQuery,
    clearSearchInputAndQuery,
    searchInputValue,
  } = useFetchQuery();

  return (
    <header className='header'>
      <Logotype />
      <SearchInput
        getInputValue={getInputValue}
        fetchQuery={fetchQuery}
        clearSearchInputAndQuery={clearSearchInputAndQuery}
        searchInputValue={searchInputValue}
      />
      <ThemeSwitcher changeThemeMode={changeThemeMode} themeMode={themeMode} />
    </header>
  );
};
