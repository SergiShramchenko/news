import React from 'react';
import PropTypes from 'prop-types';

import search from '../../assets/svg/search/search.svg';
import clearInput from '../../assets/svg/search/delete.svg';

import './searchInput.scss';

const SearchInput = ({
  getInputValue,
  fetchQuery,
  clearSearchInputAndQuery,
  searchInputValue,
}) => (
  <>
    <form className='search' onSubmit={fetchQuery}>
      <input
        id='search'
        className='search__input'
        type='text'
        placeholder='search'
        onChange={getInputValue}
        value={searchInputValue}
        required
      />
      <button className='search-input__btn' tabIndex='0'>
        <img className='search-input__img' src={search} alt='search' />
      </button>
      <button
        className='search-input__btn clear-input'
        tabIndex='0'
        type='button'
        onClick={clearSearchInputAndQuery}
        onKeyPress={clearSearchInputAndQuery}
      >
        <img
          className='search-input__img clear'
          src={clearInput}
          alt='search'
        />
      </button>
    </form>
  </>
);

SearchInput.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  fetchQuery: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
};

export default SearchInput;
