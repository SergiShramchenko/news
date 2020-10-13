import store from 'store';

import { categoryItems } from './category';

const itemStorage = (item, value) => {
  if (!store.get(item)) store.set(item, value);

  const localStorageItem = store.get(item);
  return localStorageItem;
};

export const category = itemStorage('categoryItems', categoryItems);
export const themeMode = itemStorage('themeMode', false);
