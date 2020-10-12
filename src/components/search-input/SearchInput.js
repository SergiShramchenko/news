import React from 'react';
import PropTypes from 'prop-types';

import search from '../../assets/svg/search/search.svg';

import './searchInput.css';

const SearchInput = ({ getInputValue, fetchQuery, searchQuery }) => (
  <form className='search' onSubmit={fetchQuery}>
    <input
      className='search__input'
      type='text'
      placeholder='search'
      onChange={getInputValue}
      value={searchQuery}
    />
    <button className='search__btn' tabIndex='0'>
      <img className='search__img' src={search} alt='search' />
    </button>
  </form>
);

SearchInput.propTypes = {
  getInputValue: PropTypes.func.isRequired,
  fetchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default SearchInput;
