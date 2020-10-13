import store from 'store';

import genearal from '../assets/svg/category/general.svg';
import health from '../assets/svg/category/health.svg';
import business from '../assets/svg/category/business.svg';
import sports from '../assets/svg/category/sports.svg';
import science from '../assets/svg/category/science.svg';
import entertainment from '../assets/svg/category/entertainment.svg';
import tech from '../assets/svg/category/tech.svg';

const categoryItems = [
  { name: 'general', img: genearal },
  { name: 'health', img: health },
  { name: 'business', img: business },
  { name: 'sports', img: sports },
  { name: 'science', img: science },
  { name: 'entertainment', img: entertainment },
  { name: 'technology', img: tech },
];

const categoryStorage = () => {
  if (!store.get('categoryItems')) store.set('categoryItems', categoryItems);

  const categories = store.get('categoryItems');
  return categories;
};

export const category = categoryStorage();
