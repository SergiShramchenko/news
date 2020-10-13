import React from 'react';
import PropTypes from 'prop-types';

import search from '../../assets/svg/search/search.svg';

import './searchInput.css';

const SearchInput = ({ getInputValue, fetchQuery, searchInputValue }) => (
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
      <img className='search__img' src={search} alt='search' />
    </button>
  </form>
);

SearchInput.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  fetchQuery: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
};

export default SearchInput;
