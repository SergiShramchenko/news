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
      <button className='search__btn' tabIndex='0'>
        <img
          className='search__img'
          src={search}
          alt='search'
          style={{
            width: '18px',
            height: '18px',
          }}
        />
      </button>
      <button
        className='search__btn search__btn_clear-input'
        tabIndex='0'
        type='button'
        onClick={clearSearchInputAndQuery}
        onKeyPress={clearSearchInputAndQuery}
      >
        <img
          className='search__img  search__img_clear'
          src={clearInput}
          alt='search'
          style={{
            width: '18px',
            height: '18px',
          }}
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
