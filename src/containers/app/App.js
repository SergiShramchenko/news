import React from 'react';

import useInfiniteScroll from '../../custom-hooks/useInfiniteScroll';

import Header from '../header';
import News from '../news';

import './App.scss';

function App() {
  useInfiniteScroll();

  return (
    <div className='App'>
      <Header />
      <News />
    </div>
  );
}

export default App;
